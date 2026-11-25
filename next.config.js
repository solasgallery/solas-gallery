/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/gallery', destination: '/visit', permanent: true },
      // Events, venue rental and /gather moved to HUBSalado (2026-11-21). Permanent.
      { source: '/events/venue-rental', destination: 'https://www.hubsalado.com/venue-rental', permanent: true },
      { source: '/events/venue-rental/:path*', destination: 'https://www.hubsalado.com/venue-rental', permanent: true },
      { source: '/events', destination: 'https://www.hubsalado.com/events', permanent: true },
      { source: '/events/:path*', destination: 'https://www.hubsalado.com/events', permanent: true },
      { source: '/gather', destination: 'https://www.hubsalado.com/events', permanent: true },
      { source: '/gather/:path*', destination: 'https://www.hubsalado.com/events', permanent: true },
      { source: '/trade/events', destination: 'https://www.hubsalado.com/events', permanent: true },
      { source: '/trade/events.html', destination: 'https://www.hubsalado.com/events', permanent: true },
      // Headshots moved to HUBSalado (2026-11-18).
      { source: '/portraits/headshots', destination: 'https://www.hubsalado.com', permanent: true },
      // Thin city landing pages consolidated (2026-11-21): one real page for the visit.
      { source: '/area', destination: '/visit', permanent: true },
      { source: '/area/:path*', destination: '/visit', permanent: true },
      // One trade page (2026-11-25, mirrors the Framer): the application form and FAQ are retired;
      // enroll is by email or phone. 301s, as on the Framer.
      { source: '/trade/apply', destination: '/trade#enroll', statusCode: 301 },
      { source: '/trade/apply.html', destination: '/trade#enroll', statusCode: 301 },
      { source: '/trade/faq', destination: '/trade', statusCode: 301 },
      { source: '/trade/faq.html', destination: '/trade', statusCode: 301 },
      { source: '/trade/index.html', destination: '/trade', statusCode: 301 },
      // Short link for the Killarney event (2026-11-19). Temporary (307) so it can be repointed.
      { source: '/killarney', destination: 'https://buytickets.at/hubsalado/2496909', permanent: false },
    ]
  },
  async rewrites() {
    return [
      // Universal Studio lives in its own Vercel project (solasgallery/universal-studio)
      { source: '/universal-studio', destination: 'https://studio.solasgallery.com/universal-studio' },
      { source: '/universal-studio/:path*', destination: 'https://studio.solasgallery.com/universal-studio/:path*' },
      // Private family pages (Family Archive) live in their own static Vercel project (solas-collections).
      // Unlisted, noindex; published per family from the Collection Desk.
      { source: '/c/:path*', destination: 'https://solas-collections.vercel.app/c/:path*' },
    ]
  },
}

module.exports = nextConfig
