// components/strapi/HeroSection.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Breadcrumb from '../sections/Breadcrumb'
import { HeroSectionProps } from '../../types/hero'
import Tagline from '../sections/Tagline'

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const {
    title,
    subtitle,
    description,
    background_image,
    cta_primary,
    cta_secondary,
    alignment = 'center',
    theme = 'sage',
    height = 'large',
    overlay = false,
    overlay_opacity = 50,
    breadcrumbItems,
    tagline,
  } = data

  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-64 md:h-80'
      case 'medium':
        return 'h-80 md:h-96'
      case 'large':
        return 'h-96 md:h-[30rem]'
      case 'full':
        return 'h-screen'
      default:
        return 'h-96 md:h-[32rem]'
    }
  }

  const getAlignmentClass = () => {
    switch (alignment) {
      case 'left':
        return 'text-left items-start'
      case 'right':
        return 'text-right items-end'
      case 'center':
        return 'text-center items-center'
      default:
        return 'text-center items-center'
    }
  }

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-900'
      case 'dark':
        return 'bg-gray-900 text-white'
      case 'sage':
        return 'bg-sage-50 text-sage-900'
      case 'blue':
        return 'bg-blue-50 text-blue-900'
      default:
        return 'bg-sage-50 text-sage-900'
    }
  }

  const getButtonClasses = (style: string) => {
    const baseClasses =
      'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200'

    switch (style) {
      case 'primary':
        return `${baseClasses} bg-sage-600 text-white hover:bg-sage-700`
      case 'secondary':
        return `${baseClasses} bg-white text-sage-600 border border-sage-600 hover:bg-sage-50`
      case 'outline':
        return `${baseClasses} border border-current text-current hover:bg-current hover:text-white`
      case 'ghost':
        return `${baseClasses} text-current hover:bg-current hover:bg-opacity-10`
      default:
        return `${baseClasses} bg-sage-600 text-white hover:bg-sage-700`
    }
  }

  return (
    <section className={`relative ${getHeightClass()} ${getThemeClasses()}`}>
      {/* Background Image */}
      {background_image?.data && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_image.data.attributes.url}
            alt={background_image.data.attributes.alternativeText || title}
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlay_opacity / 100 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 " />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col  ${getAlignmentClass()}`}
      >
        <div className="max-w-[1392px] w-full mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Breadcrumb items={breadcrumbItems} />
            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl font-medium mb-4 text-current"
              >
                {subtitle}
              </motion.p>
            )}
            {tagline && (
              <div className="pt-16">
                {' '}
                <Tagline text={tagline} />
              </div>
            )}
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-[56px] lg:text-[56px] font-bold mb-4 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm md:text-[18px] text-current "
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* CTAs */}
            {(cta_primary || cta_secondary) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {cta_primary && (
                  <Link
                    href={cta_primary.url}
                    target={cta_primary.target}
                    className={getButtonClasses(cta_primary.style)}
                  >
                    {cta_primary.label}
                  </Link>
                )}
                {cta_secondary && (
                  <Link
                    href={cta_secondary.url}
                    target={cta_secondary.target}
                    className={getButtonClasses(cta_secondary.style)}
                  >
                    {cta_secondary.label}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
