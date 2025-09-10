'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import ToggleButton from '../../../../components/sections/ToggleButton'

export const runtime = 'edge'

// Add category field to your FAQ data
const faqData = [
  {
    question: 'What are the costs?',
    answer: 'Costs vary based on the type of treatment and hospital...',
    category: 'general',
  },
  {
    question: 'How long will it take?',
    answer: 'Treatment duration depends on your specific condition...',
    category: 'individuals',
  },
  {
    question: 'What about language barriers?',
    answer: 'All our partner hospitals have English-speaking staff...',
    category: 'businesses',
  },
  {
    question: 'Is it safe to travel for medical care?',
    answer: 'Saudi Arabia has world-class medical facilities...',
    category: 'organizations',
  },
  {
    question: 'What support is available for family?',
    answer: 'We provide comprehensive family support...',
    category: 'general',
  },
]

type TabType =
  | 'all'
  | 'general'
  | 'individuals'
  | 'businesses'
  | 'organizations'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

const FAQsPage = () => {
  const [openFaq, setOpenFaq] = useState(-1)
  const [currentTab, setCurrentTab] = useState<TabType>('all')

  const options: ToggleOption[] = [
    { id: 'all', label: 'All FAQs', value: 'all' },
    { id: 'general', label: 'General', value: 'general' },
    { id: 'individuals', label: 'Individuals', value: 'individuals' },
    { id: 'businesses', label: 'Businesses', value: 'businesses' },
    { id: 'organizations', label: 'Organizations', value: 'organizations' },
  ]

  // Filter based on tab
  const filteredFaqs =
    currentTab === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === currentTab)

  return (
    <div className="min-h-screen bg-white">
      <HeroPages
        title="Frequently Asked Questions"
        description="Find helpful answers to common questions about our services, process, and how we support you every step of the way."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Frequently Asked Questions', href: '/resources/faqs' },
        ]}
      />

      <section className="py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto">
          <div className="max-w-[768px] mx-auto space-y-20">
            <ToggleButton
              options={options}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />

            <div className="border-0 ">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-[#D2D2D2]">
                  <button
                    className="w-full py-5 flex items-center justify-between gap-6 text-left transition-colors cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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

      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Begin Your Healthcare Journey"
          description="Contact Sage to explore tailored solutions for your healthcare needs and seamless travel experience."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}

export default FAQsPage
