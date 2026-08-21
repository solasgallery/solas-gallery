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
    ]
  },
}

module.exports = nextConfig
