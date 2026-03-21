import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Events & Classes',
  description:
    'Live music, workshops, gallery openings, and private events at Solas Gallery on Main Street in Salado, Texas.',
}

const categories = ['Live Music', 'Classes & Workshops', 'Gallery Openings', 'Private Events']

const events = [
  {
    date: 'April 2026',
    title: 'Spring Exhibition Opening',
    description: 'New works unveiled. Wine, conversation, and first looks.',
    category: 'Gallery Openings',
    link: '#',
  },
  {
    date: 'April 2026',
    title: 'JAM Night with Tim Flanagan',
    description: 'Live music, stories, and open-mic on Main Street.',
    category: 'Live Music',
    link: '#',
  },
  {
    date: 'May 2026',
    title: 'Portrait Photography Workshop',
    description: 'A half-day intensive on light, connection, and the decisive moment.',
    category: 'Classes & Workshops',
    link: '#',
  },
]

export default function EventsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/events/hero.jpg"
          alt="Gallery event, warm light"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.1em]">
            Events & Classes
          </h1>
          <p className="font-display text-lg md:text-xl text-cream/60 italic mt-4 max-w-lg">
            An evening worth clearing your calendar for.
          </p>
        </div>
      </section>

      {/* ═══ CATEGORY TABS ═══ */}
      <section className="bg-cream border-b border-stone/20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="font-body text-xs tracking-[0.12em] uppercase text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ EVENT CARDS ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto space-y-8">
          {events.map((evt) => (
            <div
              key={evt.title}
              className="border border-stone/30 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors hover:border-stone/60"
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <p className="font-body text-xs text-stone tracking-[0.15em] uppercase">
                    {evt.date}
                  </p>
                  <span className="font-body text-[10px] text-charcoal/30 tracking-[0.1em] uppercase">
                    {evt.category}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-2">
                  {evt.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                  {evt.description}
                </p>
              </div>
              <a
                href={evt.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet text-charcoal whitespace-nowrap self-start"
              >
                Reserve your place &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ VENUE RENTAL ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-section text-cream mb-6">
              The gallery as your backdrop.
            </h2>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">
              Solas Gallery is available for private events, receptions, and intimate
              gatherings. Art on the walls, warm light, a Main Street address, and the
              kind of atmosphere that makes an evening memorable.
            </p>
            <a
              href="mailto:solasgallery@gmail.com?subject=Private%20Event%20Inquiry"
              className="btn-quiet text-cream border-cream/40 hover:border-cream"
            >
              Inquire about private events &rarr;
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/events/venue.jpg"
              alt="Gallery interior set for a private event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
