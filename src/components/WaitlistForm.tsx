'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

/**
 * Limited Edition Sessions waitlist. Posts to the existing /api/inquiry route
 * (Brevo contact + notification email). Finish and day preferences ride in the
 * message field so no API change is needed.
 * PLACEHOLDER (F-04): real booking links replace this form on Nov 5.
 */
export default function WaitlistForm() {
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
      message: `Finish: ${field('finish')} · Preferred day: ${field('day')}`,
      source: 'Limited Edition Sessions waitlist',
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
        <h3>You are on the list.</h3>
        <p>Waitlist invitations go out before public booking opens. Watch your inbox.</p>
      </div>
    )
  }

  return (
    <form className="sg-form" onSubmit={handleSubmit} aria-labelledby="waitlist-heading">
      <h3 id="waitlist-heading">Join the waitlist</h3>
      <p className="sg-form-note">
        The waitlist is invited to book first, before public booking opens.
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
        <label className="sg-form-wide">
          Preferred day
          <select name="day" defaultValue="Any of the three">
            <option>Tuesday, November 17</option>
            <option>Saturday, November 21</option>
            <option>Friday, November 27</option>
            <option>Any of the three</option>
          </select>
        </label>
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
      </button>
      {status === 'error' ? (
        <p className="sg-form-error" role="alert">
          Something went wrong. Please call us at {SITE.phoneDisplay} or try again shortly.
        </p>
      ) : null}
    </form>
  )
}
