import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photographer Near Round Rock — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 31 minutes from Round Rock. Professional portraits, executive headshots, newborn photography, and fine art. Serving Round Rock, Pflugerville, and Hutto.',
  alternates: {
    canonical: '/area/round-rock',
  },
  openGraph: {
    title: 'Photographer Near Round Rock — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 31 minutes from Round Rock. Professional portraits, executive headshots, newborn photography, and fine art. Serving Round Rock, Pflugerville, and Hutto.',
    url: 'https://solasgallery.com/area/round-rock',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Near Round Rock — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 31 minutes from Round Rock. Professional portraits, executive headshots, newborn photography, and fine art. Serving Round Rock, Pflugerville, and Hutto.',
    images: ['/og-default.jpg'],
  },
}

export default function RoundRockPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image src="/images/gallery/hero.jpg" alt="Solas Gallery" fill priority className="object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl text-cream tracking-[0.08em] leading-tight">
            Solas Gallery for Round Rock
          </h1>
          <p className="font-body text-sm text-cream/50 mt-4">
            31 minutes north. 132,000 people, and the best portraits are in Salado.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            Round Rock to Salado — 31 minutes, a different world
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Round Rock is one of the fastest-growing cities in Texas — a tech
              hub with Dell, Emerson, and a population that has doubled in a decade.
              That growth means more professionals needing headshots, more families
              wanting real portraits, and more homeowners looking for art that
              means something on their walls.
            </p>
            <p>
              Solas Gallery is 31 minutes north on I-35. Tim Flanagan has been
              creating portraits and fine art from this gallery for thirty years.
              Round Rock families, executives, and professionals come to Solas
              because the work is personal, unhurried, and built to last —
              not because it is convenient, but because it is worth it.
            </p>
            <p>
              If you are in Pflugerville or Hutto, you are even closer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Link href="/portraits/headshots" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Headshots</h3>
              <p className="font-body text-xs text-charcoal/50">Executive and corporate portraits.</p>
            </Link>
            <Link href="/portraits/babyfaces" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">BabyFaces</h3>
              <p className="font-body text-xs text-charcoal/50">Newborn and child portraits.</p>
            </Link>
            <Link href="/art" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Art for Home Walls</h3>
              <p className="font-body text-xs text-charcoal/50">Fine art prints and originals.</p>
            </Link>
          </div>

          <div className="mt-14 text-center">
            <Link href="/portraits" className="inline-block font-display text-sm tracking-[0.12em] uppercase border-b border-stone pb-1 text-charcoal hover:border-charcoal transition-colors">
              Begin your inquiry &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-14 bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs text-charcoal/30 leading-relaxed text-center">
            Solas Gallery serves portrait and fine art clients from Round Rock, Pflugerville,
            Hutto, Taylor, and the northern Austin metro. Located on Main Street in Salado,
            Texas 76571. Approximately 31 minutes north of Round Rock via I-35.
          </p>
        </div>
      </section>
    </>
  )
}
