'use client'

import Link from 'next/link'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
  heroPages?: boolean
  heroWithImage?: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className = '',
  heroPages,
  heroWithImage,
}) => {
  const locale = useLocale()

  // Animation trigger setup
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% visible
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // animate items one by one
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const defaultSeparator = (
    <KeyboardArrowDown
      className={`w-4 h-4 ${locale === 'ar' ? 'rotate-90' : 'rotate-270'}`}
      color={heroWithImage ? '#025850' : '#ffffff'}
    />
  )

  return (
    <motion.nav
      ref={ref}
      aria-label="Breadcrumb"
      className={`flex items-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <motion.div
            key={index}
            className="flex items-center"
            variants={itemVariants}
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`text-xs md:text-sm font-regular ${
                  heroWithImage ? 'text-Primary-Palm' : 'text-white'
                } transition`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`text-xs md:text-sm font-regular ${
                  heroPages
                    ? 'text-[#a5a5a5]'
                    : heroWithImage
                      ? 'text-[#9ABCB9]'
                      : 'text-[#e4e4e4c9]'
                }`}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="flex items-center mx-2">
                {separator ?? defaultSeparator}
              </span>
            )}
          </motion.div>
        )
      })}
    </motion.nav>
  )
}

export default Breadcrumb
