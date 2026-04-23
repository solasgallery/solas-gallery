import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photographer Near Killeen — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 21 minutes from Killeen. Professional portraits, military family photography, executive headshots, and fine art. Serving Killeen, Fort Cavazos, Harker Heights, and Copperas Cove.',
  alternates: {
    canonical: '/area/killeen',
  },
  openGraph: {
    title: 'Photographer Near Killeen — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 21 minutes from Killeen. Professional portraits, military family photography, executive headshots, and fine art. Serving Killeen, Fort Cavazos, Harker Heights, and Copperas Cove.',
    url: 'https://solasgallery.com/area/killeen',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Near Killeen — Portraits, Headshots & Fine Art | Solas Gallery — Salado, TX',
    description: 'Solas Gallery in Salado, Texas — 21 minutes from Killeen. Professional portraits, military family photography, executive headshots, and fine art. Serving Killeen, Fort Cavazos, Harker Heights, and Copperas Cove.',
    images: ['/og-default.jpg'],
  },
}

export default function KilleenPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image src="/images/gallery/hero.jpg" alt="Solas Gallery" fill priority className="object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl text-cream tracking-[0.08em] leading-tight">
            Solas Gallery for Killeen
          </h1>
          <p className="font-body text-sm text-cream/50 mt-4">
            21 minutes east. Serving military families and Killeen professionals for 30 years.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-6">
            The Killeen-Salado connection
          </h2>
          <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
            <p>
              Killeen is the largest city in Bell County — 164,000 people, home
              to Fort Cavazos, and a community of military families who understand
              the value of a real portrait. Deployments, promotions, homecomings,
              growing children — these are the moments that deserve more than a
              phone camera. Solas Gallery is 21 minutes east on US-190, and
              military families have been coming here for decades.
            </p>
            <p>
              Beyond the military community, Killeen's growing professional class —
              realtors, attorneys, medical professionals, and small business owners —
              need headshots and branding photography that stands apart. Tim
              Flanagan's thirty years behind the camera make Solas the
              destination for that work.
            </p>
            <p>
              Harker Heights is 18 minutes away. Copperas Cove, 28 minutes. Both
              are well within the Solas orbit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Link href="/portraits" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Family Portraits</h3>
              <p className="font-body text-xs text-charcoal/50">Military families, homecomings, milestones.</p>
            </Link>
            <Link href="/portraits/headshots" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">Headshots</h3>
              <p className="font-body text-xs text-charcoal/50">Professional and executive portraits.</p>
            </Link>
            <Link href="/portraits/babyfaces" className="border border-stone/30 p-6 hover:border-stone/60 transition-colors">
              <h3 className="font-display text-lg text-charcoal mb-2">BabyFaces</h3>
              <p className="font-body text-xs text-charcoal/50">Newborn and child portraits.</p>
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
            Solas Gallery serves portrait and fine art clients from Killeen, Fort Cavazos,
            Harker Heights, Copperas Cove, Nolanville, and the greater Killeen metro.
            Located on Main Street in Salado, Texas 76571. Approximately 21 minutes east
            of Killeen via US-190.
          </p>
        </div>
      </section>
    </>
  )
}
