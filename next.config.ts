import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    // Enable modern ES features transpilation for better performance
    esmExternals: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3845',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Reduce bundle size by excluding unused locales in moment.js if used
}

export default withNextIntl(nextConfig)
