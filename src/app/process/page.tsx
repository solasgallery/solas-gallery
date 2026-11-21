import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'

// The tools paragraph lives here only — never on the homepage (brand rule 2026-11-18).

const description =
  'How every Solas piece is made: directed, altered, and finished by hand in our studio in Salado, Texas. Studio original, one of one, from design consult to hung.'

const heroImage = {
  src: '/images/art/category-commission.jpg',
  alt: 'A large abstract painting of trees in green and gold, hung on a gallery wall.',
  width: 750,
  height: 750,
}

export const metadata: Metadata = createLandingMetadata({
  title: 'How Solas Art Is Made | Solas Gallery, Salado, Texas',
  description,
  path: '/process',
  noindex: false,
  ogImage: '/og/process.jpg',
  imageAlt: heroImage.alt,
})

const jsonLd = pageJsonLd({
  title: 'Our Process',
  description,
  path: '/process',
  image: '/og/process.jpg',
})

// The five steps and the price facts moved here from the homepage (quiet pass,
// 2026-11-21): the homepage now shows the step names only and links here.
const steps = [
  {
    title: 'Design consult',
    body: 'Free, online or in person. Bring the room, the photograph, or the idea you cannot stop thinking about.',
  },
  {
    title: 'Wall proof',
    body: 'You see your piece on a photograph of your own wall, with a firm price, before anything is made.',
  },
  {
    title: 'Hand-finished',
    body: 'Made and finished by hand in our studio, in Salado.',
  },
  {
    title: 'Framed',
    body: 'Framed for the piece and the room, chosen with you.',
  },
  {
    title: 'Hung',
    body: 'Delivered and hung on your wall.',
  },
]

export default function ProcessPage() {
  return (
    <>
    <JsonLd data={jsonLd} />
    <LandingPage
      eyebrow="How it is made"
      heading={
        <>
          Made by hand,
          <br />
          here.
        </>
      }
      lede="Every piece is produced and finished by hand in our studio: mixed media, archival pigment on canvas, hand-finished surfaces."
      heroImage={heroImage}
      heroCaption="Solas Studio · Salado, Texas"
      cta={{ href: '/portraits#consult', label: 'Book a design consult' }}
      secondaryCta={{ href: '/#commissions', label: 'Start a commission' }}
    >
      <section className="solas-page-copy">
        <div className="solas-measure">
          <p className="solas-label">The process</p>
          <h2>From consult to hung.</h2>
          <p>You see your piece on your own wall, at a firm price, before anything is made.</p>
          <ol className="sg-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <p>
            For portrait design, a $295 design &amp; creation fee reserves your design
            project. It covers your sitting and the creation of your images. Finished
            pieces are separate. Your first print is $395 (8×10 or 11×14), and your wall
            proof is $195, credited in full when you go ahead.
          </p>
          <Link className="solas-underlink" href="/portraits">
            Portrait design <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="solas-page-copy">
        <div className="solas-measure">
          <h2>Tools.</h2>
          <p>
            We use every tool. Camera, brush, printer, AI. No tool decides here. A person
            does. Every piece is directed, altered, and finished by hand. One of one.
          </p>
          <Link className="solas-underlink" href="/art">
            See the art <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </LandingPage>
    </>
  )
}
