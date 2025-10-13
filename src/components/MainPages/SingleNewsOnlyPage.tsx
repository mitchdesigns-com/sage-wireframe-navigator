'use client'
import BlogCard from '@/components/sections/BlogCard'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {
  NewsArticle,
  RichTextChild,
  RichTextElement,
} from '../../types/newsEvents'
function extractText(node: RichTextChild | RichTextElement): string {
  if ('text' in node) {
    return node.text
  }
  if ('children' in node) {
    return node.children.map(extractText).join('')
  }
  return ''
}
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
        <HeroSinglePages {...data[0].HeroSinglePages} />

        <div className="max-w-[930px] mx-auto ">
          {' '}
          {data[0].firstContent && (
            <div className="mx-auto max-w-[1448px] pt-8 md:py-20 md:px-4 px-4 space-y-2 md:space-y-6">
              {data[0].firstContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-2xl md:text-[32px] font-bold text-[#000404] py-2"
                        >
                          {block.children.map(extractText).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-2 md:mt-4 text-[#000404] text-base md:text-p leading-relaxed"
                        >
                          {block.children.map(extractText).join('')}
                        </h6>
                      )
                    }
                    return null

                  case 'paragraph':
                    if (
                      !block.children.some(
                        (c) => 'text' in c && c.text?.trim()?.length > 0
                      )
                    )
                      return null
                    return (
                      <p
                        key={index}
                        className="text-[#000404] text-base md:text-p leading-relaxed"
                      >
                        {block.children.map(extractText).join('')}
                      </p>
                    )

                  default:
                    return null
                }
              })}
            </div>
          )}
          <div className="px-4 md:px-0">
            <div className="rounded-[40px] aspect-[396/263] md:aspect-[930/505] relative w-full my-8 md:my-12 ">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0].image.url}`}
                alt="scr header"
                fill
                className="object-cover rounded-[40px] w-full"
              />
            </div>
          </div>
          {data[0].secondContent && (
            <div className="mx-auto max-w-[1448px] py-8 md:py-20 md:px-4 px-4 space-y-2 md:space-y-6">
              {data[0].secondContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-2xl md:text-[32px] font-bold text-[#000404] py-2"
                        >
                          {block.children.map(extractText).join('')}
                        </h4>
                      )
                    }
                    if (block.level === 6) {
                      return (
                        <h6
                          key={index}
                          className="mt-2 md:mt-4 text-[#000404] text-base md:text-p leading-relaxed"
                        >
                          {block.children.map(extractText).join('')}
                        </h6>
                      )
                    }
                    return null

                  case 'paragraph':
                    if (
                      !block.children.some(
                        (c) => 'text' in c && c.text?.trim()?.length > 0
                      )
                    )
                      return null
                    return (
                      <p
                        key={index}
                        className="text-[#000404] text-base md:text-p leading-relaxed"
                      >
                        {block.children.map(extractText).join('')}
                      </p>
                    )

                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2">
                        {block.children.map((li, liIndex) => {
                          // Type guard to ensure 'li' has a 'children' property
                          if ('children' in li) {
                            return (
                              <li
                                key={liIndex}
                                className="text-[#000404] text-base md:text-p leading-relaxed"
                              >
                                {li.children.map(extractText).join('')}
                              </li>
                            )
                          }
                          return null // Or handle RichTextChild directly if needed
                        })}
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
        <div className="py-8 md:py-20 max-w-[1390px] mx-auto w-full px-4 md:px-0">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-2xl md:text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('News.moreNews')}
            </h4>
            <div className="flex ">
              {' '}
              <Link
                href="/resources/news-events"
                className="text-[#000404] font-medium text-sm md:text-base pe-2"
              >
                {t('News.viewAll')}
              </Link>{' '}
              <ChevronRight className="text-[#000404] w-6 h-6" />{' '}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-8 md:pt-20">
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
