'use client'

import Tagline from '@/components/sections/Tagline'
import ToggleButton from '@/components/sections/ToggleButton'
import ButtonIcon from '@/components/svg/ButtonIcon'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { ContactPageData } from '../../types/contactPageData'

interface ContactForm {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
  acceptTerms: boolean
}

type TabType = 'general' | 'business' | 'patient'
type TabType2 = 'patientSupport' | 'partnership'

export default function ContactPage({ data }: { data: ContactPageData }) {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    acceptTerms: false,
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handlePhoneInputChange = (
    eOrName: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    value?: string
  ) => {
    if (typeof eOrName === 'string') {
      setFormData((prev) => ({ ...prev, [eOrName]: value || '' }))
      // setErrors((prev) => ({ ...prev, [eOrName]: "" }));
    } else {
      const { name, value } = eOrName.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      // setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  const [currentTab, setCurrentTab] = useState<TabType>('general')
  const [currentTab2, setCurrentTab2] = useState<TabType2>('patientSupport')

  return (
    <div className="min-h-screen">
      {/* Send Message Section */}
      <section className="py-16 bg-gradient-to-t from-[#013530] to-[#025850]">
        <div>
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-17">
              {/* Form Section */}

              <div className="space-y-6 bg-white rounded-3xl p-8 relative">
                <div className="absolute -top-5">
                  {' '}
                  <Tagline text={data.tagline} />
                </div>
                <div>
                  <h1 className="text-Primary-Black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-1">
                    {data.title}
                  </h1>
                  <p className="text-Secondary-Text text-p">
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
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex  gap-4">
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          First name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          Last name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-Primary-Black text-lg font-medium leading-[1.5] block"
                      >
                        Phone number
                      </label>
                      <PhoneInput
                        id="phone"
                        international
                        defaultCountry="EG"
                        value={formData.phone}
                        onChange={(value) =>
                          handlePhoneInputChange('phone', value || '')
                        }
                        placeholder=""
                        className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-Primary-Black text-lg font-medium leading-[1.5] block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent resize-none text-[#626262] text-base leading-[1.5]"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 pb-4">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="peer appearance-none w-[18px] h-[18px] border border-Secondary-Scrub rounded bg-white checked:bg-Primary-Spring checked:border-Primary-Spring 
               relative before:content-[''] before:absolute before:top-[2px] before:left-[5px] before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px] before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
                        required
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-black text-[14px] leading-[1.5]"
                      >
                        I accept the Terms
                      </label>
                    </div>

                    <Link href={''} className="inline-block group w-full">
                      <Button variant={'primary'} rightIcon={true} fullWidth>
                        Submit Request
                      </Button>
                    </Link>
                  </form>
                ) : currentTab === 'business' ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex  gap-4">
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          First name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          Last name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex  gap-4">
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-2 col w-full">
                        <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                          Position
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-Primary-Black text-lg font-medium  leading-[1.5] block">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-Primary-Black text-lg font-medium leading-[1.5] block"
                      >
                        Phone number
                      </label>
                      <PhoneInput
                        id="phone"
                        international
                        defaultCountry="EG"
                        value={formData.phone}
                        onChange={(value) =>
                          handlePhoneInputChange('phone', value || '')
                        }
                        placeholder=""
                        className="w-full h-12 px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-Primary-Black text-lg font-medium leading-[1.5] block">
                        What kind of partnership
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-white border border-[#D2D2D2] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent resize-none text-[#626262] text-base leading-[1.5]"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 pb-4">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="peer appearance-none w-[18px] h-[18px] border border-Secondary-Scrub rounded bg-white checked:bg-Primary-Spring checked:border-Primary-Spring 
               relative before:content-[''] before:absolute before:top-[2px] before:left-[5px] before:w-[5px] before:h-[10px] before:border-r-[2px] before:border-b-[2px] before:border-[#025850] before:rotate-45 before:opacity-0 checked:before:opacity-100"
                        required
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-black text-[14px] leading-[1.5]"
                      >
                        I accept the Terms
                      </label>
                    </div>

                    <Link href={''} className="inline-block group w-full">
                      <Button variant={'primary'} rightIcon={true} fullWidth>
                        Submit Request
                      </Button>
                    </Link>
                  </form>
                ) : currentTab === 'patient' ? (
                  <div className="flex h-3/4 items-center">
                    {' '}
                    <div className=" flex justify-center items-center bg-Secondary-Light-Scrub w-full flex-col rounded-3xl py-15 px-10 text-center ">
                      <h6 className="text-Secondary-Text font-bold text-[20px] pb-4">
                        Thank you for your interest in connecting with us.
                      </h6>
                      <p className="text-p text-Secondary-Text">
                        For patient applications, please submit your request
                        directly through our platform to ensure smooth
                        processing and faster support.
                      </p>
                      <Link href={'/'}>
                        {' '}
                        <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                          {' '}
                          <div className="font-aeonik-bold text-Primary-Palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                            Apply Now
                          </div>
                          <div className="bg-Primary-Palm rounded-full p-[6px] size-7 flex items-center justify-center">
                            <div className="relative shrink-0 size-6">
                              <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                                <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                                  <ButtonIcon strokeColor="white" />
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
              <div className="h-[780px]  rounded-[40px]  relative">
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
      <section className="py-28 bg-Primary-Spring-Med">
        <div className="px-16">
          <div className=" mx-auto ">
            <div className="text-center ">
              <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                Schedule a Zoom Meeting
              </h2>
              <p className="text-black text-p w-[544px] mx-auto">
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
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className=" mx-auto  text-center">
          <div className="space-y-4">
            <h2 className="text-Primary-Black text-[48px] font-bold">
              {data.ContactData.title}
            </h2>
            <p className="text-p">{data.ContactData.description}</p>
          </div>
          <div className="max-w-[486px] mx-auto pt-8">
            {' '}
            <ToggleButton
              options={data.ContactData.ToggleButton.options}
              selectedValue={currentTab2}
              onChange={(val) => setCurrentTab2(val as TabType2)}
              contact
            />
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex w-full gap-12 justify-center items-start text-start">
            {data.ContactData.CardsList?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start  flex-col w-full p-10 rounded-3xl relative"
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
                  className={` text-[32px] font-bold`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-[16px] leading-[1.5] flex-1 `}
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
