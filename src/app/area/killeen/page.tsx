import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Photographer Near Killeen — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 21 minutes from Killeen. Professional portraits, military family photography, and fine art.',
  path: '/area/killeen',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function KilleenPage() {
  return (
    <LandingPage
      eyebrow="Killeen · 21 minutes"
      heading="Solas Gallery for Killeen"
      lede="21 minutes east. Serving military families and Killeen professionals for 30 years."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>The Killeen-Salado connection</h2>
        <p>
          Killeen is the largest city in Bell County — home to Fort Cavazos,
          and a community of military families who understand the value of a
          real portrait. Solas Gallery is 21 minutes east on US-190, and
          military families have been coming here for decades.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
  )
}
