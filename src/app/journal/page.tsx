import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { articles } from '@/content/journal'
import { createLandingMetadata } from '@/lib/metadata'
import { pageJsonLd } from '@/lib/jsonld'

const description =
  'The Solas Journal: craft notes from Tim and Cherie Flanagan on portrait design, commissioning art, design proofs, and caring for canvas in Texas heat. Salado.'

export const metadata: Metadata = createLandingMetadata({
  title: 'Solas Journal | Art & Portrait Notes from Salado, TX',
  description,
  path: '/journal',
  noindex: false,
  ogImage: '/og/journal.jpg',
  imageAlt: 'A Solas Gallery hallway hung with large, hand-finished abstract work.',
})

export default function JournalIndex() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          title: 'Solas Journal',
          description,
          path: '/journal',
          image: '/og/journal.jpg',
        })}
      />
      <section className="sg-article">
        <p className="sg-eyebrow">Solas Journal</p>
        <h1>Notes from the studio.</h1>
        <p className="sg-lede">
          Plain, practical writing from Tim and Cherie Flanagan about making and living with
          art.
        </p>
        <ul className="sg-journal-list">
          {articles.map((a) => (
            <li key={a.slug}>
              <h2>
                <Link href={`/journal/${a.slug}`}>{a.title}</Link>
              </h2>
              <p>{a.description}</p>
              <span className="sg-byline">By {a.author}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
