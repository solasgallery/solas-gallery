import type { ReactNode } from 'react'
import Link from 'next/link'

export type LandingCta = {
  href: string
  label: string
}

export type LandingPageProps = {
  eyebrow?: string
  heading: ReactNode
  lede?: string
  whisper?: string
  heroImage?: { src: string; alt: string }
  heroCaption?: string
  folioMark?: string
  cta?: LandingCta
  secondaryCta?: LandingCta
  children?: ReactNode
}

/**
 * Reusable campaign / geo / product landing layout.
 * Pair with createLandingMetadata({ noindex: true }) — the default —
 * unless the page should be indexed (e.g. /real-portrait, /folio).
 */
export default function LandingPage({
  eyebrow,
  heading,
  lede,
  whisper,
  heroImage,
  heroCaption,
  folioMark,
  cta,
  secondaryCta,
  children,
}: LandingPageProps) {
  return (
    <>
      <section className="solas-opening" aria-labelledby="landing-heading">
        {heroImage ? (
          <div className="solas-opening-image">
            <img src={heroImage.src} alt={heroImage.alt} />
            <div className="solas-light" />
            {heroCaption ? <span className="solas-caption">{heroCaption}</span> : null}
          </div>
        ) : (
          <div className="solas-opening-image solas-opening-image--stone" aria-hidden="true">
            <div className="solas-light" />
          </div>
        )}
        <div className="solas-opening-copy">
          {eyebrow ? <p className="solas-label">{eyebrow}</p> : null}
          <h1 id="landing-heading">{heading}</h1>
          {lede ? <p className="solas-lede">{lede}</p> : null}
          {cta || secondaryCta ? (
            <div className="solas-actions">
              {cta ? (
                <Link href={cta.href}>
                  {cta.label} <span aria-hidden="true">↗</span>
                </Link>
              ) : null}
              {secondaryCta ? <Link href={secondaryCta.href}>{secondaryCta.label}</Link> : null}
            </div>
          ) : null}
          {whisper ? <p className="solas-whisper">{whisper}</p> : null}
        </div>
        <div className="solas-orbit" aria-hidden="true">
          <i />
        </div>
        {folioMark ? <span className="solas-folio">{folioMark}</span> : null}
      </section>
      {children}
    </>
  )
}
