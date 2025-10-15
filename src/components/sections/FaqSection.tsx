'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

type FAQ = {
  id: string | number
  question: string
  answer: string
}

type FAQSectionProps = {
  id: string | number
  title: string
  description: string
  faqData: FAQ[]
}

export default function FAQSection({
  id,
  title,
  description,
  faqData,
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section key={id} className="py-15 md:py-25 bg-Secondary-Scrub">
      <div className="px-4 md:px-0">
        <div className="max-w-[1392px] mx-auto">
          <div className="max-w-[768px] mx-auto space-y-8 md:space-y-20">
            {/* Title + Description */}
            <div className="text-center space-y-6">
              <h2 className="text-black font-bold text-4xl md:text-[48px]">
                {title}
              </h2>
              <p className="text-black text-base md:text-lg">{description}</p>
            </div>

            {/* FAQ List */}
            <div className="border-0 border-b border-[rgba(0,4,4,0.02)]">
              {faqData?.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border-t border-[rgba(0,4,4,0.02)]"
                >
                  <button
                    className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-Secondary-Scrub transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
      </div>
    </section>
  )
}
