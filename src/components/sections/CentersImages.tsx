'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface List {
  url: string
  alternativeText: string
}

interface CentersImagesProps {
  list?: List[]
}

const CentersImages: React.FC<CentersImagesProps> = ({ list }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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
    <section ref={sectionRef} className="bg-Secondary-Light-Scrub">
      <div className="container-custom mx-auto max-w-[1392px] py-20">
        <div className="flex items-center gap-18">
          <div className="w-full">
            {list && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-3 gap-4"
              >
                {list.map((li, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start flex-col bg-white w-full h-[120px] rounded-[8px] relative overflow-hidden"
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.url}`}
                      alt={li.alternativeText || 'center'}
                      className="object-contain p-5"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CentersImages
