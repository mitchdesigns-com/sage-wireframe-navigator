import { MetadataRoute } from 'next'

const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://www.sage.sa'

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString()
  const changeFrequency: ChangeFrequency = 'weekly'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/cookies',
    '/how-it-works',
    '/our-network',
    '/privacy',
    '/terms',
    '/visit-saudi',
    '/resources',
    '/resources/blog',
    '/resources/case-studies',
    '/resources/certifications',
    '/resources/csr',
    '/resources/faqs',
    '/resources/guides',
    '/resources/news-events',
    '/resources/webinars',
    '/services',
    '/services/businesses',
    '/services/businesses/concierge',
    '/services/businesses/consultation',
    '/services/businesses/healthcare',
    '/services/individual',
    '/services/individual/concierge',
    '/services/individual/healthcare',
    '/services/organizations',
    '/services/organizations/concierge',
    '/services/organizations/consultation',
    '/services/organizations/healthcare',
    '/careers',
  ]

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const path = route || ''

    return {
      url: `${WEBSITE_HOST_URL}/en${path}`,
      lastModified: currentDate,
      changeFrequency: path === '' ? 'daily' : changeFrequency,
      priority: path === '' ? 1.0 : path.includes('/services') ? 0.9 : 0.8,
      alternates: {
        languages: {
          en: `${WEBSITE_HOST_URL}/en${path}`,
          ar: `${WEBSITE_HOST_URL}/ar${path}`,
        },
      },
    }
  })

  return routes
}
