// Abuse test: the browser must not be able to choose the Brevo list.
// Run: node --test tests/
// No network: globalThis.fetch is stubbed and records what would go to Brevo.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'

const routePath = fileURLToPath(new URL('../src/app/api/inquiry/route.ts', import.meta.url))

// Minimal stand-in for next/server so the route runs under plain Node.
const nextServerStub = `
const NextResponse = { json: (body, init) => new Response(JSON.stringify(body), {
  status: (init && init.status) || 200, headers: { 'content-type': 'application/json' } }) };
`

async function loadRoute() {
  process.env.BREVO_API_KEY = 'test-key'
  delete process.env.BREVO_LIST_ID
  delete process.env.BREVO_API_BASE
  delete process.env.VERCEL_ENV
  const src = readFileSync(routePath, 'utf8')
    .replace(/import\s*\{[^}]*\}\s*from\s*['"]next\/server['"]\s*;?/, nextServerStub)
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  const out = join(mkdtempSync(join(tmpdir(), 'inquiry-route-')), 'route.mjs')
  writeFileSync(out, js)
  return import(pathToFileURL(out).href)
}

const route = await loadRoute()

// Stub fetch: record every Brevo call. `contactReplies` lets a test script the
// /v3/contacts responses in order; default is 201.
function stubFetch(contactReplies = []) {
  const calls = []
  globalThis.fetch = async (url, init) => {
    const body = init && init.body ? JSON.parse(init.body) : null
    calls.push({ url: String(url), body })
    if (String(url).endsWith('/v3/contacts')) {
      const r = contactReplies.shift() || { status: 201, text: '{}' }
      return new Response(r.status === 204 ? null : r.text, { status: r.status })
    }
    return new Response('{"messageId":"stub"}', { status: 201 })
  }
  return calls
}

function post(body) {
  return route.POST(new Request('http://localhost/api/inquiry', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  }))
}

const contactLists = (calls) =>
  calls.filter((c) => c.url.endsWith('/v3/contacts')).map((c) => c.body.listIds)

const base = { name: 'Abuse Test', email: 'abuse-test@example.invalid', phone: '', message: 'x' }

test('client listId 46 on a general form is ignored (Website Inquiries 51)', async () => {
  const calls = stubFetch()
  await post({ ...base, source: 'Begin', listId: 46 })
  const lists = contactLists(calls)
  assert.ok(lists.length > 0, 'contact save was attempted')
  for (const l of lists) assert.ok(!l.includes(46), `Brevo asked to add contact to 46: ${JSON.stringify(l)}`)
  assert.deepEqual(lists, [[51]])
})

test('client listIds [46] is ignored', async () => {
  const calls = stubFetch()
  await post({ ...base, source: 'Begin', listIds: [46] })
  for (const l of contactLists(calls)) assert.ok(!l.includes(46))
  assert.deepEqual(contactLists(calls), [[51]])
})

test('client listId 46 with a trade source still lands on Trade list 43 only', async () => {
  const calls = stubFetch()
  await post({ ...base, source: 'Trade — Solas', listId: 46 })
  assert.deepEqual(contactLists(calls), [[43]])
})

test('client listId 46 with an unknown source falls back to 51, never 46', async () => {
  const calls = stubFetch()
  await post({ ...base, source: 'made-up', listId: 46 })
  assert.deepEqual(contactLists(calls), [[51]])
})

test('client listId as a string "46" is ignored', async () => {
  const calls = stubFetch()
  await post({ ...base, source: 'Begin', listId: '46' })
  assert.deepEqual(contactLists(calls), [[51]])
})

// Regression: every live caller on main keeps its list.
for (const [source, extra, expected] of [
  ['Begin', {}, 51],
  ['venue-rental', {}, 51],
  ['Portrait design consult', {}, 51],
  ['in-person-qr', { website: '' }, 51],
  ['Trade — Solas', { listId: 43 }, 43],
  ['Trade — Solas (Apply)', { listId: 43 }, 43],
]) {
  test(`live caller "${source}" -> list ${expected}, 200`, async () => {
    const calls = stubFetch()
    const res = await post({ ...base, source, ...extra })
    assert.equal(res.status, 200)
    assert.deepEqual(contactLists(calls), [[expected]])
    assert.equal(calls.filter((c) => c.url.endsWith('/v3/smtp/email')).length, 1)
  })
}

test('phone fallback intact: duplicate SMS -> retry without phone, same list, 200', async () => {
  const calls = stubFetch([
    { status: 400, text: JSON.stringify({ code: 'duplicate_parameter', metadata: { duplicate_identifiers: ['SMS'] } }) },
    { status: 204, text: '' },
  ])
  const res = await post({ ...base, phone: '254-555-0100', source: 'Trade — Solas', listId: 46 })
  assert.equal(res.status, 200)
  const contacts = calls.filter((c) => c.url.endsWith('/v3/contacts'))
  assert.equal(contacts.length, 2)
  assert.equal(contacts[0].body.attributes.SMS, '254-555-0100')
  assert.equal('SMS' in contacts[1].body.attributes, false)
  assert.deepEqual(contacts.map((c) => c.body.listIds), [[43], [43]])
  const mail = calls.find((c) => c.url.endsWith('/v3/smtp/email'))
  assert.match(mail.body.htmlContent, /254-555-0100/)
})

test('no silent success: contact save fails -> email still sent, route returns 500', async () => {
  const calls = stubFetch([{ status: 500, text: '{"code":"server_error"}' }])
  const res = await post({ ...base, source: 'Begin' })
  assert.equal(res.status, 500)
  assert.equal(calls.filter((c) => c.url.endsWith('/v3/smtp/email')).length, 1)
})
