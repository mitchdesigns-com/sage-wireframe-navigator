'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export interface Blog {
  id: string
  title: string
  category?: string
  image: string
  author: string
  date: string
  readTime: string
}

interface BlogCardProps {
  blog: Blog
  href: string
}

export default function BlogCard({ blog, href }: BlogCardProps) {
  return (
    <Link href={href} key={blog.id} className="flex flex-col">
      <div className="h-[270px] w-full relative rounded-2xl overflow-hidden mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      {blog.category && (
        <span className="text-sm text-Primary-Light-Sage font-medium">
          {blog.category}
        </span>
      )}
      <h3 className="text-2xl font-bold text-Neutral-Darkest leading-snug mb-2">
        {blog.title}
      </h3>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/images/generalImages/avatar1.png"
              alt={blog.author}
              width={24}
              height={24}
            />
          </div>
          <div className="text-sm text-Secondary-Text">
            <p>{blog.author}</p>
            <p>
              {blog.date} • {blog.readTime}
            </p>
          </div>
        </div>
        <ArrowUpRight size={38} className="text-Primary-Palm" />
      </div>
    </Link>
  )
}
