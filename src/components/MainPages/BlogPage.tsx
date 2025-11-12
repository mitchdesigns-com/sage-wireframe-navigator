import BlogCard from '@/components/sections/BlogCard'
import HeroPages from '@/components/sections/HeroPages'
import { BlogPageData, BlogPost } from '../../types/blog'

interface BlogPageProps {
  data: BlogPageData
  singles: BlogPost[]
}

export default function BlogPage({ data, singles }: BlogPageProps) {
  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />

      <div className="py-8 md:py-15 max-w-[1392px] mx-auto  px-4">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
          {singles.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog.HeroSinglePages}
              href={`/resources/blog/${blog.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
