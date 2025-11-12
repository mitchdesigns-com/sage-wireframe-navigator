'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HighlightItem {
  id: number
  title: string
  description: string
  bgColor: string
  textColor: string
  descColor: string
}

interface WebinarHighlightsProps {
  title: string
  highlights: HighlightItem[]
}

export default function WebinarHighlights({
  title,
  highlights,
}: WebinarHighlightsProps) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // animate children one after another
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="bg-Secondary-Scrub"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="mx-auto max-w-[1392px] py-8 md:py-28 px-4">
        <motion.h2
          className="text-[32px] md:text-[40px] font-bold text-center pb-8 md:pb-20"
          variants={cardVariants}
        >
          {title}
        </motion.h2>
        <div className="flex gap-4 flex-col md:flex-row">
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              className={`flex flex-col pt-10 px-5 rounded-4xl w-full md:w-1/4 h-[380px] ${item.bgColor}`}
              variants={cardVariants}
            >
              <h3
                className={`text-[20px] text-2xl font-bold mb-4 leading-snug ${item.textColor}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed text-Secondary-Scrub ${item.descColor}`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
