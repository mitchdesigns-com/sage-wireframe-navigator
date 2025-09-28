import React, { ReactNode } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from '../../i18n/navigation'

interface Feature {
  iconElement?: ReactNode
  title: string
  description: string
  bgColor: string
  textColor: string
  type: string
  image?: string
  descColor?: string
}

interface WhySectionProps {
  title: string
  description: string
  features: Feature[]
  buttonText?: string
  onButtonClick?: () => void
}

const WhySection: React.FC<WhySectionProps> = ({
  title,
  description,
  features,
  buttonText,
}) => {
  const pathname = usePathname()
  return (
    <section className="py-28 bg-Primary-Spring-Med">
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="flex flex-col">
            <div className="max-w-[730px] text-center mx-auto">
              <div className="space-y-6">
                <h2 className="text-Primary-Black heading-1">{title}</h2>
                <p className="text-Secondary-Text text-p">{description}</p>
              </div>
            </div>

            <div className="py-15 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[[features[0]], [features[1], features[2]], [features[3]]].map(
                  (colFeatures, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-4 h-full">
                      {colFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className={`h-full relative rounded-4xl ${feature.bgColor} ${feature.textColor}`}
                        >
                          <div className="space-y-4 p-10">
                            {feature.type === 'icon' &&
                              feature.iconElement &&
                              feature?.iconElement}

                            <h3 className="font-bold text-[32px] leading-[1.3]">
                              {feature.title}
                            </h3>
                            <p
                              className={`text-base leading-[1.5] ${feature.descColor}`}
                            >
                              {feature.description}
                            </p>
                          </div>

                          {feature.type === 'image' && feature.image && (
                            <div
                              className={`${colIndex === 0 && index === 0 ? 'mt-15' : ''} `}
                            >
                              <Image
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${feature.image}`}
                                alt={feature.title}
                                width={
                                  pathname === '/services/businesses' &&
                                  colIndex !== 0
                                    ? 455
                                    : 300
                                }
                                height={200}
                                className={`rounded-lg absolute bottom-0 ${colIndex === 0 && index === 0 ? 'left-1' : 'right-0'}`}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto">
            <Link
              href={'/contact'}
              className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
            >
              {' '}
              {buttonText && (
                <Button variant="primary" rightIcon={true} fullWidth>
                  {buttonText}
                </Button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection
