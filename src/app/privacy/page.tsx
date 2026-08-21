import type { Metadata } from 'next'
import { createLandingMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/site'

export const metadata: Metadata = createLandingMetadata({
  title: 'Privacy & SMS Terms',
  description:
    'Privacy policy and SMS terms for Solas Gallery LLC and its customer-facing brands.',
  path: '/privacy',
  noindex: false,
})

const sections = [
  {
    title: 'Who this policy covers',
    body: (
      <p>
        This policy applies to Solas Gallery LLC and its customer-facing brands,
        including Solas Gallery, Salado Village Framer, and HUB Salado
        (collectively, “Solas,” “we,” “us,” or “our”). It describes how we
        handle information collected through our websites, forms, telephone
        calls, text messages, email, in-person interactions, and related
        services.
      </p>
    ),
  },
  {
    title: 'Information we collect',
    body: (
      <>
        <p>We may collect information that you choose to provide, such as:</p>
        <ul>
          <li>Your name, email address, mailing address, and telephone number</li>
          <li>Details about an inquiry, appointment, estimate, order, project, pickup, or event</li>
          <li>Messages, photographs, files, and other information you send to us</li>
          <li>Your communication preferences and records of consent</li>
        </ul>
        <p>
          Our websites may also collect limited technical information such as
          browser type, device type, pages visited, and referral source through
          standard website analytics and security tools.
        </p>
      </>
    ),
  },
  {
    title: 'How we use information',
    body: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Respond to inquiries and provide requested customer service</li>
          <li>Schedule appointments and communicate about estimates, orders, projects, pickups, and events</li>
          <li>Process transactions and maintain business records</li>
          <li>Operate, secure, and improve our websites and services</li>
          <li>Comply with applicable law and protect our customers, staff, and business</li>
        </ul>
      </>
    ),
  },
  {
    title: 'How we share information',
    body: (
      <>
        <p>
          We do not sell personal information. We may share information with
          service providers that help us operate our business—such as website
          hosting, customer relationship management, communications, payment,
          analytics, and security providers—only as reasonably necessary for
          them to provide those services. We may also disclose information when
          required by law or to protect legal rights and safety.
        </p>
        <p>
          <strong>
            Mobile information, including telephone numbers and SMS consent
            records, will not be shared with third parties or affiliates for
            marketing or promotional purposes.
          </strong>{' '}
          Text-message opt-in data and consent are excluded from all other
          sharing described in this policy, except with communications service
          providers needed to deliver the messages you requested.
        </p>
      </>
    ),
  },
  {
    title: 'SMS terms and consent',
    body: (
      <>
        <p>
          When you ask us to communicate by text message or verbally consent to
          receive texts, Solas Gallery LLC may send low-volume, one-to-one
          customer-service messages related to your inquiry, appointment,
          estimate, order, project, pickup, or event. We do not use purchased
          lists or send unsolicited bulk promotional messages.
        </p>
        <ul>
          <li>Message frequency varies according to your interaction with us.</li>
          <li>Message and data rates may apply.</li>
          <li>Reply <strong>STOP</strong> at any time to opt out.</li>
          <li>Reply <strong>HELP</strong> for assistance.</li>
          <li>Consent to receive text messages is not a condition of purchase.</li>
        </ul>
        <p>
          For help, call{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> or email{' '}
          <a href="mailto:cherie@solasgallery.com">cherie@solasgallery.com</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Retention and security',
    body: (
      <p>
        We retain information only as long as reasonably necessary for the
        purposes described above, including customer service, business records,
        legal obligations, and dispute resolution. We use reasonable
        administrative, technical, and physical safeguards, but no method of
        electronic storage or transmission is completely secure.
      </p>
    ),
  },
  {
    title: 'Your choices',
    body: (
      <p>
        You may ask to review, correct, or delete personal information we hold
        about you, subject to applicable legal and recordkeeping requirements.
        You may unsubscribe from email using the link in the message and may
        stop text messages at any time by replying STOP.
      </p>
    ),
  },
  {
    title: 'Children’s privacy',
    body: (
      <p>
        Our services are not directed to children under 13, and we do not
        knowingly collect personal information from children under 13. If you
        believe a child has provided us personal information, please contact us
        so we can address it.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our services or legal obligations change.
        The effective date below identifies the current version.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="solas-policy-hero">
        <p className="solas-label">Solas Gallery LLC</p>
        <h1>
          Privacy &amp;
          <br />
          SMS Terms
        </h1>
        <p>Effective August 20, 2026</p>
      </section>

      <div className="solas-policy-body">
        <p className="solas-policy-intro">
          We value the trust you place in us. This policy explains what
          information we collect, why we use it, and the choices available to
          you—including specific terms for text-message communications.
        </p>

        {sections.map((section, index) => (
          <section className="solas-policy-section" key={section.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{section.title}</h2>
              <div className="solas-policy-copy">{section.body}</div>
            </div>
          </section>
        ))}

        <section className="solas-policy-section">
          <span>10</span>
          <div>
            <h2>Contact us</h2>
            <div className="solas-policy-copy">
              <address className="not-italic">
                Solas Gallery LLC
                <br />
                2 Rock Creek Dr
                <br />
                Salado, TX 76571
                <br />
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                <br />
                <a href="mailto:cherie@solasgallery.com">cherie@solasgallery.com</a>
              </address>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
