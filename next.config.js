/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/gallery', destination: '/visit', permanent: true },
      { source: '/events', destination: '/gather', permanent: true },
      // Headshots moved to HUBSalado (2026-11-18): point at hubsalado.com.
      { source: '/portraits/headshots', destination: 'https://hubsalado.com', permanent: true },
      // Trade events page pulled (2026-11-19): the listings were dateless placeholders.
      { source: '/trade/events', destination: '/trade', permanent: true },
      { source: '/trade/events.html', destination: '/trade', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/trade', destination: '/trade/index.html' },
      { source: '/trade/apply', destination: '/trade/apply.html' },
      { source: '/trade/faq', destination: '/trade/faq.html' },
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
