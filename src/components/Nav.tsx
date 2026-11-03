'use client'

import { useState } from 'react'
import Link from 'next/link'
import { primaryNav } from '@/lib/site'

function NavLink({
  link,
  onClick,
}: {
  link: (typeof primaryNav)[number]
  onClick?: () => void
}) {
  if (link.external) {
    return (
      <a href={link.href} rel="noopener noreferrer" onClick={onClick}>
        {link.label}
        <span className="sr-only"> (opens hubsalado.com)</span>
      </a>
    )
  }
  return (
    <Link href={link.href} onClick={onClick}>
      {link.label}
    </Link>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="sg-announce">
        <Link href="/#sessions">
          <strong>Limited Edition Sessions</strong>
          <span className="sg-announce-sep" aria-hidden="true">—</span>
          public booking opens Thu Nov 5, 6 AM. Three days only.
        </Link>
      </div>
      <header className="solas-nav">
        <Link href="/" className="solas-original-mark" aria-label="Solas Gallery home">
          <img src="/brand/solas.svg" alt="Solas Gallery" width={70} height={66} />
        </Link>
        <nav aria-label="Primary">
          {primaryNav.map((link) => (
            <NavLink key={link.href} link={link} />
          ))}
        </nav>
        <Link className="sg-nav-cta" href="/#sessions">
          Book a Session
        </Link>
        <button
          className="mobile-menu"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="solas-mobile-panel"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        {menuOpen ? (
          <div className="solas-mobile-panel" id="solas-mobile-panel">
            {primaryNav.map((link) => (
              <NavLink key={link.href} link={link} onClick={() => setMenuOpen(false)} />
            ))}
            <Link className="sg-nav-cta sg-nav-cta--panel" href="/#sessions" onClick={() => setMenuOpen(false)}>
              Book a Session
            </Link>
          </div>
        ) : null}
      </header>
    </>
  )
}
