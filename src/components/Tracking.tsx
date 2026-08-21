'use client'

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { inferCtaEvent, trackCta } from '@/lib/tracking'

const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export function Tracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const link = target?.closest?.('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const text = link.textContent || ''
      const name = inferCtaEvent(href, text)
      if (name) trackCta(name, href)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <Analytics />
}

export function GtmNoscript() {
  if (!gtmId) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
