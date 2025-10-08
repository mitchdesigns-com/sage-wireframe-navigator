'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}
export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface HeroSinglePage {
  id: number
  title: string
  author: string
  date: string
  readTime: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
}
export interface Blog {
  slug: string
  title: string
  category?: string
  bgImage: {
    url: string
    alternativeText: string
  }
  image: {
    url: string
    alternativeText: string
  }
  author: string
  date: string
  readTime?: string
  HeroSinglePages: HeroSinglePage
}

interface BlogCardProps {
  blog: Blog
  href: string
  news?: boolean
}

export default function BlogCard({ blog, href, news }: BlogCardProps) {
  return (
    <Link href={href} key={blog.slug} className="flex flex-col">
      <div className="h-[270px] w-full relative rounded-2xl overflow-hidden mb-4">
        {news ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${blog.image.url}`}
            alt={blog.title || 'blog image'}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${blog?.bgImage?.url || blog?.image?.url || '/images/generalImages/fallback.jpg'}`}
            alt={blog.title || 'blog image'}
            fill
            className="object-cover"
          />
        )}
      </div>
      {blog.category && (
        <span className="text-sm text-Primary-Light-Sage font-medium">
          {blog.category}
        </span>
      )}
      <h3 className="text-2xl font-bold text-Neutral-Darkest leading-snug mb-2">
        {news ? blog.HeroSinglePages.title : blog.title}
      </h3>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/images/generalImages/avatar1.png"
              alt={blog.author || 'blog author image'}
              width={24}
              height={24}
            />
          </div>
          <div className="text-sm text-Secondary-Text">
            <p>{news ? blog.HeroSinglePages.author : blog.author}</p>
            <p>
              {news ? blog.HeroSinglePages.date : blog.date} •{' '}
              {news ? blog.HeroSinglePages.readTime : blog.readTime}
            </p>
          </div>
        </div>
        <ArrowUpRight size={38} className="text-Primary-Palm" />
      </div>
    </Link>
  )
}
