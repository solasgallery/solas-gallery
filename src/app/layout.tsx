import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { GtmNoscript, Tracking } from '@/components/Tracking'
import { SITE } from '@/lib/site'
import { DATE_REVALIDATE_SECONDS, sittingsLine, upcomingSittings } from '@/lib/dates'
import './globals.css'
import './makeover.css'

// Fonts load via a preconnected Google Fonts <link> (display=swap).
// next/font/google failed on Vercel's build machine (font fetch), so it is not used.
const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap'

// Dated elements (announcement bar) are filtered per request window, not per build.
export const revalidate = DATE_REVALIDATE_SECONDS

const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s | Solas Gallery — Salado, TX',
  },
  description: SITE.description,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Framed portraits hung around a doorway in the Solas Gallery.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og/home.jpg'],
  },
  verification: {
    google: 'c_SsYTYO3P2VZcJrlGmw28Xei0LJVM0AUHkfJ_Xf74o',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ArtGallery', 'LocalBusiness'],
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  image: `${SITE.url}/og/home.jpg`,
  description: SITE.description,
  foundingDate: SITE.established,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: 'US',
  },
  telephone: SITE.phoneDisplay,
  url: SITE.url,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHours: SITE.openingHours,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '17:00',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sittings = upcomingSittings()
  const announce = sittings.length ? sittingsLine(sittings, 'monthDay') : null
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
      </head>
      <body>
        <GtmNoscript />
        <Tracking />
        <div className="solas-site">
          <Nav announce={announce} />
          <main>{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
