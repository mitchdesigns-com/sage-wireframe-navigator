'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import Tagline from '../sections/Tagline'
type FaqCategory = string
interface BreadcrumbItem {
  id: number
  href: string
  label: string
}

interface ToggleOption {
  id: number
  title: string
  value: FaqCategory
}
export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}
interface HeroPagesBlock {
  __component: 'blocks.hero-pages'
  id: number
  tagline: string
  title: string
  description: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
  image: ImageData
}

interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
  breadcrumbItems: BreadcrumbItem[]
}
interface TestimonialItem {
  id: number
  tagline: string
  description: string
  author: string
  image: ImageData
}
interface TestimonialCardBlock {
  __component: 'blocks.testimonial-card'
  id: number
  Testimonials: TestimonialItem[]
}
interface ToggleButtonResource {
  __component: 'resources.toggle-button'
  id: number
  options: ToggleOption[]
}
type Block = HeroPagesBlock | GetInTouchBlock | TestimonialCardBlock
const getCardStyle = (index: number) => {
  const cardStyles = [
    {
      bg: 'bg-[#CAF48E]',
      text: 'text-[#1E1E1E]',
      tagBg: 'bg-[#70B5C4] text-white',
      tagText: '',
    },
    {
      bg: 'bg-[#013530]',
      text: 'text-white',
      tagBg: 'bg-[#5FA396] text-white',
      tagText: '',
    },
    {
      bg: 'bg-[#E2F2F1]',
      text: 'text-[#1E1E1E]',
      tagBg: 'bg-[#90B6BD] text-white',
      tagText: '',
    },
  ]
  return cardStyles[index % 3]
}
interface PageData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: Block[]
  BlocksResources: ToggleButtonResource[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BLOCKS: Record<string, React.ComponentType<any>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.get-in-touch': GetInTouch,
}
export default function TestimonialsPage({ data }: { data: PageData[] }) {
  const locale = useLocale()
  const [currentTab, setCurrentTab] = useState<FaqCategory>(
    locale === 'ar' ? 'الكل' : 'all'
  )
  const page = data?.[0]
  const blocks = page?.blocks
  const resources = page?.BlocksResources?.[0]
  if (!page || !blocks || blocks.length === 0) return null
  const options = resources?.options || []

  const isAll = locale === 'ar' ? currentTab === 'الكل' : currentTab === 'all'

  return (
    <div className="min-h-screen bg-white">
      {blocks.map((block) => {
        const Component = BLOCKS[block.__component]
        if (Component) return <Component key={block.id} {...block} />
        if (block.__component === 'blocks.testimonial-card') {
          const testimonialsList = block.Testimonials || []
          const filteredTestimonials = isAll
            ? testimonialsList
            : testimonialsList.filter(
                (item) =>
                  item.tagline?.toLowerCase() === currentTab?.toLowerCase()
              )
          return (
            <section key={block.id} className="py-8 md:py-20 bg-white">
              <div className="max-w-[1392px] mx-auto px-4">
                <div className=" space-y-8 md:space-y-20">
                  <ToggleButton
                    options={options}
                    selectedValue={currentTab}
                    onChange={(val: string) => setCurrentTab(val)}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredTestimonials.map((item, index) => {
                      const style = getCardStyle(index)
                      return (
                        <motion.div
                          key={item.id}
                          className={`relative rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[360px] ${style.bg} ${style.text}`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: (index % 2) * 0.1,
                          }}
                        >
                          <div>
                            {item.tagline && (
                              <span
                                className={`absolute -top-5 ltr:left-6 rtl:right-6`}
                              >
                                <Tagline
                                  text={item.tagline}
                                  taglineColor="#DAF7AF"
                                />{' '}
                              </span>
                            )}
                            <p className="text-xl md:text-2xl font-normal leading-[1.4] ltr:font-aeonik !rtl:font-arabic">
                              "{item.description}"
                            </p>
                          </div>
                          <div className="flex items-center gap-3 mt-8">
                            {item.image?.url && (
                              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                                <Image
                                  fill
                                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.image.url}`}
                                  alt={
                                    item.image.alternativeText ||
                                    item.author ||
                                    'Avatar'
                                  }
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                            )}
                            <span className="text-sm font-medium">
                              {item.author}
                            </span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          )
        }

        return null
      })}
    </div>
  )
}
