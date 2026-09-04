import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Art',
  description:
    'Original and commissioned art, room studies, placement, and installation for considered homes. Solas Gallery, Salado, Texas.',
  path: '/art',
  noindex: false,
  image: images.art.src,
  imageAlt: images.art.alt,
})

export default function ArtPage() {
  return (
    <LandingPage
      eyebrow="Art for a considered home"
      heading={
        <>
          Start with
          <br />
          the room.
        </>
      }
      lede="Original and commissioned art, room studies, placement guidance, delivery, and installation — for homes and for designers."
      heroImage={images.art}
      heroCaption="Selected work · pigment print on archival cotton"
      cta={{ href: '/begin', label: 'Find the right work' }}
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
            Fine art prints, original works, commissions, and large-format pieces —
            printed in-house and framed next door when the work asks for it.
          </p>
          <Link className="solas-underlink" href="/begin">
            Inquire about a piece <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
  )
}
