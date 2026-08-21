'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { heroes, type HeroKey } from '@/lib/heroes'

type VideoHeroProps = {
  theme: HeroKey
  label: string
  heading: ReactNode
  href: string
  linkLabel: string
}

export default function VideoHero({
  theme,
  label,
  heading,
  href,
  linkLabel,
}: VideoHeroProps) {
  const media = heroes[theme]
  const [isMobile, setIsMobile] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const widthMq = window.matchMedia('(max-width: 767px)')
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setIsMobile(widthMq.matches)
      setReduceMotion(motionMq.matches)
    }
    sync()
    widthMq.addEventListener('change', sync)
    motionMq.addEventListener('change', sync)
    return () => {
      widthMq.removeEventListener('change', sync)
      motionMq.removeEventListener('change', sync)
    }
  }, [])

  const src = isMobile ? media.mobile : media.desktop

  return (
    <section className="solas-hero" aria-labelledby="solas-hero-heading">
      {reduceMotion ? (
        <img className="solas-hero-media" src={media.poster} alt="" />
      ) : (
        <video
          key={src}
          className="solas-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className="solas-hero-veil" aria-hidden="true" />
      <div className="solas-hero-copy">
        <p className="solas-label">{label}</p>
        <h1 id="solas-hero-heading">{heading}</h1>
        <Link className="solas-hero-link" href={href}>
          {linkLabel}
        </Link>
      </div>
    </section>
  )
}
