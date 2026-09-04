import type { MetadataRoute } from 'next'
import { indexableRoutes, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
