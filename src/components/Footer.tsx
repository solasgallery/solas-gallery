import Link from 'next/link'
import { HUB_EVENTS_URL, HUB_VENUE_URL, NAP, SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="solas-footer-only" id="contact">
      <img src="/brand/solas.svg" alt="Solas Gallery" width={88} height={83} loading="lazy" />
      <div className="solas-footer-nap">
        <p>
          {NAP.replace(` · ${SITE.phoneDisplay}`, '')} ·{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </p>
        <p className="solas-footer-sisters">
          <Link href="/journal">Journal</Link>
          {' · '}
          <Link href="/trade">Trade</Link>
          {' · '}
          <a href={HUB_EVENTS_URL} rel="noopener noreferrer">
            Events at HUBSalado
          </a>
          {' · '}
          <a href={HUB_VENUE_URL} rel="noopener noreferrer">
            Venue rental at HUBSalado
          </a>
          {' · '}
          <a href="https://saladovillageframer.com" rel="noopener noreferrer">
            Salado Village Framer
          </a>
        </p>
      </div>
      <small>
        <Link href="/privacy">Privacy &amp; SMS Terms</Link>
        <br />
        © {year} {SITE.name} · {SITE.city}, Texas · Since {SITE.established}
      </small>
    </footer>
  )
}
