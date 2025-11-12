'use client'

import { useState, useRef } from 'react'
import { Plus } from 'lucide-react'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence, useInView } from 'framer-motion'

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
  const locale = useLocale()

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      ref={sectionRef}
      key={id}
      className="py-15 md:py-25 bg-Secondary-Scrub"
    >
      <div className=" px-4">
        <div className="max-w-[1392px] mx-auto">
          <div className="max-w-[768px] mx-auto space-y-8 md:space-y-20">
            {/* Title + Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center space-y-6"
            >
              <h2 className="text-black font-bold text-4xl md:text-[48px]">
                {title}
              </h2>
              <p className="text-black text-base md:text-lg">{description}</p>
            </motion.div>

            {/* FAQ List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="border-0 border-b border-[rgba(0,4,4,0.02)]"
            >
              {faqData?.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  className="border-t border-[rgba(0,4,4,0.02)]"
                >
                  <button
                    className={`w-full py-5 flex items-center justify-between gap-6 hover:bg-Secondary-Scrub transition-colors cursor-pointer
                      ${locale === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="pb-6 overflow-hidden"
                      >
                        <p className="text-black text-sm md:text-base leading-[1.5]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
