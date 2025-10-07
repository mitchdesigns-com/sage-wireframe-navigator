'use client'
import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import CentersSection from '@/components/sections/CentersSection'
import Tagline from '@/components/sections/Tagline'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { NetworkData } from '../../types/ourNetworkPage'

export default function OurNetworkPage({ data }: { data: NetworkData }) {
  return (
    <div className="min-h-screen">
      <HeroPages {...data.HeroPages} />
      <FeatureSection {...data.FeatureSection[0]} />
      <section className="bg-Secondary-Scrub">
        <div className="container-custom mx-auto max-w-[1392px] py-28">
          <div className={`flex items-center gap-15 flex-row-reverse `}>
            <div className="flex-1">
              <div className="mb-8">
                <div>
                  <Tagline text={data.SingleCenter.tagline} />
                </div>
                <div className="mb-8">
                  <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-2 whitespace-pre-line text-Primary-Black">
                    {data.SingleCenter.title}
                  </h2>
                  <span className="text-Primary-Palm text-base font-medium mb-2">
                    {data.SingleCenter.category}
                  </span>
                  <p
                    className={`text-p text-Secondary-Text whitespace-pre-line`}
                  >
                    {data.SingleCenter.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-4 ">
                <div className="flex items-start  flex-col bg-white w-full h-[332px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.SingleCenter.image.url}`}
                    alt="center"
                    className="object-contain p-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data.CentersSection.map((section, index) => (
        <CentersSection key={index} {...section} />
      ))}
      <section className="bg-Primary-Scrub">
        <div className=" mx-auto max-w-[1392px] py-28 w-full">
          <div className={`flex items-center gap-20 flex-row `}>
            <div className="w-1/2">
              <div className="mb-8">
                <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 whitespace-pre-line text-white">
                  {data.TrustedPartner.title}
                </h2>
                <span className="text-white text-[18px] mb-8">
                  {data.TrustedPartner.shortDescription}
                </span>
                <p
                  className={`text-p text-Secondary-Dark-Palm text-xs whitespace-pre-line pt-4`}
                >
                  {data.TrustedPartner.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-1/2">
              <div className="grid grid-cols-1 gap-4 ">
                <div className="flex items-start  flex-col w-full h-[400px] rounded-[8px] relative overflow-hidden">
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.TrustedPartner.image.url}`}
                    alt="center"
                    className="object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <div className="container-custom mx-auto max-w-[1392px] py-28">
          <div className={`flex items-start gap-15 flex-row`}>
            <div className="flex-1 ">
              <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] whitespace-pre-line text-Primary-Black">
                {data.LoginSection.title}
              </h2>
            </div>

            <div className="flex-1">
              <p
                className={`text-p text-Secondary-Text whitespace-pre-line pb-8`}
              >
                {data.LoginSection.description}
              </p>
              <Link
                href={data.LoginSection.cta.url}
                className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
              >
                <Button variant={'primary'} rightIcon={false} fullWidth>
                  {data.LoginSection.cta.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
