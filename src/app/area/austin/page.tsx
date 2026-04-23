import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photographer Near Austin — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 45 minutes north of Austin. Professional portraits, executive headshots, fine art photography, and gallery events. Worth the drive from Austin, Round Rock, Pflugerville, and Cedar Park.',
  alternates: {
    canonical: '/area/austin',
  },
  openGraph: {
    title: 'Photographer Near Austin — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 45 minutes north of Austin. Professional portraits, executive headshots, fine art photography, and gallery events. Worth the drive from Austin, Round Rock, Pflugerville, and Cedar Park.',
    url: 'https://solasgallery.com/area/austin',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Near Austin — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 45 minutes north of Austin. Professional portraits, executive headshots, fine art photography, and gallery events. Worth the drive from Austin, Round Rock, Pflugerville, and Cedar Park.',
    images: ['/og-default.jpg'],
  },
}

export default function AustinAreaPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image src="/images/gallery/hero.jpg" alt="Solas Gallery" fill priority className="object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl text-cream tracking-[0.08em] leading-tight">
            Solas Gallery for Austin
          </h1>
          <p className="font-body text-sm text-cream/50 mt-4">
            45 minutes north on I-35. A world away from the ordinary.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            Why Austin clients make the drive
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Austin has no shortage of photographers. But Solas Gallery is not a
              photography studio — it is a thirty-year creative practice housed in
              a fine art gallery on Main Street in Salado, Texas. The experience
              is different. The work is different. And the 45-minute drive north
              on I-35 is part of the appeal — you leave the city behind and arrive
              somewhere quiet, intentional, and unhurried.
            </p>
            <p>
              Austin executives, entrepreneurs, and families come to Solas for
              professional headshots that stand apart from the volume studios,
              signature portraits that become heirlooms, and fine art for the
              walls of considered homes. The gallery also hosts private events,
              live music, and workshops throughout the year.
            </p>
            <p>
              If you are in Round Rock, Pflugerville, or Cedar Park, you are
              even closer — 30 to 40 minutes door to door.
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
            <Link href="/portraits" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Signature Portraits</h3>
              <p className="font-body text-xs text-charcoal/50">The image that defines a life.</p>
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
            Solas Gallery serves clients from Austin, Round Rock, Pflugerville, Cedar Park,
            Lakeway, Bee Cave, Westlake Hills, Dripping Springs, and the greater Austin metro.
            Located on Main Street in Salado, Texas 76571. Approximately 45 minutes north of
            downtown Austin via I-35.
          </p>
        </div>
      </section>
    </>
  )
}
