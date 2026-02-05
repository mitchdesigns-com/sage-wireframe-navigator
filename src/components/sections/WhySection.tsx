'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { usePathname } from '../../i18n/navigation'
import Button from '../ui/Button'
import { useLocale } from 'next-intl'
import { motion, useInView } from 'framer-motion'

interface Feature {
  iconElement?: {
    url: string
    alternativeText: string
  }
  title: string
  description: string
  bgColor: string
  textColor: string
  type: string
  image?: {
    url: string
    alternativeText: string
  }
  descColor?: string
}

interface WhySectionProps {
  title: string
  description: string
  features: Feature[]
  buttonText?: string
  onButtonClick?: () => void
}

const WhySection: React.FC<WhySectionProps> = ({
  title,
  description,
  features,
  buttonText,
}) => {
  const pathname = usePathname()
  const locale = useLocale()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between cards
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-8 md:py-28 bg-Primary-Spring-Med">
      <div className=" px-4">
        <div className="max-w-[1392px] mx-auto">
          {/* Title + Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[730px] text-center mx-auto"
          >
            <div className="space-y-6">
              <h2 className="text-Primary-Black leading-9 text-[32px] font-bold md:heading-1">
                {title}
              </h2>
              <p className="text-Secondary-Text text-base md:text-lg">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="py-8 md:py-15 space-y-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4"
            >
              {[[features[0]], [features[1], features[2]], [features[3]]].map(
                (colFeatures, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-4 h-full">
                    {colFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`h-full relative rounded-4xl ${feature.bgColor} ${feature.textColor}`}
                      >
                        <div className="space-y-4 p-10">
                          {feature.type === 'icon' && feature.iconElement && (
                            <div className="flex items-center justify-center w-12 h-12 relative">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${feature.iconElement?.url}`}
                                alt={
                                  feature.iconElement?.alternativeText || title
                                }
                                className="object-cover"
                                priority
                                fill
                              />
                            </div>
                          )}

                          <h3 className="font-bold text-2xl md:text-[32px] leading-[1.3] max-w-[228px] md:max-w-full">
                            {feature.title}
                          </h3>
                          <p
                            className={`text-sm md:text-base leading-[1.5] ${feature.descColor}`}
                          >
                            {feature.description}
                          </p>
                        </div>

                        {feature.type === 'image' && feature.image && (
                          <div
                            className={`${
                              colIndex === 0 && index === 0
                                ? 'mt-20 md:mt-15'
                                : 'flex justify-end'
                            } `}
                          >
                            <Image
                              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${feature.image?.url}`}
                              alt={feature.title || ''}
                              width={
                                pathname === '/services/businesses' &&
                                colIndex !== 0
                                  ? 455
                                  : 300
                              }
                              height={200}
                              className={`rounded-lg relative md:absolute bottom-0 ${
                                colIndex === 0 && index === 0
                                  ? 'left-1'
                                  : 'right-0'
                              }`}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-fit md:mx-auto"
          >
            <Link
              href={'/contact'}
              className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer w-full"
            >
              {buttonText && (
                <Button
                  variant="primary"
                  righticon={true}
                  fullwidth
                  locale={locale as 'en' | 'ar'}
                >
                  {buttonText}
                </Button>
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhySection
