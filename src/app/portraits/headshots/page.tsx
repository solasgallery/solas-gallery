import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Headshots — Executive & Corporate Portraits',
  description:
    'Professional headshot photography at Solas Gallery in Salado, Texas. Executive portraits, corporate headshots, LinkedIn photos, and personal branding by Tim Flanagan. Serving Austin, Temple, Killeen, Round Rock, and Central Texas.',
  alternates: {
    canonical: '/portraits/headshots',
  },
  openGraph: {
    title: 'Professional Headshots — Executive & Corporate Portraits | Solas Gallery — Salado, TX',
    description: 'Professional headshot photography at Solas Gallery in Salado, Texas. Executive portraits, corporate headshots, LinkedIn photos, and personal branding by Tim Flanagan. Serving Austin, Temple, Killeen, Round Rock, and Central Texas.',
    url: 'https://solasgallery.com/portraits/headshots',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots — Executive & Corporate Portraits | Solas Gallery — Salado, TX',
    description: 'Professional headshot photography at Solas Gallery in Salado, Texas. Executive portraits, corporate headshots, LinkedIn photos, and personal branding by Tim Flanagan. Serving Austin, Temple, Killeen, Round Rock, and Central Texas.',
    images: ['/og-default.jpg'],
  },
}

export default function HeadshotsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/portraits/headshots-hero.jpg"
          alt="Professional headshot session at Solas Gallery"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-6">
            Solas Gallery &middot; Salado, Texas
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream tracking-[0.08em] leading-tight">
            Professional Headshots
          </h1>
          <p className="font-display text-lg text-cream/60 italic mt-4 max-w-lg">
            The portrait that precedes you into every room.
          </p>
        </div>
      </section>

      {/* What Sets This Apart */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl text-charcoal mb-6">
              Not a ten-minute headshot mill.
            </h2>
            <div className="space-y-4 font-body text-sm text-charcoal/60 leading-relaxed">
              <p>
                At Solas Gallery, a headshot session is a directed, professional
                experience — not an assembly line. Tim Flanagan has been creating
                executive portraits for thirty years, and the difference shows in
                every image.
              </p>
              <p>
                You get professional lighting designed for your face, wardrobe
                guidance before the session, multiple looks and expressions, and
                retouched files delivered within one week — optimized for LinkedIn,
                your company website, and print.
              </p>
              <p>
                The gallery is located on Main Street in Salado, Texas — a quiet,
                unhurried environment 45 minutes from Austin, 17 minutes from Temple,
                and 21 minutes from Killeen. Worth the drive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/portraits/headshot-${i}.jpg`}
                  alt={`Professional headshot example ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-deep text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-cream text-center mb-14">
            Headshots for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Executives & Leadership', desc: 'CEOs, founders, partners, and senior leaders who need a portrait that conveys authority and approachability.' },
              { title: 'Corporate Teams', desc: 'Consistent, on-brand headshots for your entire organization. We host groups at the gallery or come to your office.' },
              { title: 'Attorneys & Physicians', desc: 'Professional portraits for firm websites, hospital directories, and practice marketing.' },
              { title: 'Entrepreneurs & Speakers', desc: 'Personal branding imagery for websites, social media, book jackets, and speaking engagements.' },
              { title: 'LinkedIn & Professional Profiles', desc: 'Clean, polished headshots that make your digital first impression count.' },
              { title: 'Real Estate & Financial Professionals', desc: 'Agent headshots, team photos, and marketing portraits that build trust before the first handshake.' },
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
            Schedule your headshot session.
          </h2>
          <p className="font-body text-sm text-charcoal/50 mb-8">
            Investments begin at $350. Inquire for corporate team rates.
          </p>
          <Link
            href="/portraits"
            className="inline-block font-display text-sm tracking-[0.12em] uppercase border-b border-stone pb-1 text-charcoal hover:border-charcoal transition-colors"
          >
            Begin your inquiry &rarr;
          </Link>
        </div>
      </section>

      {/* Local SEO text block */}
      <section className="px-6 md:px-12 lg:px-24 py-14 bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs text-charcoal/30 leading-relaxed text-center">
            Solas Gallery provides professional headshot photography in Salado, Texas,
            serving clients from Austin, Round Rock, Georgetown, Temple, Killeen,
            Cedar Park, Pflugerville, Belton, Harker Heights, and all of Central Texas.
            Located on Main Street in Salado, 76571.
          </p>
        </div>
      </section>
    </>
  )
}
