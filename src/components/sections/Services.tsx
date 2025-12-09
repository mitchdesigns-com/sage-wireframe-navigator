'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ImageLabel {
  id: number
  documentId: string
  alternativeText?: string | null
  url: string
}

interface Service {
  id: number
  key: string
  label: string
  href: string
  description: string
  width?: number
  imageLabel: ImageLabel
}

interface ServicesProps {
  heading: string
  description: string
  tagline: string
  cta: string
  href: string
  SERVICES: Service[]
  locale: 'en' | 'ar'
}

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

function ServiceCard({
  label,
  imageLabel,
  href,
  description,
  width,
  locale,
}: {
  label: string
  imageLabel: ImageLabel
  href: string
  description: string
  width?: number
  locale: 'en' | 'ar'
}) {
  const imageSrc = `${process.env.NEXT_PUBLIC_API_BASE_URL}${imageLabel?.url}`
  const t = useTranslations()

  return (
    <motion.div
      className="flex-1 flex flex-col gap-3 items-center justify-start"
      variants={itemVariants}
    >
      <div className="relative inline-grid place-items-start">
        <Image
          src={imageSrc}
          alt={imageLabel?.alternativeText || label}
          width={212}
          height={222}
          unoptimized
        />
      </div>

      <div className="ltr:font-aeonik-bold !rtl:font-arabic text-primary-black text-center tracking-[-0.32px]">
        <p className={label === 'Individuals' ? 'whitespace-pre' : undefined}>
          <span className="ltr:font-aeonik-regular !rtl:font-arabic text-lg md:text-[20px] leading-[1.5]">
            {t('Home.for')}
          </span>
          <span className="text-primary-palm text-2xl md:text-[32px] leading-[1.3]">
            {label}
          </span>
        </p>
      </div>

      <div
        className={`ltr:font-aeonik-regular !rtl:font-arabic text-primary-black text-base leading-[1.5] text-center${
          width ? ` w-[${width}px]` : ''
        }`}
      >
        <p className="mb-0">{description}</p>
      </div>

      <div className="flex flex-row gap-2 text-Primary-Palm">
        <Button
          variant="link"
          href={href}
          righticon={false}
          locale={locale as 'en' | 'ar'}
        >
          <span className="text-sm md:text-base !rtl:font-arabic ltr:font-medium text-Primary-Palm">
            {t('GeneralContracting.cta')}
          </span>
        </Button>
        {locale === 'ar' ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </motion.div>
  )
}

export default function Services({
  heading,
  description,
  tagline,
  cta,
  href,
  SERVICES,
  locale,
}: ServicesProps) {
  return (
    <motion.section
      className="bg-secondary-dark-palm px-4 md:px-[60px] py-8 md:py-20"
      // variants={containerVariants}
      // initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // 👈 triggers when 50% of section is visible
    >
      <motion.div
        className="bg-secondary-light-scrub rounded-[40px] px-5 py-8 md:py-15 md:p-[60px] max-w-[1392px] mx-auto"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <SectionHeader
            heading={heading}
            description={description}
            tagline={tagline}
            home={true}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="flex flex-col gap-16 items-start justify-start w-full mb-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex gap-8 md:gap-12 items-start justify-start w-full flex-col md:flex-row"
            variants={containerVariants}
          >
            {SERVICES?.map((service) => (
              <ServiceCard
                key={service.id}
                label={service.label}
                imageLabel={service.imageLabel}
                href={service.href}
                description={service.description}
                width={service.width}
                locale={locale}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center w-full"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            href={href}
            righticon={true}
            size="large"
            locale={locale as 'en' | 'ar'}
          >
            {cta}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
