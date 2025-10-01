import BlogCard from '@/components/sections/BlogCard'
import HeroPages from '@/components/sections/HeroPages'

export default function BlogPage({
  data,
  singles,
}: {
  data: any
  singles: any
}) {
  return (
    <div className="min-h-screen ">
      <HeroPages {...data.HeroPages} />
      <div className="py-15 max-w-[1392px] mx-auto">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {singles.map((blog: any) => (
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
