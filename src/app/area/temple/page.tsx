import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photographer Near Temple TX — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 17 minutes from Temple. Professional portraits, executive headshots, newborn photography, and fine art. Serving Temple, Belton, and Bell County.',
}

export default function TemplePage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image src="/images/gallery/hero.jpg" alt="Solas Gallery" fill priority className="object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl text-cream tracking-[0.08em] leading-tight">
            Solas Gallery for Temple
          </h1>
          <p className="font-body text-sm text-cream/50 mt-4">
            17 minutes south. Your closest fine art gallery and portrait studio.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            Temple's gallery is in Salado
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Temple is an 80,000-person city built around Baylor Scott & White
              and a medical community that employs thousands of professionals who
              need headshots, family portraits, and art for their homes. Solas
              Gallery is 17 minutes south on I-35 — closer than most things in
              Temple's own sprawl.
            </p>
            <p>
              Physicians, hospital administrators, and healthcare professionals
              from Baylor Scott & White have been coming to Tim Flanagan for
              headshots and portraits for years. The gallery is also a destination
              for Temple families looking for newborn portraits, milestone sessions,
              and the kind of photography that becomes a family heirloom.
            </p>
            <p>
              Belton is even closer — the county seat is just 10 minutes away,
              and UMHB students and faculty are regular visitors to the gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Link href="/portraits/headshots" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Headshots</h3>
              <p className="font-body text-xs text-charcoal/50">Medical, executive, and corporate portraits.</p>
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
            Solas Gallery serves portrait, headshot, and fine art clients from Temple,
            Belton, Troy, Rogers, and Bell County. Located on Main Street in Salado,
            Texas 76571. Approximately 17 minutes south of Temple via I-35.
          </p>
        </div>
      </section>
    </>
  )
}
