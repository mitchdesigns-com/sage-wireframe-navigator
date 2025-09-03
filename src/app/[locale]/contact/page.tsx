'use client'

import Button from '@/components/ui/Button'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
export const runtime = 'edge'

// Contact form state interface
interface ContactForm {
  fullName: string
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

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
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

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ]

  return (
    <div className="min-h-screen">
      {/* Send Message Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Form Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-black font-medium text-base leading-[1.5]">
                      Let's Get In Touch
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h1 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Send Message
                    </h1>
                    <p className="text-black text-[18px] leading-[1.5]">
                      We're here to assist you with any inquiries.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-black text-base leading-[1.5] block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 bg-white border border-[#f0f0ee] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-black text-base leading-[1.5] block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 bg-white border border-[#f0f0ee] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-black text-base leading-[1.5] block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message..."
                      rows={8}
                      className="w-full px-3 py-2 bg-white border border-[#f0f0ee] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#025850] focus:border-transparent resize-none text-[#626262] text-base leading-[1.5]"
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
                      className="w-[18px] h-[18px] border border-[#caf48e] rounded"
                      required
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-black text-[14px] leading-[1.5]"
                    >
                      I accept the Terms
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="large"
                    className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100"
                  >
                    Send
                  </Button>
                </form>
              </div>

              {/* Image Section */}
              <div className="h-[734px] bg-center bg-cover bg-no-repeat rounded-[40px] bg-gray-200 relative">
                <Image
                  fill
                  src="https://placehold.co/600x734/d1d5db/9ca3af?text=Contact+Image"
                  alt="Contact Us"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Zoom Meeting Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[800px] mx-auto space-y-[46px]">
            <div className="text-center space-y-6">
              <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                Schedule a Zoom Meeting
              </h2>
              <p className="text-black text-[18px] leading-[1.5] w-[544px] mx-auto">
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
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-black font-medium text-base leading-[1.5] mb-2">
                Contact
              </p>
              <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] mb-4">
                Contact Us
              </h2>
              <p className="text-black text-[18px] leading-[1.5]">
                We're here to assist you with any inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <Mail size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] mb-1">
                        Email
                      </h3>
                      <p className="text-black text-base leading-[1.5] mb-1">
                        Info@sage.com
                      </p>
                      <p className="text-[#626262] text-[14px] leading-[1.5]">
                        Send us an email anytime!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <Phone size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] mb-1">
                        Phone
                      </h3>
                      <p className="text-black text-base leading-[1.5] mb-1">
                        +966 55 123 4567
                      </p>
                      <p className="text-[#626262] text-[14px] leading-[1.5]">
                        Mon-Fri from 8am to 5pm.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <MapPin size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] mb-1">
                        Office
                      </h3>
                      <p className="text-black text-base leading-[1.5] mb-1">
                        100 Health Ave, Riyadh 1234, USA
                      </p>
                      <p className="text-[#626262] text-[14px] leading-[1.5]">
                        Get directions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] bg-gray-200 rounded-[40px] relative flex items-center justify-center">
                <MapPin size={48} className="text-gray-400" />
                <Image
                  fill
                  src="https://placehold.co/600x400/d1d5db/9ca3af?text=Map+Location"
                  alt="Office Location"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
