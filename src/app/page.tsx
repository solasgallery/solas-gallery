import Image from 'next/image'
import Link from 'next/link'

/* ── Four Doors Data ── */
const doors = [
  {
    href: '/art',
    label: 'Art',
    caption: 'For the walls of a considered home.',
    image: '/images/home/door-art.jpg',
  },
  {
    href: '/portraits',
    label: 'Portraits',
    caption: 'The image that defines a life.',
    image: '/images/home/door-portraits.jpg',
  },
  {
    href: '/events',
    label: 'Events',
    caption: 'An evening worth clearing your calendar for.',
    image: '/images/home/door-events.jpg',
  },
  {
    href: '/story',
    label: 'Story',
    caption: 'Thirty years of light and shadow.',
    image: '/images/home/door-story.jpg',
  },
]

/* ── Featured Art Data (placeholder — replace with real pieces) ── */
const featuredArt = [
  {
    title: 'Pennyweight',
    medium: 'Pigment print on archival cotton',
    image: '/images/art/pennyweight.jpg',
  },
  {
    title: 'Shadow of His Wing',
    medium: 'Pigment print on archival cotton',
    image: '/images/art/shadow-wing.jpg',
  },
  {
    title: 'Tree Memory',
    medium: 'Pigment print on archival cotton',
    image: '/images/art/tree-memory.jpg',
  },
]

/* ── Upcoming Events (placeholder — replace with real events) ── */
const upcomingEvents = [
  {
    date: 'April 2026',
    title: 'Gallery Opening Reception',
    description: 'Spring exhibition featuring new fine art works.',
    link: '#',
  },
  {
    date: 'May 2026',
    title: 'JAM Night with Tim Flanagan',
    description: 'Live music, stories, and laughter on Main Street.',
    link: '#',
  },
]

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-deep">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/home/hero-fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video/hero-ambient.mp4" type="video/mp4" />
        </video>

        {/* Fallback image (shown if no video) */}
        <div className="absolute inset-0 bg-deep/40" />

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.15em] uppercase">
            Solas Gallery
          </h1>
          <p className="font-body text-sm md:text-base text-cream/60 tracking-[0.2em] uppercase mt-4">
            Salado, Texas &middot; Est. 1995
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-cream/30 animate-pulse" />
        </div>
      </section>

      {/* ═══════════════ FOUR DOORS ═══════════════ */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {doors.map((door) => (
            <Link
              key={door.href}
              href={door.href}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={door.image}
                alt={door.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-deep/30 group-hover:bg-deep/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h2 className="font-display text-3xl md:text-4xl text-cream tracking-[0.15em] uppercase">
                  {door.label}
                </h2>
                <p className="font-body text-sm text-cream/0 group-hover:text-cream/80 transition-all duration-500 mt-3 max-w-xs">
                  {door.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ FEATURED ART ═══════════════ */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-4">
            For the walls of a considered home.
          </h2>
          <p className="font-body text-sm text-charcoal/50 text-center tracking-[0.1em] uppercase mb-16">
            Selected works
          </p>
          <div className="editorial-grid">
            {featuredArt.map((piece) => (
              <Link key={piece.title} href="/art" className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-lg text-charcoal tracking-wide">
                  {piece.title}
                </h3>
                <p className="font-body text-xs text-charcoal/50 mt-1">
                  {piece.medium}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/art" className="btn-quiet">
              View all works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ PORTRAIT TEASER ═══════════════ */}
      <section className="relative bg-deep text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/portraits/hero.jpg"
            alt="Portrait session"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 section-pad max-w-4xl mx-auto text-center">
          <h2 className="font-display text-section text-cream mb-6">
            Thirty years. One pursuit.
          </h2>
          <p className="font-display text-xl md:text-2xl text-cream/70 italic mb-10 leading-relaxed">
            The image that defines a life.
          </p>
          <Link href="/portraits" className="btn-quiet text-cream border-cream/40 hover:border-cream">
            Signature Portraits &rarr;
          </Link>
        </div>
      </section>

      {/* ═══════════════ UPCOMING EVENTS ═══════════════ */}
      <section className="section-pad bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-4">
            Upcoming
          </h2>
          <p className="font-body text-sm text-charcoal/50 text-center tracking-[0.1em] uppercase mb-16">
            Events at the gallery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.title}
                className="border border-stone/30 p-8 md:p-10 transition-colors hover:border-stone/60"
              >
                <p className="font-body text-xs text-stone tracking-[0.15em] uppercase mb-4">
                  {evt.date}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3">
                  {evt.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 mb-6 leading-relaxed">
                  {evt.description}
                </p>
                <a
                  href={evt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quiet text-charcoal"
                >
                  Reserve your place &rarr;
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/events" className="btn-quiet">
              All events &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
