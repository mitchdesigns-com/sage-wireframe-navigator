'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Reason {
  title: string
  value: string
}

interface WhyChooseSectionProps {
  title: string
  paragraphs: string[]
  reasons?: Reason[]
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  paragraphs,
  reasons,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 40,
      transition: { duration: 0.6, delay },
    },
  })

  return (
    <section className="py-8 md:py-28 bg-Secondary-Scrub" ref={ref}>
      <div className="max-w-[1392px] mx-auto w-full flex gap-8 md:gap-20 items-start flex-col md:flex-row  px-4">
        {/* Title */}
        <motion.div
          className="md:min-w-[464px] lg:sticky lg:top-26"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-Primary-Black text-[28px] md:text-[40px] font-bold ">
            {title}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="w-full">
          {/* Paragraphs */}
          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                variants={fadeUp(0.2 + index * 0.15)}
                initial="hidden"
                animate="visible"
                className="text-Secondary-Text text-sm md:text-base leading-[1.5]"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Reasons */}
          {reasons && reasons.length > 0 && (
            <motion.div
              className="border-0 bg-Secondary-Light-Scrub p-6 rounded-3xl mt-8"
              variants={fadeUp(0.3 + paragraphs.length * 0.15)}
              initial="hidden"
              animate="visible"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(0.4 + index * 0.1)}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center justify-between py-5 border-b border-[#D2D2D2] last:border-b-0"
                >
                  <h3 className="text-Primary-Black font-bold text-lg md:text-[20px] leading-[1.4] tracking-[-0.2px] ">
                    {reason.title}
                  </h3>
                  <span className="text-Dark-Scrub font-medium text-sm md:text-base leading-[1.5] text-nowrap">
                    {reason.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
