'use client'

import { useState } from 'react'

interface InquiryFormProps {
  source: string
  headline?: string
  subtext?: string
  messagePlaceholder?: string
  submitLabel?: string
}

export default function InquiryForm({
  source,
  headline = 'Begin here.',
  subtext,
  messagePlaceholder = 'Tell us what you have in mind.',
  submitLabel = 'Send inquiry',
}: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
      source,
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
      <div className="solas-form-thanks">
        <h3>Thank you.</h3>
        <p>We received your inquiry and will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <div className="solas-form">
      {headline ? <h2>{headline}</h2> : null}
      {subtext ? <p className="solas-form-subtext">{subtext}</p> : null}
      <form onSubmit={handleSubmit}>
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
          {messagePlaceholder}
          <textarea name="message" rows={4} />
        </label>
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {status === 'error' ? (
          <p className="solas-form-error">
            Something went wrong. Please call us at (254) 947-1881 or try again shortly.
          </p>
        ) : null}
      </form>
    </div>
  )
}
