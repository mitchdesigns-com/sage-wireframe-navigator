'use client'

import React, { useEffect } from 'react'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'
import Link from 'next/link'
import Button from '../ui/Button'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BreadcrumbItem {
  id: number
  label: string
  href?: string
}

interface HeroProps {
  tagline?: string
  title: string
  description?: string
  breadcrumbItems: BreadcrumbItem[]
  button?: string
  href?: string
  bgImage?: {
    url: string
    alternativeText: string
  }
}

const HeroPages: React.FC<HeroProps> = ({
  tagline,
  title,
  description,
  breadcrumbItems,
  button,
  href,
  bgImage,
}) => {
  const locale = useLocale()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      ref={ref}
      className="md:pb-20 md:pt-10 py-8 bg-gradient-to-t from-[#013530] to-[#025850] overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className=" px-4"
      >
        <div className="max-w-[1392px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-20 w-full">
            {/* Left side */}
            <motion.div
              variants={containerVariants}
              className="flex justify-center md:items-start items-center flex-col"
            >
              <motion.div className="pb-8 md:pb-16">
                <Breadcrumb items={breadcrumbItems} heroPages />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Tagline
                  text={tagline}
                  className="items-center md:items-start"
                />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-white font-bold text-[32px] md:text-[56px] leading-[1.2] tracking-[-0.56px] text-center md:text-start whitespace-pre-line"
              >
                {title}
              </motion.h1>
            </motion.div>

            {/* Right side */}
            <motion.div
              variants={containerVariants}
              className="space-y-6 my-auto"
            >
              {description && (
                <motion.p
                  variants={itemVariants}
                  className="text-white text-base md:text-lg text-center md:text-start"
                >
                  {description}
                </motion.p>
              )}

              {button && (
                <motion.div variants={itemVariants}>
                  <Link
                    href={href || '/contact'}
                    className="inline-block bg-primary text-white rounded-lg font-medium group cursor-pointer w-full md:w-fit"
                  >
                    <Button
                      variant={'light'}
                      righticon={true}
                      fullwidth
                      locale={locale as 'en' | 'ar'}
                    >
                      {button}
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>

          {bgImage && (
            <motion.div variants={itemVariants} className="pt-8 md:pt-16">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${bgImage.url}`}
                alt={bgImage.alternativeText || 'header image'}
                height={520}
                width={1390}
                className="rounded-[24px] md:rounded-[40px] object-cover"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroPages
