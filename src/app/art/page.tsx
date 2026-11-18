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
    'Studio originals — one of one, hand-finished, multimedia. Solas Editions and Flanagan Signature bespoke art, from $1,500. Commissions to $10,000 and above. Solas Gallery, Salado, Texas.',
  path: '/art',
  noindex: false,
  image: images.art.src,
  imageAlt: images.art.alt,
})

const jsonLd = pageJsonLd({
  title: 'Art',
  description:
    'Studio originals — one of one, hand-finished, multimedia. Solas Editions and Flanagan Signature bespoke art, from $1,500. Commissions to $10,000 and above. Solas Gallery, Salado, Texas.',
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
      lede="We create the art you want but cannot find — commissioned for your room or chosen from the studio floor. Studio original, one of one, hand-finished."
      heroImage={images.art}
      heroCaption="Selected work · Solas Studio"
      cta={{ href: '/#commissions', label: 'Start a commission' }}
      secondaryCta={{ href: '/portraits', label: 'Portrait design' }}
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
            Studio originals in two lines: Solas Editions, and Flanagan Signature bespoke
            art. Each one a studio original — one of one, hand-finished, multimedia.
          </p>
          <p>
            Commissions from your own image, and pieces sized and colored for your room,
            archival pigment on canvas, finished by hand in our studio. No two pieces here
            are alike.
          </p>
          <p>Studio originals from $1,500. Commissions to $10,000 and above.</p>
          <Link className="solas-underlink" href="/begin">
            Inquire about a piece <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
