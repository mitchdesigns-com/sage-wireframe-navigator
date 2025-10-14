import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithVideo from '@/components/sections/HeroWithVideo'
import Tagline from '@/components/sections/Tagline'
import Image from 'next/image'
import { VisitSaudiData } from '../../types/visitSaudiData'
import { BlogPost } from '../../types/blog'
import BlogCard from '../sections/BlogCard'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'

export default function VisitSaudiPage({
  data,
  blogs,
}: {
  data: VisitSaudiData
  blogs: BlogPost[]
}) {
  return (
    <div className="min-h-screen">
      <HeroWithVideo
        title={data.HeroWithVideo.title}
        description={data.HeroWithVideo.description}
        breadcrumbItems={data.HeroWithVideo.breadcrumbItems}
        video={data.HeroWithVideo.video}
      />
      {data.FeatureSection.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
      <section className="py-8 md:py-28 bg-Secondary-Light-Scrub">
        <div className="w-full md:max-w-[764px] mx-auto px-4 md:px-0">
          <div className=" mx-auto  text-center">
            <div className="space-y-4">
              <h2 className="text-Primary-Black text-[26px] md:text-[40px] font-bold">
                {data.ChangingColorsCards.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-8 md:pt-15 px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-8 md:gap-15 justify-center items-start text-start">
            {data.ChangingColorsCards.CardsList?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start gap-2 flex-col w-full md:max-w-[432px] p-5 md:p-10 rounded-3xl relative"
              >
                <div className="absolute -top-5 left-6 w-full">
                  {' '}
                  <Tagline text={li.tagline} taglineColor={li.taglineColor} />
                </div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.image.url}`}
                  alt={li.image.alternativeText || li.title}
                  width={181}
                  height={188}
                  className={`rounded-lg `}
                />
                <h5
                  className={`text-2xl md:text-[32px] font-bold`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-sm md:text-base leading-[1.5] flex-1 `}
                  style={{ color: li.descriptionColor }}
                >
                  {li.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {data.FeatureSectionLast.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
      <section className="max-w-[1392px] mx-auto px-6 py-8 md:py-25">
        <div className="flex items-end justify-between mb-15 flex-col md:flex-row">
          <div className="text-center md:text-start">
            <Tagline text="Blogs" className="items-center md:items-start" />

            <h2 className="text-Primary-Black text-[28px] md:text-[48px] font-bold leading-tight pb-6">
              Tips from the Experts
            </h2>
            <p className="text-Secondary-Text text-base md:text-[18px] max-w-[647px]">
              Find curated travel advice from those who know Saudi best—insider
              tips, updates, and more.
            </p>
          </div>
          <Link href={'/resources/blog'}>
            {' '}
            <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
              {' '}
              <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                Explore All Blogs
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
        </div>{' '}
        <div className="py-8 md:py-15 max-w-[1392px] mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog.HeroSinglePages}
                href={`/resources/blog/${blog.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <BlogSection blogs={blogs} /> */}
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data.GetInTouch} />
      </section>
    </div>
  )
}
