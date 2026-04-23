import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Visit the Gallery',
  description:
    'Visit Solas Gallery on Main Street in Salado, Texas. Fine art, portraits, and events since 1995.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Visit the Gallery | Solas Gallery — Salado, TX',
    description: 'Visit Solas Gallery on Main Street in Salado, Texas. Fine art, portraits, and events since 1995.',
    url: 'https://solasgallery.com/gallery',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit the Gallery | Solas Gallery — Salado, TX',
    description: 'Visit Solas Gallery on Main Street in Salado, Texas. Fine art, portraits, and events since 1995.',
    images: ['/og-default.jpg'],
  },
}

const interiors = [
  { src: '/images/gallery/interior-01.jpg', alt: 'Gallery wide view' },
  { src: '/images/gallery/interior-02.jpg', alt: 'Art wall detail' },
  { src: '/images/gallery/interior-03.jpg', alt: 'Gallery entrance' },
  { src: '/images/gallery/interior-04.jpg', alt: 'Framing corner' },
  { src: '/images/gallery/interior-05.jpg', alt: 'Main Street view' },
  { src: '/images/gallery/interior-06.jpg', alt: 'Gallery at golden hour' },
]

export default function GalleryPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/gallery/hero.jpg"
          alt="Solas Gallery interior, Main Street Salado"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.1em]">
            The Gallery
          </h1>
          <p className="font-body text-sm text-cream/50 tracking-[0.15em] uppercase mt-4">
            Main Street, Salado. Open to the world.
          </p>
        </div>
      </section>

      {/* ═══ EDITORIAL INTERIORS ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {interiors.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CURRENT EXHIBITION ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs text-stone tracking-[0.15em] uppercase mb-4">
            Current Exhibition
          </p>
          <h2 className="font-display text-section text-cream mb-6">
            Thirty Years of Light
          </h2>
          <p className="font-body text-sm text-cream/60 leading-relaxed">
            A retrospective selection marking three decades of image-making from
            Salado, Texas. Fine art prints, original works, and signature portraits
            — the threads of an examined creative life, gathered on the walls where
            they were made.
          </p>
        </div>
      </section>

      {/* ═══ VISIT INFO ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-display text-section text-charcoal mb-8">Visit</h2>
            <div className="space-y-6 font-body text-sm text-charcoal/70 leading-relaxed">
              <div>
                <p className="text-xs text-stone tracking-[0.15em] uppercase mb-2">Hours</p>
                <p>Tuesday – Saturday, 10 am – 5 pm</p>
                <p className="text-charcoal/40 mt-1">And by appointment</p>
              </div>
              <div>
                <p className="text-xs text-stone tracking-[0.15em] uppercase mb-2">Address</p>
                <p>2 Rock Creek Dr</p>
                <p>Salado, Texas 76571</p>
              </div>
              <div>
                <p className="text-xs text-stone tracking-[0.15em] uppercase mb-2">Contact</p>
                <p>
                  <a href="tel:+12549471881" className="hover:text-charcoal transition-colors">
                    (254) 947-1881
                  </a>
                </p>
                <p className="mt-3">
                  <a href="/portraits#inquiry" className="text-xs text-stone tracking-[0.1em] uppercase hover:text-charcoal transition-colors border-b border-stone/30 pb-0.5">
                    Send an inquiry &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto overflow-hidden min-h-[300px]">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.5!2d-97.54!3d30.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSolas%20Gallery!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </>
  )
}
