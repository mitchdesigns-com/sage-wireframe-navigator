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
      className={`pb-20 pt-10  bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div>
        <div className="max-w-[1392px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="pb-16">
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
            <h1 className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.56px] pb-6 max-w-[768px]">
              {title}
            </h1>
            {dayNumbers && (
              <p className="text-Primary-Spring text-p pb-6">
                {dayNumbers}
                {year}
                {' | Riyadh, Saudi Arabia'}
              </p>
            )}
            <p className="text-p pb-15 text-white max-w-[768px] text-center">
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
