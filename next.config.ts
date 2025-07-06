import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Cloudflare Workers Configuration */
  
  // Image optimization settings for Cloudflare
  images: {
    loader: 'custom',
    loaderFile: './src/lib/cloudflare-image-loader.ts',
  },
  
  // Turbopack configuration for development
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Experimental features for Next.js 15
  experimental: {
    // Add experimental features here when needed
  },
  
  // SWC minification is enabled by default in Next.js 15
  // swcMinify option has been removed
  
  // Custom environment variables
  env: {
    // Add your custom environment variables here
    // Note: NEXT_RUNTIME is managed internally by Next.js
  },
}

export default nextConfig
