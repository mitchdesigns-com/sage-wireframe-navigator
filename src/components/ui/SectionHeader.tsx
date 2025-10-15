'use client'
import React, { useEffect, useState } from 'react'
import Tagline from '../sections/Tagline'
interface ImageData {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}
type SectionHeaderProps = {
  tagline?: string
  heading: string
  description?: string
  color?: 'light' | 'dark'
  home?: boolean
  image?: ImageData
}

export default function SectionHeader({
  tagline = 'Our Services',
  heading,
  description,
  color = 'dark',
  home,
  image,
}: SectionHeaderProps) {
  const isLight = color === 'light'
  const headingText = isLight ? 'text-white' : 'text-Primary-Black'
  const descText = isLight ? 'text-white' : 'text-[#626262]'
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
    <div className="flex flex-col gap-4 items-center justify-start mx-auto mb-8 md:mb-8 md:container-custom">
      <div className="flex flex-col items-center justify-center w-full">
        <Tagline text={tagline} className="justify-center items-center " />
        <h2
          className={`font-aeonik-bold ${headingText} text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px] text-center mb-6 text-pretty ${home ? 'max-w-[880px]' : 'max-w-[768px]'} `}
        >
          {heading}
        </h2>
        {description && (
          <p
            className={`font-aeonik-regular ${descText} text-sm md:text-lg leading-[1.5] text-center w-full ${home ? 'max-w-[696px]' : 'max-w-[768px]'}`}
          >
            {description}
          </p>
        )}
        {isMobile && image && (
          <div
            className="aspect-[600/650] rounded-[40px] bg-cover bg-center w-full mt-15"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${image?.url})`,
            }}
          />
        )}
      </div>
    </div>
  )
}
