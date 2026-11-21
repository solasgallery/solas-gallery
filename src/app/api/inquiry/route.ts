import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY || ''
// Consult/inquiry notifications go to Cherie (2026-11-18). The Vercel env var
// NOTIFICATION_EMAIL is set to the same address; this default covers a missing var.
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'cherie@solasgallery.com'

// Brevo list "Website Inquiries" (ID 51, created 2026-11-18). The Vercel env var
// BREVO_LIST_ID is set to the same ID; this default covers a missing var.
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID) || 51
// Trade Collective Prospects (same list the trade forms used on main).
const TRADE_LIST_ID = 43
// Overridable only so the route can be tested against a local stub; defaults to Brevo.
const BREVO_API_BASE = process.env.BREVO_API_BASE || 'https://api.brevo.com'

// The server, not the client, decides the Brevo list: fixed allowlist keyed by form source.
// Any source not listed here is rejected.
const SOURCE_LISTS: Record<string, number> = {
  'Portrait design consult': BREVO_LIST_ID,
  'Begin': BREVO_LIST_ID,
  'in-person-qr': BREVO_LIST_ID,
  'Trade — Solas': TRADE_LIST_ID,
  'Trade — Solas (Apply)': TRADE_LIST_ID,
}

const MAX = { name: 100, email: 254, phone: 40, message: 6000, body: 20000 }
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/
const PHONE_RE = /^[0-9+().\-\s#xXeEtT]*$/

// Best-effort per-IP rate limit: 5 requests per 10 minutes. In-memory, so it is per
// serverless instance and resets on cold start; it slows casual abuse, it is not a guarantee.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()
function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    hits.forEach((v, k) => {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k)
    })
  }
  return false
}

// Preview deployments (VERCEL_ENV=preview) run the real pipeline but tag the notification
// subject and never add to the marketing list. Production is unchanged.
const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'

const BREVO_HEADERS = {
  'accept': 'application/json',
  'content-type': 'application/json',
  'api-key': BREVO_API_KEY,
}

// Form text goes into the notification email's HTML, so escape it first.
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Brevo rejects a contact when its phone (SMS attribute) is invalid or already on
// another contact (e.g. a shared household number). Those are not reasons to lose
// the lead: we save the contact without the phone, and the phone still goes to
// Cherie in the notification email.
function isPhoneRejection(errorText: string): boolean {
  try {
    const err = JSON.parse(errorText)
    if (err.code === 'duplicate_parameter') {
      return Array.isArray(err.metadata?.duplicate_identifiers)
        && err.metadata.duplicate_identifiers.includes('SMS')
    }
    return err.code === 'invalid_parameter' && /phone|sms/i.test(String(err.message))
  } catch {
    return false
  }
}

async function saveContact(
  email: string,
  attributes: Record<string, string>,
  listId: number
): Promise<Response> {
  return fetch(`${BREVO_API_BASE}/v3/contacts`, {
    method: 'POST',
    headers: BREVO_HEADERS,
    body: JSON.stringify({
      email,
      attributes,
      listIds: [listId],
      updateEnabled: true,
    }),
  })
}

export async function POST(request: NextRequest) {
  try {
    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const raw = await request.text()
    if (raw.length > MAX.body) {
      return NextResponse.json({ error: 'Request too large.' }, { status: 413 })
    }
    let body: Record<string, unknown>
    try {
      body = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }

    // Honeypot: real visitors never fill this hidden field. Pretend success, do nothing.
    if (body.hp) {
      return NextResponse.json({ success: true })
    }

    const bad = (error: string) => NextResponse.json({ error }, { status: 400 })
    for (const k of ['name', 'email', 'phone', 'message', 'source']) {
      const v = body[k]
      if (v !== undefined && v !== null && typeof v !== 'string') return bad('Invalid request.')
    }
    const nameText = ((body.name as string) || '').trim()
    const emailText = ((body.email as string) || '').trim()
    const phoneText = ((body.phone as string) || '').trim()
    const messageText = ((body.message as string) || '').trim()
    const sourceText = ((body.source as string) || '').trim()

    if (!nameText || !emailText) return bad('Name and email are required.')
    // CR/LF would allow header injection into the email subject.
    if (/[\r\n]/.test(nameText + emailText + phoneText + sourceText)) return bad('Invalid characters.')
    if (nameText.length > MAX.name || emailText.length > MAX.email || phoneText.length > MAX.phone || messageText.length > MAX.message) {
      return bad('One of the fields is too long.')
    }
    if (!EMAIL_RE.test(emailText)) return bad('Please enter a valid email address.')
    if (phoneText && !PHONE_RE.test(phoneText)) return bad('Please enter a valid phone number.')
    // The list is chosen here from the form source; any client-sent listId is ignored.
    const targetList = SOURCE_LISTS[sourceText]
    if (!targetList) return bad('Unknown form.')

    // 1. Create/update contact in Brevo (201 created, 204 updated)
    const attributes: Record<string, string> = {
      FIRSTNAME: nameText.split(' ')[0],
      LASTNAME: nameText.split(' ').slice(1).join(' ') || '',
      SMS: phoneText,
    }
    let contactRes: Response | null = IS_PREVIEW ? null : await saveContact(emailText, attributes, targetList)
    let contactOk = IS_PREVIEW ? true : contactRes!.ok

    if (!contactOk && contactRes) {
      const errorText = await contactRes.text()
      if (phoneText && contactRes.status === 400 && isPhoneRejection(errorText)) {
        console.warn('Brevo rejected the phone; saving contact without it:', errorText)
        const withoutPhone = { ...attributes }
        delete withoutPhone.SMS
        contactRes = await saveContact(emailText, withoutPhone, targetList)
        contactOk = contactRes.ok
        if (!contactOk) {
          console.error('Brevo contact error (retry without phone):', await contactRes.text())
        }
      } else {
        console.error('Brevo contact error:', errorText)
      }
    }

    // 2. Send notification email to Cherie via Brevo transactional.
    // Sent even if the contact save failed, so Cherie still gets the lead.
    const safeName = escapeHtml(nameText)
    const safeEmail = escapeHtml(emailText)
    const safePhone = escapeHtml(phoneText)
    const safeSource = escapeHtml(sourceText)
    const safeMessage = escapeHtml(messageText).replace(/\r?\n/g, '<br>')

    const emailRes = await fetch(`${BREVO_API_BASE}/v3/smtp/email`, {
      method: 'POST',
      headers: BREVO_HEADERS,
      body: JSON.stringify({
        sender: {
          name: 'Solas Gallery Website',
          email: 'cherie@solasgallery.com',
        },
        to: [{ email: NOTIFICATION_EMAIL, name: 'Cherie Flanagan' }],
        // Subject is plain text, not HTML; strip line breaks only.
        subject: `${IS_PREVIEW ? '[PREVIEW TEST] ' : ''}New inquiry from ${nameText} — ${sourceText}`.replace(/[\r\n]+/g, ' '),
        htmlContent: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h2 style="font-size: 24px; color: #1C1C1A; margin-bottom: 24px;">New Website Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td>
                <td style="padding: 8px 0; color: #1C1C1A;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 8px 0; color: #1C1C1A;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              ${phoneText ? `<tr>
                <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 8px 0; color: #1C1C1A;"><a href="tel:${safePhone}">${safePhone}</a></td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Source</td>
                <td style="padding: 8px 0; color: #1C1C1A;">${safeSource}</td>
              </tr>
              ${messageText ? `<tr>
                <td style="padding: 8px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #1C1C1A;">${safeMessage}</td>
              </tr>` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #C4AE8A; margin: 24px 0;" />
            <p style="font-size: 12px; color: #999;">This inquiry was submitted through solasgallery.com</p>
          </div>
        `,
      }),
    })

    const emailOk = emailRes.ok
    if (!emailOk) {
      console.error('Brevo email error:', await emailRes.text())
    }

    // No silent success: if either Brevo call failed, the form shows its error
    // state (with the phone number) instead of "You're in".
    if (!contactOk || !emailOk) {
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Inquiry API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
