'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Tagline from '../sections/Tagline'

interface ImageData {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

type SectionHeaderProps = {
  tagline?: string
  heading: string
  description?: string
  color?: 'light' | 'dark'
  home?: boolean
  image?: ImageData
}

export default function SectionHeader({
  tagline = 'Our Services',
  heading,
  description,
  color = 'dark',
  home,
  image,
}: SectionHeaderProps) {
  const isLight = color === 'light'
  const headingText = isLight ? 'text-white' : 'text-Primary-Black'
  const descText = isLight ? 'text-white' : 'text-[#626262]'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-start mx-auto mb-8 md:mb-8 md:container-custom"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // 👈 triggers when 50% of section is visible
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full"
        variants={containerVariants}
      >
        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <Tagline text={tagline} className="justify-center items-center " />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className={`font-aeonik-bold ${headingText} text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px] text-center mb-6 text-pretty ${
            home ? 'max-w-[768px]' : 'max-w-[880px]'
          }`}
        >
          {heading}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            variants={itemVariants}
            className={`font-aeonik-regular ${descText} text-sm md:text-lg leading-[1.5] text-center w-full ${
              home ? 'max-w-[768px]' : 'max-w-[768px]'
            }`}
          >
            {description}
          </motion.p>
        )}

        {/* Mobile Image */}
        {isMobile && image && (
          <motion.div
            variants={itemVariants}
            className="aspect-[600/650] rounded-[40px] bg-cover bg-center w-full mt-15"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${image?.url})`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
