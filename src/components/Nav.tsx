'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { primaryNav } from '@/lib/site'

// /real-portrait is a limited campaign page with no dates and no booking CTA
// (2026-11-18): hide the dated announcement bar and the booking button there.
const CAMPAIGN_PATHS = ['/real-portrait']

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
        <span className="sr-only"> (opens HUB Salado)</span>
      </a>
    )
  }
  return (
    <Link href={link.href} onClick={onClick}>
      {link.label}
    </Link>
  )
}

export default function Nav({ announce }: { announce: string | null }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const showBooking = !CAMPAIGN_PATHS.includes(pathname ?? '') && announce !== null

  return (
    <>
      {showBooking ? (
        <div className="sg-announce">
          <Link href="/portraits">
            <strong>Portrait design</strong> sittings: {announce}. Book a design consult.
          </Link>
        </div>
      ) : null}
      <header className="solas-nav">
        <Link href="/" className="solas-original-mark" aria-label="Solas Gallery home">
          <img src="/brand/solas.svg" alt="Solas Gallery" width={70} height={66} />
        </Link>
        <nav aria-label="Primary">
          {primaryNav.map((link) => (
            <NavLink key={link.href} link={link} />
          ))}
        </nav>
        {showBooking ? (
          <Link className="sg-nav-cta" href="/portraits#consult">
            Book a design consult
          </Link>
        ) : null}
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
            {showBooking ? (
              <Link className="sg-nav-cta sg-nav-cta--panel" href="/portraits#consult" onClick={() => setMenuOpen(false)}>
                Book a design consult
              </Link>
            ) : null}
          </div>
        ) : null}
      </header>
    </>
  )
}
