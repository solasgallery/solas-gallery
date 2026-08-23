import Link from 'next/link'
import { images } from '@/lib/site'

const doors = [
  {
    href: '/portraits',
    number: '01',
    label: 'Portraits',
    caption: 'The image that defines a life.',
  },
  {
    href: '/art',
    number: '02',
    label: 'Art',
    caption: 'Start with the room.',
  },
  {
    href: '/gather',
    number: '03',
    label: 'Gather',
    caption: 'Come for the art. Stay for the people.',
  },
]

export default function Home() {
  return (
    <>
      <section className="solas-opening" aria-labelledby="solas-heading">
        <div className="solas-opening-image solas-opening-image--graded">
          <video
            src="/videos/hero-home.mp4"
            poster={images.home.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={images.home.alt}
          />
          <div className="solas-light" />
          <div className="solas-veil" aria-hidden="true" />
          <span className="solas-caption">The Real Portrait Project · October</span>
        </div>
        <div className="solas-opening-copy">
          <p className="solas-label">Salado, Texas · Est. 1995</p>
          <h1 id="solas-heading">
            Real People also deserve
            <br />
            a Master Portrait
          </h1>
          <p className="solas-lede">
            The Real Portrait Project. Monochrome, Karsh-inspired sittings. Character
            over performance. $295. Reserved for October.
          </p>
          <div className="solas-actions">
            <Link href="/real-portrait">
              Reserve a sitting <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="solas-whisper">Reserved for October.</p>
        </div>
        <div className="solas-orbit" aria-hidden="true">
          <i />
        </div>
        <span className="solas-folio">No. 01</span>
      </section>

      <section className="solas-doors" aria-labelledby="doors-heading">
        <div className="solas-rule">
          <span>Three doors</span>
        </div>
        <div className="solas-doors-grid">
          {doors.map((door) => (
            <Link key={door.href} href={door.href}>
              <span>{door.number}</span>
              <h2 id={door.href === '/portraits' ? 'doors-heading' : undefined}>{door.label}</h2>
              <p>{door.caption}</p>
              <em>Enter</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="solas-visit" id="visit">
        <div>
          <p className="solas-label">Main Street · Salado</p>
          <h2>The door is open.</h2>
        </div>
        <p>
          Visit the gallery, sit for a portrait, or bring the room, photograph, or
          half-formed idea you cannot stop thinking about.
        </p>
        <Link href="/visit">
          Plan a visit <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="solas-begin" id="begin">
        <p className="solas-label">Begin</p>
        <div className="solas-form">
          <h2>Begin a conversation.</h2>
          <p className="solas-form-subtext">
            A sitting, a piece for the wall, an evening at the table — start here.
          </p>
          <div className="solas-actions">
            <Link href="/begin">
              Begin <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
