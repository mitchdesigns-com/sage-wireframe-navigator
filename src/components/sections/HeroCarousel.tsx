'use client'

import React from 'react'
import Breadcrumb from './Breadcrumb'
import ImageCarousel from './ImagesCarousel'
import Tagline from './Tagline'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  dayNumbers?: string
  year?: string
  description?: string
  category?: string
}

const HeroCarousel: React.FC<HeroProps> = ({
  title,
  breadcrumbItems,
  dayNumbers,
  year,
  description,
  category,
}) => {
  return (
    <section className="md:pb-20 md:pt-10 py-10 bg-gradient-to-t from-[#013530] to-[#025850]">
      <div className="max-w-[1392px] mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="pb-8 md:pb-16 w-full text-center mx-auto flex justify-center"
          >
            <Breadcrumb
              items={breadcrumbItems}
              heroPages
              className="items-center"
            />
          </motion.div>

          {/* Category / Tagline */}
          {category && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Tagline
                text={category}
                className="items-center"
                category={category}
              />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.56px] pb-6 max-w-[768px] text-center"
          >
            {title}
          </motion.h1>

          {/* Day / Year */}
          {dayNumbers && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-Primary-Spring text-base md:text-lg pb-3 md:pb-6"
            >
              {dayNumbers}
              {year} {' | Riyadh, Saudi Arabia'}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg pb-4 md:pb-15 text-white max-w-[768px] text-center"
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Image Carousel */}
      </div>
      {dayNumbers && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <ImageCarousel />
        </motion.div>
      )}
    </section>
  )
}

export default HeroCarousel
