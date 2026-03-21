import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wedding & Event Venue — Gallery Space Rental',
  description:
    'Host your wedding, reception, rehearsal dinner, or private event at Solas Gallery on Main Street in Salado, Texas. An intimate art gallery venue with warm light, original art, and thirty years of hospitality.',
}

export default function VenueRentalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/events/venue-hero.jpg"
          alt="Solas Gallery interior set for an event"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-6">
            Solas Gallery &middot; Main Street, Salado
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream tracking-[0.08em] leading-tight">
            Your event, framed by art.
          </h1>
          <p className="font-display text-lg text-cream/60 italic mt-4 max-w-lg">
            An intimate gallery venue on Main Street.
          </p>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="px-6 md:px-12 py-16 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={`/images/events/venue-${i}.jpg`}
                alt={`Gallery venue interior ${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* The Space */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            A gallery, not a banquet hall.
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Solas Gallery is an intimate, art-filled venue on Main Street in
              Salado, Texas. Original art on every wall. Warm, directional light.
              Hardwood floors and the kind of atmosphere that makes an evening
              feel considered, not commercial.
            </p>
            <p>
              The gallery accommodates up to 50 guests for ceremonies, receptions,
              and seated dinners. The space is yours for the evening — we handle
              the venue, you bring the celebration.
            </p>
            <p>
              Salado is a destination town in the Texas Hill Country, 45 minutes
              north of Austin and minutes from I-35. Your guests will find
              boutique shopping, restaurants, and B&Bs all within walking distance
              of the gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-deep text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-cream text-center mb-14">
            Events we host
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Intimate Weddings',
                desc: 'Small ceremonies for up to 50 guests. Art on the walls, warm light overhead, Main Street at the door. Elopements welcome.',
              },
              {
                title: 'Rehearsal Dinners',
                desc: 'The evening before deserves a setting as thoughtful as the day itself. Seated dinner among original works of art.',
              },
              {
                title: 'Receptions & Celebrations',
                desc: 'Post-ceremony receptions, anniversary parties, milestone birthdays, and gatherings that call for something more than ordinary.',
              },
              {
                title: 'Bridal Events',
                desc: 'Bridal showers, engagement parties, and bridesmaid luncheons in a space that photographs beautifully.',
              },
              {
                title: 'Corporate & Private Events',
                desc: 'Product launches, client appreciation evenings, holiday gatherings, and company celebrations with gallery ambiance.',
              },
              {
                title: 'Memorial Services',
                desc: 'A quiet, dignified space for celebrations of life and remembrance. Art, warmth, and a sense of peace.',
              },
            ].map((s) => (
              <div key={s.title} className="border border-cream/10 p-6">
                <h3 className="font-display text-lg text-cream mb-2">{s.title}</h3>
                <p className="font-body text-xs text-cream/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-4">
            Inquire about your date.
          </h2>
          <p className="font-body text-sm text-charcoal/50 mb-8">
            Venue rental pricing depends on the event, the evening, and the season.
            Tell us what you are planning and we will tell you what is possible.
          </p>
          <a
            href="mailto:solasgallery@gmail.com?subject=Event%20Venue%20Inquiry"
            className="inline-block font-display text-sm tracking-[0.12em] uppercase border-b border-stone pb-1 text-charcoal hover:border-charcoal transition-colors"
          >
            Send an inquiry &rarr;
          </a>
        </div>
      </section>

      {/* Local SEO */}
      <section className="px-6 md:px-12 lg:px-24 py-14 bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs text-charcoal/30 leading-relaxed text-center">
            Solas Gallery is an intimate wedding and event venue on Main Street in
            Salado, Texas. Available for weddings, receptions, rehearsal dinners,
            bridal showers, corporate events, and private gatherings. Serving couples
            and event planners from Austin, Round Rock, Georgetown, Temple, Killeen,
            Waco, and all of Central Texas. 76571.
          </p>
        </div>
      </section>
    </>
  )
}
