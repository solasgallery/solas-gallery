import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { areaJsonLd } from '@/lib/jsonld'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Solas Gallery for Temple TX — Portraits & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 17 minutes from Temple. Professional portraits and fine art. Serving Temple, Belton, and Bell County.',
  path: '/area/temple',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

const jsonLd = areaJsonLd({
  title: 'Solas Gallery for Temple TX — Portraits & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 17 minutes from Temple. Professional portraits and fine art. Serving Temple, Belton, and Bell County.',
  path: '/area/temple',
  areaName: 'Temple',
})

export default function TemplePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <LandingPage
      eyebrow="Temple · 17 minutes"
      heading="Solas Gallery for Temple"
      lede="17 minutes south. Your closest fine art gallery."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>Temple&apos;s gallery is in Salado</h2>
        <p>
          Temple is an 80,000-person city built around Baylor Scott &amp; White
          and a medical community that employs thousands of professionals who
          want family portraits and art for their homes. Solas
          Gallery is 17 minutes south on I-35 — closer than most things in
          Temple&apos;s own sprawl.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
    </>
  )
}
