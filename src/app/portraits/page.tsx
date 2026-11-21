import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import ConsultForm from '@/components/ConsultForm'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { portraitServiceJsonLd } from '@/lib/jsonld'
import { images, SITE } from '@/lib/site'
import {
  DATE_REVALIDATE_SECONDS,
  RESERVE_URL,
  SITTING_CAP,
  sittingsLine,
  upcomingSittings,
} from '@/lib/dates'

// Sitting dates come from src/lib/dates.ts; past days drop off at request time.
export const revalidate = DATE_REVALIDATE_SECONDS

// Portrait design — the general portrait offering (2026-11-18). Locked terms:
// the $295 design & creation fee covers the sitting and the creation of the
// images; finished prints are priced separately. The first print is NOT
// included. Single print $395 (8×10 or 11×14). Nov 27 keeps the $750 minimum.
// No "master looks" language and no campaign name here — the campaign lives on
// /real-portrait only.
function buildDescription() {
  const s = upcomingSittings()
  const when = s.length ? ` Sittings ${sittingsLine(s, 'short')}.` : ' Dates to be announced.'
  const tail = s.length ? '' : ' for your home'
  return `Portrait design at Solas Gallery in Salado, TX: a free design consult, your sitting, the viewing and a finished display${tail}.${when}`
}

export function generateMetadata(): Metadata {
  return createLandingMetadata({
    title: 'Portrait Design for Your Home | Solas Gallery, Salado, TX',
    description: buildDescription(),
    path: '/portraits',
    noindex: false,
    ogImage: '/og/portraits.jpg',
    imageAlt: 'Family portraits displayed on tall hinged panels in the Solas Gallery.',
  })
}

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
  const sittings = upcomingSittings()
  const hasSittings = sittings.length > 0
  const jsonLd = portraitServiceJsonLd({
    title: 'Portrait Design',
    description: buildDescription(),
    path: '/portraits',
    image: '/og/portraits.jpg',
  })
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
      whisper={hasSittings ? 'Booking is open now.' : 'Sitting dates to be announced.'}
      heroImage={images.portrait}
      heroCaption="Portrait design · Salado, Texas"
      folioMark={hasSittings ? sittingsLine(sittings, 'short') : undefined}
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
          <p className="solas-label">
            {hasSittings ? sittingsLine(sittings) : 'Dates to be announced'}
          </p>
          <h2>{hasSittings ? 'Sitting days.' : 'Dates to be announced.'}</h2>
          {hasSittings ? (
            <ul className="sg-rollout sg-rollout--dark">
              {sittings.map((s) => (
                <li key={s.iso}>
                  <span>{s.long}</span>
                  {s.note ? ` — ${s.note}` : ''}
                </li>
              ))}
            </ul>
          ) : null}
          <p>
            A $295 design &amp; creation fee reserves your design project. It covers your
            sitting and the creation of your images. Your first print is $395 (8×10 or
            11×14), and your wall proof is $195, credited in full when you go ahead.
          </p>
          {hasSittings ? (
            <p>
              Limited to {SITTING_CAP} portrait designs across all sittings. When a day is
              full, it is full.
            </p>
          ) : null}
          {hasSittings ? (
            <a className="solas-underlink" href={RESERVE_URL} rel="noopener noreferrer">
              Reserve your sitting <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <Link className="solas-underlink" href="#consult">
            Book a design consult <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-portrait-image">
          <img src={images.portrait.src} alt={images.portrait.alt} width={750} height={750} />
          <span className="solas-image-number">$295</span>
        </div>
      </section>

      <section className="solas-page-copy">
        <div id="consult">
          <ConsultForm days={sittings.map((s) => s.monthDay)} />
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
