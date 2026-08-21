import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Photographer Near Georgetown — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 24 minutes from Georgetown. Professional portraits, executive headshots, and fine art prints.',
  path: '/area/georgetown',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function GeorgetownPage() {
  return (
    <LandingPage
      eyebrow="Georgetown · 24 minutes"
      heading="Solas Gallery for Georgetown"
      lede="24 minutes north. Two historic town squares, one creative tradition."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>Georgetown and Salado — kindred spirits</h2>
        <p>
          Georgetown and Salado share something most Texas towns have lost —
          a historic town square, a walkable Main Street, and a community that
          values craft over convenience. Solas Gallery has been part of that
          tradition in Salado for thirty years.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
  )
}
