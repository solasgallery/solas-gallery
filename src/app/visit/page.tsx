import type { Metadata } from 'next'
import Link from 'next/link'
import VideoHero from '@/components/VideoHero'
import { createLandingMetadata } from '@/lib/metadata'
import { hours, images, SITE } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Visit',
  description:
    'Visit Solas Gallery at 2 Rock Creek Dr, Salado, TX 76571. Gallery, portrait studio, and gathering place. Est. 1995.',
  path: '/visit',
  noindex: false,
  image: images.gather.src,
  imageAlt: images.gather.alt,
})

export default function VisitPage() {
  return (
    <>
      <VideoHero
        theme="gather"
        label="Main Street · Salado"
        heading={
          <>
            The door
            <br />
            is open.
          </>
        }
        href="/begin"
        linkLabel="Begin a conversation"
      />

      <section className="solas-visit-details">
        <div>
          <h2>Visit</h2>
          <dl>
            <dt>Hours</dt>
            <dd>
              {hours}
              <br />
              And by appointment
            </dd>
            <dt>Address</dt>
            <dd>
              {SITE.street}
              <br />
              {SITE.city}, {SITE.region} {SITE.postalCode}
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </dd>
          </dl>
        </div>
        <div className="solas-map">
          <iframe
            src="https://www.google.com/maps?q=2+Rock+Creek+Dr,+Salado,+TX+76571&output=embed"
            title="Map of Solas Gallery, 2 Rock Creek Dr, Salado, TX"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="solas-visit">
        <div>
          <p className="solas-label">Begin</p>
          <h2>Bring what you cannot stop thinking about.</h2>
        </div>
        <p>A sitting, a piece for the wall, or simply a walk through the gallery.</p>
        <Link href="/begin">Begin a conversation</Link>
      </section>
    </>
  )
}
