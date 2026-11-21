"use client"

import { useState, FormEvent } from "react"

export default function CaptureForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // true when the details reached us but the list save failed (production only).
  const [notSaved, setNotSaved] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get("website")) {
      setSubmitted(true)
      return
    }

    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: "In-person visitor — captured via QR code",
      source: "in-person-qr",
      hp: formData.get("website") || "",
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Network error")
      const j = await res.json().catch(() => ({}))
      setNotSaved(j.saved === false && !j.preview)
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or ask staff for help.")
      setLoading(false)
    }
  }

  return (
    <main className="sg-capture">
      <div className="sg-capture-card">
        {submitted ? (
          <div role="status">
            <p className="sg-capture-mark" aria-hidden="true">&#x2713;</p>
            <h2>Welcome</h2>
            <p className="sg-capture-sub">
              Thank you for visiting Solas Gallery. We will be in touch.
            </p>
            {notSaved && (
              <p className="sg-capture-sub">
                Your details reached us, but we couldn&apos;t add you to the list automatically. We will add you by hand.
              </p>
            )}
          </div>
        ) : (
          <>
            <h1>Solas Gallery</h1>
            <p className="sg-capture-sub">Stay connected</p>
            <form method="post" className="sg-form" onSubmit={handleSubmit}>
              <div className="sg-form-grid">
                <label>
                  First name
                  <input name="firstName" type="text" required autoComplete="given-name" />
                </label>
                <label>
                  Last name
                  <input name="lastName" type="text" required autoComplete="family-name" />
                </label>
                <label className="sg-form-wide">
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label className="sg-form-wide">
                  Phone <span className="sg-capture-optional">(optional)</span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>
              <input
                type="text"
                name="website"
                className="sg-capture-hp"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <button type="submit" disabled={loading}>
                {loading ? "Submitting…" : "Join the list"}
              </button>
              {error && (
                <p className="sg-form-error" role="alert">
                  {error}
                </p>
              )}
              <p className="sg-capture-privacy">We respect your privacy. Unsubscribe anytime.</p>
            </form>
          </>
        )}
      </div>
    </main>
  )
}
