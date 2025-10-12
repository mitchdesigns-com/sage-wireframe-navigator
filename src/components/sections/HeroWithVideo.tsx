import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'
import Breadcrumb from './Breadcrumb'
import VideoPlayer from './VideoPlayer'

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
    <section
      className={`pb-0 md:pb-20 bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-4 md:px-16">
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
            <h1 className="text-white font-bold text-4xl md:text-[56px] leading-[1.2] tracking-[-1px] md:tracking-[-0.56px] pt-2 pb-8 md:pb-6">
              {title}
            </h1>
            <p className="text-white text-sm md:text-p leading-[1.5] px-5 md:px-0">
              {description}
            </p>
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
          <div className="pt-8 md:pt-16">
            <div className="relative">
              {' '}
              {video?.url && (
                <VideoPlayer
                  video={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video?.url}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithVideo
