'use client'

import Tagline from './Tagline'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'
import BlogCard from './BlogCard'

interface Blog {
  id: string
  title: string
  category: string
  image: string
  author: string
  date: string
  readTime: string
}

interface BlogSectionProps {
  heading?: string
  subheading?: string
  blogs: Blog[]
}

export default function BlogSection({
  heading = 'Tips from the Experts',
  subheading = 'Find curated travel advice from those who know Saudi best—insider tips, updates, and more.',
  blogs,
}: BlogSectionProps) {
  return (
    <section className="max-w-[1392px] mx-auto px-6 py-25">
      <div className="flex items-end justify-between mb-15">
        <div>
          <Tagline text="Blogs" />

          <h2 className="text-Primary-Black text-[48px] font-bold leading-tight pb-6">
            {heading}
          </h2>
          <p className="text-Secondary-Text text-[18px] max-w-[647px]">
            {subheading}
          </p>
        </div>
        <Link href={'/resources/blog'}>
          {' '}
          <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
            {' '}
            <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
              Explore All Blogs
            </div>
            <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
              <div className="relative shrink-0 size-6">
                <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                  <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                    <ButtonIcon strokeColor="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            href={`/resources/blog/${blog.id}`}
          />
        ))}
      </div>
    </section>
  )
}
