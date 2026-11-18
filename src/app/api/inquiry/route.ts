import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY || ''
// Consult/inquiry notifications go to Cherie (2026-11-18). The Vercel env var
// NOTIFICATION_EMAIL is set to the same address; this default covers a missing var.
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'cherie@solasgallery.com'

// Brevo list "Website Inquiries" (ID 51, created 2026-11-18). The Vercel env var
// BREVO_LIST_ID is set to the same ID; this default covers a missing var.
// Trade forms pass their own listId (43) and are not affected.
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID) || 51

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
  return fetch('https://api.brevo.com/v3/contacts', {
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
    const body = await request.json()
    const { name, email, phone, message, source, listId } = body
    const targetList = Number(listId) || BREVO_LIST_ID

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const nameText = String(name)
    const emailText = String(email)
    const phoneText = phone ? String(phone) : ''
    const messageText = message ? String(message) : ''
    const sourceText = source ? String(source) : 'Website'

    // 1. Create/update contact in Brevo (201 created, 204 updated)
    const attributes: Record<string, string> = {
      FIRSTNAME: nameText.split(' ')[0],
      LASTNAME: nameText.split(' ').slice(1).join(' ') || '',
      SMS: phoneText,
    }
    let contactRes = await saveContact(emailText, attributes, targetList)
    let contactOk = contactRes.ok

    if (!contactOk) {
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

    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: BREVO_HEADERS,
      body: JSON.stringify({
        sender: {
          name: 'Solas Gallery Website',
          email: 'cherie@solasgallery.com',
        },
        to: [{ email: NOTIFICATION_EMAIL, name: 'Cherie Flanagan' }],
        // Subject is plain text, not HTML; strip line breaks only.
        subject: `New inquiry from ${nameText} — ${sourceText}`.replace(/[\r\n]+/g, ' '),
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
