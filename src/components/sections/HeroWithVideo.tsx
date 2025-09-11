import React from 'react'
import Breadcrumb from './Breadcrumb'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
}

const HeroWithVideo: React.FC<HeroProps> = ({
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
          <div className="mx-auto flex justify-center flex-col text-center max-w-[768px]">
            <Breadcrumb
              items={breadcrumbItems}
              className="justify-center"
              heroPages
            />
            <h1 className="text-white font-bold text-[56px] leading-[1.2] tracking-[-0.56px] pt-20 pb-6">
              {title}
            </h1>
            <p className="text-white text-p">{description}</p>
          </div>
          <div className=" pt-16">
            <video
              src="/images/generalImages/video.mp4"
              className="w-full rounded-[40px] "
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithVideo
