import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Photographer Near Temple TX — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 17 minutes from Temple. Professional portraits, executive headshots, and fine art. Serving Temple, Belton, and Bell County.',
  path: '/area/temple',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function TemplePage() {
  return (
    <LandingPage
      eyebrow="Temple · 17 minutes"
      heading="Solas Gallery for Temple"
      lede="17 minutes south. Your closest fine art gallery and portrait studio."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>Temple&apos;s gallery is in Salado</h2>
        <p>
          Temple is an 80,000-person city built around Baylor Scott &amp; White
          and a medical community that employs thousands of professionals who
          need headshots, family portraits, and art for their homes. Solas
          Gallery is 17 minutes south on I-35 — closer than most things in
          Temple&apos;s own sprawl.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
  )
}
