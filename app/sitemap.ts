import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_URL!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}