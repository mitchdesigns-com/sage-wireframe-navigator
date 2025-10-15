'use client'

import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

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
  const [openFaq, setOpenFaq] = useState<number>(-1)
  const [currentTab, setCurrentTab] = useState<FaqCategory>('all')

  const page = data?.[0]
  const blocks = page?.blocks
  const resources = page?.BlocksResources?.[0]

  if (!page || !blocks || blocks.length === 0) {
    return null
  }

  const options = resources?.options || []

  const faqBlock = blocks.find(
    (b): b is FaqSectionBlock => b.__component === 'blocks.faq-section'
  )
  const faqData = faqBlock?.faqData || []

  const filteredFaqs =
    currentTab === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === currentTab)

  return (
    <div className="min-h-screen bg-white">
      {blocks.map((block) => {
        const Component = BLOCKS[block.__component]
        if (Component) {
          // The 'block' prop is now fully typed.
          return <Component key={block.id} {...block} />
        }

        // Check for the specific block type to render it.
        if (block.__component === 'blocks.faq-section') {
          return (
            <section
              key={block.id}
              className="py-8 md:py-20 bg-Secondary-Light-Scrub"
            >
              <div className="max-w-[1392px] mx-auto px-4 md:px-0">
                <div className="max-w-[768px] mx-auto space-y-8 md:space-y-20">
                  <ToggleButton
                    options={options}
                    selectedValue={currentTab}
                    onChange={(val: FaqCategory) => setCurrentTab(val)}
                  />
                  <div className="border-0">
                    {filteredFaqs.map((faq, index) => (
                      <div key={faq.id} className="border-b border-[#D2D2D2]">
                        <button
                          className="w-full py-5 flex items-center justify-between gap-6 text-left transition-colors cursor-pointer"
                          onClick={() =>
                            setOpenFaq(openFaq === index ? -1 : index)
                          }
                        >
                          <h3 className="text-black font-bold text-base md:text-lg flex-1">
                            {faq.question}
                          </h3>
                          <div
                            className={`w-8 h-8 transition-transform ${
                              openFaq === index ? 'rotate-45' : ''
                            }`}
                          >
                            <Plus size={32} className="text-black" />
                          </div>
                        </button>
                        {openFaq === index && (
                          <div className="pb-6">
                            <p className="text-black text-sm md:text-base leading-[1.5]">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
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
