import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Photographer Near Round Rock — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 31 minutes from Round Rock. Professional portraits, executive headshots, and fine art.',
  path: '/area/round-rock',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function RoundRockPage() {
  return (
    <LandingPage
      eyebrow="Round Rock · 31 minutes"
      heading="Solas Gallery for Round Rock"
      lede="31 minutes north. 132,000 people, and the best portraits are in Salado."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>Round Rock to Salado — 31 minutes, a different world</h2>
        <p>
          Round Rock is one of the fastest-growing cities in Texas. Solas
          Gallery is 31 minutes north on I-35. Tim Flanagan has been creating
          portraits and fine art from this gallery for thirty years.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
  )
}
