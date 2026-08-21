import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'The Real Portrait Project',
  description:
    'The Real Portrait Project at Solas Gallery. October sessions only. $295. Monochrome, Karsh-inspired. Character over performance.',
  path: '/real-portrait',
  noindex: false,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function RealPortraitPage() {
  return (
    <LandingPage
      hero="portrait"
      eyebrow="The Real Portrait Project"
      heading={
        <>
          Beyond the screen,
          <br />
          a quiet truth.
        </>
      }
      lede="A monochrome sitting in the Karsh tradition. Character over performance. $295. Reserved for October."
      whisper="Reserved for October."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Reserve a sitting' }}
    >
      <section className="solas-portrait-section">
        <div className="solas-portrait-copy">
          <p className="solas-label">Character over performance</p>
          <h2>Quiet. Direct. Kept.</h2>
          <p>
            These sittings are October only. One price. One intention: a portrait
            that does not perform for a screen.
          </p>
          <Link className="solas-underlink" href="/begin">
            Reserve <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-portrait-image">
          <img src={images.portrait.src} alt={images.portrait.alt} />
          <span className="solas-image-number">$295</span>
        </div>
      </section>

      <section className="solas-page-copy">
        <div className="solas-measure">
          <h2>What this is.</h2>
          <p>
            A reserved October sitting at Solas Gallery. Monochrome. Karsh-inspired.
            Made in the studio on Main Street in Salado.
          </p>
          <p>Beyond the screen, a quiet truth. Character over performance. Reserved for October.</p>
        </div>
      </section>
    </LandingPage>
  )
}
