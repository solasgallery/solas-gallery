import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Art',
  description:
    'Commissioned and studio original art, one of one and finished by hand. Room studies, placement, and installation. Solas Gallery, Salado, Texas.',
  path: '/art',
  noindex: false,
  image: images.art.src,
  imageAlt: images.art.alt,
})

const jsonLd = pageJsonLd({
  title: 'Art',
  description:
    'Commissioned and studio original art, one of one and finished by hand. Room studies, placement, and installation. Solas Gallery, Salado, Texas.',
  path: '/art',
  image: images.art.src,
})

export default function ArtPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="Art for a considered home"
      heading={
        <>
          Start with
          <br />
          the room.
        </>
      }
      lede="We create the art you want but cannot find — commissioned for your room or chosen from the studio floor, one of one, finished by hand."
      heroImage={images.art}
      heroCaption="Selected work · Solas Studio"
      cta={{ href: '/#commissions', label: 'Start a commission' }}
      secondaryCta={{ href: '/#sessions', label: 'Limited Edition Sessions' }}
    >
      <section className="solas-art-section">
        <div className="solas-art-image">
          <div className="solas-art-frame">
            <img src={images.art.src} alt={images.art.alt} />
          </div>
          <p>Collected, not consumed</p>
        </div>
        <div className="solas-art-copy">
          <p className="solas-label">The walls of a considered home</p>
          <h2>
            Made to be kept.
            <br />
            Made to be lived with.
          </h2>
          <p>
            Studio originals, commissions from your own image, and pieces sized and
            colored for your room — mixed media, archival pigment on canvas, finished by
            hand in our studio. No two pieces here are alike.
          </p>
          <Link className="solas-underlink" href="/begin">
            Inquire about a piece <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
