import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Art for Home Walls',
  description:
    'Fine art prints, original works, commissioned art, and large format wall art by Tim Flanagan. Solas Gallery, Salado, Texas.',
}

const categories = [
  {
    title: 'Fine Art Prints',
    description: 'Signed, limited-edition giclée prints on archival cotton rag.',
    image: '/images/art/category-prints.jpg',
  },
  {
    title: 'Original Works',
    description: 'One-of-a-kind photographic and mixed-media originals.',
    image: '/images/art/category-originals.jpg',
  },
  {
    title: 'Commissioned Art',
    description: 'A bespoke piece created for your space and your story.',
    image: '/images/art/category-commission.jpg',
  },
  {
    title: 'Large Format Wall Art',
    description: 'Statement pieces scaled for architecture.',
    image: '/images/art/category-large.jpg',
  },
]

const featuredWorks = [
  {
    title: 'Pennyweight',
    medium: 'Pigment print on archival cotton · 28 × 20',
    image: '/images/art/pennyweight.jpg',
  },
  {
    title: 'Shadow of His Wing III',
    medium: 'Pigment print on archival cotton · 26 × 26',
    image: '/images/art/shadow-wing.jpg',
  },
  {
    title: 'Tree Memory',
    medium: 'Pigment print on archival cotton · 23.5 × 23.5',
    image: '/images/art/tree-memory.jpg',
  },
  {
    title: 'Patch',
    medium: 'Pigment print on archival cotton · 27 × 23',
    image: '/images/art/patch.jpg',
  },
  {
    title: 'Shadow of His Wing VII',
    medium: 'Pigment print on archival cotton · 30 × 21.5',
    image: '/images/art/shadow-wing-7.jpg',
  },
  {
    title: 'Shadow of His Wing IV',
    medium: 'Pigment print on archival cotton · 24 × 20',
    image: '/images/art/shadow-wing-4.jpg',
  },
]

export default function ArtPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/art/hero.jpg"
          alt="Art displayed in a considered home"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.12em]">
            Art for Home Walls
          </h1>
          <p className="font-body text-sm text-cream/50 tracking-[0.15em] uppercase mt-4">
            Collected, not consumed
          </p>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-display text-lg text-charcoal tracking-wide">{cat.title}</h3>
              <p className="font-body text-xs text-charcoal/50 mt-1 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SELECTED WORKS ═══ */}
      <section className="section-pad bg-cream border-t border-stone/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-16">
            Selected Works
          </h2>
          <div className="editorial-grid">
            {featuredWorks.map((work) => (
              <div key={work.title} className="group">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-lg text-charcoal">{work.title}</h3>
                <p className="font-body text-xs text-charcoal/50 mt-1">{work.medium}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMISSION PROCESS ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-section text-cream mb-6">
            Commissioned Work
          </h2>
          <p className="font-body text-sm text-cream/60 leading-relaxed max-w-2xl mx-auto mb-16">
            A commissioned piece begins with a conversation about your space, your
            sensibility, and the feeling you want to live with. From there, a vision
            takes shape — and the work follows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { step: '01', title: 'Conversation', desc: 'We discuss your space and vision.' },
              { step: '02', title: 'Vision', desc: 'A concept takes shape around your life.' },
              { step: '03', title: 'Creation', desc: 'The finished work, delivered and installed.' },
            ].map((s) => (
              <div key={s.step}>
                <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-3">{s.step}</p>
                <h3 className="font-display text-xl text-cream mb-2">{s.title}</h3>
                <p className="font-body text-sm text-cream/50">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-cream/40 mt-14 tracking-wide">
            Commissions begin at $1,000 and range to $10,000 depending on scale and medium.
          </p>
        </div>
      </section>

      {/* ═══ FRAMING NOTE ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm text-charcoal/50 leading-relaxed">
            Every piece deserves a frame considered with the same care as the work itself.
            Custom framing is available through our sister business,{' '}
            <a
              href="https://saladovillageframer.com"
              className="text-stone hover:text-charcoal transition-colors border-b border-stone/40 hover:border-charcoal pb-px"
            >
              Salado Village Framer
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
