import Link from 'next/link'
import SiteImage from '@/components/SiteImage'
import WaitlistForm from '@/components/WaitlistForm'
import { HUB_URL, hours, SITE } from '@/lib/site'

// Homepage title/description come from the root layout (SITE.title) — the
// title ranks for "art gallery Salado TX"; do not override it here.
// Brand rule (2026-11-18): do not name AI anywhere on the homepage. The tools
// paragraph lives on /process only.

// Locked terms (2026-11-12): the $295 design fee covers the sitting only. The
// first print is NOT included. Single print $395 (8×10 or 11×14).
const designDays = [
  {
    date: 'Friday, November 27',
    short: 'Nov 27',
    name: 'The Friday design project',
    minimum: '$750 minimum order.',
  },
  {
    date: 'Tuesday, December 1',
    short: 'Dec 1',
    name: 'The Tuesday design project',
  },
  {
    date: 'Saturday, December 19',
    short: 'Dec 19',
    name: 'The Saturday design project',
  },
]

const ways = [
  {
    title: 'From your image',
    body: 'A photograph, a place, a memory you can only describe. We transform it by hand into a single piece that exists nowhere else.',
    price: 'From $1,500',
    src: '/images/gallery/interior-03.jpg',
    alt: 'Family portraits displayed on tall hinged panels in the Solas Gallery.',
  },
  {
    title: 'Studio originals',
    body: 'Abstracts and re-imaginings made in our studio. One of one. When it is gone, it is gone.',
    price: 'As marked',
    src: '/images/gallery/interior-05.jpg',
    alt: 'A set of tall, colorful abstract panels hanging on a white gallery wall.',
  },
  {
    title: 'Sized & colored for you',
    body: 'Choose a piece from the studio floor. We resize it and adjust its color to belong to your room.',
    price: 'Priced by size',
    src: '/images/gallery/interior-02.jpg',
    alt: 'A large black and white framed piece hung above a console table.',
  },
]

const steps = [
  {
    title: 'A planning talk',
    body: 'Free. Bring the room, the photograph, or the idea you cannot stop thinking about.',
  },
  {
    title: 'The design proof — $195',
    body: 'Ready within five business days, shown on a photograph of your own wall, with a firm price. Non-refundable, and credited in full when you go ahead.',
  },
  {
    title: 'First revision',
    body: 'Included.',
  },
  {
    title: 'Second revision — $95',
    body: 'Credited if you go ahead. Refunded in full if you decide not to.',
  },
  {
    title: 'Approval',
    body: 'Your approval locks the design and the price.',
  },
  {
    title: 'Making',
    body: 'Half to begin. The balance at delivery.',
  },
]

const events = [
  {
    when: 'Thursday, November 5 · 6 PM',
    title: 'Socrates in the City',
    body: 'A book club for the questions that matter, at the gallery. Also December 3 and December 17.',
  },
  {
    when: 'Early December',
    title: 'The Christmas market',
    body: 'At the gallery, alongside the 66th Annual Salado Christmas Stroll, December 11–13.',
  },
  {
    when: 'Sunday, December 13 · 4:00 & 7:00 PM',
    title: 'Christmas in Killarney',
    body: 'Two shows on the Lamplighter stage.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── 3. Hero ─────────────────────────────────────────────── */}
      <section className="sg-hero" aria-labelledby="hero-heading">
        <div className="sg-hero-copy">
          <p className="sg-eyebrow">Solas Gallery · Salado, Texas</p>
          <h1 id="hero-heading">Personal art, designed for your home.</h1>
          <p className="sg-hero-line">
            From your photos or ours, designed for your walls and done for you.
          </p>
          <p className="sg-plain">
            Solas Gallery in Salado, Texas creates one-of-a-kind wall art — commissioned
            for your home, or chosen from the studio floor.
          </p>
          <div className="sg-ctas">
            <Link className="sg-btn" href="#sessions">
              Design your wall
            </Link>
            <Link className="sg-link" href="#commissions">
              Start a commission
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

      {/* ── 4. The Real Portrait Project · design projects ──────── */}
      <section className="sg-section sg-sessions" id="sessions" aria-labelledby="sessions-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Design projects · November 27, December 1, December 19</p>
          <h2 id="sessions-heading">The Real Portrait Project</h2>
          <p className="sg-plain">
            A portrait display designed for your home. Your design project starts with a free
            design consult, online or in person, where you pick the master looks you love and
            we plan your display together.
          </p>
          <div className="sg-ctas">
            <Link className="sg-btn" href="#consult">
              Book a design consult
            </Link>
          </div>
        </header>

        <div className="sg-days">
          {designDays.map((day) => (
            <article className="sg-day" key={day.short} aria-labelledby={`day-${day.short}`}>
              <p className="sg-day-date">{day.date}</p>
              <h3 id={`day-${day.short}`}>{day.name}</h3>
              <p className="sg-day-price">$295 design fee</p>
              <p>Paid to reserve. It covers the sitting only.</p>
              <p>First print not included. Single print $395 (8×10 or 11×14).</p>
              {day.minimum ? <p>{day.minimum}</p> : null}
            </article>
          ))}
        </div>

        <p className="sg-note">
          Booking is open now. Black and white or color — your choice at your design consult.
          When a day is full, it is full.
        </p>

        <div className="sg-waitlist" id="consult">
          <WaitlistForm />
        </div>
      </section>

      {/* ── 5. Studio originals ─────────────────────────────────── */}
      <section className="sg-section sg-originals" id="originals" aria-labelledby="originals-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Studio originals</p>
          <h2 id="originals-heading">Our art made yours.</h2>
          <p className="sg-plain">
            Studio originals — hand-finished, one of one, sized and colored for your room.
          </p>
          <p className="sg-plain">
            Two lines: Solas Editions, and Flanagan Signature bespoke art.
          </p>
          <p className="sg-price">Multimedia originals and giclées, from $1,500.</p>
        </header>
        <div className="sg-squares">
          <SiteImage
            ratio="1:1"
            src="/images/art/category-commission.jpg"
            alt="A large abstract painting of trees in green and gold, hung on a gallery wall."
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <SiteImage
            ratio="1:1"
            src="/images/art/category-prints.jpg"
            alt="Tall multimedia panels of patterned color blocks, hung side by side."
            sizes="(min-width: 768px) 30vw, 100vw"
          />
          <SiteImage
            ratio="1:1"
            src="/images/art/shadow-wing-7.jpg"
            alt="A black and white study of sunflower petals in deep shadow."
            sizes="(min-width: 768px) 30vw, 100vw"
          />
        </div>
        <Link className="sg-link" href="/art">
          See the art
        </Link>
      </section>

      {/* ── 6. Three ways to own the only one ───────────────────── */}
      <section className="sg-section" id="commissions" aria-labelledby="ways-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Commissions</p>
          <h2 id="ways-heading">Three ways to own the only one</h2>
          <p className="sg-plain">
            Every piece we make is a studio original — one of one, mixed media, archival
            pigment on canvas, finished by hand.
          </p>
        </header>
        <div className="sg-ways">
          {ways.map((way, index) => (
            <article className="sg-way" key={way.title}>
              <SiteImage
                ratio="4:5"
                src={way.src}
                alt={way.alt}
                sizes="(min-width: 768px) 30vw, 100vw"
              />
              <p className="sg-way-num">0{index + 1}</p>
              <h3>{way.title}</h3>
              <p>{way.body}</p>
              <p className="sg-price">{way.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 7. How a commission works ───────────────────────────── */}
      <section className="sg-section sg-process" aria-labelledby="process-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">The proof process</p>
          <h2 id="process-heading">How a commission works</h2>
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
        <p className="sg-pullquote">The most you can ever be out is $195.</p>
        <div className="sg-ctas">
          <Link className="sg-btn" href="/begin">
            Start a commission
          </Link>
          <a className="sg-link" href={`tel:${SITE.phoneTel}`}>
            Or call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ── 8. Meet Art ─────────────────────────────────────────── */}
      {/* PLACEHOLDER (W-01): Meet Art story fragments — Tim to replace with the canon mythology */}
      <section className="sg-section sg-art" aria-labelledby="art-heading">
        <div className="sg-art-inner">
          <p className="sg-eyebrow">Who is Art?</p>
          <h2 id="art-heading">Meet Art.</h2>
          <p className="sg-plain sg-plain--dark">
            Art is the spirit of the gallery — our name for the truth, beauty and goodness we
            try to put on every wall.
          </p>
          <div className="sg-fragments">
            <p>No one remembers Art arriving. Only that the light in the room changed.</p>
            <p>Art keeps three things and gives them away freely: what is true, what is beautiful, what is good.</p>
            <p>Art does not explain itself. Art waits, the way a painting waits, for you to notice.</p>
            <p>Some say Art is older than Salado. Some say Art came in with the creek.</p>
            <p>Everyone agrees on one thing: Art never shows up the same way twice.</p>
          </div>
        </div>
      </section>

      {/* ── 9. Made by hand here ────────────────────────────────── */}
      {/* Tools are named on /process only — never on the homepage. */}
      <section className="sg-section sg-hand" aria-labelledby="hand-heading">
        <div className="sg-hand-copy">
          <p className="sg-eyebrow">How it is made</p>
          <h2 id="hand-heading">Made by hand, here.</h2>
          <p>
            Every piece is produced and finished by hand in our studio: mixed media,
            archival pigment on canvas, hand-finished surfaces.
          </p>
          <p className="sg-pullquote">Finished by hand in our studio. Always.</p>
          <Link className="sg-link" href="/process">
            Our process
          </Link>
        </div>
        <SiteImage
          ratio="4:5"
          src="/images/gallery/interior-04.jpg"
          alt="A Solas Gallery hallway hung with large, hand-finished abstract work."
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </section>

      {/* ── 10. November & December at the gallery ──────────────── */}
      <section className="sg-section" id="events" aria-labelledby="events-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">At the gallery</p>
          <h2 id="events-heading">November &amp; December</h2>
          <p className="sg-plain">
            Evenings and gatherings held at the gallery. Tickets and details live on HUBSalado.
          </p>
        </header>
        {/* PLACEHOLDER (W-07, F-03, F-07): event one-liners, market dates, Killarney venue */}
        <ul className="sg-events">
          {events.map((event) => (
            <li key={event.title}>
              <p className="sg-event-when">{event.when}</p>
              <h3>{event.title}</h3>
              <p>{event.body}</p>
              <a href={HUB_URL} rel="noopener noreferrer" className="sg-link">
                Details and tickets at hubsalado.com
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 11. For interior designers ──────────────────────────── */}
      {/* PLACEHOLDER (W-06, F-06): designer copy; /trade page content */}
      <section className="sg-section sg-trade" aria-labelledby="trade-heading">
        <p className="sg-eyebrow">To the trade</p>
        <h2 id="trade-heading">For interior designers</h2>
        <p>
          We work quietly alongside designers and their clients: pieces commissioned, sized
          and colored to the room, with proofs shown on your client&rsquo;s own wall and a
          firm price before anything is made. A designer preview evening is planned for this
          winter.
        </p>
        <Link className="sg-link" href="/trade">
          Trade inquiries
        </Link>
      </section>

      {/* ── 12. Visit ───────────────────────────────────────────── */}
      <section className="sg-section sg-visit" id="visit" aria-labelledby="visit-heading">
        <div>
          <p className="sg-eyebrow">Visit</p>
          <h2 id="visit-heading">The door is open.</h2>
          <dl>
            <dt>Address</dt>
            <dd>
              {SITE.name}
              <br />
              {SITE.street}
              <br />
              {SITE.city}, {SITE.region} {SITE.postalCode}
            </dd>
            <dt>Telephone</dt>
            <dd>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </dd>
            <dt>Hours</dt>
            {/* PLACEHOLDER (F-01): hours — confirm with Tim */}
            <dd>
              {hours}
              <br />
              And by appointment
            </dd>
          </dl>
        </div>
        <div className="sg-map">
          <iframe
            src="https://www.google.com/maps?q=2+Rock+Creek+Dr,+Salado,+TX+76571&output=embed"
            title="Map of Solas Gallery, 2 Rock Creek Dr, Salado, TX"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
