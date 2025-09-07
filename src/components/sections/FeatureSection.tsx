import React, { ReactElement } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'

interface Feature {
  text: string
  icon: ReactElement
}

interface FeatureSectionProps {
  tagline: string
  title: string
  description: string
  features: Feature[]
  ctaText: string
  href: string
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
                {tagline && (
                  <div className="flex flex-col items-start justify-start pb-1 w-full">
                    <div className="flex h-[34.788px] items-center justify-center w-[106.405px]">
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
                )}
              </div>
              <div className="mb-8">
                <h2
                  className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
                <p
                  className="text-[18px] leading-[1.5] text-Secondary-Light-Scrub"
                  style={{ color: textColor }}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className=" mb-8">
              {features.map((feature, idx) => (
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

            {/* CTA */}
            <Link
              href={href}
              className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
            >
              <Button
                variant="light"
                rightIcon={true}
                fullWidth
                //   onClick={() => setIsMenuOpen(false)}
              >
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div
              className="aspect-[600/640] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
