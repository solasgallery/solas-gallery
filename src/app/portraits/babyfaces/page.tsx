import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BabyFaces — Newborn & Child Portrait Photography',
  description:
    'BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas. Heirloom-quality baby portraits, milestone sessions, and family photography by Tim Flanagan. Serving Austin, Temple, Georgetown, and Central Texas.',
  alternates: {
    canonical: '/portraits/babyfaces',
  },
  openGraph: {
    title: 'BabyFaces — Newborn & Child Portrait Photography | Solas Gallery — Salado, TX',
    description: 'BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas. Heirloom-quality baby portraits, milestone sessions, and family photography by Tim Flanagan. Serving Austin, Temple, Georgetown, and Central Texas.',
    url: 'https://solasgallery.com/portraits/babyfaces',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BabyFaces — Newborn & Child Portrait Photography | Solas Gallery — Salado, TX',
    description: 'BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas. Heirloom-quality baby portraits, milestone sessions, and family photography by Tim Flanagan. Serving Austin, Temple, Georgetown, and Central Texas.',
    images: ['/og-default.jpg'],
  },
}

export default function BabyFacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/portraits/babyfaces-hero.jpg"
          alt="BabyFaces newborn portrait"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-6">
            A Solas Gallery experience
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream tracking-[0.08em] leading-tight">
            BabyFaces
          </h1>
          <p className="font-display text-lg text-cream/60 italic mt-4 max-w-lg">
            Tiny faces. Timeless portraits.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 py-20 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <Image
                src={`/images/portraits/babyface-${i}.jpg`}
                alt={`BabyFaces portrait ${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* The Difference */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            Not a photo session. A portrait sitting.
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              BabyFaces is our dedicated newborn and child portrait experience.
              These are not snapshots with backdrops and props — they are
              heirloom portraits made with the same lighting, care, and artistry
              that has defined Tim Flanagan's work for thirty years.
            </p>
            <p>
              Every session is unhurried and gentle, designed entirely around
              your child's comfort and rhythm. We work with natural and studio
              light, classic posing, and the patience that only comes from
              decades of experience with tiny subjects.
            </p>
            <p>
              The result is the kind of portrait that grandparents frame,
              children grow up seeing on the wall, and families keep for
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-deep text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-cream text-center mb-14">
            BabyFaces sessions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: 'Newborn',
                desc: 'Best within the first 14 days. Soft wraps, natural sleep poses, quiet studio light. The portrait that captures who they were at the very beginning.',
              },
              {
                title: 'Milestone',
                desc: 'Sitting up at 6 months. Standing at 9. The big first birthday. Each milestone is its own portrait — a record of who they are becoming.',
              },
              {
                title: 'Children & Siblings',
                desc: 'Toddlers, young children, brothers and sisters together. Relaxed, directed, and designed to capture personality — not just a smile.',
              },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="font-display text-xl text-cream mb-3">{s.title}</h3>
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
            Book a BabyFaces session.
          </h2>
          <p className="font-body text-sm text-charcoal/50 mb-8">
            Investments begin at $350. Newborn sessions should be booked
            during the third trimester.
          </p>
          <Link
            href="/portraits"
            className="inline-block font-display text-sm tracking-[0.12em] uppercase border-b border-stone pb-1 text-charcoal hover:border-charcoal transition-colors"
          >
            Begin your inquiry &rarr;
          </Link>
        </div>
      </section>

      {/* Local SEO */}
      <section className="px-6 md:px-12 lg:px-24 py-14 bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs text-charcoal/30 leading-relaxed text-center">
            BabyFaces newborn and child portrait photography at Solas Gallery in Salado,
            Texas. Serving families from Austin, Round Rock, Georgetown, Temple, Killeen,
            Cedar Park, Belton, and all of Central Texas. Main Street, Salado, TX 76571.
          </p>
        </div>
      </section>
    </>
  )
}
