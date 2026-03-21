import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Solas Gallery — Fine Art & Portraits | Salado, Texas',
    template: '%s | Solas Gallery',
  },
  description:
    'Fine art photography, signature portraits, and gallery events on Main Street in Salado, Texas. Established 1995.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solasgallery.com',
    siteName: 'Solas Gallery',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
