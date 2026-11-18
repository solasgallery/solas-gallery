import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import ConsultForm from '@/components/ConsultForm'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { portraitServiceJsonLd } from '@/lib/jsonld'
import { images, SITE } from '@/lib/site'

// Portrait design — the general portrait offering (2026-11-18). Locked terms:
// the $295 design & creation fee covers the sitting and the creation of the
// images; finished prints are priced separately. The first print is NOT
// included. Single print $395 (8×10 or 11×14). Nov 27 keeps the $750 minimum.
// No "master looks" language and no campaign name here — the campaign lives on
// /real-portrait only.
const description =
  'Portrait design at Solas Gallery in Salado, Texas: a portrait display designed for your home. A free design consult, then the sitting, the viewing, and your finished display. Sittings November 27, December 1 and December 19.'

export const metadata: Metadata = createLandingMetadata({
  title: 'Portrait Design',
  description,
  path: '/portraits',
  noindex: false,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

const jsonLd = portraitServiceJsonLd({
  title: 'Portrait Design',
  description,
  path: '/portraits',
  image: images.portrait.src,
})

const steps = [
  {
    title: 'The design consult',
    body: 'Free, online or in person. We design the portrait for your wall together: the room, the size, black and white or color.',
  },
  {
    title: 'The sitting',
    body: 'The photo day itself, in the studio in Salado.',
  },
  {
    title: 'The viewing',
    body: 'You see your images and choose the ones for your wall.',
  },
  {
    title: 'The finished display',
    body: 'We finish your display by hand in our studio, ready for your home.',
  },
]

export default function PortraitsPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="Portrait design · Salado, Texas"
      heading={
        <>
          A portrait display
          <br />
          designed for your home.
        </>
      }
      lede="It starts with a free design consult, online or in person, where we design the portrait for your wall together."
      whisper="Booking is open now."
      heroImage={images.portrait}
      heroCaption="Portrait design · Salado, Texas"
      folioMark="Nov 27 · Dec 1 · Dec 19"
      cta={{ href: '#consult', label: 'Book a design consult' }}
      secondaryCta={{ href: `tel:${SITE.phoneTel}`, label: SITE.phoneDisplay }}
    >
      <section className="solas-page-copy">
        <div className="solas-measure">
          <p className="solas-label">How it works</p>
          <h2>From the consult to the wall.</h2>
          <ol className="sg-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="solas-portrait-section">
        <div className="solas-portrait-copy">
          <p className="solas-label">November 27 · December 1 · December 19</p>
          <h2>Three sitting days.</h2>
          <ul className="sg-rollout sg-rollout--dark">
            <li>
              <span>Friday, November 27</span> — $750 minimum order.
            </li>
            <li>
              <span>Tuesday, December 1</span>
            </li>
            <li>
              <span>Saturday, December 19</span>
            </li>
          </ul>
          <p>
            A $295 design &amp; creation fee reserves your design project. It covers your
            sitting and the creation of your images. Finished prints are priced
            separately: the first print is not included, and a single print is $395
            (8×10 or 11×14).
          </p>
          <p>Booking is open now. When a day is full, it is full.</p>
          <Link className="solas-underlink" href="#consult">
            Book a design consult <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-portrait-image">
          <img src={images.portrait.src} alt={images.portrait.alt} />
          <span className="solas-image-number">$295</span>
        </div>
      </section>

      <section className="solas-page-copy">
        <div id="consult">
          <ConsultForm />
        </div>
      </section>

      <section className="solas-page-copy">
        <h2>Sittings we still keep.</h2>
        <p>
          Signature portraits and family sittings continue through the year — each one
          shot personally by Tim Flanagan at the gallery or on location. No associates.
          No second shooters.
        </p>
        <p>
          Thirty years behind a camera will teach you one thing worth knowing: the
          best photographs happen in the space between who someone is and who they
          are becoming.
        </p>
        <Link className="solas-underlink" href="/begin">
          Begin here <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
    </>
  )
}
