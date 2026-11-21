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
  /** 1200x630 social image; defaults to /solas-og.jpg. */
  ogImage?: string
}

export function createLandingMetadata({
  title,
  description,
  path,
  noindex = true,
  image = '/solas-og.jpg',
  ogImage,
  imageAlt = SITE.name,
}: LandingMetaInput): Metadata {
  const url = `${SITE.url}${path === '/' ? '' : path}`
  // `title` is the complete, final <title> (50-60 chars); no template suffix is added.
  const fullTitle = title
  const social = ogImage ?? '/solas-og.jpg'
  void image

  return {
    title: { absolute: title },
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
      images: [{ url: social, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [social],
    },
  }
}
