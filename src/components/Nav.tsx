'use client'

import { useState } from 'react'
import Link from 'next/link'
import { primaryNav } from '@/lib/site'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="solas-nav">
      <Link href="/" className="solas-original-mark" aria-label="Solas home">
        <img src="/brand/solas.svg" alt="Solas" />
      </Link>
      <nav aria-label="Primary">
        {primaryNav.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="solas-conversation" href="/begin">
        Begin <span aria-hidden="true">↗</span>
      </Link>
      <button
        className="mobile-menu"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close Solas menu' : 'Open Solas menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      {menuOpen ? (
        <div className="solas-mobile-panel">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  )
}
