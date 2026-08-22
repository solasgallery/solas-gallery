import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events | Solas Gallery — Salado, TX',
  description:
    'Upcoming gallery events, live music, and performances at Solas Gallery in Salado, Texas. An evening worth clearing your calendar for.',
  alternates: { canonical: '/events' },
  openGraph: {
    title: 'Events | Solas Gallery — Salado, TX',
    description: 'Upcoming events at Solas Gallery in Salado, Texas.',
    url: 'https://solasgallery.com/events',
    type: 'website',
    images: [{ url: '/solas-og.jpg', width: 1200, height: 630, alt: 'Solas Gallery Events' }],
  },
}

const upcomingEvents = [
  {
    date: 'June 2026',
    day: 'Friday Evening',
    title: 'An Evening with Tim Flanagan',
    category: 'Live Music & Stories',
    description:
      'Original music, projected photographs, and the stories behind both. An intimate evening inside the gallery — the kind that doesn\'t repeat itself.',
    link: null,
    cta: 'Reserve Your Place',
  },
  {
    date: 'Summer 2026',
    day: 'Saturday',
    title: 'Salado Songwriter Series',
    category: 'Live Music',
    description:
      'Three Central Texas songwriters. One round. No setlists. A Village Lamplighter production inside the Solas Gallery space.',
    link: null,
    cta: 'Details Soon',
  },
  {
    date: 'Fall 2026',
    day: 'Friday Evening',
    title: 'Gallery Opening: New Works',
    category: 'Exhibition',
    description:
      'An opening reception for new fine art works by Tim Flanagan. Wine, conversation, and the first look at work fresh from the studio.',
    link: null,
    cta: 'Add to Calendar',
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep text-cream py-28 px-6 text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-[0.08em] mb-6">
            Upcoming
          </h1>
          <p className="font-body text-sm text-cream/50 tracking-[0.2em] uppercase">
            Events at Solas Gallery &middot; Salado, Texas
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto space-y-8">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.title}
              className="border border-stone/30 p-10 hover:border-stone/60 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-3">
                    {evt.category}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4 leading-snug">
                    {evt.title}
                  </h2>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
                <div className="md:text-right md:pl-10 shrink-0">
                  <p className="font-display text-xl text-charcoal mb-1">{evt.date}</p>
                  <p className="font-body text-xs text-stone/60 mb-5 tracking-wide">{evt.day}</p>
                  {evt.link ? (
                    <a
                      href={evt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-quiet text-charcoal"
                    >
                      {evt.cta} &rarr;
                    </a>
                  ) : (
                    <p className="font-body text-xs text-stone/40 tracking-[0.15em] uppercase">
                      {evt.cta}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Rental CTA */}
        <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-stone/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-4">
                Private Events
              </p>
              <h2 className="font-display text-3xl text-charcoal mb-4">
                Host your event at Solas Gallery.
              </h2>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                The gallery is available for private dinners, receptions,
                corporate events, and intimate performances. Capacity up to
                sixty guests. Full details on the venue page.
              </p>
            </div>
            <div className="md:text-right">
              <Link href="/events/venue-rental" className="btn-quiet text-charcoal">
                Venue Rental &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="bg-deep text-cream section-pad px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-cream mb-4">
            Stay in the loop.
          </h2>
          <p className="font-body text-sm text-cream/50 leading-relaxed mb-8">
            Events fill quickly. Drop us a line to be notified when new dates
            are announced.
          </p>
          <a
            href="mailto:info@solasgallery.com?subject=Event Updates"
            className="btn-quiet text-cream border-stone/40 hover:border-cream"
          >
            info@solasgallery.com
          </a>
        </div>
      </section>
    </>
  )
}
