import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Portraits',
  description:
    'Signature portraits by Tim Flanagan at Solas Gallery in Salado, Texas. Character over performance.',
  path: '/portraits',
  noindex: false,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function PortraitsPage() {
  return (
    <LandingPage
      hero="portrait"
      eyebrow="Portrait Studio · Salado"
      heading={
        <>
          The image
          <br />
          that defines a life.
        </>
      }
      lede="A portrait is not a photograph. It is a decision — made without rushing, in person, the way it was meant to be made."
      heroImage={images.portrait}
      cta={{ href: '/real-portrait', label: 'The Real Portrait Project' }}
    >
      <section className="solas-portrait-section">
        <div className="solas-portrait-copy">
          <p className="solas-label">October</p>
          <h2>Beyond the screen, a quiet truth.</h2>
          <p>
            The Real Portrait Project is reserved for October. Monochrome.
            Karsh-inspired. Character over performance. $295.
          </p>
          <Link className="solas-underlink" href="/real-portrait">
            Reserve a sitting <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="solas-portrait-image">
          <img src={images.portrait.src} alt={images.portrait.alt} />
          <span className="solas-image-number">01</span>
        </div>
      </section>

      <section className="solas-page-copy">
        <h2>Sittings we still keep.</h2>
        <p>
          Signature portraits, family sittings, and headshots continue through the
          year — each one shot personally by Tim Flanagan at the gallery or on
          location. No associates. No second shooters.
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
  )
}
