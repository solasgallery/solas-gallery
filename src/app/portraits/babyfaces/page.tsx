import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { portraitServiceJsonLd } from '@/lib/jsonld'
import { SITE } from '@/lib/site'

// BabyFaces, rebuilt on the shared LandingPage layout (Hermès pass, 2026-11-18).
// "Portraits from $350" is carried over from the old page — awaiting Tim's
// confirmation of the price and what it includes (see gallery STATUS.md).

const description =
  'BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas. Heirloom-quality baby portraits, milestone portraits, and family photography by Tim Flanagan. Serving Austin, Temple, Georgetown, and Central Texas.'

export const metadata: Metadata = {
  title: 'BabyFaces — Newborn & Child Portrait Photography',
  description,
  alternates: {
    canonical: '/portraits/babyfaces',
  },
  openGraph: {
    title: 'BabyFaces — Newborn & Child Portrait Photography | Solas Gallery — Salado, TX',
    description,
    url: 'https://solasgallery.com/portraits/babyfaces',
    type: 'website',
    images: [{ url: '/solas-og.jpg', width: 1200, height: 630, alt: 'Solas Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BabyFaces — Newborn & Child Portrait Photography | Solas Gallery — Salado, TX',
    description,
    images: ['/solas-og.jpg'],
  },
}

const jsonLd = portraitServiceJsonLd({
  title: 'BabyFaces — Newborn & Child Portrait Photography',
  description:
    'BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas. Heirloom-quality baby portraits, milestone portraits, and family photography by Tim Flanagan.',
  path: '/portraits/babyfaces',
})

const kinds = [
  {
    title: 'Newborn',
    desc: 'Best within the first 14 days. Soft wraps, natural sleep poses, quiet studio light. The portrait that captures who they were at the very beginning.',
  },
  {
    title: 'Milestone',
    desc: 'Sitting up at 6 months. Standing at 9. The big first birthday. Each milestone is its own portrait — a record of who they are becoming.',
  },
  {
    title: 'Children & Siblings',
    desc: 'Toddlers, young children, brothers and sisters together. Relaxed, directed, and designed to capture personality — not just a smile.',
  },
]

export default function BabyFacesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <LandingPage
        eyebrow="A Solas Gallery experience"
        heading="BabyFaces"
        lede="Tiny faces. Timeless portraits."
        heroImage={{ src: '/images/portraits/babyfaces-hero.jpg', alt: 'BabyFaces newborn portrait' }}
        heroCaption="BabyFaces · Salado, Texas"
        cta={{ href: '/begin', label: 'Begin your inquiry' }}
        secondaryCta={{ href: `tel:${SITE.phoneTel}`, label: SITE.phoneDisplay }}
      >
        <section className="solas-page-copy">
          <div className="sg-baby-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="sg-baby-tile">
                <Image
                  src={`/images/portraits/babyface-${i}.jpg`}
                  alt={`BabyFaces portrait ${i}`}
                  fill
                  sizes="(max-width: 760px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="solas-page-copy">
          <div className="solas-measure">
            <h2>Not a photo session. A portrait sitting.</h2>
            <p>
              BabyFaces is our dedicated newborn and child portrait experience. These are not
              snapshots with backdrops and props — they are heirloom portraits made with the
              same lighting, care, and artistry that has defined Tim Flanagan&rsquo;s work for
              thirty years.
            </p>
            <p>
              Every sitting is unhurried and gentle, designed entirely around your
              child&rsquo;s comfort and rhythm. We work with natural and studio light, classic
              posing, and the patience that only comes from decades of experience with tiny
              subjects.
            </p>
            <p>
              The result is the kind of portrait that grandparents frame, children grow up
              seeing on the wall, and families keep for generations.
            </p>
          </div>
        </section>

        <section className="solas-page-copy">
          <h2>BabyFaces sittings</h2>
          <ul className="sg-kinds">
            {kinds.map((kind) => (
              <li key={kind.title}>
                <h3>{kind.title}</h3>
                <p>{kind.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="solas-page-copy">
          <div className="solas-measure">
            <h2>Begin a BabyFaces portrait.</h2>
            <p>
              Portraits from $350. Newborn sittings are best arranged during the third
              trimester.
            </p>
            <Link className="solas-underlink" href="/begin">
              Begin your inquiry <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <p className="sg-seo-line">
          BabyFaces newborn and child portrait photography at Solas Gallery in Salado, Texas,
          serving Central Texas.
        </p>
      </LandingPage>
    </>
  )
}
