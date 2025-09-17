import React from 'react'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'
import Link from 'next/link'
import Button from '../ui/Button'
import Image from 'next/image'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  tagline?: string
  title: string
  description?: string
  breadcrumbItems: BreadcrumbItem[]
  button?: string
  href?: string
  bgImage?: string
}

const HeroPages: React.FC<HeroProps> = ({
  tagline,
  title,
  description,
  breadcrumbItems,
  button,
  href,
  bgImage,
}) => {
  return (
    <section
      className={`pb-20 pt-10  bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side */}
            <div className="">
              <div className="pb-16">
                <Breadcrumb items={breadcrumbItems} heroPages />
              </div>
              <Tagline text={tagline} />

              <h1 className="text-white font-bold text-[56px] leading-[1.2] tracking-[-0.56px] ">
                {title}
              </h1>
            </div>

            {/* Right side */}
            <div className="space-y-6 my-auto">
              <p className="text-white text-p">{description}</p>
              {/* CTA */}
              {button && (
                <Link
                  href={href || '/contact'}
                  className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
                >
                  <Button variant={'light'} rightIcon={true} fullWidth>
                    {button}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          {bgImage && (
            <div className="pt-16">
              <Image src={bgImage} alt="scr header" height={520} width={1390} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroPages
