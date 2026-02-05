import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://www.sage.sa'
  const currentDate = new Date().toISOString()

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

  const urlEntries = staticRoutes
    .map((route) => {
      const priority = route === '' ? 1.0 : route.includes('/services') ? 0.9 : 0.8
      const changefreq = route === '' ? 'daily' : 'weekly'

      return `  <url>
    <loc>${baseUrl}${route}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar${route}" />
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
