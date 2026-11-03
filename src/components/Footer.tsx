import Link from 'next/link'
import { SITE, sisters } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="solas-footer-only" id="contact">
      <img src="/brand/solas.svg" alt="Solas Gallery" width={88} height={83} loading="lazy" />
      <div className="solas-footer-nap">
        <p>
          {SITE.name} · {SITE.street}, {SITE.city}, {SITE.region} {SITE.postalCode} ·{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </p>
        <p className="solas-footer-sisters">
          Neighbors on Rock Creek Drive:{' '}
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
        © {year} {SITE.name} · {SITE.city}, Texas · Since {SITE.established}
      </small>
    </footer>
  )
}
