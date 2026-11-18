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
          <strong>The Real Portrait Project</strong> design projects open, November 27,
          December 1, December 19. Book a design consult.
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
        <Link className="sg-nav-cta" href="/#consult">
          Book a design consult
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
            <Link className="sg-nav-cta sg-nav-cta--panel" href="/#consult" onClick={() => setMenuOpen(false)}>
              Book a design consult
            </Link>
          </div>
        ) : null}
      </header>
    </>
  )
}
