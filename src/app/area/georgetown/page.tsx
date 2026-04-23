import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photographer Near Georgetown — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 24 minutes from Georgetown. Professional portraits, executive headshots, baby photography, and fine art prints. Serving Georgetown, Jarrell, Florence, and Williamson County.',
  alternates: {
    canonical: '/area/georgetown',
  },
  openGraph: {
    title: 'Photographer Near Georgetown — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 24 minutes from Georgetown. Professional portraits, executive headshots, baby photography, and fine art prints. Serving Georgetown, Jarrell, Florence, and Williamson County.',
    url: 'https://solasgallery.com/area/georgetown',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Near Georgetown — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 24 minutes from Georgetown. Professional portraits, executive headshots, baby photography, and fine art prints. Serving Georgetown, Jarrell, Florence, and Williamson County.',
    images: ['/og-default.jpg'],
  },
}

export default function GeorgetownPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image src="/images/gallery/hero.jpg" alt="Solas Gallery" fill priority className="object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl text-cream tracking-[0.08em] leading-tight">
            Solas Gallery for Georgetown
          </h1>
          <p className="font-body text-sm text-cream/50 mt-4">
            24 minutes north. Two historic town squares, one creative tradition.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            Georgetown and Salado — kindred spirits
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Georgetown and Salado share something most Texas towns have lost —
              a historic town square, a walkable Main Street, and a community that
              values craft over convenience. Solas Gallery has been part of that
              tradition in Salado for thirty years, and Georgetown families and
              professionals have been making the 24-minute drive north for nearly
              as long.
            </p>
            <p>
              Georgetown is home to Southwestern University, a growing population
              of 79,000, and a square full of people who appreciate the difference
              between a photograph and a portrait. If that describes you, Tim
              Flanagan's gallery is worth the short drive.
            </p>
            <p>
              If you are in Jarrell or Florence, you are practically next door —
              10 to 15 minutes.
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
            <Link href="/events/venue-rental" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Gallery Venue</h3>
              <p className="font-body text-xs text-charcoal/50">Weddings and private events.</p>
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
            Solas Gallery serves clients from Georgetown, Jarrell, Florence, Liberty Hill,
            and Williamson County. Located on Main Street in Salado, Texas 76571.
            Approximately 24 minutes north of Georgetown via I-35.
          </p>
        </div>
      </section>
    </>
  )
}
