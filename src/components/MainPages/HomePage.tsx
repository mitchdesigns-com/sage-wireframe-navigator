'use client'
import Awards from '@/components/sections/Awards'
import ClientExperiences from '@/components/sections/ClientExperiences'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import HowItWorks from '@/components/sections/HowItWorks'
import Resources from '@/components/sections/Resources'
import Services from '@/components/sections/Services'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CentersSection from '../../components/sections/CentersSection'
import FeatureSection from '../../components/sections/FeatureSection'
import GetInTouch from '../../components/sections/GetInTouch'
import HeroWithVideo from '../../components/sections/HeroWithVideo'
import DirectionScrollSection from '../../components/ui/DirectionScrollSection'
import { ServicesPageData } from '../../types/homePage'
import { NewsArticle } from '../../types/newsEvents'
import BlogCard from '../sections/BlogCard'
import Tagline from '../sections/Tagline'
import ButtonIcon from '../svg/ButtonIcon'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HomePage({
  data,
  news,
  locale,
}: {
  data: ServicesPageData
  news: NewsArticle[]
  locale: 'en' | 'ar'
}) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen">
      <HeroWithVideo {...data.HeroWithVideo[0]} locale={locale} />
      <Services {...data.SectionHeader} locale={locale} />

      <div className="overflow-hidden ">
        {data.featureSection.map((section, index) => (
          <FeatureSection key={index} {...section} home />
        ))}
        <DirectionScrollSection
          {...data?.ComprehensiveServices}
          locale={locale}
        />
        <ComprehensiveServices
          {...data.ComprehensiveServices}
          locale={locale}
        />
      </div>

      <HowItWorks {...data.HowItWorks} locale={locale} />

      <Awards {...data.Awards} />

      <Resources Resources={data.Resources} locale={locale} />

      {/* Client Experiences */}
      <ClientExperiences {...data.ClientExperiences} />

      {data.CentersSection.map((section, index) => (
        <CentersSection key={index} {...section} secondaryButton={true} />
      ))}

      <section className="max-w-[1392px] mx-auto px-4 py-8 md:py-25">
        <div className="flex items-end justify-between mb-15 flex-col md:flex-row">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <Tagline text="Our News" className="items-center md:items-start" />

            <h2 className="text-Primary-Black text-[28px] md:text-[48px] font-bold leading-tight pb-3 md:pb-6">
              Stay Updated on Our News
            </h2>
            <p className="text-Secondary-Text text-base md:text-[18px] max-w-[647px]">
              Discover the latest news and events at Sage. We are committed to
              keeping you informed about advancements in healthcare and our
              services.{' '}
            </p>
          </motion.div>
          {!isMobile && (
            <Link href={'/resources/news-events'}>
              {' '}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer"
              >
                {' '}
                <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                  Explore All News
                </div>
                <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                  <div className="relative shrink-0 size-6">
                    <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                      <div
                        className={`flex-none ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                      >
                        <ButtonIcon locale={locale} strokeColor="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>{' '}
            </Link>
          )}
        </div>
        <div className="max-w-[1392px] mx-auto py-0 ">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                href={`/resources/news-events/news/${blog.slug}`}
                news
              />
            ))}
          </div>
          {isMobile && (
            <Link href={'/resources/news-events'}>
              {' '}
              <div className="group flex gap-1.5 items-center justify-center rounded-[100px] pt-8 cursor-pointer">
                {' '}
                <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                  Explore All News
                </div>
                <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                  <div className="relative shrink-0 size-6">
                    <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                      <div
                        className={`flex-none ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                      >
                        <ButtonIcon strokeColor="white" locale={locale} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </Link>
          )}
        </div>
      </section>
      <GetInTouch {...data.GetInTouch} />
    </div>
  )
}
