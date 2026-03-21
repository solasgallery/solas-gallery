import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Signature Portraits',
  description:
    'Thirty years of portrait photography. A portrait is not a photograph — it is a decision. Solas Gallery, Salado, Texas.',
}

const portraits = [
  '/images/portraits/sig-01.jpg',
  '/images/portraits/sig-02.jpg',
  '/images/portraits/sig-03.jpg',
  '/images/portraits/sig-04.jpg',
  '/images/portraits/sig-05.jpg',
  '/images/portraits/sig-06.jpg',
  '/images/portraits/sig-07.jpg',
  '/images/portraits/sig-08.jpg',
]

export default function PortraitsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        <Image
          src="/images/portraits/hero.jpg"
          alt="A portrait session in progress"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.1em]">
            Signature Portraits
          </h1>
          <p className="font-display text-lg md:text-xl text-cream/60 italic mt-4 max-w-lg">
            A portrait is not a photograph. It is a decision.
          </p>
        </div>
      </section>

      {/* ═══ PORTRAIT GALLERY ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {portraits.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={src}
                  alt={`Signature portrait ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIM BIO SECTION ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/portraits/tim-bio.jpg"
              alt="Tim Flanagan"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-section text-cream mb-6">Tim Flanagan</h2>
            <div className="space-y-4 font-body text-sm text-cream/70 leading-relaxed">
              <p>
                Thirty years behind a camera will teach you one thing worth knowing:
                the best photographs happen in the space between who someone is and
                who they are becoming.
              </p>
              <p>
                Tim Flanagan has been making portraits from his gallery on Main Street
                in Salado, Texas since 1995. The work has never been about lighting
                ratios or lens choices — it has always been about the relationship.
                The trust. The willingness to be seen.
              </p>
              <p>
                A Solas portrait is not rushed. It is not a transaction. It is a
                conversation that begins before the camera is lifted and continues
                long after the image is on the wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-section text-charcoal mb-16">
            The Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'A conversation about who you are and what this portrait means.' },
              { step: '02', title: 'Session', desc: 'An unhurried experience at the gallery, guided by thirty years of trust.' },
              { step: '03', title: 'Selection', desc: 'We review the work together and choose the images that matter.' },
              { step: '04', title: 'Delivery', desc: 'Finished portraits, printed and framed to archival standards.' },
            ].map((s) => (
              <div key={s.step}>
                <p className="font-body text-xs text-stone tracking-[0.2em] uppercase mb-3">{s.step}</p>
                <h3 className="font-display text-lg text-charcoal mb-2">{s.title}</h3>
                <p className="font-body text-xs text-charcoal/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INQUIRY ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-section text-cream mb-4">Begin here.</h2>
          <p className="font-body text-sm text-cream/50 mb-10">
            Investments begin at $500. Inquire to begin.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6 text-left"
          >
            <div>
              <label className="font-body text-xs text-cream/40 tracking-[0.1em] uppercase block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-cream/20 focus:border-cream/60 outline-none py-3 font-body text-sm text-cream transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs text-cream/40 tracking-[0.1em] uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-cream/20 focus:border-cream/60 outline-none py-3 font-body text-sm text-cream transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs text-cream/40 tracking-[0.1em] uppercase block mb-2">
                Tell us about the portrait you envision
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-cream/20 focus:border-cream/60 outline-none py-3 font-body text-sm text-cream transition-colors resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-quiet text-cream border-cream/40 hover:border-cream"
              >
                Send inquiry &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
