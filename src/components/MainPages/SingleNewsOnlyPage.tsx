'use client'
import { motion } from 'framer-motion'
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
  if ('text' in node) return node.text
  if ('children' in node) return node.children.map(extractText).join('')
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
  const news = data[0]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <>
      <section>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSinglePages {...news.HeroSinglePages} />
        </motion.div>

        {/* Content */}
        <div className="max-w-[930px] mx-auto">
          {news.firstContent && (
            <div className="mx-auto max-w-[1448px] pt-8 md:py-20 md:px-4 px-4 space-y-2 md:space-y-6">
              {news.firstContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    const headingClass =
                      block.level === 4
                        ? 'text-2xl md:text-[32px] font-bold text-[#000404] py-2'
                        : 'mt-2 md:mt-4 text-[#000404] text-base md:text-lg leading-relaxed'

                    return (
                      <motion.div
                        key={index}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {block.level === 4 ? (
                          <h4 className={headingClass}>
                            {block.children.map(extractText).join('')}
                          </h4>
                        ) : (
                          <h6 className={headingClass}>
                            {block.children.map(extractText).join('')}
                          </h6>
                        )}
                      </motion.div>
                    )

                  case 'paragraph':
                    if (
                      !block.children.some(
                        (c) => 'text' in c && c.text?.trim()?.length > 0
                      )
                    )
                      return null
                    return (
                      <motion.p
                        key={index}
                        className="text-[#000404] text-base md:text-lg leading-relaxed"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {block.children.map(extractText).join('')}
                      </motion.p>
                    )

                  default:
                    return null
                }
              })}
            </div>
          )}

          {/* Featured Image */}
          <motion.div
            className="px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="rounded-[40px] aspect-[396/263] md:aspect-[930/505] relative w-full my-8 md:my-12">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${news.image.url}`}
                alt="scr header"
                fill
                className="object-cover rounded-[40px] w-full"
              />
            </div>
          </motion.div>

          {/* Second Content */}
          {news.secondContent && (
            <div className="mx-auto max-w-[1448px] py-8 md:py-20 md:px-4 px-4 space-y-2 md:space-y-6">
              {news.secondContent.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    const headingClass2 =
                      block.level === 4
                        ? 'text-2xl md:text-[32px] font-bold text-[#000404] py-2'
                        : 'mt-2 md:mt-4 text-[#000404] text-base md:text-lg leading-relaxed'

                    return (
                      <motion.div
                        key={index}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {block.level === 4 ? (
                          <h4 className={headingClass2}>
                            {block.children.map(extractText).join('')}
                          </h4>
                        ) : (
                          <h6 className={headingClass2}>
                            {block.children.map(extractText).join('')}
                          </h6>
                        )}
                      </motion.div>
                    )

                  case 'paragraph':
                    if (
                      !block.children.some(
                        (c) => 'text' in c && c.text?.trim()?.length > 0
                      )
                    )
                      return null
                    return (
                      <motion.p
                        key={index}
                        className="text-[#000404] text-base md:text-lg leading-relaxed"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {block.children.map(extractText).join('')}
                      </motion.p>
                    )

                  case 'list':
                    return (
                      <motion.ul
                        key={index}
                        className="list-disc ps-6 space-y-2"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {block.children.map((li, liIndex) => {
                          if ('children' in li) {
                            return (
                              <li
                                key={liIndex}
                                className="text-[#000404] text-base md:text-lg leading-relaxed"
                              >
                                {li.children.map(extractText).join('')}
                              </li>
                            )
                          }
                          return null
                        })}
                      </motion.ul>
                    )

                  default:
                    return null
                }
              })}
            </div>
          )}
        </div>
      </section>

      {/* More News Section */}
      <section className="bg-Secondary-Scrub">
        <motion.div
          className="py-8 md:py-20 max-w-[1390px] mx-auto w-full px-4"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end w-full">
            <h4 className="text-2xl md:text-[32px] font-bold text-[#000404]">
              {t('News.moreNews')}
            </h4>
            <div className="flex">
              <Link
                href="/resources/news-events"
                className="text-[#000404] font-medium text-sm md:text-base pe-2"
              >
                {t('News.viewAll')}
              </Link>
              <ChevronRight className="text-[#000404] w-6 h-6 rtl:rotate-180" />
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-8 md:pt-20"
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {allBlogs.slice(0, 3).map((blog) => (
              <motion.div
                key={blog.slug}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard
                  blog={blog}
                  href={`/resources/news-events/news/${blog.slug}`}
                  news={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
