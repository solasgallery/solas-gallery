import Link from 'next/link'
import type { Metadata } from 'next'
import SiteImage from '@/components/SiteImage'
import Reviews from '@/components/Reviews'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import {
  DATE_REVALIDATE_SECONDS,
  RESERVE_URL,
  SITTING_CAP,
  upcomingSittings,
} from '@/lib/dates'
import { hours, MAP_EMBED_URL, SITE } from '@/lib/site'

// Dated elements (sittings) come from src/lib/dates.ts and are filtered per request window.
export const revalidate = DATE_REVALIDATE_SECONDS

// Homepage = the Gallery. Brand rule (2026-11-18): do not name AI on the homepage;
// the tools paragraph lives on /process only.
// "Meet Art" was removed 2026-11-21; it is preserved in
// ~/ClaudeProjects/website-rebuild-2026-11/meet-art-holding.md for a campaign.
// Events and venue rental moved to hubsalado.com (2026-11-21).

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

const ways = [
  {
    id: 'portrait-design',
    label: 'Portrait design',
    title: 'Your people, as art.',
    body: 'We design the portrait for your wall together: the room, the size, black and white or color. Then we make it in the studio, and finish it by hand.',
    price: null as string | null,
    src: '/images/gallery/interior-03.jpg',
    alt: 'Family portraits displayed on tall hinged panels in the Solas Gallery.',
    links: [{ href: '/portraits', label: 'How portrait design works' }],
  },
  {
    id: 'commissions',
    label: 'Commissions from your images',
    title: 'Your photographs, made into the only one.',
    body: 'A photograph, a place, a memory you can only describe. We transform it by hand into a single piece that exists nowhere else, or bind a body of work into a FOLIO, an heirloom album made to be kept.',
    price: 'Commissions from $1,500',
    src: '/images/gallery/interior-02.jpg',
    alt: 'A large black and white framed piece hung above a console table.',
    links: [
      { href: '/begin', label: 'Start a commission' },
      { href: '/folio', label: 'FOLIO heirloom albums' },
    ],
  },
  {
    id: 'originals',
    label: 'Studio originals',
    title: 'Our art, made yours.',
    body: 'Choose a piece from the studio floor. We size it and set its color to belong to your room. Studio original, one of one, hand-finished.',
    price: 'Studio originals from $1,500',
    src: '/images/gallery/interior-05.jpg',
    alt: 'A set of tall, colorful abstract panels hanging on a white gallery wall.',
    links: [{ href: '/art', label: 'See the art' }],
  },
]

const steps = [
  {
    title: 'Design consult',
    body: 'Free, online or in person. Bring the room, the photograph, or the idea you cannot stop thinking about.',
  },
  {
    title: 'Wall proof',
    body: 'Ready within five business days. You see your piece on a photograph of your own wall, with a firm price, before anything is made.',
  },
  {
    title: 'Hand-finished',
    body: 'Made and finished by hand in our studio, in Salado.',
  },
  {
    title: 'Framed',
    body: 'Framed for the piece and the room, chosen with you.',
  },
  {
    title: 'Hung',
    body: 'Delivered and hung on your wall.',
  },
]

const prices = [
  { amount: '$295', label: 'design & creation fee' },
  { amount: '$395', label: 'first print' },
  { amount: '$195', label: 'proof credited in full' },
]

export default function Home() {
  const sittings = upcomingSittings()
  const hasSittings = sittings.length > 0

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

      {/* Hero */}
      <section className="sg-hero" aria-labelledby="hero-heading">
        <div className="sg-hero-copy">
          <p className="sg-eyebrow">Solas Gallery · Salado, Texas</p>
          <h1 id="hero-heading">Personal art, designed for your home.</h1>
          <p className="sg-hero-line">
            From your photos or ours, designed for your walls and done for you.
          </p>
          <p className="sg-plain">
            Solas Gallery in Salado, Texas creates one-of-a-kind art: portraits of your
            people, commissions from your own images, and studio originals made for your
            room.
          </p>
          <div className="sg-ctas">
            {hasSittings ? (
              <Link className="sg-btn" href="#sittings">
                Reserve a sitting
              </Link>
            ) : (
              <Link className="sg-btn" href="/portraits#consult">
                Book a design consult
              </Link>
            )}
            <Link className="sg-link" href="#portrait-design">
              Explore the gallery
            </Link>
          </div>
        </div>
        <SiteImage
          ratio="16:9"
          src="/images/gallery/hero.jpg"
          alt="Framed portraits hung around a doorway and along a shelf in the Solas Gallery."
          sizes="(min-width: 768px) 86vw, 100vw"
          priority
        />
      </section>

      {/* The trio */}
      <section className="sg-section" id="ways" aria-labelledby="ways-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Three ways to begin</p>
          <h2 id="ways-heading">Art made from what you love.</h2>
          <p className="sg-plain">
            Begin with your people, your images, or our studio. Every piece is one of one
            and finished by hand.
          </p>
        </header>
        <div className="sg-ways">
          {ways.map((way, index) => (
            <article className="sg-way" key={way.id} id={way.id}>
              <SiteImage
                ratio="4:5"
                src={way.src}
                alt={way.alt}
                sizes="(min-width: 1000px) 30vw, 100vw"
              />
              <p className="sg-way-num">0{index + 1} · {way.label}</p>
              <h3>{way.title}</h3>
              <p>{way.body}</p>
              {way.price ? <p className="sg-price">{way.price}</p> : null}
              <div className="sg-way-links">
                {way.links.map((l) => (
                  <Link className="sg-link" href={l.href} key={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process + prices */}
      <section className="sg-section sg-process" id="process" aria-labelledby="process-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">The process</p>
          <h2 id="process-heading">From consult to hung.</h2>
          <p className="sg-plain">
            You see your piece on your own wall, at a firm price, before anything is made.
          </p>
        </header>
        <ol className="sg-steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <ul className="sg-prices" aria-label="Prices">
          {prices.map((p) => (
            <li key={p.amount}>
              <span className="sg-prices-amount">{p.amount}</span>{' '}
              <span className="sg-prices-label">{p.label}</span>
            </li>
          ))}
        </ul>
        <p className="sg-plain sg-prices-note">
          The design &amp; creation fee covers your sitting and the creation of your
          images. The wall proof is credited in full when you go ahead.
        </p>
      </section>

      {/* Sittings */}
      <section className="sg-section sg-sessions" id="sittings" aria-labelledby="sittings-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Portrait sittings</p>
          <h2 id="sittings-heading">{hasSittings ? 'Sittings this season.' : 'Dates to be announced.'}</h2>
          {hasSittings ? (
            <p className="sg-plain">
              Limited to {SITTING_CAP} portrait designs across all sittings. When a day is
              full, it is full.
            </p>
          ) : (
            <p className="sg-plain">
              Our next portrait sittings will be announced here. Begin with a free design
              consult in the meantime.
            </p>
          )}
        </header>
        {hasSittings ? (
          <ul className="sg-rollout">
            {sittings.map((s) => (
              <li key={s.iso}>
                <span>{s.long}</span>
                {s.note ? s.note : ''}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="sg-ctas">
          {hasSittings ? (
            <a className="sg-btn" href={RESERVE_URL} rel="noopener noreferrer">
              Reserve your sitting
            </a>
          ) : null}
          <Link className="sg-link" href="/portraits#consult">
            {hasSittings ? 'Prefer to talk first? Book a design consult' : 'Book a design consult'}
          </Link>
        </div>
      </section>

      <Reviews />

      {/* Trade */}
      <section className="sg-section sg-trade" aria-labelledby="trade-heading">
        <p className="sg-eyebrow">To the trade</p>
        <h2 id="trade-heading">For interior designers</h2>
        <p>
          We work quietly alongside designers and decorators: pieces commissioned, sized
          and colored to the room, a wall proof on your client&rsquo;s own wall, and a firm
          price before anything is made.
        </p>
        <Link className="sg-link" href="/trade" prefetch={false}>
          The trade program
        </Link>
      </section>

      {/* Visit */}
      <section className="sg-section sg-visit" id="visit" aria-labelledby="visit-heading">
        <div>
          <p className="sg-eyebrow">Visit</p>
          <h2 id="visit-heading">The door is open.</h2>
          <dl>
            <dt>Address</dt>
            <dd>
              {SITE.name}
              <br />
              {SITE.street}, {SITE.city}, {SITE.region} {SITE.postalCode}
              <br />
              On Main Street, at the corner of Main Street and Rock Creek Drive
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </dd>
            <dt>Hours</dt>
            <dd>{hours}</dd>
          </dl>
        </div>
        <div className="sg-map">
          <iframe
            src={MAP_EMBED_URL}
            title="Map of Solas Gallery, 2 Rock Creek Dr, Salado, TX"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  )
}
