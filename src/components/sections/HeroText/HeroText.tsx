'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
// import { slideUp, fadeIn } from '@/lib/utils'
import {
  HeroTextProps,
  HeroTextVariantConfig,
  HeroTextVariantStyles,
} from './HeroText.types'

const HeroText: React.FC<HeroTextProps> = ({
  title,
  description,
  subtitle,
  backgroundImage,
  backgroundOverlay = true,
  textAlignment = 'left',
  size = 'large',
  variant = 'default',
  className = '',
  animated = true,
  children,
  titleClassName = '',
  descriptionClassName = '',
}) => {
  // Size configurations matching your existing heading classes
  const sizeConfig: Record<string, HeroTextVariantConfig> = {
    small: {
      section: 'py-12 md:py-16',
      title: 'heading-md',
      subtitle: 'text-base md:text-lg',
      description: 'text-base md:text-lg',
    },
    medium: {
      section: 'py-16 md:py-24',
      title: 'heading-lg',
      subtitle: 'text-lg md:text-xl',
      description: 'text-body',
    },
    large: {
      section: 'py-20 md:py-32',
      title: 'heading-xl text-white',
      subtitle: 'text-xl md:text-2xl',
      description: 'text-body text-white',
    },
  }

  // Variant styles using your color system
  const variantStyles: Record<string, HeroTextVariantStyles> = {
    default: {
      background: 'bg-white',
      text: 'text-gray-900',
    },
    sage: {
      background: 'bg-sage-gradient',
      text: 'text-white',
    },
    healthcare: {
      background: 'bg-healthcare-gradient',
      text: 'text-white',
    },
    minimal: {
      background: 'bg-sage-50',
      text: 'text-gray-800',
    },
  }

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const config = sizeConfig[size]
  const styles = variantStyles[variant]

  // Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const sectionClasses = cn(
    'relative overflow-hidden',
    config.section,
    styles.background,
    backgroundImage ? 'text-white' : styles.text,
    className
  )

  const MotionDiv = animated ? motion.div : 'div'
  const MotionH1 = animated ? motion.h1 : 'h1'
  const MotionP = animated ? motion.p : 'p'

  return (
    <section className={sectionClasses}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {backgroundOverlay && (
            <div className="absolute inset-0 bg-black/50" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-custom">
        <MotionDiv
          className={cn(
            'max-w-4xl',
            textAlignment === 'center' && 'mx-auto',
            alignmentClasses[textAlignment]
          )}
          {...(animated && {
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          })}
        >
          {subtitle && (
            <MotionDiv
              className={cn(
                config.subtitle,
                'font-medium mb-4 opacity-80 text-white'
              )}
              {...(animated && { variants: itemVariants })}
            >
              {subtitle}
            </MotionDiv>
          )}

          <MotionH1
            className={cn(config.title, 'mb-6', titleClassName)}
            {...(animated && { variants: itemVariants })}
          >
            {title}
          </MotionH1>

          {description && (
            <MotionP
              className={cn(
                config.description,
                'mb-8 opacity-90',
                descriptionClassName
              )}
              {...(animated && { variants: itemVariants })}
            >
              {description}
            </MotionP>
          )}

          {children && (
            <MotionDiv
              className="mt-8"
              {...(animated && { variants: itemVariants })}
            >
              {children}
            </MotionDiv>
          )}
        </MotionDiv>
      </div>
    </section>
  )
}

export default HeroText
