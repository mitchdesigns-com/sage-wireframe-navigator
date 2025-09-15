import React, { ReactElement } from 'react'
import ButtonIcon from '../svg/ButtonIcon'
import Link from 'next/link'

interface Service {
  icon: ReactElement
  title: string
  description: string
  href?: string
}

interface ServicesSectionProps {
  tagline: string
  title: string
  description: string
  detailedServices: Service[]
  backgroundColor?: string
  textColor?: string
  image?: string
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  tagline,
  title,
  description,
  detailedServices,
  backgroundColor = 'white',
  image,
}) => {
  return (
    <section className="py-28 " style={{ backgroundColor }}>
      <div className="container-custom mx-auto max-w-[1392px] flex gap-8">
        {/* Header */}
        <div className={`${detailedServices.length > 2 ? 'w-full' : 'w-2/3'} `}>
          <div className="mb-4 ">
            <span className="text-[16px] font-medium text-Primary-Palm">
              {tagline}
            </span>
          </div>
          <div className="mb-6 max-w-[656px]">
            <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 text-Primary-Black">
              {title}
            </h2>
            <p className="text-p text-Secondary-Text max-w-[656px]">
              {description}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${detailedServices.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}  gap-8 mt-15`}
          >
            {detailedServices.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 bg-Secondary-Dark-Palm p-10 rounded-3xl"
              >
                {/* <div className='text-Primary-Spring'>{service.icon}</div> */}
                <h3 className="text-[24px] font-bold leading-[1.4] tracking-[-0.32px] text-Primary-Spring">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[1.5] text-white">
                  {service.description}
                </p>
                <Link
                  href={service.href || '/'}
                  className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-20 cursor-pointer"
                >
                  {' '}
                  <div className="font-aeonik-bold text-Primary-Scrub group-hover:text-Primary-Light-Sage text-lg leading-[1.5]">
                    Explore
                  </div>
                  <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                    <div className="relative shrink-0 size-6">
                      <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                        <div className="flex-none group-hover:rotate-[45deg] text-Primary-Scrub group-hover:text-Primary-Light-Sage transition-all duration-300">
                          <ButtonIcon
                            fillColor={'#ffffff'}
                            strokeColor={'#ffffff'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>{' '}
              </div>
            ))}
          </div>
        </div>
        <div className={`${detailedServices.length > 2 ? 'w-0' : 'w-1/3'}`}>
          <div
            className="aspect-[444/572] rounded-[40px] bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
