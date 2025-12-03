'use client'

import React from 'react'
import Breadcrumb from './Breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import ShareButtonsComponent from './ShareButtons'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage?: {
    url: string
    alternativeText: string
  }
  author?: string
  date?: string
  readTime?: string
  button?: string
  href: string
  ShareButtons: string
}

const HeroSinglePages: React.FC<HeroProps> = ({
  title,
  breadcrumbItems,
  bgImage,
  author,
  date,
  readTime,
  button,
  href,
  ShareButtons,
}) => {
  const locale = useLocale()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }
  const t = useTranslations()
  return (
    <motion.section
      className="md:pb-20 md:pt-10 py-8 bg-gradient-to-t from-[#013530] to-[#025850]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-4 md:px-16">
        <div className="max-w-[1392px] mx-auto">
          <motion.div variants={itemVariants} className="pb-6 md:pb-16">
            <Breadcrumb
              items={breadcrumbItems}
              heroPages
              className="justify-center md:justify-start"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden md:flex pb-6 md:pb-12 items-center"
          >
            <ChevronLeft
              className={`text-white ${locale === 'ar' ? 'rotate-180' : ''}`}
            />
            <Link
              href={href}
              className="text-[#F2F2F2] font-medium text-base ps-2"
            >
              {button}
            </Link>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-white font-bold text-[26px] md:text-[48px] leading-[1.2] tracking-[-0.56px] pb-8 md:pb-20 text-center md:text-left"
          >
            {title}
          </motion.h1>

          {bgImage && (
            <motion.div
              variants={itemVariants}
              className="rounded-3xl aspect-[1390/600] relative w-full mb-8"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${bgImage.url}`}
                alt={bgImage.alternativeText}
                fill
                className="object-cover rounded-3xl"
              />
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="space-x-12 pt-8 flex justify-between items-center md:items-start flex-col md:flex-row gap-4"
          >
            <div className="flex gap-12">
              <div>
                <h4 className="text-sm md:font-base text-white">
                  {t('GeneralContracting.Author')}
                </h4>
                <p className="text-white font-medium text-xs md:font-base">
                  {author}
                </p>
              </div>
              <div>
                <h4 className="text-sm md:font-base text-white">
                  {t('GeneralContracting.Published')}
                </h4>
                <p className="text-white font-medium text-xs md:font-base">
                  {date}
                </p>
              </div>
              <div>
                <h4 className="text-sm md:font-base text-white">
                  {t('GeneralContracting.readingDuration')}
                </h4>
                <p className="text-white font-medium text-xs md:font-base">
                  {readTime}
                </p>
              </div>
            </div>
            <ShareButtonsComponent
              url={`${locale === 'en' ? '/en/' : '/'}${ShareButtons}`}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSinglePages
