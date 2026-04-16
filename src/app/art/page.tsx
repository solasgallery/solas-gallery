import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Art for Home Walls',
  description:
    'Fine art prints, original works, commissioned art, and large-format wall art by Tim Flanagan. A guide to choosing, sizing, and living with art. Solas Gallery, Salado, Texas.',
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

const sizingGuide = [
  { label: 'Above a console or nightstand', range: '16 × 20 to 20 × 24', note: 'Intimate scale. Best viewed up close.' },
  { label: 'Over a sofa or bed', range: '30 × 40 to 40 × 60', note: 'The piece should span roughly two-thirds of the furniture width.' },
  { label: 'Statement wall or stairwell', range: '48 × 60 and larger', note: 'Scaled for architecture. Commands a room from across the space.' },
  { label: 'Gallery grouping', range: 'Mixed sizes', note: 'Three to five pieces arranged with 2–3 inches between frames.' },
]

const printMedia = [
  {
    name: 'Archival Cotton Rag',
    detail: 'Museum-grade, 100% cotton paper with a matte, textured surface. The standard for fine art photography. No optical brighteners — the print will not yellow or shift over decades.',
  },
  {
    name: 'Giclée on Canvas',
    detail: 'Pigment ink on poly-cotton canvas, stretched on gallery-wrap bars. No glass needed. Suited to large-format pieces where weight and glare are considerations.',
  },
  {
    name: 'Metallic Paper',
    detail: 'A pearlescent base that gives images luminous depth. Works especially well with high-contrast compositions and dark-field subjects.',
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

      {/* ═══ HOW TO CHOOSE ART — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-cream border-t border-stone/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs text-stone tracking-[0.15em] uppercase text-center mb-4">
            A Guide
          </p>
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            How to Choose Art for Your Home
          </h2>
          <p className="font-body text-sm text-charcoal/60 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            Choosing art is personal, and there is no formula. But after thirty years
            of helping people find the right piece for the right wall, a few principles
            hold true.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Start with the room, not the art.</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Stand in the space and notice what is already happening — the light,
                the palette, the materials. A dark, moody hallway calls for something
                different than a sun-washed living room. The art should feel like it
                was always meant to be there, not like it arrived by accident.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Choose what you want to live with.</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                The piece you buy will be on your wall for years, possibly decades.
                It should not be a trend or a talking point — it should be something
                that reveals more of itself over time. The best art grows quieter the
                longer you live with it, and you notice something new when you least
                expect to.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Scale matters more than you think.</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                The most common mistake is hanging something too small. A piece that
                looks bold leaning against a studio wall can disappear on a twelve-foot
                wall in a living room. When in doubt, go larger. A single commanding
                piece is almost always more effective than a cluster of small ones.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Consider the light.</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Where and how light hits a piece changes everything. Direct sunlight
                will cause glare on glass-framed work and fade unprotected prints
                over time. Matte finishes and canvas wraps handle bright rooms more
                gracefully. Museum glass eliminates reflections while blocking UV — it
                is worth every penny for a piece you plan to keep for life.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Trust your response.</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                If a piece stops you — if it makes you feel something you cannot quite
                name — pay attention. That reaction is the entire point. Art that
                matches your sofa is decoration. Art that changes the way a room
                feels is something else entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SIZING REFERENCE ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-section text-cream text-center mb-6">
            Sizing Reference
          </h2>
          <p className="font-body text-sm text-cream/50 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            The right size depends on the wall, the furniture below it, and how
            much breathing room you want around the piece.
          </p>
          <div className="space-y-8">
            {sizingGuide.map((item) => (
              <div
                key={item.label}
                className="border border-cream/10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
              >
                <div>
                  <p className="font-display text-lg text-cream">{item.label}</p>
                </div>
                <div>
                  <p className="font-body text-sm text-cream/70">{item.range}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-cream/40 leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-cream/30 text-center mt-10">
            All sizes in inches. Custom sizes available for any piece in the collection.
          </p>
        </div>
      </section>

      {/* ═══ PRINT MEDIA GUIDE ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            Print Media &amp; Materials
          </h2>
          <p className="font-body text-sm text-charcoal/60 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            Every piece at Solas Gallery is printed in-house on a Canon imagePROGRAF
            PRO-4000 — a 44-inch wide-format printer built for archival fine art
            reproduction. The choice of medium shapes the character of the finished work.
          </p>
          <div className="space-y-10">
            {printMedia.map((medium) => (
              <div key={medium.name}>
                <h3 className="font-display text-xl text-charcoal mb-3">{medium.name}</h3>
                <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                  {medium.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-stone/20">
            <h3 className="font-display text-xl text-charcoal mb-3">A note on longevity</h3>
            <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
              Archival pigment prints, properly framed and hung away from direct UV
              exposure, have a display life measured in generations — not years. The
              inks are rated to resist fading for over a century under typical indoor
              conditions. This is not a poster. It is a piece of art meant to outlast
              the home it hangs in.
            </p>
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
              { step: '01', title: 'Conversation', desc: 'We discuss your space, your aesthetic, and the mood you want to achieve.' },
              { step: '02', title: 'Vision', desc: 'A concept takes shape — subject, scale, palette, and medium are defined together.' },
              { step: '03', title: 'Creation', desc: 'The finished work is printed, framed if desired, and delivered or installed.' },
            ].map((s) => (
              <div key={s.step}>
                <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-3">{s.step}</p>
                <h3 className="font-display text-xl text-cream mb-2">{s.title}</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-cream/40 mt-14 tracking-wide">
            Commissions begin at $1,000 and range to $10,000 depending on scale and medium.
          </p>
        </div>
      </section>

      {/* ═══ CARING FOR YOUR ART ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            Caring for Fine Art Prints
          </h2>
          <div className="space-y-10 mt-12">
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Hanging</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Center the piece at eye level — roughly 57 inches from the floor to
                the middle of the work. Over furniture, leave 6 to 8 inches of space
                between the top of the furniture and the bottom of the frame. Use
                two hooks spaced apart for stability, especially with larger pieces.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Light exposure</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Avoid hanging directly opposite south-facing windows. Archival inks
                resist fading, but prolonged direct sunlight will affect any print
                over time. If the location receives strong light, consider museum
                glass — it filters 99% of UV while remaining virtually invisible.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Cleaning</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                For glass-framed pieces, use a soft microfiber cloth dampened with
                glass cleaner — spray the cloth, not the glass. For canvas wraps,
                a dry microfiber cloth or soft brush is sufficient. Never use
                household cleaning sprays directly on unglazed prints.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Humidity and temperature</h3>
              <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
                Paper-based prints are sensitive to moisture. Maintain normal indoor
                humidity (30–50%) and avoid hanging in bathrooms or above fireplaces
                where heat and moisture fluctuate. A climate-controlled interior is
                the best environment for any work on paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FRAMING NOTE ═══ */}
      <section className="section-pad bg-cream border-t border-stone/20">
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

      {/* ═══ INQUIRY FORM ═══ */}
      <section className="section-pad bg-deep text-cream">
        <InquiryForm
          source="Art for Home Walls"
          dark={true}
          headline="Inquire about a piece."
          subtext="Tell us what you are drawn to, or describe the space you are looking to fill. We will respond within one business day."
          messagePlaceholder="Describe the piece or space you have in mind."
        />
      </section>
    </>
  )
}
