'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'
import Image from 'next/image'
import { useLocale } from 'next-intl'

interface List {
  list: { url: string; alternativeText: string }[]
}
interface CentersSectionProps {
  tagline?: string
  title: string
  description?: string
  list?: List[]
  ctaText?: string
  href?: string
  backgroundColor?: string
  textColor?: string
  reverse?: boolean // if true => List first
  secondaryButton?: boolean
}

const CentersSection: React.FC<CentersSectionProps> = ({
  tagline,
  title,
  description,
  list,
  ctaText,
  href,
  backgroundColor = 'white',
  textColor = 'black',
  reverse = false,
  secondaryButton,
}) => {
  const locale = useLocale()

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
    <section style={{ backgroundColor }}>
      <div className="px-4 md:px-0 mx-auto max-w-[1392px] py-8 md:py-28">
        <div
          className={`flex items-center flex-col md:flex-row gap-8 md:gap-18 ${
            reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
          }`}
        >
          {/* Content */}
          <div className="flex-1">
            <div className="mb-0 md:mb-8">
              <div>
                <Tagline
                  text={tagline}
                  taglineColor={backgroundColor === '#DAF7AF' ? '#DAF7AF' : ''}
                />
              </div>
              <div className="mb-0 md:mb-8">
                <h2
                  className="text-[28px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-4 md:mb-6 whitespace-pre-line text-center md:text-start"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
                <p
                  className={`text-sm md:text-lg ${textColor === '#1E1E1E' ? 'text-Secondary-Text' : 'text-Secondary-Light-Scrub'} whitespace-pre-line text-center md:text-start`}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* CTA */}
            {!isMobile && (
              <>
                {ctaText && (
                  <Link
                    href={href || '/contact'}
                    className={`inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer ${secondaryButton ? ' w-[148px]' : ''}`}
                  >
                    <Button
                      variant={
                        backgroundColor === '#DAF7AF'
                          ? 'primary'
                          : backgroundColor === '#F0F8F8'
                            ? 'primary'
                            : backgroundColor === '#E2F2F1'
                              ? 'primary'
                              : 'light'
                      }
                      righticon={secondaryButton ? false : true}
                      fullwidth
                      locale={locale as 'en' | 'ar'}
                    >
                      {ctaText}
                    </Button>
                  </Link>
                )}
                {secondaryButton && (
                  <Button
                    href="/our-network"
                    variant="light-link"
                    righticon={true}
                    locale={locale as 'en' | 'ar'}
                  >
                    Explore Our Network
                  </Button>
                )}
              </>
            )}
          </div>

          {/* Image */}
          <div className="flex-1 w-full px-[22px] md:px-0">
            {list && (
              <div className="grid grid-cols-2 gap-4 ">
                {list[0]?.list.map((li, idx) => (
                  <div
                    key={idx}
                    className="flex items-start  flex-col bg-white w-full h-[68px] md:h-[120px] rounded-[8px] relative overflow-hidden"
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.url}`}
                      alt="center"
                      className="object-contain px-5 md:p-5"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {isMobile && (
            <>
              {ctaText && (
                <Link
                  href={href || '/contact'}
                  className={`inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer text-center ${secondaryButton ? 'w-full  md:w-[148px]' : ''}`}
                >
                  <Button
                    variant={
                      backgroundColor === '#DAF7AF'
                        ? 'primary'
                        : backgroundColor === '#F0F8F8'
                          ? 'primary'
                          : backgroundColor === '#E2F2F1'
                            ? 'primary'
                            : 'light'
                    }
                    righticon={secondaryButton ? false : true}
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {ctaText}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Button
                  href="/our-network"
                  variant="light-link"
                  righticon={true}
                  locale={locale as 'en' | 'ar'}
                >
                  Explore Our Network
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default CentersSection
