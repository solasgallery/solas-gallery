import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'
import { hours, images, MAP_EMBED_URL, SITE } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Visit Solas Gallery | 2 Rock Creek Dr, Salado, TX 76571',
  description:
    'Visit Solas Gallery at 2 Rock Creek Dr, Salado, TX 76571, on Main Street at Rock Creek Drive. Open Monday to Saturday, 10 am to 5 pm. Call (254) 947-1881.',
  path: '/visit',
  noindex: false,
  ogImage: '/og/home.jpg',
  imageAlt: 'Framed portraits hung around a doorway in the Solas Gallery.',
})

const jsonLd = pageJsonLd({
  title: 'Visit Solas Gallery',
  description:
    'Visit Solas Gallery at 2 Rock Creek Dr, Salado, TX 76571, on Main Street at Rock Creek Drive. Open Monday to Saturday, 10 am to 5 pm. Call (254) 947-1881.',
  path: '/visit',
  image: '/og/home.jpg',
})

export default function VisitPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="solas-opening" aria-labelledby="visit-heading">
        <div className="solas-opening-image">
          <img src={images.visit.src} alt={images.visit.alt} width={1600} height={829} />
          <div className="solas-light" />
          <span className="solas-caption">2 Rock Creek Dr · Salado</span>
        </div>
        <div className="solas-opening-copy">
          <p className="solas-label">
            2 Rock Creek Dr · Salado
            <br />
            At the corner of Main Street and Rock Creek Drive
          </p>
          <h1 id="visit-heading">
            The door
            <br />
            is open.
          </h1>
          <p className="solas-lede">
            Visit the gallery, sit for a portrait, or bring the room, photograph,
            or half-formed idea you cannot stop thinking about.
          </p>
        </div>
      </section>

      <section className="solas-visit-details">
        <div>
          <h2>Visit</h2>
          <dl>
            <dt>Hours</dt>
            <dd>
              {hours}
            </dd>
            <dt>Address</dt>
            <dd>
              {SITE.street}
              <br />
              {SITE.city}, {SITE.region} {SITE.postalCode}
              <br />
              At the corner of Main Street and Rock Creek Drive.
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </dd>
          </dl>
        </div>
        <div className="solas-map">
          <iframe
            src={MAP_EMBED_URL}
            title="Map of Solas Gallery, 2 Rock Creek Dr, Salado, TX"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
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
        <a href="/begin">
          Begin a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  )
}
