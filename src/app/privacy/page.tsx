import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy & SMS Terms',
  description:
    'Privacy policy and SMS terms for Solas Gallery LLC and its customer-facing brands.',
  alternates: {
    canonical: '/privacy',
  },
}

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
          <a href="tel:+12549471881">(254) 947-1881</a> or email{' '}
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
      <section className="bg-deep px-6 pb-16 pt-36 text-cream md:px-12 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 font-body text-xs uppercase tracking-[0.22em] text-stone">
            Solas Gallery LLC
          </p>
          <h1 className="font-display text-4xl tracking-wide md:text-6xl">
            Privacy &amp; SMS Terms
          </h1>
          <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-cream/60">
            Effective August 20, 2026
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-16 max-w-3xl font-body text-base leading-8 text-charcoal/70">
            We value the trust you place in us. This policy explains what
            information we collect, why we use it, and the choices available to
            you—including specific terms for text-message communications.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-stone/30 pt-8">
                <h2 className="mb-5 font-display text-2xl tracking-wide text-charcoal md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 font-body text-sm leading-7 text-charcoal/70 [&_a]:border-b [&_a]:border-stone [&_a]:text-charcoal [&_a]:transition-colors hover:[&_a]:border-charcoal [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-2 [&_strong]:font-medium [&_strong]:text-charcoal [&_ul]:space-y-2">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 border-t border-stone/30 pt-8">
            <h2 className="mb-5 font-display text-2xl tracking-wide text-charcoal md:text-3xl">
              Contact us
            </h2>
            <address className="not-italic font-body text-sm leading-7 text-charcoal/70">
              Solas Gallery LLC
              <br />
              2 Rock Creek Dr
              <br />
              Salado, TX 76571
              <br />
              <a className="border-b border-stone text-charcoal" href="tel:+12549471881">
                (254) 947-1881
              </a>
              <br />
              <a className="border-b border-stone text-charcoal" href="mailto:cherie@solasgallery.com">
                cherie@solasgallery.com
              </a>
            </address>
          </section>
        </div>
      </section>
    </>
  )
}
