import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithVideo from '@/components/sections/HeroWithVideo'
import Tagline from '@/components/sections/Tagline'
import Image from 'next/image'
import { VisitSaudiData } from '../../types/visitSaudiData'

export default function VisitSaudiPage({ data }: { data: VisitSaudiData }) {
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
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className="max-w-[764px] mx-auto">
          <div className=" mx-auto  text-center">
            <div className="space-y-4">
              <h2 className="text-Primary-Black text-[40px] font-bold">
                {data.ChangingColorsCards.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex  gap-15 justify-center items-start text-start">
            {data.ChangingColorsCards.CardsList?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start gap-2 flex-col max-w-[432px] p-10 rounded-3xl relative"
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
                  className={` text-[32px] font-bold`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-[16px] leading-[1.5] flex-1 `}
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
      {/* <BlogSection blogs={blogs} /> */}
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data.GetInTouch} />
      </section>
    </div>
  )
}
