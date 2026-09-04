import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'
import { createLandingMetadata } from '@/lib/metadata'
import { images } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Photographer Near Austin — Portraits, Headshots & Fine Art',
  description:
    'Solas Gallery in Salado, Texas — 45 minutes north of Austin. Professional portraits, executive headshots, fine art photography, and gallery events.',
  path: '/area/austin',
  noindex: true,
  image: images.portrait.src,
  imageAlt: images.portrait.alt,
})

export default function AustinAreaPage() {
  return (
    <LandingPage
      eyebrow="Austin · 45 minutes"
      heading="Solas Gallery for Austin"
      lede="45 minutes north on I-35. A world away from the ordinary."
      heroImage={images.portrait}
      cta={{ href: '/begin', label: 'Begin your inquiry' }}
    >
      <section className="solas-page-copy">
        <h2>Why Austin clients make the drive</h2>
        <p>
          Austin has no shortage of photographers. But Solas Gallery is not a
          photography studio — it is a thirty-year creative practice housed in
          a fine art gallery on Main Street in Salado, Texas. The experience
          is different. The work is different. And the 45-minute drive north
          on I-35 is part of the appeal — you leave the city behind and arrive
          somewhere quiet, intentional, and unhurried.
        </p>
        <p>
          Austin executives, entrepreneurs, and families come to Solas for
          professional headshots that stand apart from the volume studios,
          signature portraits that become heirlooms, and fine art for the
          walls of considered homes.
        </p>
        <Link className="solas-underlink" href="/portraits">
          Portraits <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </LandingPage>
  )
}
