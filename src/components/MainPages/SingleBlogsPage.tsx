'use client'
import Link from 'next/link'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import BlogCard from '@/components/sections/BlogCard'
import { useTranslations } from 'next-intl'
import ButtonIcon from '@/components/svg/ButtonIcon'
import { BlogPost } from '../../types/blog'

// function calculateReadTime(text: string) {
//   const words = text.trim().split(/\s+/).length
//   const minutes = Math.ceil(words / 200)
//   return `${minutes} min read`
// }

export default function SingleBlogsPage({
  data,
  allBlogs,
}: {
  data: BlogPost
  allBlogs: BlogPost[]
}) {
  const t = useTranslations()

  return (
    <>
      <section>
        <HeroSinglePages {...data.HeroSinglePages} />

        <div className="max-w-[930px] mx-auto py-15">
          {' '}
          {data.content && (
            <div className="mx-auto max-w-[1448px] py-10 md:py-20 md:px-4 px-4 space-y-6">
              {data.content.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4) {
                      return (
                        <h4
                          key={index}
                          className="text-[32px] font-bold text-[#000404]"
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
                        className="text-[#000404] text-p leading-relaxed"
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
                    <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                      {t('Blog.viewAll')}
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
