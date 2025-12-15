'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Feature {
  text: string
  icon: {
    url: string
    alternativeText: string
  }
}
interface List {
  title?: string
  description?: string
  icon?: {
    url: string
    alternativeText: string
  }
  theme: string
}
interface FeatureSectionProps {
  tagline?: string
  title: string
  description: string
  features?: Feature[]
  list?: List[]
  ctaText?: string
  href?: string
  image: {
    url: string
    alternativeText: string
  }
  backgroundColor?: string
  textColor?: string
  reverse?: boolean
  home?: boolean
  secondaryButton?: {
    label: string
    href: string
    variant?: 'primary' | 'light' | 'ghost' | 'home' | 'ghostLight'
    righticon?: boolean
  }[]
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  tagline,
  title,
  description,
  features,
  list,
  ctaText,
  href,
  image,
  backgroundColor = 'white',
  textColor = 'black',
  reverse = false,
  home,
  secondaryButton,
}) => {
  const pathname = usePathname()
  const locale = useLocale()
  const isNotHome = pathname !== '/'
  const isHome = pathname == '/'

  const [isMobile, setIsMobile] = useState(false)

  // Animation controls
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of section is visible
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  // Variants for smooth entry animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMainImage = title === 'Discover the Excellence of Saudi Healthcare'

  return (
    <section ref={ref} style={{ backgroundColor }}>
      <div className="container-custom mx-auto max-w-[1392px] py-8 md:py-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className={`flex items-center ${isNotHome ? 'gap-8' : 'gap-20'} md:gap-18  ${
            reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
          }`}
        >
          {/* Image for mobile first */}
          {isNotHome && isMobile && (
            <div className="flex-1 w-full">
              <motion.div
                variants={fadeInUp}
                className="aspect[396/351] md:aspect-[606/646] rounded-[40px] bg-cover bg-center w-full md:h-[646px] h-[351px] md:w-[606px] px-4"
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${image?.url}')`,
                }}
              />
            </div>
          )}

          {/* Content */}
          <motion.div variants={fadeInUp} className="flex-1 w-full">
            <div className="mb-8">
              {backgroundColor === '#DAF7AF' ? (
                <Tagline
                  text={tagline}
                  taglineColor={'#025850'}
                  className={`${isHome && isMobile ? 'items-center' : ''}`}
                />
              ) : (
                <Tagline text={tagline} />
              )}

              <div
                className={`mb-8 ${isNotHome ? 'text-start' : 'text-center'} md:text-start`}
              >
                <h2
                  className="text-[28px] md:text-[48px] font-bold leading-[1.2] tracking-[-1px] mb-6 whitespace-pre-line"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
                <p
                  className={`text-base md:text-lg md:whitespace-pre-line ${
                    textColor === '#1E1E1E'
                      ? 'text-Secondary-Text'
                      : 'text-Secondary-Light-Scrub'
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Features */}
            {features && (
              <motion.div variants={fadeInUp} className="mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-[21px] flex items-center justify-center relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${feature.icon?.url}`}
                        alt={feature.icon?.alternativeText || title}
                        className="object-cover"
                        priority
                        fill
                      />
                    </div>
                    <span
                      className="text-xs md:text-[16px] leading-[1.5] flex-1 text-Secondary-Light-Scrub"
                      style={{ color: textColor }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* List */}
            {list && (
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {list.map((li, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 flex-col max-w-[316px]"
                  >
                    {li.icon && (
                      <div className="flex items-center justify-center w-12 h-12 relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.icon?.url}`}
                          alt={li.icon?.alternativeText || title}
                          className="object-cover"
                          priority
                          width={48}
                          height={58}
                        />
                      </div>
                    )}
                    <h5
                      className={`${
                        li.theme === 'dark'
                          ? 'text-Primary-Black'
                          : !li.icon
                            ? 'text-[#CAF48E]'
                            : 'text-white'
                      } text-lg md:text-[20px] font-bold`}
                    >
                      {li.title}
                    </h5>
                    <span
                      className={`${
                        li.theme === 'dark'
                          ? 'text-Secondary-Text'
                          : 'text-Secondary-Light-Scrub'
                      } text-sm md:text-[16px] leading-[1.5] flex-1 `}
                    >
                      {li.description}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center gap-0 md:gap-8"
            >
              {ctaText && (
                <Link href={href || '/contact'} className="group">
                  <Button
                    variant={
                      home
                        ? 'home'
                        : backgroundColor === '#DAF7AF'
                          ? 'primary'
                          : backgroundColor === '#F0F8F8'
                            ? 'primary'
                            : backgroundColor === 'white'
                              ? 'primary'
                              : 'light'
                    }
                    righticon={true}
                    fullwidth={isMobile}
                    locale={locale as 'en' | 'ar'}
                    size={home ? 'large' : 'medium'}
                  >
                    {ctaText}
                  </Button>
                </Link>
              )}
              {secondaryButton && secondaryButton?.length > 0 && (
                <Link href={secondaryButton[0]?.href || '/'}>
                  <Button
                    variant={secondaryButton[0]?.variant || 'ghost'}
                    righticon={secondaryButton[0]?.righticon || true}
                    fullwidth={isMobile ? false : true}
                    locale={locale as 'en' | 'ar'}
                  >
                    {secondaryButton[0]?.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
          {isHome && isMobile && (
            <motion.div variants={fadeInUp} className="flex-1">
              <div
                className={`aspect[396/351] md:aspect-[654/580] ${
                  isMainImage
                    ? 'rounded-b-0'
                    : 'rounded-b-[40px] rounded-t-[40px]'
                } bg-cover bg-center w-[396px] md:h-[580px] h-[351px] md:w-[654px]`}
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${image?.url}')`,
                }}
              />
            </motion.div>
          )}
          {/* Image for desktop */}
          {!isMobile && (
            <motion.div variants={fadeInUp} className="flex-1">
              <div
                className={`aspect[396/351] md:aspect-[654/580] ${
                  isMainImage
                    ? 'rounded-b-0'
                    : 'rounded-b-[40px] rounded-t-[40px]'
                } bg-cover bg-center w-[396px] md:h-[580px] h-[351px] md:w-[654px]`}
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${image?.url}')`,
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureSection
