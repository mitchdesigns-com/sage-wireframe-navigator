'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface List {
  list: { url: string; alternativeText: string }[]
}
interface CentersSectionProps {
  tagline?: string
  title: string
  description?: string
  list?: List[]
  ctaText?: string
  href?: string
  backgroundColor?: string
  textColor?: string
  reverse?: boolean // if true => List first
  secondaryButton?: boolean
}

const CentersSection: React.FC<CentersSectionProps> = ({
  tagline,
  title,
  description,
  list,
  ctaText,
  href,
  backgroundColor = 'white',
  textColor = 'black',
  reverse = false,
  secondaryButton,
}) => {
  const locale = useLocale()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Framer Motion
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const controls = useAnimation()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  if (inView) controls.start('visible')

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{ backgroundColor }}
    >
      <div className="px-4 md:px-0 mx-auto max-w-[1392px] py-8 md:py-28">
        <div
          className={`flex items-center flex-col md:flex-row gap-8 md:gap-18 ${
            reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
          }`}
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="flex-1">
            <div className="mb-0 md:mb-8">
              {tagline && (
                <Tagline
                  text={tagline}
                  taglineColor={backgroundColor === '#DAF7AF' ? '#DAF7AF' : ''}
                />
              )}
              <motion.h2
                variants={itemVariants}
                className="text-[28px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-4 md:mb-6 whitespace-pre-line text-center md:text-start"
                style={{ color: textColor }}
              >
                {title}
              </motion.h2>
              {description && (
                <motion.p
                  variants={itemVariants}
                  className={`text-sm md:text-lg ${textColor === '#1E1E1E' ? 'text-Secondary-Text' : 'text-Secondary-Light-Scrub'} whitespace-pre-line text-center md:text-start`}
                >
                  {description}
                </motion.p>
              )}
            </div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex gap-4 flex-wrap"
            >
              {!isMobile && ctaText && (
                <Link
                  href={href || '/contact'}
                  className={`inline-block bg-primary text-white rounded-lg font-medium group cursor-pointer ${secondaryButton ? ' w-[148px]' : ''}`}
                >
                  <Button
                    variant={
                      backgroundColor === '#DAF7AF'
                        ? 'primary'
                        : backgroundColor === '#F0F8F8'
                          ? 'primary'
                          : backgroundColor === '#E2F2F1'
                            ? 'primary'
                            : 'light'
                    }
                    righticon={secondaryButton ? false : true}
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {ctaText}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Button
                  href="/our-network"
                  variant="light-link"
                  righticon={true}
                  locale={locale as 'en' | 'ar'}
                >
                  Explore Our Network
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Images */}
          {list && (
            <motion.div
              variants={itemVariants}
              className="flex-1 w-full px-[22px] md:px-0"
            >
              <div className="grid grid-cols-2 gap-4">
                {list[0]?.list.map((li, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start flex-col bg-white w-full h-[68px] md:h-[120px] rounded-[8px] relative overflow-hidden"
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.url}`}
                      alt={li.alternativeText || 'center'}
                      className="object-contain px-5 md:p-5"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile CTA */}
        {isMobile && (
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col gap-4"
          >
            {ctaText && (
              <Link
                href={href || '/contact'}
                className={`inline-block bg-primary text-white rounded-lg font-medium group cursor-pointer text-center ${secondaryButton ? 'w-full md:w-[148px]' : ''}`}
              >
                <Button
                  variant={
                    backgroundColor === '#DAF7AF'
                      ? 'primary'
                      : backgroundColor === '#F0F8F8'
                        ? 'primary'
                        : backgroundColor === '#E2F2F1'
                          ? 'primary'
                          : 'light'
                  }
                  righticon={secondaryButton ? false : true}
                  fullwidth
                  locale={locale as 'en' | 'ar'}
                >
                  {ctaText}
                </Button>
              </Link>
            )}
            {secondaryButton && (
              <Button
                href="/our-network"
                variant="light-link"
                righticon={true}
                locale={locale as 'en' | 'ar'}
              >
                Explore Our Network
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default CentersSection
