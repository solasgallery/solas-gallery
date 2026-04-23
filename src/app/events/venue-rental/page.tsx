import type { Metadata } from 'next'
import Image from 'next/image'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Wedding & Event Venue',
  description:
    'Host your wedding, reception, or private event at Solas Gallery — an intimate art gallery venue on Main Street in Salado, Texas. Up to 50 guests. Original art, warm light, thirty years of hospitality.',
  alternates: {
    canonical: '/events/venue-rental',
  },
  openGraph: {
    title: 'Wedding & Event Venue | Solas Gallery — Salado, TX',
    description: 'Host your wedding, reception, or private event at Solas Gallery — an intimate art gallery venue on Main Street in Salado, Texas. Up to 50 guests. Original art, warm light, thirty years of hospitality.',
    url: 'https://solasgallery.com/events/venue-rental',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding & Event Venue | Solas Gallery — Salado, TX',
    description: 'Host your wedding, reception, or private event at Solas Gallery — an intimate art gallery venue on Main Street in Salado, Texas. Up to 50 guests. Original art, warm light, thirty years of hospitality.',
    images: ['/og-default.jpg'],
  },
}

const eventTypes = [
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
]

const venueDetails = [
  { label: 'Capacity', value: 'Up to 50 guests' },
  { label: 'Ceremony seating', value: 'Theater-style or open floor' },
  { label: 'Dining', value: 'Seated dinner for up to 40' },
  { label: 'Cocktail reception', value: 'Standing room for 50' },
  { label: 'Hours', value: 'Evening events, typically 5 pm – 10 pm' },
  { label: 'Setup time', value: '2 hours included before event start' },
]

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
              boutique shopping, restaurants, and bed-and-breakfasts all within
              walking distance of the gallery.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VENUE DETAILS — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-section text-cream text-center mb-16">
            The Space at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueDetails.map((item) => (
              <div
                key={item.label}
                className="border border-cream/10 p-6 flex justify-between items-start gap-4"
              >
                <p className="font-body text-xs text-cream/40 tracking-[0.1em] uppercase">{item.label}</p>
                <p className="font-body text-sm text-cream/80 text-right">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            What the Venue Includes
          </h2>
          <div className="space-y-10 mt-12">
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">The gallery space</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Full, exclusive use of the gallery for your event. Art remains on
                the walls — it is part of the experience, not something that gets
                removed. Tables, chairs, and basic event furniture are included.
                The gallery layout is flexible: open it up for a cocktail reception
                or configure it for seated dining.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Setup and breakdown</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Two hours of setup time before your event and one hour for
                breakdown afterward. We coordinate directly with your vendors —
                florists, caterers, and musicians — to make sure access and timing
                are seamless. Day-of gallery staff is on hand for any needs.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Lighting and ambiance</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                The gallery uses warm, directional lighting designed to showcase
                art — which also happens to make every person in the room look
                wonderful. No fluorescent overheads. No harsh downlighting. Just
                the kind of light that makes an evening feel intimate and considered.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">What you bring</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Catering, bar service, florals, music, and any specialty décor are
                the client's responsibility. We are happy to recommend local vendors
                in Salado and the surrounding area. The gallery provides the
                setting — you fill it with your people and your plans.
              </p>
            </div>
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
            {eventTypes.map((s) => (
              <div key={s.title} className="border border-cream/10 p-6">
                <h3 className="font-display text-lg text-cream mb-2">{s.title}</h3>
                <p className="font-body text-xs text-cream/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AREA GUIDE — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            Salado for Your Guests
          </h2>
          <p className="font-body text-sm text-charcoal/60 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            For out-of-town guests, Salado is a destination in its own right.
            Here is what to know.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Getting here</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Salado is located directly off Interstate 35 in Bell County, Texas.
                It is 45 minutes north of Austin, 30 minutes south of Temple, and
                90 minutes south of Dallas/Fort Worth. Austin-Bergstrom International
                Airport (AUS) is the closest major airport. Killeen-Fort Hood Regional
                Airport (GRK) is 30 minutes west.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Where to stay</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Salado has a collection of bed-and-breakfasts, inns, and vacation
                rentals within walking distance of the gallery and Main Street.
                For groups that need more rooms, hotels in Belton and Temple are
                15 minutes away and offer standard chain options. We are happy to
                share specific recommendations when you inquire.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Dining and entertainment</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Main Street in Salado has a handful of restaurants, cafés, and wine
                bars within a short walk. The town is also known for its artisan
                shops, galleries, and the historic Salado Creek — a popular spot
                for walking and photos. For a rehearsal dinner or post-event brunch,
                several local restaurants accommodate private groups.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Weather and seasons</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Central Texas is warm for most of the year. Spring (March through May)
                and fall (October through November) are the most comfortable seasons
                for events. Summers are hot, which makes an indoor gallery venue
                especially practical. Winter evenings are mild and well-suited to
                candlelit receptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-cream text-center mb-16">
            Questions We Hear Often
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl text-cream mb-3">How much does the venue cost?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Venue rental pricing varies by the type of event, day of the week,
                and time of year. We quote each event individually after an initial
                conversation about your plans. Inquire below and we will respond
                with details within one business day.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">Can we move or remove the art?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                The art stays. It is one of the things that makes the space what it
                is — and frankly, it is one of the reasons people choose the gallery
                over a blank-wall venue. Guests love it. Your event photos will too.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">Do you provide catering?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                We do not provide catering, which means you are free to choose
                any caterer you like. We work with several local caterers regularly
                and are happy to share recommendations. The gallery has a prep area
                for caterer staging but does not have a commercial kitchen.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">Is there parking?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Yes. Free parking is available directly behind the building and along
                Rock Creek Drive. Main Street in Salado is walkable, and guests
                staying at nearby inns or B&Bs can walk to the gallery.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">Can we have live music?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Absolutely. The gallery regularly hosts live music through Village
                Lamplighter events and is set up for acoustic performances. For
                larger bands or amplified music, we will discuss sound levels and
                logistics as part of the planning process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Inquiry Form */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <InquiryForm
          source="venue-rental"
          headline="Inquire about your date."
          subtext="Venue rental pricing depends on the event, the evening, and the season. Tell us what you are planning and we will tell you what is possible."
          messagePlaceholder="Describe your event — date, guest count, and anything else we should know."
        />
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
