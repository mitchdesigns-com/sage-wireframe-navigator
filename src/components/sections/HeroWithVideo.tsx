import React from 'react'
import Breadcrumb from './Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  description: string
  breadcrumbItems?: BreadcrumbItem[]
  ctaText?: string
  href?: string
  video: {
    url: string
    alternativeText: string
  }
}

const HeroWithVideo: React.FC<HeroProps> = ({
  title,
  description,
  breadcrumbItems,
  ctaText,
  href,
  video,
}) => {
  return (
    <section className={`pb-20   bg-gradient-to-t from-[#013530] to-[#025850]`}>
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="mx-auto flex justify-center flex-col text-center max-w-[768px]">
            {breadcrumbItems && (
              <div className="pt-10">
                {' '}
                <Breadcrumb
                  items={breadcrumbItems}
                  className="justify-center"
                  heroPages
                />
              </div>
            )}
            <h1 className="text-white font-bold text-[56px] leading-[1.2] tracking-[-0.56px] pt-20 pb-6">
              {title}
            </h1>
            <p className="text-white text-p">{description}</p>
            {ctaText && (
              <div className="flex justify-center items-center w-full pt-8">
                <Link
                  href={href || '/contact'}
                  className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer w-fit"
                >
                  <Button
                    variant={'light'}
                    rightIcon={true}
                    fullWidth
                    //   onClick={() => setIsMenuOpen(false)}
                  >
                    {ctaText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className=" pt-16">
            <div className="relative">
              {' '}
              <video
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video?.url}`}
                className="w-full rounded-[40px] "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />{' '}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="cursor-pointer">
                  <Image
                    src="/images/generalImages/VideoButton.png"
                    alt="VideoButton"
                    width={180}
                    height={180}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithVideo
