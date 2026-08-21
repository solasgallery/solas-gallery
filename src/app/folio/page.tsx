import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'FOLIO',
  description:
    'FOLIO albums from Solas Gallery — thick-paged, archival books for work that was made to be kept.',
  path: '/folio',
  noindex: false,
  image: images.folio.src,
  imageAlt: images.folio.alt,
})

export default function FolioPage() {
  return (
    <LandingPage
      hero="folio"
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
            printed and bound to last. This page is the home for albums once found
            at boxomemories.com.
          </p>
          <Link href="/begin">
            Begin a FOLIO <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-page-edge" aria-hidden="true" />
      </section>
    </LandingPage>
  )
}
