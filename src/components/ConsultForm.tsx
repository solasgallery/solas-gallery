'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

/**
 * Portrait design consult request (lives on /portraits#consult). Posts to the
 * existing /api/inquiry route (Brevo contact + notification email). Finish and
 * day preferences ride in the message field so no API change is needed.
 */
export default function ConsultForm({ days = [] }: { days?: string[] }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const field = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null)?.value || ''

    const data = {
      name: field('name'),
      email: field('email'),
      phone: field('phone'),
      message: days.length
        ? `Finish: ${field('finish')} · Preferred day: ${field('day')}`
        : `Finish: ${field('finish')}`,
      source: 'Portrait design consult',
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="sg-form sg-form--thanks" role="status">
        <h3>
          Thank you — we&rsquo;ll be in touch within one business day to set your free
          design consult.
        </h3>
      </div>
    )
  }

  return (
    <form className="sg-form" onSubmit={handleSubmit} aria-labelledby="consult-heading">
      <h3 id="consult-heading">Book a design consult</h3>
      <p className="sg-form-note">
        {days.length ? 'Choose your preferred day. ' : ''}We will be in touch within one business day to set your
        free design consult.
      </p>
      <div className="sg-form-grid">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label>
          Finish
          <select name="finish" defaultValue="Undecided">
            <option>Black and white</option>
            <option>Color</option>
            <option>Undecided</option>
          </select>
        </label>
        {days.length ? (
          <label className="sg-form-wide">
            Preferred day
            <select name="day" defaultValue="Any of the sittings">
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
              <option>Any of the sittings</option>
            </select>
          </label>
        ) : null}
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request my design consult'}
      </button>
      {status === 'error' ? (
        <p className="sg-form-error" role="alert">
          Something went wrong. Please call us at {SITE.phoneDisplay} or try again shortly.
        </p>
      ) : null}
    </form>
  )
}
