'use client'

import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import ToggleButton from '@/components/sections/ToggleButton'
import { FAQPage, FAQPageResponse } from '../../types/faqPage'

const BLOCKS: Record<string, React.ComponentType<FAQPageResponse>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.get-in-touch': GetInTouch,
}

type TabType =
  | 'all'
  | 'general'
  | 'individuals'
  | 'businesses'
  | 'organizations'

interface ToggleOption {
  id: string | number
  title: string
  value: TabType
}

export default function FAQsPage({ data }: { data: FAQPage[] }) {
  const page = data?.[0]
  const blocks = page?.blocks
  const resources = page?.BlocksResources?.[0]

  // Hooks must be called unconditionally
  const [openFaq, setOpenFaq] = useState(-1)
  const [currentTab, setCurrentTab] = useState<TabType>('all')

  if (!blocks || blocks.length === 0) {
    return null
  }

  const options: ToggleOption[] =
    resources?.options?.map((opt) => ({
      id: opt.id,
      title: opt.title,
      value: opt.value,
    })) || []

  const faqBlock = blocks.find((b) => b.__component === 'blocks.faq-section')
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
          return <Component key={block.id} {...block} />
        }

        if (block.__component === 'blocks.faq-section') {
          return (
            <section key={block.id} className="py-20 bg-Secondary-Light-Scrub">
              <div className="max-w-[1392px] mx-auto">
                <div className="max-w-[768px] mx-auto space-y-20">
                  <ToggleButton
                    options={options}
                    selectedValue={currentTab}
                    onChange={(val) => setCurrentTab(val as TabType)}
                  />

                  <div className="border-0 ">
                    {filteredFaqs.map((faq, index: number) => (
                      <div key={faq.id} className="border-b border-[#D2D2D2]">
                        <button
                          className="w-full py-5 flex items-center justify-between gap-6 text-left transition-colors cursor-pointer"
                          onClick={() =>
                            setOpenFaq(openFaq === index ? -1 : index)
                          }
                        >
                          <h3 className="text-black font-bold text-p flex-1">
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
                            <p className="text-black text-base leading-[1.5]">
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
