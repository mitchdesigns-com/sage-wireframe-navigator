import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_FrontEnd_URL || 'https://www.sage.sa'
  const locales = ['en', 'ar']
  const currentDate = new Date()

  // Define all static routes
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

  // Generate sitemap entries for all locales and routes
  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/services') ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
