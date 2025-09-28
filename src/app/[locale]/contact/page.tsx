'use client'

import { Calendar, ChevronLeft, ChevronRight, Clock, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Tagline from '../../../components/sections/Tagline'
import Link from 'next/link'
import Button from '../../../components/ui/Button'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import ToggleButton from '../../../components/sections/ToggleButton'
import ButtonIcon from '../../../components/svg/ButtonIcon'

export const runtime = 'edge'

// Contact form state interface
interface ContactForm {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
  acceptTerms: boolean
}

// Calendar state interface
interface CalendarState {
  selectedDate: number | null
  selectedTime: string | null
  currentMonth: string
}
const list = [
  {
    image: '/images/generalImages/email.png',
    title: 'Email',
    titleColor: '#CAF48E', // custom title color
    description: 'info@healthconcierge.sa',
    descriptionColor: '#E2F2F1', // custom description color
    bgColor: '#025850',
    taglineColor: '#CAF48E',
  },
  {
    image: '/images/generalImages/phone.png',
    title: 'Phone',
    titleColor: '#025850',
    description: '+966 12 345 6789',
    descriptionColor: '#626262',
    bgColor: '#CAF48E',
    taglineColor: '#1E1E1E',
  },
  {
    image: '/images/generalImages/location.png',
    title: 'Office',
    titleColor: '#CAF48E', // custom title color
    description: '456 Health Ave, Riyadh 12345, KSA',
    descriptionColor: '#E2F2F1', // custom description color
    bgColor: '#025850',
    taglineColor: '#CAF48E',
  },
]
type TabType = 'general' | 'business' | 'patient'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

const options: ToggleOption[] = [
  { id: 'general', label: 'General Inquiry', value: 'general' },
  { id: 'business', label: 'Business Inquiry', value: 'business' },
  { id: 'patient', label: 'Patient Inquiry', value: 'patient' },
]
const options2: ToggleOption[] = [
  { id: 'general', label: 'Patient Support & Inquiries', value: 'general' },
  { id: 'business', label: 'B2B Partnership Inquiries', value: 'business' },
]
export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    acceptTerms: false,
  })

  const [calendar, setCalendar] = useState<CalendarState>({
    selectedDate: 29,
    selectedTime: null,
    currentMonth: 'April 2024',
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

  const handleDateSelect = (date: number) => {
    setCalendar((prev) => ({ ...prev, selectedDate: date }))
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
  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ]
  const [currentTab, setCurrentTab] = useState<TabType>('general')

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
                  <Tagline text="Let’s Talk" />
                </div>
                <div>
                  <h1 className="text-Primary-Black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-1">
                    Send Message
                  </h1>
                  <p className="text-Secondary-Text text-p">
                    We're here to assist you with any inquiries.
                  </p>
                </div>

                <ToggleButton
                  options={options}
                  selectedValue={currentTab}
                  onChange={(val) => setCurrentTab(val as TabType)}
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
                ) : (
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
                )}
              </div>

              {/* Image Section */}
              <div className="h-[780px]  rounded-[40px]  relative">
                <Image
                  fill
                  src="/images/generalImages/contactUs.png"
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
          <div className="max-w-[800px] mx-auto space-y-[46px]">
            <div className="text-center space-y-1">
              <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                Schedule a Zoom Meeting
              </h2>
              <p className="text-black text-p w-[544px] mx-auto">
                Schedule your one-on-one meeting with our experts to explore
                innovative solutions tailored to your needs.
              </p>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white h-[604px] rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left Side - Meeting Info */}
                <div className="p-9 space-y-8 bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Sage Team</h3>
                      <p className="text-sm text-gray-600">
                        30 minute consultation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-base">
                      Schedule Free Consultation Online Meeting
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>30 min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Online event by video conference</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        During our consultation, we will discuss:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Customer needs and current work setup.</li>
                        <li>• Current administrative workload.</li>
                        <li>• Workflow, new strategies, best resources.</li>
                        <li>• Use-case demo • Q&A • Next steps.</li>
                        <li>
                          • Any questions you prepared • Support portal access.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    //  variant="outline"
                    size="large"
                    className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 w-full"
                  >
                    Book now
                  </Button>
                </div>

                {/* Right Side - Calendar */}
                <div className="p-9 space-y-6">
                  <h4 className="font-bold text-base">Select a Date & Time</h4>

                  {/* Calendar Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-sm font-medium">
                        {calendar.currentMonth}
                      </span>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                      {/* Day Headers */}
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
                        (day) => (
                          <div
                            key={day}
                            className="text-center text-xs font-medium text-gray-500 py-2"
                          >
                            {day}
                          </div>
                        )
                      )}

                      {/* Calendar Days */}
                      {Array.from({ length: 35 }, (_, i) => {
                        const date = i - 6 // Adjust for April 2024 starting on Monday
                        const isValidDate = date > 0 && date <= 30
                        const isSelected = date === calendar.selectedDate
                        const isAvailable = [23, 24, 25, 26, 29, 30].includes(
                          date
                        )

                        if (!isValidDate) {
                          return <div key={i} className="h-11" />
                        }

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              isAvailable && handleDateSelect(date)
                            }
                            className={`h-11 w-11 rounded-full text-sm flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[rgba(0,4,4,0.1)] text-black font-bold'
                                : isAvailable
                                  ? 'hover:bg-gray-100 text-gray-900'
                                  : 'text-gray-400 cursor-not-allowed'
                            }`}
                            disabled={!isAvailable}
                          >
                            {date}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {calendar.selectedDate && (
                    <div className="space-y-3">
                      <h5 className="font-medium text-sm">Available Times</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() =>
                              setCalendar((prev) => ({
                                ...prev,
                                selectedTime: time,
                              }))
                            }
                            className={`p-2 text-sm rounded border transition-colors ${
                              calendar.selectedTime === time
                                ? 'bg-[#025850] text-white border-[#025850]'
                                : 'border-gray-300 hover:border-[#025850] hover:text-[#025850]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className=" mx-auto  text-center">
          <div className="space-y-4">
            <h2 className="text-Primary-Black text-[48px] font-bold">
              Contacts
            </h2>
            <p className="text-p">
              We’re here to assist you with any inquiries.
            </p>
          </div>
          <div className="max-w-[486px] mx-auto pt-8">
            {' '}
            <ToggleButton
              options={options2}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex w-full gap-12 justify-center items-start text-start">
            {list?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start  flex-col w-full p-10 rounded-3xl relative"
              >
                <div className="flex justify-end w-full">
                  <Image
                    src={li.image}
                    alt={li.title}
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
