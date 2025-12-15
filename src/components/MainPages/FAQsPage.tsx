'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'

type FaqCategory = string

interface BreadcrumbItem {
  id: number
  href: string
  label: string
}

interface FaqItem {
  id: number
  question: string
  answer: string
  category: FaqCategory
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

interface FaqSectionBlock {
  __component: 'blocks.faq-section'
  id: number
  title: string
  description: string
  faqData: FaqItem[]
  breadcrumbItems: BreadcrumbItem[]
  tagline: string
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

interface ToggleButtonResource {
  __component: 'resources.toggle-button'
  id: number
  options: ToggleOption[]
}

type Block = HeroPagesBlock | FaqSectionBlock | GetInTouchBlock

interface PageData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: Block[]
  BlocksResources: ToggleButtonResource[]
}

const BLOCKS: Record<string, React.ComponentType<Block>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.get-in-touch': GetInTouch,
}

export default function FAQsPage({ data }: { data: PageData[] }) {
  const locale = useLocale()

  const [openFaq, setOpenFaq] = useState<number>(-1)
  const [currentTab, setCurrentTab] = useState<FaqCategory>(
    locale === 'ar' ? 'الكل' : 'all'
  )

  const page = data?.[0]
  const blocks = page?.blocks
  const resources = page?.BlocksResources?.[0]

  if (!page || !blocks || blocks.length === 0) return null

  const options = resources?.options || []

  const faqBlock = blocks.find(
    (b): b is FaqSectionBlock => b.__component === 'blocks.faq-section'
  )
  const faqData = faqBlock?.faqData || []

  const isAll = locale === 'ar' ? currentTab === 'الكل' : currentTab === 'all'

  const filteredFaqs = isAll
    ? faqData
    : faqData.filter((faq) => faq.category === currentTab)

  // Framer Motion variants
  const faqVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const answerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-white">
      {blocks.map((block) => {
        const Component = BLOCKS[block.__component]
        if (Component) return <Component key={block.id} {...block} />

        if (block.__component === 'blocks.faq-section') {
          return (
            <section
              key={block.id}
              className="py-8 md:py-20 bg-Secondary-Light-Scrub"
            >
              <div className="max-w-[1392px] mx-auto px-4">
                <div className="max-w-[1000px] mx-auto space-y-8 md:space-y-20">
                  <ToggleButton
                    options={options}
                    selectedValue={currentTab}
                    onChange={(val: FaqCategory) => setCurrentTab(val)}
                  />

                  <div className="border-0 space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        className="border-b border-[#D2D2D2] overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={faqVariants}
                      >
                        <button
                          className={`w-full py-5 flex items-center justify-between gap-6 text-left transition-colors cursor-pointer ${
                            locale === 'ar'
                              ? 'flex-row-reverse text-right'
                              : 'text-left'
                          }`}
                          onClick={() =>
                            setOpenFaq(openFaq === index ? -1 : index)
                          }
                        >
                          <h3
                            className={`text-black font-bold text-base md:text-lg flex-1 ${
                              locale === 'ar' ? 'text-right' : 'text-left'
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8"
                          >
                            <Plus size={32} className="text-black" />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {openFaq === index && (
                            <motion.div
                              key="content"
                              variants={answerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="pb-6"
                            >
                              <p className="text-black text-sm md:text-base leading-[1.5]">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
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
