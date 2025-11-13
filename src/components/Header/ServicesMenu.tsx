'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceCategories } from '../../types/header'
import ButtonIcon from '../svg/ButtonIcon'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'
import { useLocale } from 'next-intl'

interface ServicesMenuProps {
  serviceCategories: ServiceCategories
  isOpen: boolean
  onClose: () => void
}

export default function ServicesMenu({
  serviceCategories,
  isOpen,
  onClose,
}: ServicesMenuProps) {
  const locale = useLocale()

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50 max-h-[90vh] overflow-y-hidden"
    >
      {/* Menu content */}
      <div className="bg-[#e6eeed] px-5 py-8 ">
        <div className="max-w-[1392px] w-full mx-auto">
          {' '}
          <div className="flex gap-8 items-start justify-end">
            <div className="flex-1 flex flex-col gap-8">
              <p
                className="text-lg font-medium flex md:hidden"
                onClick={onClose}
              >
                <div className="flex gap-2 justify-center items-center">
                  {locale === 'en' ? <ChevronLeft /> : <ChevronRight />}
                  Services
                </div>
              </p>
              {/* Service Categories */}
              <div className="flex gap-0 md:gap-8 items-start justify-start w-full flex-col md:flex-row ">
                {/* For Individuals */}
                <div className=" flex-1 flex flex-col gap-4 h-[296px]">
                  <Link href={'/services/individual'} onClick={onClose}>
                    {' '}
                    <div className="flex gap-1.5 items-center cursor-pointer ps-3">
                      <div className="font-aeonik-bold text-primary-black text-xs md:text-sm leading-[1.5]">
                        {serviceCategories.individuals.title}
                      </div>
                      <div className="relative shrink-0 size-[17px] text-primary-black flex items-center justify-center">
                        <KeyboardArrowDown
                          className={`${locale === 'ar' ? 'rotate-90' : 'rotate-270'}`}
                          color="#1e1e1e"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-0 md:gap-2 ">
                    {serviceCategories.individuals.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onClose}
                        className="group flex gap-2 md:h-[116px] items-start px-11 md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                      >
                        <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                            alt={item.icon.url || ''}
                            width={24}
                            height={24}
                          />

                          {/* {item.icon} */}
                        </div>
                        <div className="flex flex-col items-start justify-start flex-1">
                          <div className="font-aeonik-bold text-Neutral-Darkest text-sm md:text-base leading-[1.5]">
                            {item.title}
                          </div>
                          <div
                            className="font-aeonik-regular text-[#626262] text-xs md:text-sm leading-[1.5] w-[236px] [&>span]:font-bold"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* For Businesses */}
                <div className="flex-1 flex flex-col gap-4 h-[296px]">
                  <Link href={'/services/businesses'} onClick={onClose}>
                    <div className="flex gap-1.5 items-center cursor-pointer ps-3">
                      <div className="font-aeonik-bold text-primary-black text-xs md:text-sm leading-[1.5]">
                        {serviceCategories.businesses.title}
                      </div>
                      <div className="relative shrink-0 size-[17px] text-primary-black flex items-center justify-center">
                        <KeyboardArrowDown
                          className={`${locale === 'ar' ? 'rotate-90' : 'rotate-270'}`}
                          color="#1e1e1e"
                        />{' '}
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-0 md:gap-2">
                    {serviceCategories.businesses.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={onClose}
                        className="group flex gap-2 md:h-[116px] items-start px-11 md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                      >
                        <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                            alt={item.icon.url || ''}
                            width={24}
                            height={24}
                          />{' '}
                        </div>
                        <div className="flex flex-col items-start justify-start flex-1">
                          <div className="font-aeonik-bold text-primary-black text-sm md:text-base leading-[1.5]">
                            {item.title}
                          </div>
                          <div className="font-aeonik-regular text-[#626262] text-xs md:text-sm leading-[1.5] w-[236px]">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* For Organizations */}
                <div className="flex-1 flex flex-col gap-4 h-[296px]">
                  <Link href={'/services/organizations'} onClick={onClose}>
                    <div className="flex gap-1.5 items-center cursor-pointer  ps-3">
                      <div className="font-aeonik-bold text-primary-black text-xs md:text-sm leading-[1.5]">
                        {serviceCategories.organizations.title}
                      </div>
                      <div className="relative shrink-0 size-[17px] text-primary-black flex items-center justify-center">
                        <KeyboardArrowDown
                          className={`${locale === 'ar' ? 'rotate-90' : 'rotate-270'}`}
                          color="#1e1e1e"
                        />{' '}
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col  gap-0 md:gap-2 ">
                    {serviceCategories.organizations.items.map(
                      (item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={onClose}
                          className="group flex gap-2 md:h-[116px] items-start px-11 md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                        >
                          <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                              alt={item.icon.url || ''}
                              width={24}
                              height={24}
                            />{' '}
                          </div>
                          <div className="flex flex-col items-start justify-start flex-1">
                            <div className="font-aeonik-bold text-primary-black text-sm md:text-base leading-[1.5]">
                              {item.title}
                            </div>
                            <div className="font-aeonik-regular text-[#626262] text-xs md:text-sm leading-[1.5] w-[236px]">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
            </div>

            {/* Image placeholder */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative md:w-[250px] lg:w-[314px] md:h-[300px] lg:h-[386px] ">
                <Image
                  src="/images/generalImages/Placeholder.png"
                  alt="Doctor"
                  fill
                  className="rounded-[24px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <Link href={'/services'} onClick={onClose}>
            {' '}
            <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
              {' '}
              <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                Explore All Services
              </div>
              <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                <div className="relative shrink-0 size-6">
                  <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                    <div
                      className={`flex-none ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                    >
                      <ButtonIcon strokeColor="white" locale={locale} />
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
