'use client'

import CentersSection from '@/components/sections/CentersSection'
import OurTeam from '@/components/sections/OurTeam'
import Tagline from '@/components/sections/Tagline'
import HeroSection from '@/components/strapi/HeroSection'
import Image from 'next/image'

export default function AboutPage({ data }: { data: any }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={data.HeroSection[0]} />

      {/* Overview Section */}
      <section>
        <div className="flex items-start ">
          <div className="md:sticky md:top-0 min-w-[575px]">
            <div className="min-h-screen w-full bg-center bg-cover bg-no-repeat relative">
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.OverviewSection.mainImage.url}`}
                alt={data.OverviewSection.mainImage.alternativeText}
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative  min-h-screen w-full">
            <div className="py-25 px-15 flex justify-between flex-col min-h-screen">
              <div className="max-w-[817px]">
                <div>
                  <p className="text-Primary-Palm font-medium text-base leading-[1.5]">
                    {data.OverviewSection.mainSubtitle}
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-Primary-Black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                    {data.OverviewSection.mainTitle}{' '}
                  </h2>
                  <p className="text-Secondary-Text text-p">
                    {data.OverviewSection.mainDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                      {data.OverviewSection.aboutData?.map((item: any) => (
                        <div key={item.id} className="space-y-4">
                          <h3 className="text-Primary-Palm font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                            {item.title}
                          </h3>
                          <p className="text-Secondary-Text text-base leading-[1.5] whitespace-pre-line">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-28 px-15 bg-Secondary-Dark-Palm  min-h-screen w-full flex justify-between flex-col">
              <div>
                <Tagline text={data.OverviewSection.tagline} />
                <h2 className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
                  {data.OverviewSection.title}
                </h2>
                <div className="space-y-4 max-w-[786px]">
                  <div className="text-Secondary-Light-Scrub text-p leading-[1.5] space-y-4 tracking-[-0.48px]">
                    <p className="whitespace-pre-line">
                      {data.OverviewSection.description}
                    </p>
                  </div>
                </div>
              </div>{' '}
              <div className="relative aspect-[190/200] w-[170px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.OverviewSection.vectorImage.url}`}
                  fill
                  alt={data.OverviewSection.vectorImage.alternativeText}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="bg-Primary-Palm">
        <div className="max-w-[1392px] mx-auto w-full relative py-25">
          <video
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.videoSection.video.url}`}
            className="w-full rounded-[40px] "
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="cursor-pointer">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.videoSection.playButton.url}`}
                alt="VideoButton"
                width={180}
                height={180}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className=" bg-Primary-Palm">
        <div className="max-w-[1390px] mx-auto py-47">
          <div className="min-w-[768px] mx-auto text-center  flex flex-col items-center justify-center">
            <div className="max-w-[980px]">
              {' '}
              <Tagline
                text={data.MissionSection.tagline}
                className="items-center"
              />
              <h2
                className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.48px] mx-auto"
                dangerouslySetInnerHTML={{
                  __html: data.MissionSection.title.replace(
                    /<span>/g,
                    '<span class="text-Primary-Scrub">'
                  ),
                }}
              />
            </div>
            <p className="text-Secondary-Light-Scrub text-p max-w-[758px] pt-4">
              {data.MissionSection.description}
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className="max-w-[616px] mx-auto">
          <div className=" mx-auto  text-center">
            <Tagline
              text={data.ValuesSection.tagline}
              className="items-center"
            />
            <div className="space-y-4">
              <h2 className="text-Primary-Black text-[48px] font-bold tracking-[-0.48px]">
                {data.ValuesSection.title}
              </h2>
              <p className="text-p text-Secondary-Text">
                {data.ValuesSection.description}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex  gap-15 justify-center items-start text-start">
            {data.ValuesSection.CardsList?.map((li: any, idx: any) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start gap-2 flex-col max-w-[432px] p-10 rounded-3xl relative"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.image.url}`}
                  alt={li.image.alternativeText || li.title}
                  width={181}
                  height={188}
                  className={`rounded-lg `}
                />
                <h5
                  className={` text-[32px] font-bold tracking-[-0.48px]`}
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
      <OurTeam data={data.OurTeam} />
      <CentersSection {...data.CentersSection[0]} />
    </div>
  )
}
