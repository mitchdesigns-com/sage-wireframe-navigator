'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import { useLocale } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface ServiceSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  image: {
    url: string
    alternativeText: string
  }
  bgColor?: string
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  image,
  bgColor = 'bg-Primary-Palm',
}) => {
  const locale = useLocale()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`py-8 md:py-28 ${bgColor}`}
    >
      <div className="max-w-[1392px] mx-auto space-y-6 md:space-y-20  px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
          {/* Title */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-[2.75rem] tracking-[-1px]">
              {title.split('<br/>').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('<br/>').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white text-base md:text-lg">{description}</p>
            {/* Button */}
            {buttonHref && (
              <motion.div
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <Link
                  href={buttonHref}
                  className="inline-block rounded-lg font-medium group cursor-pointer"
                >
                  <Button
                    variant="light"
                    righticon
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {buttonText}
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ delay: 1.2 }}
          className="aspect-[1384/540] bg-center bg-cover bg-no-repeat rounded-3xl md:rounded-[40px] relative"
        >
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
            alt={image.alternativeText || 'service image'}
            className="rounded-3xl md:rounded-[40px] object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServiceSection
