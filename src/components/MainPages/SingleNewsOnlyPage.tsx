'use client'
import BlogCard from '@/components/sections/BlogCard'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { NewsArticle } from '../../types/newsEvents'

export default function SingleNewsOnlyPage({
  data,
  allBlogs,
}: {
  data: NewsArticle[]
  allBlogs: NewsArticle[]
}) {
  const t = useTranslations()
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
              {data.firstContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-[32px] font-bold text-[#000404] py-6"
                        >
                          {block.children.map((c) => c.text).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-4 text-[#000404] text-p leading-relaxed"
                        >
                          {block.children.map((c) => c.text).join('')}
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
                        {block.children.map((c) => c.text).join('')}
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
              {data.secondContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-[32px] font-bold text-[#000404] py-6"
                        >
                          {block.children.map((c) => c.text).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-4 text-[#000404] text-p leading-relaxed"
                        >
                          {block.children.map((c) => c.text).join('')}
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
                        {block.children.map((c) => c.text).join('')}
                      </p>
                    )

                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2">
                        {block.children.map((li, liIndex: number) => (
                          <li key={liIndex} className="text-[#000404] text-p">
                            {li.children.map((c) => c.text).join('')}
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
            {allBlogs.slice(0, 3).map((blog) => (
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
