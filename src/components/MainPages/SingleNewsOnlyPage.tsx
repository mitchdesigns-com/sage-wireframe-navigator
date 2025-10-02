'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import BlogCard from '@/components/sections/BlogCard'
import { useTranslations } from 'next-intl'

const blogs = [
  {
    slug: '1',
    title: 'Sage Partners with Local Clinics',
    category: 'news',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    category: 'news',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    category: 'news',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '4',
    title: 'Sage Partners with Local Clinics',
    category: 'events',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    category: 'events',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    category: 'events',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
]

export default function SingleNewsOnlyPage({
  data,
  allBlogs,
}: {
  data: any
  allBlogs: any
}) {
  const t = useTranslations()
  console.log('data in single news only page', data)
  //   if (!news) {
  //     return <div className="p-8">New not found.</div>
  //   }

  return (
    <>
      <section>
        <HeroSinglePages {...data.HeroSinglePages} />

        <div className="max-w-[930px] mx-auto ">
          {' '}
          {data.firstContent && (
            <div className="mx-auto max-w-[1448px] py-10 md:py-20 md:px-4 px-4 space-y-6">
              {data.firstContent.map((block: any, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-[32px] font-bold text-[#000404] py-6"
                        >
                          {block.children.map((c: any) => c.text).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-4 text-[#000404] text-p leading-relaxed"
                        >
                          {block.children.map((c: any) => c.text).join('')}
                        </h6>
                      )
                    }
                    return null

                  case 'paragraph':
                    // skip empty paragraphs
                    if (!block.children?.[0]?.text?.trim()) return null
                    return (
                      <p
                        key={index}
                        className="text-[#000404] text-base leading-relaxed pb-4"
                      >
                        {block.children.map((c: any) => c.text).join('')}
                      </p>
                    )

                  default:
                    return null
                }
              })}
            </div>
          )}
          <div className="rounded-[40px] aspect-[930/505] relative w-full my-12">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.image.url}`}
              alt="scr header"
              fill
              className="object-cover rounded-[40px]"
            />
          </div>
          {data.secondContent && (
            <div className="mx-auto max-w-[1448px] py-10 md:py-20 md:px-4 px-4 space-y-6">
              {data.secondContent.map((block: any, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-[32px] font-bold text-[#000404] py-6"
                        >
                          {block.children.map((c: any) => c.text).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-4 text-[#000404] text-p leading-relaxed"
                        >
                          {block.children.map((c: any) => c.text).join('')}
                        </h6>
                      )
                    }
                    return null

                  case 'paragraph':
                    // skip empty paragraphs
                    if (!block.children?.[0]?.text?.trim()) return null
                    return (
                      <p
                        key={index}
                        className="text-[#000404] text-base leading-relaxed pb-4"
                      >
                        {block.children.map((c: any) => c.text).join('')}
                      </p>
                    )

                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2">
                        {block.children.map((li: any, liIndex: number) => (
                          <li key={liIndex} className="text-[#000404] text-p">
                            {li.children.map((c: any) => c.text).join('')}
                          </li>
                        ))}
                      </ul>
                    )

                  default:
                    return null
                }
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-Secondary-Scrub">
        <div className="py-20 max-w-[1390px] mx-auto w-full">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('News.moreNews')}
            </h4>
            <div className="flex ">
              {' '}
              <Link
                href="/resources/news-events"
                className="text-[#000404] font-medium text-base pe-2"
              >
                {t('News.viewAll')}
              </Link>{' '}
              <ChevronRight className="text-[#000404] w-6 h-6" />{' '}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-20">
            {allBlogs.slice(0, 3).map((blog: any) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                href={`/resources/news-events/news/${blog.slug}`}
                news={true}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
