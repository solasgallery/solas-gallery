import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { portraitServiceJsonLd } from '@/lib/jsonld'
import { images } from '@/lib/site'

// The Real Portrait Project — a limited CAMPAIGN (2026-11-18), not the general
// portrait offering (that is "Portrait design" at /portraits). Portraits in the
// manner of the great photographers. No dates and no booking CTA until the next
// campaign is scheduled (new year). This is the ONLY page that names the
// campaign. Terms line: design projects reserve with the $295 design & creation
// fee.
const description =
  'The Real Portrait Project at Solas Gallery: a limited campaign of portraits in the manner of the great photographers. The next campaign opens in the new year.'

export const metadata: Metadata = createLandingMetadata({
  title: 'The Real Portrait Project',
  description,
  path: '/real-portrait',
  noindex: false,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

const jsonLd = portraitServiceJsonLd({
  title: 'The Real Portrait Project',
  description,
  path: '/real-portrait',
  image: images.portrait.src,
})

export default function RealPortraitPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="A limited campaign"
      heading={
        <>
          The Real
          <br />
          Portrait Project
        </>
      }
      lede="Portraits in the manner of the great photographers. Pick the master looks you love."
      whisper="The next campaign opens in the new year."
      heroImage={images.portrait}
      heroCaption="A limited campaign · Salado, Texas"
      cta={{ href: '/portraits', label: 'Portrait design' }}
    >
      <section className="solas-portrait-section">
        <div className="solas-portrait-copy">
          <p className="solas-label">In the manner of the masters</p>
          <h2>Quiet. Direct. Kept.</h2>
          <p>
            The Real Portrait Project is a limited campaign: portraits made in the manner
            of the great photographers. You pick the master looks you love, and we make
            your portrait in that spirit, finished as a display for your walls.
          </p>
        </div>
        <div className="solas-portrait-image">
          <img src={images.portrait.src} alt={images.portrait.alt} />
          <span className="solas-image-number">01</span>
        </div>
      </section>

      <section className="solas-page-copy">
        <div className="solas-measure">
          <h2>What this is.</h2>
          <p>
            A limited campaign, made in the studio in Salado. Beyond the screen, a quiet
            truth. Character over performance.
          </p>
          <p>Design projects reserve with the $295 design &amp; creation fee.</p>
          <Link className="solas-underlink" href="/portraits">
            Looking for a portrait now? See portrait design{' '}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
