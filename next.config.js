/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/gallery', destination: '/visit', permanent: true },
      { source: '/events', destination: '/gather', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/trade', destination: '/trade/index.html' },
      { source: '/trade/apply', destination: '/trade/apply.html' },
      { source: '/trade/faq', destination: '/trade/faq.html' },
      { source: '/trade/events', destination: '/trade/events.html' },
      // Universal Studio lives in its own Vercel project (solasgallery/universal-studio)
      { source: '/universal-studio', destination: 'https://studio.solasgallery.com/universal-studio' },
      { source: '/universal-studio/:path*', destination: 'https://studio.solasgallery.com/universal-studio/:path*' },
    ]
  },
}

module.exports = nextConfig
