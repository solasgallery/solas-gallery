import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Gather',
  description:
    'Openings, long-table lunches, music, and evenings at Solas Gallery in Salado, Texas.',
  path: '/gather',
  noindex: false,
  image: images.gather.src,
  imageAlt: images.gather.alt,
})

export default function GatherPage() {
  return (
    <LandingPage
      eyebrow="The Saturday Table"
      heading={
        <>
          Come for the art.
          <br />
          Stay for the people.
        </>
      }
      lede="Openings, long-table lunches, music, and the sort of conversation that follows you home."
      heroImage={images.gather}
      heroCaption="A gathering at Solas"
      cta={{ href: '/begin', label: 'See what is gathering' }}
    >
      <section className="solas-gather">
        <div className="solas-gather-copy">
          <p className="solas-label">A place to come alive</p>
          <h2>An evening worth clearing the calendar for.</h2>
          <p>
            The gallery hosts openings, music, and private evenings. The space
            itself — art on the walls, warm light, Main Street at the door — is
            part of what people come for.
          </p>
          <Link className="solas-underlink" href="/events/venue-rental">
            Host an evening <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <img src={images.gather.src} alt={images.gather.alt} />
      </section>
    </LandingPage>
  )
}
