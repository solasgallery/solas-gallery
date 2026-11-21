import Link from 'next/link'
import type { Metadata } from 'next'
import SiteImage from '@/components/SiteImage'
import HeroMedia from '@/components/HeroMedia'
import SeasonMotif from '@/components/SeasonMotif'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { DATE_REVALIDATE_SECONDS, sittingsLine, todayInChicago, upcomingSittings } from '@/lib/dates'
import { hours, SITE } from '@/lib/site'
import { activeSeasonNote, season } from '@/content/season'

// Dated elements (sittings, the seasonal line) are filtered per request window.
export const revalidate = DATE_REVALIDATE_SECONDS

// Homepage = the Gallery. Brand rule (2026-11-18): do not name AI on the homepage;
// the tools paragraph lives on /process only.
// Quiet pass (2026-11-21, Edna's brief): images carry the page and the text steps back.
// The longer copy lives on the inner pages: panel paragraphs on /portraits, /begin and
// /art; process steps and prices on /process (prices also on /portraits); sittings
// terms on /portraits. Seasonal hero image, motif and line come from src/content/season.ts.

export const metadata: Metadata = {
  ...createLandingMetadata({
    title: SITE.title,
    description: SITE.description,
    path: '/',
    noindex: false,
    ogImage: '/og/home.jpg',
    imageAlt: 'Framed portraits hung around a doorway in the Solas Gallery.',
  }),
}

// The trio: large image, heading, one line, and the whole panel links to its page.
// Panel ids stay: the primary nav links to /#portrait-design, /#commissions, /#originals.
const ways = [
  {
    id: 'portrait-design',
    title: 'Your people, as art.',
    line: 'Designed together for your wall, and finished by hand.',
    href: '/portraits',
    src: '/images/gallery/interior-03.jpg',
    alt: 'Family portraits displayed on tall hinged panels in the Solas Gallery.',
  },
  {
    id: 'commissions',
    title: 'Your photographs, made into the only one.',
    line: 'A photograph, a place, a memory, made by hand into a single piece.',
    href: '/begin',
    src: '/images/gallery/interior-02.jpg',
    alt: 'A large black and white framed piece hung above a console table.',
  },
  {
    id: 'originals',
    title: 'Our art, made yours.',
    line: 'Solas Editions and Flanagan Signature. Studio originals from $1,500.',
    href: '/art',
    src: '/images/gallery/interior-05.jpg',
    alt: 'A set of tall, colorful abstract panels hanging on a white gallery wall.',
  },
]

const steps = ['Design consult', 'Wall proof', 'Hand-finished', 'Framed', 'Hung']

export default function Home() {
  const sittings = upcomingSittings()
  const note = activeSeasonNote(todayInChicago())

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
  }

  return (
    <>
      <JsonLd data={homeJsonLd} />

      {/* Hero: full-bleed media slot (still now; a video loop can drop in via season.ts) */}
      <section className="sg-hero sg-hero--bleed" aria-labelledby="hero-heading">
        <HeroMedia image={season.heroImage} video={season.heroVideo} />
        <div className="sg-hero-copy">
          <h1 id="hero-heading">Personal art, designed for your home.</h1>
          <p className="sg-hero-line">
            From your photos or ours, designed for your walls and done for you.
          </p>
          <Link className="sg-link sg-hero-link" href="/portraits#consult">
            Book a design consult
          </Link>
        </div>
      </section>

      {/* The trio */}
      <section className="sg-section sg-trio" id="ways" aria-label="Three ways to begin">
        <div className="sg-ways">
          {ways.map((way) => (
            <Link className="sg-way" href={way.href} key={way.id} id={way.id}>
              <SiteImage
                ratio="4:5"
                src={way.src}
                alt={way.alt}
                sizes="(min-width: 1000px) 30vw, 100vw"
              />
              <h2>{way.title}</h2>
              <p>{way.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Seasonal line + motif (src/content/season.ts), once, after the trio */}
      {note.line ? (
        <section className="sg-season" aria-label="This season">
          <SeasonMotif motif={note.motif} />
          <p>
            <Link href={season.lineHref}>{note.line}</Link>
          </p>
        </section>
      ) : null}

      {/* Process: step names only, then the sittings line */}
      <section className="sg-section sg-quiet" aria-labelledby="process-heading">
        <h2 className="sg-eyebrow" id="process-heading">The process</h2>
        <Link className="sg-steps-line" href="/process">
          {steps.map((step, i) => (
            <span className="sg-step-name" key={step}>
              {step}
              {i < steps.length - 1 ? <span className="sg-dot" aria-hidden="true">·</span> : null}
            </span>
          ))}
        </Link>
        {sittings.length ? (
          <p className="sg-sittings-line">
            <Link href="/portraits">
              Sittings this season: {sittingsLine(sittings, 'short')}
            </Link>
          </p>
        ) : null}
      </section>

      {/* Trade: one sentence + the link */}
      <section className="sg-section sg-quiet sg-trade" aria-labelledby="trade-heading">
        <h2 className="sg-eyebrow" id="trade-heading">To the trade</h2>
        <p>
          We work quietly alongside designers and decorators: pieces commissioned, sized
          and colored to the room, a wall proof on your client&rsquo;s own wall, and a firm
          price before anything is made.
        </p>
        <Link className="sg-link" href="/trade" prefetch={false}>
          The trade program
        </Link>
      </section>

      {/* Visit: the essentials */}
      <section className="sg-section sg-quiet sg-visit-quiet" id="visit" aria-labelledby="visit-heading">
        <h2 className="sg-eyebrow" id="visit-heading">Visit</h2>
        <p>
          {SITE.name}, {SITE.street}, {SITE.city}, {SITE.region} {SITE.postalCode}
          <br />
          On Main Street, at the corner of Main Street and Rock Creek Drive
        </p>
        <p>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          <br />
          {hours}
        </p>
      </section>
    </>
  )
}
