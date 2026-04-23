import type { Metadata } from 'next'
import Image from 'next/image'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Signature Portraits',
  description:
    'Signature portrait sessions by Tim Flanagan — thirty years of portraiture in Salado, Texas. Senior portraits, family portraits, headshots, and fine art commissions. Solas Gallery.',
  alternates: {
    canonical: '/portraits',
  },
  openGraph: {
    title: 'Signature Portraits | Solas Gallery — Salado, TX',
    description: 'Signature portrait sessions by Tim Flanagan — thirty years of portraiture in Salado, Texas. Senior portraits, family portraits, headshots, and fine art commissions. Solas Gallery.',
    url: 'https://solasgallery.com/portraits',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Portraits | Solas Gallery — Salado, TX',
    description: 'Signature portrait sessions by Tim Flanagan — thirty years of portraiture in Salado, Texas. Senior portraits, family portraits, headshots, and fine art commissions. Solas Gallery.',
    images: ['/og-default.jpg'],
  },
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

const sessionTypes = [
  {
    title: 'Signature Portraits',
    description:
      'The session Solas Gallery is known for. Individual or couple. One to two hours in the gallery or on location. Multiple wardrobe changes welcome. The goal is a single, definitive image — printed, framed, and ready to hang.',
    note: 'Investments begin at $500',
  },
  {
    title: 'Senior Portraits',
    description:
      'For students approaching a milestone. A relaxed session built around who they are right now — not a yearbook template. The result is a portrait their family will keep for a lifetime.',
    note: 'Investments begin at $350',
  },
  {
    title: 'BabyFaces',
    description:
      'For the very young — newborns through first birthday. Soft light, simple settings, and the kind of patience that only comes from thirty years behind a camera. Includes a portrait delivered as a finished print.',
    note: 'Investments begin at $300',
  },
  {
    title: 'Headshots',
    description:
      'Executive and professional headshots that feel like the person, not like a corporate template. Shot in the gallery with natural and studio light. Delivered digitally, ready for LinkedIn, company pages, and print.',
    note: 'Investments begin at $250',
  },
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

      {/* ═══ SESSION TYPES — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            Sessions We Offer
          </h2>
          <p className="font-body text-sm text-charcoal/60 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            Every session is shot personally by Tim Flanagan at Solas Gallery or
            on location in the Salado area. No associates, no second shooters.
          </p>
          <div className="space-y-10">
            {sessionTypes.map((session) => (
              <div
                key={session.title}
                className="border border-stone/20 p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3">
                  {session.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 leading-[1.8] mb-4">
                  {session.description}
                </p>
                <p className="font-body text-xs text-stone tracking-[0.1em]">
                  {session.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE PROCESS ═══ */}
      <section className="section-pad bg-cream border-t border-stone/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-section text-charcoal mb-16">
            The Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'A conversation about who you are and what this portrait means. We discuss wardrobe, location, and the feeling you want to walk away with.' },
              { step: '02', title: 'Session', desc: 'An unhurried experience at the gallery or on location. No assembly line. No posing scripts. Thirty years of reading people, applied to you.' },
              { step: '03', title: 'Selection', desc: 'We review the work together in the gallery — not over email. You see the images at proper scale, on a calibrated display, the way they are meant to be seen.' },
              { step: '04', title: 'Delivery', desc: 'Finished portraits printed in-house on archival media. Framing available through Salado Village Framer. Digital files included with every session.' },
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

      {/* ═══ WHAT TO EXPECT — PILLAR CONTENT ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-cream text-center mb-6">
            What to Expect
          </h2>
          <p className="font-body text-sm text-cream/50 text-center leading-relaxed mb-16 max-w-xl mx-auto">
            Questions people ask before their first session.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl text-cream mb-3">What should I wear?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Solid colors in muted tones photograph best — think charcoal, navy,
                cream, olive, or soft earth tones. Avoid logos, busy patterns, and
                bright white. Bring two or three options and we will choose together
                in the gallery. Layers add visual interest. The goal is clothing
                that lets the viewer see you, not your outfit.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">How long does a session last?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Most sessions run 60 to 90 minutes, though there is no hard clock.
                The session ends when we have the image, not when a timer goes off.
                Senior portrait sessions and family sessions may run a bit longer
                depending on the number of groupings and wardrobe changes.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">When will I see the images?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                We schedule a selection appointment within two weeks of the session.
                You will view the edited images in person at the gallery on a
                calibrated display — the same one used for print proofing. This is
                intentional. Seeing your portraits at proper scale, in proper light,
                changes how you experience them.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">What is included?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Every session includes the consultation, the session itself, the
                in-person selection appointment, and digital files of the selected
                images. Archival prints and framing are available as additions. Most
                clients leave with a finished, framed portrait ready to hang.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-cream mb-3">Can I bring family members?</h3>
              <p className="font-body text-sm text-cream/60 leading-[1.8]">
                Of course. Individual portraits within a family session are natural.
                We will do groupings and individuals as the session unfolds. For
                large families (six or more), we may suggest extending the session
                to allow enough time for every combination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCAL SEO CONTENT ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-section text-charcoal text-center mb-6">
            Portrait Sessions in Central Texas
          </h2>
          <div className="space-y-5 font-body text-sm text-charcoal/60 leading-[1.8]">
            <p>
              Solas Gallery is located on Main Street in Salado, Texas — a small
              Hill Country town halfway between Austin and Waco, just minutes from
              Interstate 35. Clients travel from Temple, Killeen, Georgetown, Round
              Rock, and greater Austin for portrait sessions.
            </p>
            <p>
              The gallery studio uses a combination of natural window light and
              controlled studio lighting, giving each session a look that feels
              authentic rather than manufactured. For clients who prefer an outdoor
              setting, Salado offers creekside locations, historic architecture, and
              Hill Country landscapes within a short drive of the gallery.
            </p>
            <p>
              Tim has been making portraits in this studio since 1995. The space,
              the light, and the process have been refined over three decades into
              something that works — not because it follows a formula, but because
              it has had time to become exactly what it needs to be.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ INQUIRY ═══ */}
      <section id="inquiry" className="section-pad bg-deep text-cream">
        <InquiryForm
          source="Signature Portraits"
          dark={true}
          headline="Begin here."
          subtext="Investments begin at $250. Inquire to begin."
          messagePlaceholder="Tell us about the portrait you envision."
        />
      </section>
    </>
  )
}
