import React from 'react'
import Breadcrumb from './Breadcrumb'
import ImageCarousel from './ImagesCarousel'
import Tagline from './Tagline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  dayNumbers?: string
  year?: string
  description?: string
  category?: string
}

const HeroCarousel: React.FC<HeroProps> = ({
  title,
  breadcrumbItems,
  dayNumbers,
  year,
  description,
  category,
}) => {
  return (
    <section
      className={`md:pb-20 md:pt-10 py-10 bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div>
        <div className="max-w-[1392px] mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center">
            <div className="pb-8 md:pb-16">
              <Breadcrumb
                items={breadcrumbItems}
                heroPages
                className="items-center"
              />
            </div>
            {category && (
              <Tagline
                text={category}
                className="items-center"
                category={category}
              />
            )}
            <h1 className="text-white font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.56px] pb-6 max-w-[768px] text-center">
              {title}
            </h1>
            {dayNumbers && (
              <p className="text-Primary-Spring text-base md:text-p pb-3 md:pb-6">
                {dayNumbers}
                {year}
                {' | Riyadh, Saudi Arabia'}
              </p>
            )}
            <p className="text-base md:text-p pb-4 md:pb-15 text-white max-w-[768px] text-center">
              {description}
            </p>
          </div>
        </div>
        {dayNumbers && <ImageCarousel />}
      </div>
    </section>
  )
}

export default HeroCarousel
