import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { portraitServiceJsonLd } from '@/lib/jsonld'
import { images, SITE } from '@/lib/site'

// Locked terms (2026-11-12): the $295 design fee covers the sitting only. The
// first print is NOT included. Single print $395 (8×10 or 11×14).
const description =
  'The Real Portrait Project at Solas Gallery: a portrait display designed for your home. Design projects November 27, December 1 and December 19, each starting with a free design consult.'

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
      eyebrow="A portrait display designed for your home"
      heading={
        <>
          The Real
          <br />
          Portrait Project
        </>
      }
      lede="Your design project starts with a free design consult, online or in person, where you pick the master looks you love and we plan your display together."
      whisper="Booking is open now."
      heroImage={images.portrait}
      heroCaption="Design projects · Salado, Texas"
      folioMark="Nov 27 · Dec 1 · Dec 19"
      cta={{ href: '/#consult', label: 'Book a design consult' }}
      secondaryCta={{ href: `tel:${SITE.phoneTel}`, label: SITE.phoneDisplay }}
    >
      <section className="solas-portrait-section">
        <div className="solas-portrait-copy">
          <p className="solas-label">It starts with a design consult</p>
          <h2>Quiet. Direct. Kept.</h2>
          <p>
            First, a free design consult, online or in person. You pick the master looks
            you love, and we plan the display for your walls together. Then the sitting,
            the photo day itself. Then we finish your display.
          </p>
          <Link className="solas-underlink" href="/#consult">
            Book a design consult <span aria-hidden="true">↗</span>
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
            A design project at Solas Gallery: a portrait display designed for your home,
            from the first consult to the finished wall. Made in the studio in Salado.
          </p>
          <p>Design projects: November 27, December 1, December 19.</p>
          <p>
            A $295 design fee reserves your design project. It covers the sitting only.
            The first print is not included; a single print is $395 (8×10 or 11×14).
            November 27 carries a $750 minimum order.
          </p>
          <p>Beyond the screen, a quiet truth. Character over performance.</p>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
