'use client'

import Image from 'next/image'
import Tagline from './Tagline'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'
import { useLocale, useTranslations } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export interface CaseStudy {
  slug: string
  HeroCarousel: { title: string; description: string }
  case_study_type: { title: string }
  GallerySection: {
    images: {
      url: string
      alternativeText: string
    }[]
  }
  description: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyCard({
  caseStudy,
  index,
}: CaseStudyCardProps) {
  const locale = useLocale()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: index * 0.2, ease: 'easeOut' },
    },
  }
  const t = useTranslations()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="group flex flex-col rounded-4xl relative"
    >
      <Link
        href={`/resources/case-studies/${caseStudy.slug}`}
        className="flex flex-col rounded-4xl relative"
      >
        <div className="h-[334px] md:h-[520px] w-full relative rounded-4xl overflow-hidden">
          {/* Image */}
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${caseStudy.GallerySection?.images[0].url}`}
            alt={caseStudy.HeroCarousel.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Content */}
          <div className="absolute bottom-0 p-4 md:p-8 w-full z-20">
            <Tagline
              text={caseStudy.case_study_type.title}
              category={caseStudy.case_study_type.title}
            />

            <h3 className="text-[20px] md:text-2xl font-bold text-white leading-snug mb-1">
              {caseStudy.HeroCarousel.title}
            </h3>

            <p className="text-white text-sm md:text-base pb-4 md:pb-6">
              {caseStudy.HeroCarousel.description}
            </p>

            <div className="group flex gap-1.5 items-center justify-start rounded-[100px] cursor-pointer">
              <div className="ltr:font-aeonik-bold !rtl:font-arabic text-Primary-Spring group-hover:text-Primary-Light-Sage text-base md:text-lg leading-[1.5]">
                {t('News.readCaseStudy')}
              </div>
              <div className="bg-Primary-Spring rounded-full p-[6px] size-7 flex items-center justify-center">
                <div className="relative shrink-0 size-6">
                  <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                    <div
                      className={`flex-none ${
                        locale === 'ar'
                          ? 'group-hover:-rotate-[45deg]'
                          : 'group-hover:rotate-[45deg]'
                      } text-Primary-Spring group-hover:text-Primary-Light-Sage transition-all duration-300`}
                    >
                      <ButtonIcon strokeColor="#1E1E1E" locale={locale} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
