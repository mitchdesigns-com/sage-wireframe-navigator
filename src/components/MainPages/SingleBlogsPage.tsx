'use client'
import BlogCard from '@/components/sections/BlogCard'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import ButtonIcon from '@/components/svg/ButtonIcon'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
// Import specific types for content blocks
import {
  BlogContent,
  BlogPost,
  ListBlock,
  ListItem,
  ParagraphBlock,
  TextChild,
} from '../../types/blog'

// function calculateReadTime(text: string) {
//   const words = text.trim().split(/\s+/).length
//   const minutes = Math.ceil(words / 200)
//   return `${minutes} min read`
// }
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
function extractText(node: TextChild | ListItem): string {
  if ('text' in node) {
    return node.text
  }
  if ('children' in node) {
    return node.children.map(extractText).join('')
  }
  return ''
}
export default function SingleBlogsPage({
  data,
  allBlogs,
}: {
  data: BlogPost
  allBlogs: BlogPost[]
}) {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <>
      <section>
        <HeroSinglePages {...data.HeroSinglePages} />
        <motion.div
          className="max-w-[930px] mx-auto py-8 md:py-15"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {data.content && (
            <div className="mx-auto max-w-[1448px] py-0 md:py-20 md:px-4 px-4 space-y-4 md:space-y-6">
              {/* FIX 1: Replaced 'any' with the more specific 'ContentBlock' type */}
              {data.content.map((block: BlogContent, index: number) => {
                let contentElement = null

                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      contentElement = (
                        <h4
                          key={index}
                          className="text-xl md:text-[32px] font-bold text-[#000404]"
                        >
                          {block.children.map(extractText).join('')}
                        </h4>
                      )
                    } else if (block.level === 6) {
                      contentElement = (
                        <h6
                          key={index}
                          className="mt-4 text-[#000404] text-base md:text-lg leading-relaxed"
                        >
                          {block.children.map(extractText).join('')}
                        </h6>
                      )
                    }
                    break

                  case 'paragraph':
                    // FIX 2: Replaced 'any' with 'TextChild' for the child 'c'
                    if (
                      (block as ParagraphBlock).children.some(
                        (c: TextChild) =>
                          'text' in c && c.text?.trim()?.length > 0
                      )
                    ) {
                      contentElement = (
                        <p
                          key={index}
                          className="text-[#000404] text-base md:text-lg leading-relaxed"
                        >
                          {block.children.map(extractText).join('')}
                        </p>
                      )
                    }
                    break

                  case 'list':
                    contentElement = (
                      <ul key={index} className="list-disc ps-6 space-y-2">
                        {/* FIX 3: Replaced 'any' with 'ListItem' for the list item 'li' */}
                        {(block as ListBlock).children.map(
                          (li: ListItem, liIndex: number) => {
                            if ('children' in li) {
                              return (
                                <li
                                  key={liIndex}
                                  className="text-[#000404] text-base md:text-lg"
                                >
                                  {li.children.map(extractText).join('')}
                                </li>
                              )
                            }
                            return null
                          }
                        )}
                      </ul>
                    )
                    break

                  default:
                    break
                }

                return contentElement ? (
                  <motion.div key={index} variants={itemVariants}>
                    {contentElement}
                  </motion.div>
                ) : null
              })}
            </div>
          )}
        </motion.div>
      </section>
      {allBlogs?.length > 2 && (
        <section className="bg-Secondary-Scrub">
          <div className="py-25 max-w-[1390px] mx-auto w-full">
            <div className="flex justify-between items-end w-full">
              <h4 className="text-[32px] font-bold text-[#000404] ">
                {' '}
                {t('Blog.moreNews')}
              </h4>
              <div className="flex ">
                <Link href={'/resources/blog'}>
                  {' '}
                  <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                    {' '}
                    <div className="ltr:font-aeonik-bold !rtl:font-arabic text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                      {t('Blog.viewAll')}
                    </div>
                    <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                      <div className="relative shrink-0 size-6">
                        <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                          <div
                            className={`flex-none ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                          >
                            <ButtonIcon strokeColor="white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{' '}
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-15">
              {allBlogs
                ?.slice(0, 3)
                .map((blog) => (
                  <BlogCard
                    key={blog.slug}
                    blog={blog.HeroSinglePages}
                    href={`/resources/blog/${blog.slug}`}
                  />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
