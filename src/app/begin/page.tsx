import type { Metadata } from 'next'
import InquiryForm from '@/components/InquiryForm'
import { createLandingMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Begin',
  description:
    'Begin a conversation with Solas Gallery in Salado, Texas — portraits, art, or an evening at the table.',
  path: '/begin',
  noindex: false,
})

export default function BeginPage() {
  return (
    <>
      <section className="solas-policy-hero">
        <p className="solas-label">Begin a conversation</p>
        <h1>
          The next
          <br />
          right thing.
        </h1>
        <p>Portraits, art, or an evening — start here.</p>
      </section>

      <section className="solas-begin">
        <InquiryForm
          source="Begin"
          headline="Begin here."
          subtext="Tell us what you are holding. We will respond within one business day."
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
