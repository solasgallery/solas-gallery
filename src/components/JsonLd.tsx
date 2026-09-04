import Script from 'next/script'

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Script
      id={`json-ld-${(data['@type'] as string || 'page').toString().toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
