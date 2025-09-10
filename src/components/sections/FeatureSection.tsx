import React, { ReactElement } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'

interface Feature {
  text: string
  icon: ReactElement
}
interface List {
  title: string
  description?: string
  icon: ReactElement
  theme: string
}
interface FeatureSectionProps {
  tagline?: string
  title: string
  description: string
  features?: Feature[]
  list?: List[]
  ctaText?: string
  href?: string
  image: string
  backgroundColor?: string
  textColor?: string
  reverse?: boolean // if true => image first
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  tagline,
  title,
  description,
  features,
  list,
  ctaText,
  href,
  image,
  backgroundColor = 'white',
  textColor = 'black',
  reverse = false,
}) => {
  return (
    <section style={{ backgroundColor }}>
      <div className="container-custom mx-auto max-w-[1392px] py-28">
        <div
          className={`flex items-center gap-18 ${
            reverse ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Content */}
          <div className="flex-1">
            <div className="mb-8">
              <div>
                {backgroundColor === '#DAF7AF' ? (
                  <span className="text-Primary-Palm text-base font-medium pb-4">
                    {tagline}
                  </span>
                ) : (
                  <Tagline text={tagline} />
                )}
              </div>
              <div className="mb-8">
                <h2
                  className="text-[48px] font-bold leading-[1.2] tracking-[-1px] mb-6 whitespace-pre-line"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
                <p
                  className={`text-p ${textColor === '#1E1E1E' ? 'text-Secondary-Text' : 'text-Secondary-Light-Scrub'}`}
                  // style={{ color: textColor }}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Features */}
            {features && (
              <div className=" mb-8">
                {features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span
                      className="text-[16px] leading-[1.5] flex-1 text-Secondary-Light-Scrub"
                      style={{ color: textColor }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {/* List */}
            {list && (
              <div className="flex mb-8 gap-6 ">
                {list?.map((li, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 flex-col max-w-[316px]"
                  >
                    <div className="flex items-center justify-center">
                      {li.icon}
                    </div>
                    <h5
                      className={`${li.theme === 'dark' ? 'text-Primary-Black' : 'text-white'}  text-[20px] font-bold`}
                    >
                      {li.title}
                    </h5>
                    <span
                      className={`${li.theme === 'dark' ? 'text-Secondary-Text' : 'text-Secondary-Light-Scrub'} text-[16px] leading-[1.5] flex-1 `}
                    >
                      {li.description}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {ctaText && (
              <Link
                href={href || '/contact'}
                className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
              >
                <Button
                  variant={
                    backgroundColor === '#DAF7AF'
                      ? 'primary'
                      : backgroundColor === '#F0F8F8'
                        ? 'primary'
                        : 'light'
                  }
                  rightIcon={true}
                  fullWidth
                  //   onClick={() => setIsMenuOpen(false)}
                >
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>

          {/* Image */}
          <div className="flex-1">
            <div
              className="aspect-[606/646] rounded-[40px] bg-cover bg-center w-[606px]"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
