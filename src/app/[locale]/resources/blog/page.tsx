import BlogCard from '@/components/sections/BlogCard'
import HeroPages from '@/components/sections/HeroPages'

export const runtime = 'edge'
const blogs = [
  {
    id: '1',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '4',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '7',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '8',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '9',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen ">
      <HeroPages
        title="Sage Blog"
        description="Welcome to our blog, your trusted resource for navigating the complexities of healthcare. Explore insights on medical tourism, case management, and the latest trends shaping Saudi Arabia's healthcare landscape."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/resources/blog' },
        ]}
      />
      <div className="py-15 max-w-[1392px] mx-auto">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              href={`/resources/blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
