import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'

// The tools paragraph lives here only — never on the homepage (brand rule 2026-11-18).

const description =
  'How every Solas piece is made: directed, altered, and finished by hand in our studio in Salado, Texas. Studio original, one of one, from design consult to hung.'

const heroImage = {
  src: '/images/art/category-commission.jpg',
  alt: 'A large abstract painting of trees in green and gold, hung on a gallery wall.',
  width: 750,
  height: 750,
}

export const metadata: Metadata = createLandingMetadata({
  title: 'How Solas Art Is Made | Solas Gallery, Salado, Texas',
  description,
  path: '/process',
  noindex: false,
  ogImage: '/og/process.jpg',
  imageAlt: heroImage.alt,
})

const jsonLd = pageJsonLd({
  title: 'Our Process',
  description,
  path: '/process',
  image: '/og/process.jpg',
})

export default function ProcessPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="How it is made"
      heading={
        <>
          Made by hand,
          <br />
          here.
        </>
      }
      lede="Every piece is produced and finished by hand in our studio: mixed media, archival pigment on canvas, hand-finished surfaces."
      heroImage={heroImage}
      heroCaption="Solas Studio · Salado, Texas"
      cta={{ href: '/portraits#consult', label: 'Book a design consult' }}
      secondaryCta={{ href: '/#commissions', label: 'Start a commission' }}
    >
      <section className="solas-page-copy">
        <div className="solas-measure">
          <h2>Tools.</h2>
          <p>
            We use every tool we need, from the camera to the brush. Every piece is directed,
            altered, and finished by hand, by a person. One of one.
          </p>
          <Link className="solas-underlink" href="/art">
            See the art <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
