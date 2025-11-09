'use client'

import BusinessInquiryForm from '@/components/sections/Forms/BusinessInquiryForm'
import GeneralInquiryForm from '@/components/sections/Forms/GeneralInquiryForm'
import Tagline from '@/components/sections/Tagline'
import ToggleButton from '@/components/sections/ToggleButton'
import ButtonIcon from '@/components/svg/ButtonIcon'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import { ContactPageData } from '../../types/contactPageData'
import { useLocale } from 'next-intl'

type TabType = 'general' | 'business' | 'patient'
type TabType2 = 'patientSupport' | 'partnership'

export default function ContactPage({ data }: { data: ContactPageData }) {
  const [currentTab, setCurrentTab] = useState<TabType>('general')
  const [currentTab2, setCurrentTab2] = useState<TabType2>('patientSupport')
  const locale = useLocale()

  return (
    <div className="min-h-screen">
      {/* Send Message Section */}
      <section className="py-8 md:py-16 bg-gradient-to-t from-[#013530] to-[#025850]">
        <div>
          <div className="max-w-[1280px] mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-17">
              {/* Form Section */}

              <div className="space-y-3 md:space-y-6 bg-white rounded-3xl p-4 md:p-8 relative">
                <div className="absolute -top-5">
                  {' '}
                  <Tagline text={data.tagline} />
                </div>
                <div>
                  <h1 className="text-Primary-Black font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px] pb-1">
                    {data.title}
                  </h1>
                  <p className="text-Secondary-Text text-base md:text-lg">
                    {data.description}
                  </p>
                </div>

                <ToggleButton
                  options={data.ToggleButton.options}
                  selectedValue={currentTab}
                  onChange={(val) => setCurrentTab(val as TabType)}
                  contact
                />
                {currentTab === 'general' ? (
                  <GeneralInquiryForm />
                ) : currentTab === 'business' ? (
                  <BusinessInquiryForm />
                ) : currentTab === 'patient' ? (
                  <div className="flex h-3/4 items-center">
                    {' '}
                    <div className=" flex justify-center items-center bg-Secondary-Light-Scrub w-full flex-col rounded-3xl py-8 md:py-15 px-6 md:px-10 text-center ">
                      <h6 className="text-Secondary-Text font-bold text-lg md:text-[20px] pb-4">
                        Thank you for your interest in connecting with us.
                      </h6>
                      <p className="text-base md:text-lg text-Secondary-Text">
                        For patient applications, please submit your request
                        directly through our platform to ensure smooth
                        processing and faster support.
                      </p>
                      <Link href={'/'}>
                        {' '}
                        <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-4 md:pt-8 cursor-pointer">
                          {' '}
                          <div className="font-aeonik-bold text-Primary-Palm group-hover:text-Secondary-Dark-Palm text-base md:text-lg leading-[1.5]">
                            Apply Now
                          </div>
                          <div className="bg-Primary-Palm rounded-full p-[6px] size-7 flex items-center justify-center">
                            <div className="relative shrink-0 size-6">
                              <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                                <div
                                  className={`flex-none  ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                                >
                                  <ButtonIcon
                                    strokeColor="white"
                                    locale={locale}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{' '}
                      </Link>{' '}
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>

              {/* Image Section */}
              <div className="h-[480px] md:h-[780px]  rounded-[40px]  relative">
                <Image
                  fill
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.image.url}`}
                  alt="Contact Us"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Zoom Meeting Section */}
      <section className="py-9 md:py-28 bg-Primary-Spring-Med">
        <div className="px-4 md:px-16">
          <div className=" mx-auto ">
            <div className="text-center pb-4 md:pb-0">
              <h2 className="text-black font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px]">
                Schedule a Zoom Meeting
              </h2>
              <p className="text-black text-base md:text-lg w-full md:w-[544px] mx-auto">
                Schedule your one-on-one meeting with our experts to explore
                innovative solutions tailored to your needs.
              </p>
            </div>
            <div className="relative">
              <div
                className="calendly-inline-widget min-[320px] h-[700px]"
                data-url="https://calendly.com/sage-marketing-dvvt/60min"
                // style={{ minWidth: '800px', height: '700px' }}
              ></div>
            </div>
            <Script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
              // onLoad={() => setIsLoading(false)}
            />
            {/* Calendar Widget */}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-8 md:py-28 bg-Secondary-Light-Scrub">
        <div className=" mx-auto px-4 md:px-0 text-center">
          <div className="space-y-4">
            <h2 className="text-Primary-Black text-[28px] md:text-[48px] font-bold">
              {data.ContactData.title}
            </h2>
            <p className="text-sm md:text-lg">{data.ContactData.description}</p>
          </div>
          <div className=" mx-auto pt-4 md:pt-8">
            {' '}
            <ToggleButton
              options={data.ContactData.ToggleButton.options}
              selectedValue={currentTab2}
              onChange={(val) => setCurrentTab2(val as TabType2)}
              contact
            />
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-8 md:pt-15 px-4 md:px-0">
          <div className="flex w-full gap-8 md:gap-12 justify-center items-start text-start flex-col md:flex-row">
            {data.ContactData.CardsList?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start  flex-col w-full p-4 md:p-10 rounded-3xl relative"
              >
                <div className="flex justify-end w-full">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.image.url}`}
                    alt={li.image.alternativeText || li.title}
                    width={181}
                    height={181}
                    className={` `}
                  />
                </div>
                <h5
                  className={`text-2xl md:text-[32px] font-bold`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-sm md:text-[16px] leading-[1.5] flex-1 `}
                  style={{ color: li.descriptionColor }}
                >
                  {li.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
