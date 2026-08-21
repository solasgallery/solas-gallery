import type { ReactNode } from 'react'
import Link from 'next/link'
import VideoHero from '@/components/VideoHero'
import type { HeroKey } from '@/lib/heroes'

export type LandingCta = {
  href: string
  label: string
}

export type LandingPageProps = {
  hero?: HeroKey
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
 * Major landings: full-bleed video, then the existing page body.
 * Overlay is one label, one heading, one text link.
 */
export default function LandingPage({
  hero = 'portrait',
  eyebrow = 'Solas Gallery',
  heading,
  lede,
  whisper,
  cta,
  secondaryCta,
  children,
}: LandingPageProps) {
  return (
    <>
      <VideoHero
        theme={hero}
        label={eyebrow}
        heading={heading}
        href={cta?.href ?? '/begin'}
        linkLabel={cta?.label ?? 'Begin'}
      />
      {lede || whisper || secondaryCta ? (
        <section className="solas-after-hero">
          {lede ? <p className="solas-lede">{lede}</p> : null}
          {whisper ? <p className="solas-whisper">{whisper}</p> : null}
          {secondaryCta ? (
            <Link className="solas-hero-link solas-hero-link--ink" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          ) : null}
        </section>
      ) : null}
      {children}
    </>
  )
}
