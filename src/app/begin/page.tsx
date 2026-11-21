import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import JsonLd from '@/components/JsonLd'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'
import { SITE } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Start a Commission or Portrait | Solas Gallery, Salado',
  description:
    'Start a portrait, a commission from your images, a FOLIO album or a studio original with Solas Gallery in Salado, Texas. Tell us what you are holding.',
  path: '/begin',
  noindex: false,
  ogImage: '/og/commissions.jpg',
})

const jsonLd = pageJsonLd({
  title: 'Begin a Conversation',
  description:
    'Begin a conversation with Solas Gallery in Salado, Texas about a portrait, a commission from your images, a FOLIO album, or a studio original.',
  path: '/begin',
})

export default function BeginPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="solas-policy-hero">
        <p className="solas-label">Begin a conversation</p>
        <h1>
          The next
          <br />
          right thing.
        </h1>
        {/* Moved from the homepage commissions panel (quiet pass, 2026-11-21). */}
        <p className="sg-begin-lede">
          A photograph, a place, a memory you can only describe. We transform it by hand
          into a single piece that exists nowhere else, or bind a body of work into a{' '}
          <Link href="/folio">FOLIO</Link>, an heirloom album made to be kept.
        </p>
        <p>A portrait, a commission, a FOLIO, or a studio original — start here.</p>
      </section>

      <section className="solas-begin">
        <InquiryForm
          source="Begin"
          headline="Begin here."
          subtext="Tell us what you are holding."
          messagePlaceholder="What do you have in mind?"
          submitLabel="Begin"
        />
        <p className="solas-form-subtext" style={{ marginTop: 48 }}>
          Or call{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
        </p>
      </section>
    </>
  )
}
