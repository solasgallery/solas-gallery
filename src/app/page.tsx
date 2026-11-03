import Link from 'next/link'
import ArtPlaceholder from '@/components/ArtPlaceholder'
import WaitlistForm from '@/components/WaitlistForm'
import { HUB_URL, hours, SITE } from '@/lib/site'

// Homepage title/description come from the root layout (SITE.title) — the
// title ranks for "art gallery Salado TX"; do not override it here.

const sessionDays = [
  {
    date: 'Tuesday, November 17',
    short: 'Nov 17',
    name: 'The Tuesday sitting',
    price: '$295',
    includes: 'Your sitting and one finished 11×14 portrait, archival pigment, hand-finished.',
    terms: '$95 deposit to reserve. $200 balance at your session.',
  },
  {
    date: 'Saturday, November 21',
    short: 'Nov 21',
    name: 'The Saturday sitting',
    price: '$390',
    includes: 'Saturday prime. Your sitting and one finished 11×14 portrait, archival pigment, hand-finished.',
    terms: '$95 deposit to reserve. $295 balance at your session.',
  },
  {
    date: 'Friday, November 27',
    short: 'Nov 27',
    name: 'The premium day',
    price: '$295 session fee',
    // PLACEHOLDER (F-02): confirm what the premium day includes and how the deposit applies
    includes: 'Our most unhurried sitting of the season, with a $750 minimum order.',
    terms: '$95 deposit to reserve. $295 session fee at your session.',
  },
]

const ways = [
  {
    id: 'IMG-03',
    title: 'From your image',
    body: 'A photograph, a place, a memory you can only describe. We transform it by hand into a single piece that exists nowhere else.',
    price: 'From $1,500',
    direction: 'commission: a family photograph beside the finished canvas it became, studio table',
    alt: 'A client photograph on the studio table beside the finished one-of-one canvas made from it.',
  },
  {
    id: 'IMG-04',
    title: 'Studio originals',
    body: 'Abstracts and re-imaginings made in our studio. One of one. When it is gone, it is gone.',
    price: 'As marked',
    direction: 'studio original: textured abstract canvas, raking side light showing hand-finished surface',
    alt: 'A textured abstract studio original in side light, showing its hand-finished surface.',
  },
  {
    id: 'IMG-05',
    title: 'Sized & colored for you',
    body: 'Choose a piece from the studio floor. We resize it and adjust its color to belong to your room.',
    price: 'Priced by size',
    direction: 'adaptable piece: same composition shown in two palettes, hung in a living room',
    alt: 'One studio composition shown in two palettes, each sized for a different wall.',
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
          <h1 id="hero-heading">Meet Art.</h1>
          <p className="sg-hero-line">We create the art you want but cannot find.</p>
          <p className="sg-plain">
            Solas Gallery in Salado, Texas creates one-of-a-kind wall art — commissioned
            for your home, or chosen from the studio floor.
          </p>
          <div className="sg-ctas">
            <Link className="sg-btn" href="#sessions">
              Book a Limited Edition Session
            </Link>
            <Link className="sg-link" href="#commissions">
              Start a commission
            </Link>
          </div>
        </div>
        {/* PLACEHOLDER (IMG-01): hero photograph */}
        <ArtPlaceholder
          ratio="16:9"
          id="IMG-01"
          direction="hero: large abstract canvas on the gallery wall, warm late-afternoon light, no people"
          alt="A large abstract canvas hanging on the Solas Gallery wall in warm afternoon light."
        />
      </section>

      {/* ── 4. Limited Edition Sessions ─────────────────────────── */}
      <section className="sg-section sg-sessions" id="sessions" aria-labelledby="sessions-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">November · Three days only</p>
          <h2 id="sessions-heading">Limited Edition Sessions</h2>
          <p className="sg-plain">
            A short portrait sitting in the gallery, finished by hand as a one-of-one piece
            for your wall. Three days this November, then the book closes.
          </p>
        </header>

        <ol className="sg-rollout" aria-label="How booking opens">
          <li>
            <span>Now</span>The waitlist is open
          </li>
          <li>
            <span>Nov 3–4</span>The waitlist is invited to book first
          </li>
          <li>
            <span>Thu Nov 5 · 6:00 AM</span>Public booking opens
          </li>
        </ol>

        {/* PLACEHOLDER (W-04, F-05, F-08): session inclusions wording, sitting count, Saturday inclusions */}
        <div className="sg-days">
          {sessionDays.map((day) => (
            <article className="sg-day" key={day.short} aria-labelledby={`day-${day.short}`}>
              <p className="sg-day-date">{day.date}</p>
              <h3 id={`day-${day.short}`}>{day.name}</h3>
              <p className="sg-day-price">{day.price}</p>
              <p>{day.includes}</p>
              <p>{day.terms}</p>
              <p className="sg-day-meta">About ten sittings · twenty minutes each</p>
            </article>
          ))}
        </div>

        <p className="sg-note">
          Black and white or color — your choice when you book. Days fill from the waitlist
          first; when a day is full, it is full.
        </p>

        <div className="sg-waitlist">
          {/* PLACEHOLDER (F-04): swap this form for the real booking links on Thu Nov 5, 6 AM */}
          <WaitlistForm />
        </div>
      </section>

      {/* ── 5. Three ways to own the only one ───────────────────── */}
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
              {/* PLACEHOLDER (IMG-03 to IMG-05): commission path photographs */}
              <ArtPlaceholder ratio="4:5" id={way.id} direction={way.direction} alt={way.alt} />
              <p className="sg-way-num">0{index + 1}</p>
              <h3>{way.title}</h3>
              <p>{way.body}</p>
              <p className="sg-price">{way.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 6. How a commission works ───────────────────────────── */}
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

      {/* ── 7. Studio originals / Solas Editions ────────────────── */}
      <section className="sg-section sg-originals" id="originals" aria-labelledby="originals-heading">
        <header className="sg-section-head">
          <p className="sg-eyebrow">Studio originals · Solas Editions</p>
          <h2 id="originals-heading">No two pieces here are alike.</h2>
          <p className="sg-plain">
            Most of what hangs in the gallery is one of one. A few studio pieces are released
            as Solas Editions — a limited edition of twenty, each embellished by hand so that
            no two are the same.
          </p>
        </header>
        <div className="sg-squares">
          {/* PLACEHOLDER (IMG-06 to IMG-08): studio originals */}
          <ArtPlaceholder
            ratio="1:1"
            id="IMG-06"
            direction="studio original: square abstract, earth palette, straight on, gallery wall"
            alt="A square abstract studio original in an earth palette."
          />
          <ArtPlaceholder
            ratio="1:1"
            id="IMG-07"
            direction="Solas Edition: detail of hand embellishment — brush and leaf on canvas surface"
            alt="Close detail of hand embellishment on a Solas Edition canvas."
          />
          <ArtPlaceholder
            ratio="1:1"
            id="IMG-08"
            direction="re-imagining: landscape abstracted, hung above a console, soft daylight"
            alt="A re-imagined landscape studio original hung above a console table."
          />
        </div>
        <Link className="sg-link" href="/visit">
          See them on the gallery floor
        </Link>
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
      {/* PLACEHOLDER (W-05): honesty copy — confirm tools named and materials list */}
      <section className="sg-section sg-hand" aria-labelledby="hand-heading">
        <div className="sg-hand-copy">
          <p className="sg-eyebrow">How it is made</p>
          <h2 id="hand-heading">Made by hand, here.</h2>
          <p>
            We design with modern tools — Photoshop and AI among them — the way a painter
            sketches. They stay at the drafting table.
          </p>
          <p>
            Every piece is then produced and finished by hand in our studio: mixed media,
            archival pigment on canvas, hand-finished surfaces.
          </p>
          <p className="sg-pullquote">Finished by hand in our studio. Always.</p>
        </div>
        {/* PLACEHOLDER (IMG-02): studio hands */}
        <ArtPlaceholder
          ratio="4:5"
          id="IMG-02"
          direction="studio: hands finishing a canvas surface with brush and medium, natural window light"
          alt="Hands finishing the surface of a canvas with a brush in the Solas studio."
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
