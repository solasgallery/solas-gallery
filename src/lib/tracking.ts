export type CtaEvent = 'begin_click' | 'reserve_click' | 'tel_click' | 'cta_click'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function trackCta(event: CtaEvent, href?: string) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    cta_href: href || '',
  })
}

export function inferCtaEvent(href: string, text: string): CtaEvent | null {
  const haystack = `${href} ${text}`.toLowerCase()
  if (href.startsWith('tel:')) return 'tel_click'
  if (haystack.includes('reserve')) return 'reserve_click'
  if (href === '/begin' || href.startsWith('/begin') || haystack.includes('begin')) {
    return 'begin_click'
  }
  return null
}
