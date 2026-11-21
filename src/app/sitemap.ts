import type { MetadataRoute } from 'next'
import { articles } from '@/content/journal'
import { indexableRoutes, SITE } from '@/lib/site'

// Static pages plus journal articles. No dated events live on this site (they moved to
// HUBSalado), so nothing here expires.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE.url : `${SITE.url}${path}`,
    changeFrequency,
    priority,
  }))
  const posts = articles.map((a) => ({
    url: `${SITE.url}/journal/${a.slug}`,
    lastModified: new Date(a.published),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  return [...pages, ...posts]
}
