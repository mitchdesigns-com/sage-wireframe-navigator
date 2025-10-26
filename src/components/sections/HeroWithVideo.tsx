'use client'

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
  btn?: string
  href?: string
  video: {
    url: string
    alternativeText: string
  }
  locale?: 'en' | 'ar'
}

const HeroWithVideo: React.FC<HeroProps> = ({
  title,
  description,
  breadcrumbItems,
  btn,
  href,
  video,
  locale,
}) => {
  return (
    <section
      className={`pb-4 md:pb-20 bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-4 md:px-16">
        <div className="mx-auto max-w-[1392px]">
          <div className="flex flex-col justify-center mx-auto max-w-[768px] text-center">
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
            <h1
              className="pt-2 pb-8 md:pb-6 [&>span]:font-bold text-white [&>span]:text-Primary-Spring md:text-[56px] text-4xl leading-[1.2] tracking-[-1px] md:tracking-[-0.56px]"
              dangerouslySetInnerHTML={{ __html: title }}
              suppressHydrationWarning
            />

            <p className="px-5 md:px-0 text-white text-sm md:text-lg leading-[1.5]">
              {description}
            </p>
            {btn && (
              <div className="flex justify-between md:justify-center items-center pt-8 w-full">
                <Link
                  href={href || '/contact'}
                  className="group inline-block bg-primary rounded-lg w-full md:w-fit font-medium text-white cursor-pointer"
                >
                  <Button
                    variant={'light'}
                    righticon={true}
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {btn}
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
