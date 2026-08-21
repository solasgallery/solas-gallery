import type { Metadata } from 'next'
import { SITE } from './site'

type LandingMetaInput = {
  title: string
  description: string
  path: string
  /** Campaign and geo landings default to noindex. */
  noindex?: boolean
  image?: string
  imageAlt?: string
}

export function createLandingMetadata({
  title,
  description,
  path,
  noindex = true,
  image = '/og-default.jpg',
  imageAlt = SITE.name,
}: LandingMetaInput): Metadata {
  const url = `${SITE.url}${path === '/' ? '' : path}`
  const fullTitle = title.includes('Solas') ? title : `${title} | Solas Gallery — Salado, TX`

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
