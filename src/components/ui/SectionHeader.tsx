import React from 'react'
import Tagline from '../sections/Tagline'

type SectionHeaderProps = {
  tagline?: string
  heading: string
  description?: string
  color?: 'light' | 'dark'
  home?: boolean
}

export default function SectionHeader({
  tagline = 'Our Services',
  heading,
  description,
  color = 'dark',
  home,
}: SectionHeaderProps) {
  const isLight = color === 'light'
  const headingText = isLight ? 'text-white' : 'text-Primary-Black'
  const descText = isLight ? 'text-white' : 'text-[#626262]'

  return (
    <div className="flex flex-col gap-4 items-center justify-start mx-auto mb-8 md:mb-16 md:container-custom">
      <div className="flex flex-col items-center justify-center w-full">
        <Tagline
          text={tagline}
          className="justify-center items-center md:items-start"
        />
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
      </div>
    </div>
  )
}
