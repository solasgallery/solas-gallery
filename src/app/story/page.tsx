import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Thirty years of light and shadow. The story of Tim and Cherie Flanagan, Solas Gallery, and a life built on Main Street in Salado, Texas.',
  alternates: {
    canonical: '/story',
  },
  openGraph: {
    title: 'Our Story | Solas Gallery — Salado, TX',
    description: 'Thirty years of light and shadow. The story of Tim and Cherie Flanagan, Solas Gallery, and a life built on Main Street in Salado, Texas.',
    url: 'https://solasgallery.com/story',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | Solas Gallery — Salado, TX',
    description: 'Thirty years of light and shadow. The story of Tim and Cherie Flanagan, Solas Gallery, and a life built on Main Street in Salado, Texas.',
    images: ['/og-default.jpg'],
  },
}

export default function StoryPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-deep">
        {/* Video or image hero */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/story/hero-fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/video/story-ambient.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-deep/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-display text-hero text-cream tracking-[0.1em]">
            Our Story
          </h1>
          <p className="font-display text-lg md:text-xl text-cream/60 italic mt-4">
            Thirty years of light and shadow.
          </p>
        </div>
      </section>

      {/* ═══ TIM'S ORIGIN STORY ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Image column */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden sticky top-32">
              <Image
                src="/images/story/tim-portrait.jpg"
                alt="Tim Flanagan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-3">
            <h2 className="font-display text-section text-charcoal mb-8">Tim Flanagan</h2>
            <div className="space-y-5 font-body text-sm text-charcoal/70 leading-[1.8]">
              <p>
                I picked up a camera in 1995 because I thought I could see something
                other people missed. I was probably wrong about that. But I kept
                shooting anyway, and somewhere along the way the camera became the
                way I understood the world.
              </p>
              <p>
                Solas Gallery started as a small portrait studio on Main Street in
                Salado, Texas — a town of maybe 2,000 people in the Hill Country
                between Austin and Waco. It was not an obvious place to build a
                creative life. But Cherie and I chose it, and it chose us back.
              </p>
              <p>
                Over thirty years, the work expanded. Portraits became fine art.
                Fine art became events. Events became community. The gallery became
                a place where people come not just to buy something for their walls,
                but to experience something that slows them down.
              </p>
              <p>
                I still shoot every session myself. I still print in-house. I still
                believe that a photograph — the right photograph, made with care and
                intention — can outlast everything else we make.
              </p>
              <p>
                The word <em>Solas</em> is Irish for light. That was the whole idea.
                Follow the light. See what it reveals. Make something worth keeping.
              </p>
              {/* TIM: Replace this placeholder with your actual origin story in your own voice.
                   Stream-of-consciousness, honest, personal. This is your section. */}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHERIE ═══ */}
      <section className="section-pad bg-cream border-t border-stone/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="font-display text-section text-charcoal mb-6">Cherie Flanagan</h2>
            <p className="font-body text-sm text-charcoal/70 leading-[1.8]">
              Behind every image that leaves this gallery is Cherie — the one who
              keeps the operation running, the clients cared for, and the details
              right. She is the other half of everything Solas has become. The
              gallery would not exist without her, and neither would most of the
              good decisions Tim has made in thirty years.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/story/cherie.jpg"
              alt="Cherie Flanagan"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══ SOLAS MEANING ═══ */}
      <section className="section-pad bg-deep text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-6xl md:text-8xl text-cream/20 mb-6">Solas</p>
          <p className="font-body text-sm text-cream/60 tracking-[0.15em] uppercase mb-6">
            Irish &middot; noun
          </p>
          <p className="font-display text-2xl md:text-3xl text-cream italic">
            Light.
          </p>
        </div>
      </section>

      {/* ═══ THE CAMPUS VISION ═══ */}
      <section className="section-pad bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-section text-charcoal mb-6">
            A creative campus on Main Street.
          </h2>
          <p className="font-body text-sm text-charcoal/60 leading-[1.8]">
            Today, Solas Gallery sits at the center of a small creative ecosystem:
            fine art and portraiture in the gallery, custom framing at{' '}
            <a
              href="https://saladovillageframer.com"
              className="text-stone hover:text-charcoal transition-colors border-b border-stone/40 hover:border-charcoal pb-px"
            >
              Salado Village Framer
            </a>
            , live music and storytelling through{' '}
            <a
              href="https://saladolamplighter.com"
              className="text-stone hover:text-charcoal transition-colors border-b border-stone/40 hover:border-charcoal pb-px"
            >
              Village Lamplighter
            </a>
            , and a community that keeps showing up. It all started with one camera
            and one small town. Thirty years later, the light is still good.
          </p>
        </div>
      </section>
    </>
  )
}
