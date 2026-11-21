import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'FOLIO Heirloom Albums by Solas Gallery | Salado, Texas',
  description:
    'FOLIO heirloom albums from Solas Gallery in Salado, Texas: thick-paged, archival books for portraits, a house, a year, made to be kept for generations.',
  path: '/folio',
  noindex: false,
  ogImage: '/og/folio.jpg',
  imageAlt: images.folio.alt,
})

const jsonLd = pageJsonLd({
  title: 'FOLIO Albums',
  description:
    'FOLIO heirloom albums from Solas Gallery in Salado, Texas: thick-paged, archival books for portraits, a house, a year, made to be kept for generations.',
  path: '/folio',
  image: '/og/folio.jpg',
})

export default function FolioPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="FOLIO albums"
      heading={
        <>
          Work made
          <br />
          to be held.
        </>
      }
      lede="Thick pages. One image to a spread. A book that can sit on a table for years without asking for attention."
      heroImage={images.folio}
      heroPosition="25% 50%"
      heroCaption="FOLIO · Solas Gallery"
      folioMark="FOLIO"
      cta={{ href: '/begin', label: 'Inquire about a FOLIO' }}
    >
      <section className="solas-archive-tease">
        <div className="solas-archive-title">
          <span>From the archive</span>
          <h2>FOLIO</h2>
        </div>
        <div className="solas-archive-offer">
          <span className="solas-credit">Kept.</span>
          <p>
            FOLIO is the album for a body of work — portraits, a house, a year —
            printed and bound to last.
          </p>
          <Link href="/begin">
            Begin a FOLIO <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-page-edge" aria-hidden="true" />
      </section>
    </LandingPage>
    </>
  )
}
