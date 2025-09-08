// components/Hero.tsx
import React from 'react'
import Breadcrumb from './Breadcrumb'

interface HeroProps {
  tagline: string
  title: string
  description: string
}

const HeroPages: React.FC<HeroProps> = ({ tagline, title, description }) => {
  return (
    <section
      className={`pb-20 pt-10  bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side */}
            <div className="space-y-6">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  {
                    label: 'Individuals Services',
                    href: '/services/individual',
                  },
                ]}
                heroPages
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex items-center justify-center">
                  <div className="transform rotate-[-6deg]">
                    <div
                      className={`bg-Primary-Spring px-1.5 py-0 rounded-[6px] text-Primary-Black`}
                    >
                      <div
                        className={`font-aeonik-medium text-Primary-Black text-base text-center leading-[1.5] text-nowrap`}
                      >
                        {tagline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-white font-bold text-[56px] leading-[1.2] tracking-[-0.56px] ">
                {title}
              </h1>
            </div>

            {/* Right side */}
            <div className="space-y-6 my-auto">
              <p className="text-white text-[18px] leading-[1.5]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPages
