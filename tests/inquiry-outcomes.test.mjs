// Run: npm run build first, then `node --test tests/`.
// FS6-03: if the lead email reached Cherie but the Brevo contact save failed, /api/inquiry returns 200
// {success, received, saved:false} (and the email says the contact was not saved). Only a failed lead email is a 500.
// FS6-07: every form is method="post". Trade (2026-11-25): /trade has no form; apply/faq 301 to it; the old trade source is rejected.
// Brevo is a local HTTP stub via BREVO_API_BASE: no real Brevo calls.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 3941;
const STUB = 3942;
let mode = {};
let calls = [];
let server;
let stub;
let n = 0;

const post = (body) =>
  fetch(`http://127.0.0.1:${PORT}/api/inquiry`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': `10.8.0.${++n}` },
    body: JSON.stringify(body),
  }).then(async (r) => ({ status: r.status, json: await r.json().catch(() => null) }));
const lead = { name: 'AUDIT TEST', email: 'audit@example.com', phone: '', message: 'hi', source: 'Begin', hp: '' };

test.before(async () => {
  stub = createServer((req, res) => {
    let b = '';
    req.on('data', (c) => (b += c));
    req.on('end', () => {
      const kind = req.url.includes('/smtp/email') ? 'smtp' : 'contacts';
      calls.push({ kind, body: JSON.parse(b || '{}') });
      const m = mode[kind] || 'ok';
      if (m === 'drop') return req.socket.destroy(); // network error for the caller
      res.writeHead(m === '500' ? 500 : 201, { 'content-type': 'application/json' });
      res.end(JSON.stringify(m === '500' ? { code: 'internal_error' } : { id: 1 }));
    });
  }).listen(STUB);
  server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    cwd: root,
    env: { ...process.env, VERCEL_ENV: 'production', BREVO_API_KEY: 'stub-key', BREVO_API_BASE: `http://127.0.0.1:${STUB}` },
    stdio: 'ignore',
  });
  for (let i = 0; i < 60; i++) {
    try { await fetch(`http://127.0.0.1:${PORT}/robots.txt`); break; } catch { await new Promise((r) => setTimeout(r, 500)); }
  }
});
test.after(() => { server?.kill(); stub?.close(); });

test('happy path: saved:true', async () => {
  mode = {}; calls = [];
  const r = await post(lead);
  assert.equal(r.status, 200);
  assert.equal(r.json.saved, true);
  assert.deepEqual(calls.map((c) => c.kind), ['contacts', 'smtp']);
});

for (const m of ['500', 'drop']) {
  test(`contact save fails (${m}), lead email sent -> 200 received, saved:false (FS6-03)`, async () => {
    mode = { contacts: m }; calls = [];
    const r = await post(lead);
    assert.equal(r.status, 200);
    assert.equal(r.json.success, true);
    assert.equal(r.json.saved, false);
    const smtp = calls.filter((c) => c.kind === 'smtp');
    assert.equal(smtp.length, 1, 'lead email still sent');
    assert.match(smtp[0].body.htmlContent, /NOT saved to Brevo \(list 51\)/);
  });
}

for (const m of ['500', 'drop']) {
  test(`lead email fails (${m}) -> 500 even though the contact saved`, async () => {
    mode = { smtp: m }; calls = [];
    const r = await post(lead);
    assert.equal(r.status, 500);
  });
}

test('trade: no form on /trade, apply and faq 301 to it, old trade source rejected', async () => {
  const r = await fetch(`http://127.0.0.1:${PORT}/trade`);
  assert.equal(r.status, 200);
  const html = await r.text();
  assert.equal((html.match(/<form\b/g) || []).length, 0, '/trade has no form');
  for (const [from, to] of [['/trade/apply', '/trade#enroll'], ['/trade/apply.html', '/trade#enroll'], ['/trade/faq', '/trade'], ['/trade/faq.html', '/trade']]) {
    const x = await fetch(`http://127.0.0.1:${PORT}${from}`, { redirect: 'manual' });
    assert.equal(x.status, 301, from);
    assert.equal(new URL(x.headers.get('location'), 'http://x').pathname + (new URL(x.headers.get('location'), 'http://x').hash), to, from);
  }
  const old = await post({ ...lead, source: 'Trade — Solas' });
  assert.equal(old.status, 400);
});

test('rendered forms are method=post', async () => {
  for (const path of ['/portraits', '/begin', '/capture']) {
    const html = await (await fetch(`http://127.0.0.1:${PORT}${path}`)).text();
    const forms = html.match(/<form\b[^>]*>/g) || [];
    assert.ok(forms.length > 0, `${path} has a form`);
    for (const f of forms) assert.match(f, /method="post"/, `${path}: ${f}`);
  }
});
