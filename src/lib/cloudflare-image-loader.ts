// Custom image loader for Cloudflare Workers
// Since Cloudflare Workers don't support Next.js Image Optimization API,
// we'll use a simple loader that works with static images

export default function cloudflareImageLoader({ src, width: _width, quality: _quality }: {
  src: string
  width: number
  quality?: number
}) {
  // For wireframes, we're using placeholder images, so just return the src
  // In production, you might want to use Cloudflare Images service
  // https://developers.cloudflare.com/images/

  if (src.startsWith('http')) {
    // External URL - return as is
    return src
  }

  // Local images - ensure they start with /
  const localSrc = src.startsWith('/') ? src : `/${src}`

  // For production with Cloudflare Images, you could use:
  // return `https://imagedelivery.net/your-account-hash${localSrc}/w=${width},q=${quality || 75}`

  return localSrc
}
