'use client'

import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'
import Button from '../ui/Button'
import { useLocale } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroWithImageProps {
  image: {
    url: string
    alternativeText: string
  }
  imageAlt?: string
  breadcrumbItems: BreadcrumbItem[]
  tagline?: string
  title: React.ReactNode
  description?: string
  primaryButton?: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    rightIcon?: boolean
  }
  secondaryButton?: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    righticon?: boolean
  }
}

const HeroWithImage: React.FC<HeroWithImageProps> = ({
  image,
  imageAlt = 'hero image',
  breadcrumbItems,
  tagline,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  const locale = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="overflow-x-hidden">
      {/* Hero Image */}
      <motion.div
        className="h-[320px] md:h-[680px] relative"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
          fill
          alt={imageAlt}
          className="object-cover object-top"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="mx-auto max-w-[1392px] w-full py-8 md:pt-8 md:pb-20  px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={fadeUp}>
          <Breadcrumb items={breadcrumbItems} heroWithImage />
        </motion.div>

        <div className="flex gap-4 md:gap-20 justify-center items-end pt-8 md:pt-16 flex-col md:flex-row">
          <motion.div
            variants={fadeUp}
            className="space-y-2 min-w-full md:min-w-[656px]"
          >
            {tagline && <Tagline text={tagline} />}
            <h1 className="text-Primary-Black text-[34px] md:text-[56px] leading-[1.2] tracking-[-0.56px]">
              {title}
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            {description && (
              <p className="text-Secondary-Text text-base md:text-lg pb-8">
                {description}
              </p>
            )}

            <motion.div
              variants={containerVariants}
              className="gap-4 flex overflow-x-auto scrollbar-hide md:overflow-visible"
            >
              {primaryButton && (
                <motion.div variants={fadeUp}>
                  <Link
                    href={primaryButton.href}
                    className="inline-block group"
                  >
                    <Button
                      variant={primaryButton.variant || 'primary'}
                      righticon={primaryButton.rightIcon}
                      fullwidth
                      locale={locale as 'en' | 'ar'}
                    >
                      {primaryButton.label}
                    </Button>
                  </Link>
                </motion.div>
              )}
              {secondaryButton && (
                <motion.div variants={fadeUp}>
                  <Link href={secondaryButton.href} className="inline-block">
                    <Button
                      variant={secondaryButton.variant || 'light'}
                      righticon={secondaryButton.righticon}
                      fullwidth
                      locale={locale as 'en' | 'ar'}
                    >
                      {secondaryButton.label}
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroWithImage
