import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'
import { tradeCopy as t } from '@/data/trade-copy'

const description =
  'Trade pricing on custom framing for registered interior designers: 10%, 15% or 20% off by annual framing spend. One enrollment covers Salado Village Framer.'

const hero = {
  alt: 'A room in Solas Gallery: silver and gold wall pieces on white boards, and round painted panels on a green wall through the doorway.',
  width: 1200,
  height: 800,
}

export const metadata: Metadata = createLandingMetadata({
  title: 'Framing Trade Program for Interior Designers | Solas Gallery',
  description,
  path: '/trade',
  noindex: false,
  ogImage: '/og/commissions.jpg',
  imageAlt: hero.alt,
})

const jsonLd = pageJsonLd({
  title: 'Framing Trade Program',
  description,
  path: '/trade',
  image: '/og/commissions.jpg',
})

const mailto = `mailto:${t.email}?subject=${encodeURIComponent('Trade enrollment')}`

/**
 * One trade page: the locked one-pager (mirrors the Framer's /trade), then the enroll call to action.
 * No form anywhere in the trade flow: enroll is by email or phone. /trade/apply and /trade/faq 301 here.
 */
export default function TradePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="solas-opening" aria-labelledby="trade-heading">
        <div className="solas-opening-image">
          {/* Pre-sized WebP (public/images/trade) so the first paint skips the image resizer. */}
          <img
            src="/images/trade/gallery-room-1200.webp"
            srcSet="/images/trade/gallery-room-828.webp 828w, /images/trade/gallery-room-1200.webp 1200w"
            sizes="(max-width: 760px) 100vw, 52vw"
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            style={{ objectPosition: '30% 50%' }}
            fetchPriority="high"
          />
          <div className="solas-light" />
          <span className="solas-caption">Solas Gallery · Salado, Texas</span>
        </div>
        <div className="solas-opening-copy">
          <p className="solas-label">{t.kicker}</p>
          <h1 id="trade-heading">{t.title}</h1>
          <p className="solas-lede">{t.lede}</p>
          <div className="solas-actions">
            <a href="#enroll">
              Enroll <span aria-hidden="true">↓</span>
            </a>
            <a href={t.pdf} download>
              Download the one-pager (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="solas-page-copy sg-trade-copy">
        <div className="solas-measure">
          <h2>{t.whoQualifies.h}</h2>
          <p>{t.whoQualifies.p}</p>

          <h2>{t.tiers.h}</h2>
          <table className="sg-trade-table">
            <thead>
              <tr>
                {t.tiers.cols.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.tiers.rows.map((r) => (
                <tr key={r[0]}>
                  <th scope="row">{r[0]}</th>
                  {r.slice(1).map((v, i) => (
                    <td key={v} data-label={t.tiers.cols[i + 1]}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p>{t.tiers.note}</p>

          <h2>{t.covers.h}</h2>
          <p>{t.covers.p}</p>

          <h2>{t.howItWorks.h}</h2>
          <ol className="sg-trade-steps">
            {t.howItWorks.steps.map(([h, p]) => (
              <li key={h}>
                <b>{h}</b> — {p}
              </li>
            ))}
          </ol>
          <p className="sg-trade-joint">{t.howItWorks.joint}</p>

          <h2>{t.local.h}</h2>
          <p>{t.local.p}</p>
        </div>
      </section>

      <section className="solas-page-copy sg-trade-enroll" id="enroll" aria-labelledby="enroll-heading">
        <div className="solas-measure">
          <h2 id="enroll-heading">Enroll</h2>
          <p className="sg-trade-ways">
            <a href={mailto}>{t.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={`tel:${t.phoneTel}`}>{t.phoneDisplay}</a>
          </p>
          <a className="solas-underlink" href={t.pdf} download>
            Download the one-pager (PDF) <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </>
  )
}
