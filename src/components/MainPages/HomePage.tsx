'use client'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import ComprehensiveServices from '@/components/sections/ComprehensiveServices'
import Awards from '@/components/sections/Awards'
import Resources from '@/components/sections/Resources'
import ClientExperiences from '@/components/sections/ClientExperiences'
import DirectionScrollSection from '../../components/ui/DirectionScrollSection'
import HeroWithVideo from '../../components/sections/HeroWithVideo'
import FeatureSection from '../../components/sections/FeatureSection'
import GetInTouch from '../../components/sections/GetInTouch'
import BlogSection from '../../components/sections/BlogSection'
import CentersSection from '../../components/sections/CentersSection'
import { ServicesPageData } from '../../types/homePage'
import { BlogItem } from '../../types/blogs'
import BlogCard from '../sections/BlogCard'
import { NewsArticle } from '../../types/newsEvents'
import Tagline from '../sections/Tagline'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'
import { useEffect, useState } from 'react'

export default function HomePage({
  data,
  news,
}: {
  data: ServicesPageData
  news: NewsArticle[]
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
  return (
    <div className="min-h-screen">
      <HeroWithVideo {...data.HeroWithVideo[0]} />
      <Services {...data.SectionHeader} />

      <div className="overflow-hidden ">
        {data.featureSection.map((section, index) => (
          <FeatureSection key={index} {...section} home />
        ))}
        <DirectionScrollSection />
        <ComprehensiveServices />
      </div>

      <HowItWorks {...data.HowItWorks} />

      <Awards {...data.Awards} />

      <Resources Resources={data.Resources} />

      {/* Client Experiences */}
      <ClientExperiences {...data.ClientExperiences} />

      {data.CentersSection.map((section, index) => (
        <CentersSection key={index} {...section} secondaryButton={true} />
      ))}
      {/* <BlogSection
        heading={data.BlogSection.heading}
        subheading={data.BlogSection.subheading}
        blogs={singles}
        homePage
      /> */}
      <section className="max-w-[1392px] mx-auto px-4 py-8 md:py-25">
        <div className="flex items-end justify-between mb-15 flex-col md:flex-row">
          <div className="">
            <Tagline text="Our News" className="items-center md:items-start" />

            <h2 className="text-Primary-Black text-[28px] md:text-[48px] font-bold leading-tight pb-3 md:pb-6">
              Stay Updated on Our News
            </h2>
            <p className="text-Secondary-Text text-base md:text-[18px] max-w-[647px]">
              Discover the latest news and events at Sage. We are committed to
              keeping you informed about advancements in healthcare and our
              services.{' '}
            </p>
          </div>
          {!isMobile && (
            <Link href={'/resources/news-events'}>
              {' '}
              <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                {' '}
                <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                  Explore All News
                </div>
                <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                  <div className="relative shrink-0 size-6">
                    <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                      <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                        <ButtonIcon strokeColor="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '}
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
                      <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                        <ButtonIcon strokeColor="white" />
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
