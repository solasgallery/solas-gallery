import Link from 'next/link'
import VideoHero from '@/components/VideoHero'

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
      <VideoHero
        theme="portrait"
        label="Salado, Texas · Est. 1995"
        heading={
          <>
            Beyond the screen,
            <br />
            a quiet truth.
          </>
        }
        href="/real-portrait"
        linkLabel="The Real Portrait Project"
      />

      <section className="solas-after-hero">
        <p className="solas-lede">
          The Real Portrait Project. Monochrome, Karsh-inspired sittings. Character
          over performance. $295. Reserved for October.
        </p>
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
        <Link href="/visit">Plan a visit</Link>
      </section>

      <section className="solas-begin" id="begin">
        <p className="solas-label">Begin</p>
        <div className="solas-form">
          <h2>Begin a conversation.</h2>
          <p className="solas-form-subtext">
            A sitting, a piece for the wall, an evening at the table — start here.
          </p>
          <div className="solas-actions">
            <Link href="/begin">Begin</Link>
          </div>
        </div>
      </section>
    </>
  )
}
