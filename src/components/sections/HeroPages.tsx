import React from 'react'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  tagline: string
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
}

const HeroPages: React.FC<HeroProps> = ({
  tagline,
  title,
  description,
  breadcrumbItems,
}) => {
  return (
    <section
      className={`pb-20 pt-10  bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side */}
            <div className="space-y-6">
              <Breadcrumb items={breadcrumbItems} heroPages />
              <Tagline text={tagline} />

              <h1 className="text-white font-bold text-[56px] leading-[1.2] tracking-[-0.56px] ">
                {title}
              </h1>
            </div>

            {/* Right side */}
            <div className="space-y-6 my-auto">
              <p className="text-white text-p">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPages
