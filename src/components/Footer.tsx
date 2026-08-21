import Link from 'next/link'
import { SITE, sisters } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="solas-footer-only" id="contact">
      <img src="/brand/solas.svg" alt="Solas" />
      <div className="solas-footer-nap">
        <p>
          Solas Gallery · 2 Rock Creek Dr, Salado, TX 76571 ·{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </p>
        <p className="solas-footer-sisters">
          {sisters.map((sister, index) => (
            <span key={sister.href}>
              {index > 0 ? ' · ' : null}
              <a href={sister.href} rel="noopener noreferrer">
                {sister.name}
              </a>
            </span>
          ))}
        </p>
      </div>
      <small>
        <Link href="/privacy">Privacy &amp; SMS Terms</Link>
        <br />
        {SITE.city}, Texas · Since {SITE.established}
      </small>
    </footer>
  )
}
