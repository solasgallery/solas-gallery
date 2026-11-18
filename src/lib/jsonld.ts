import { SITE } from './site'

/** Shared business identity used across all page schemas. */
const businessId = `${SITE.url}/#business`

const baseAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: SITE.street,
  addressLocality: SITE.city,
  addressRegion: SITE.region,
  postalCode: SITE.postalCode,
  addressCountry: 'US',
}

const baseOrganization = {
  '@type': 'LocalBusiness' as const,
  '@id': businessId,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  address: baseAddress,
}

type PageJsonLdInput = {
  /** Page title (used for name when no override). */
  title: string
  /** Page description. */
  description: string
  /** Path without domain, e.g. '/portraits'. */
  path: string
  /** Override image URL (relative to site root). */
  image?: string
  /** Additional schema properties to merge. */
  extra?: Record<string, unknown>
}

/**
 * Build a WebPage JSON-LD object that references the main business entity.
 * Every interior page gets at least this.
 */
export function pageJsonLd({
  title,
  description,
  path,
  image = '/solas-og.jpg',
  extra = {},
}: PageJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE.url}${path}`,
    image: `${SITE.url}${image}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    about: { '@id': businessId },
    ...extra,
  }
}

/** Portraits / headshots / babyfaces service schema. */
export function portraitServiceJsonLd({
  title,
  description,
  path,
  image = '/solas-og.jpg',
}: PageJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: `${SITE.url}${path}`,
    image: `${SITE.url}${image}`,
    provider: baseOrganization,
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    serviceType: 'Portrait Photography',
  }
}

/** Event venue schema for /events/venue-rental. */
export function venueJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'Solas Gallery — Event Venue',
    description:
      'An intimate art gallery venue on Main Street in Salado, Texas. Weddings, receptions, and private events for up to 50 guests.',
    url: `${SITE.url}/events/venue-rental`,
    image: `${SITE.url}/solas-og.jpg`,
    address: baseAddress,
    telephone: SITE.phoneDisplay,
    maximumAttendeeCapacity: 50,
  }
}

/** Geo-area landing page schema (noindex, but still structured). */
export function areaJsonLd({
  title,
  description,
  path,
  areaName,
}: PageJsonLdInput & { areaName: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: `${SITE.url}${path}`,
    image: `${SITE.url}/solas-og.jpg`,
    provider: baseOrganization,
    areaServed: {
      '@type': 'City',
      name: areaName,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    serviceType: 'Portrait Photography and Fine Art',
  }
}
