import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { articles, getArticle } from '@/content/journal'
import { createLandingMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  return createLandingMetadata({
    title: a.seoTitle,
    description: a.description,
    path: `/journal/${a.slug}`,
    noindex: false,
    ogImage: '/og/journal.jpg',
    imageAlt: 'A Solas Gallery hallway hung with large, hand-finished abstract work.',
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.published,
    image: `${SITE.url}/og/journal.jpg`,
    mainEntityOfPage: `${SITE.url}/journal/${a.slug}`,
    author: { '@type': 'Person', name: a.author },
    publisher: { '@type': 'LocalBusiness', '@id': `${SITE.url}/#business`, name: SITE.name },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="sg-article">
        <p className="sg-eyebrow">
          <Link href="/journal">Solas Journal</Link>
        </p>
        <h1>{a.title}</h1>
        <p className="sg-byline">By {a.author}</p>
        <div style={{ marginTop: 32 }}>
          {a.body.map((b, i) => {
            if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>
            if (b.type === 'lede') return <p className="sg-lede" key={i}>{b.text}</p>
            if (b.type === 'ul')
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )
            return <p key={i}>{b.text}</p>
          })}
        </div>
        <div className="sg-article-end">
          <Link className="sg-btn" href={a.cta.href}>
            {a.cta.label}
          </Link>
          <p style={{ marginTop: 28 }}>
            <Link className="sg-link" href="/journal">
              More from the journal
            </Link>
          </p>
        </div>
      </article>
    </>
  )
}
