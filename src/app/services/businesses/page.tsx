'use client'

import Button from '@/components/ui/Button'
import {
  ChevronRight,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Plane,
  Utensils,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Icons for services
const LocalHospitalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H14V14H2V2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 5V11M5 7H11" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const VerifiedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L10.163 2.506L12.899 2.101L13.304 4.837L14.81 7L13.304 9.163L12.899 11.899L10.163 11.494L8 13L5.837 11.494L3.101 11.899L2.696 9.163L1.19 7L2.696 4.837L3.101 2.101L5.837 2.506L8 1Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 8L7 9.5L10.5 6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const ChronicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const TravelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C21 7.45 20.55 7 20 7H16C16 5.9 15.1 5 14 5H10C8.9 5 8 5.9 8 7H4C3.45 7 3 7.45 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16ZM10 7H14V9H10V7Z" fill="currentColor"/>
  </svg>
)

const NutritionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9ZM16 6V14H18.5V22H21V2C18.24 2 16 4.24 16 6Z" fill="currentColor"/>
  </svg>
)

const HealthSafetyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L3 3V7.5C3 10.5 5.25 13.34 8 14C10.75 13.34 13 10.5 13 7.5V3L8 1Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 8L7.5 9.5L10 7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const MedicalServicesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4V2C11 1.45 10.55 1 10 1H6C5.45 1 5 1.45 5 2V4H2V14C2 14.55 2.45 15 3 15H13C13.55 15 14 14.55 14 13V4H11ZM6 2H10V4H6V2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7V11M5 9H11" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const MedicalInfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 7V11M8 5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Service features data
const healthcareFeatures = [
  {
    icon: LocalHospitalIcon,
    title: 'Expert appointments at leading Saudi hospitals.'
  },
  {
    icon: VerifiedIcon,
    title: 'Second opinions from renowned specialists.'
  },
  {
    icon: ChronicIcon,
    title: 'Comprehensive chronic illness management and post-operative care.'
  }
]

const conciergeFeatures = [
  {
    icon: TravelIcon,
    title: 'Travel coordination for stress-free medical journeys.'
  },
  {
    icon: TravelIcon,
    title: 'Visa assistance to ensure smooth international travel.'
  },
  {
    icon: NutritionIcon,
    title: 'Personalized dietary accommodations for optimal health.'
  }
]

const consultationFeatures = [
  {
    icon: HealthSafetyIcon,
    title: 'Compliance-focused training for a healthier workplace.'
  },
  {
    icon: MedicalServicesIcon,
    title: 'Expert consultation to streamline healthcare processes.'
  },
  {
    icon: MedicalInfoIcon,
    title: 'Empower your team with essential medical knowledge.'
  }
]

const whyChooseFeatures = [
  {
    icon: Users,
    title: 'Dedicated Case Management',
    description: 'Personalized support for every step of your healthcare journey.'
  },
  {
    icon: Award,
    title: 'Access to Leading Experts',
    description: 'Connect with top specialists and renowned medical professionals.'
  },
  {
    icon: TrendingUp,
    title: 'Streamlined Coordination',
    description: 'Seamless integration of all medical and travel arrangements.'
  },
  {
    icon: Shield,
    title: 'Comprehensive Aftercare',
    description: 'Ongoing support and follow-up care for optimal recovery.'
  },
  {
    icon: Clock,
    title: 'Time-Efficient Solutions',
    description: 'Fast-track appointments and priority healthcare access.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous standards ensuring the highest quality of care.'
  }
]

// Testimonials data
const testimonials = [
  {
    logo: 'https://via.placeholder.com/120x48/e5e7eb/9ca3af?text=Logo',
    quote: '"Sage has streamlined our medical travel process significantly."',
    author: 'John Doe',
    role: 'HR Director, XYZ Corp'
  }
]

export default function BusinessesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20">
              <div className="w-[600px]">
                <div className="text-[#000404] font-medium text-base leading-[1.5] mb-2">
                  For Businesses
                </div>
                <h1 className="text-[#000404] font-bold text-[56px] leading-[1.2] tracking-[-0.56px]">
                  Optimizing Workforce Wellbeing
                </h1>
              </div>
              <div className="flex-1">
                <p className="text-[#000404] text-[18px] leading-[1.5]">
                  At Sage, we are your strategic partner in enhancing employee wellness and optimizing productivity through tailored healthcare solutions. Discover how our comprehensive medical travel and concierge services can elevate your organization's health management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20 items-center">
              <div className="flex-1 space-y-8">
                <div>
                  <div className="text-[#000404] font-medium text-base leading-[1.5] mb-4">
                    For Business
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-[509px]">
                      Healthcare
                    </h2>
                    <p className="text-[#000404] text-[18px] leading-[1.5]">
                      Sage connects your employees with top-tier healthcare in Saudi Arabia. Our dedicated case managers ensure seamless communication and personalized care throughout the medical journey.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 py-2">
                  {healthcareFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <feature.icon />
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <button className="bg-[rgba(0,4,4,0.05)] px-6 py-2.5 rounded-[100px] flex items-center gap-3 text-[#000404] font-medium text-base leading-[1.5] hover:bg-[rgba(0,4,4,0.1)] transition-colors">
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </button>
                  <button className="flex items-center gap-2 text-[#000404] font-medium text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Learn More
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="w-[600px] h-[640px] bg-gray-200 rounded-[40px] relative">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=640&fit=crop"
                  alt="Healthcare Services"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Concierge Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20 items-center">
              <div className="w-[600px] h-[640px] bg-gray-200 rounded-[40px] relative">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=640&fit=crop"
                  alt="Healthcare Concierge"
                  className="rounded-[40px] object-cover"
                />
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <div className="text-[#000404] font-medium text-base leading-[1.5] mb-4">
                    For Businesses
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Healthcare Concierge
                    </h2>
                    <p className="text-[#000404] text-[18px] leading-[1.5]">
                      Our concierge services simplify medical travel for your employees, ensuring a seamless experience from start to finish. We handle everything from visa assistance to wellness recovery, allowing your team to focus on what matters most.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {conciergeFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <feature.icon />
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <button className="bg-[rgba(0,4,4,0.05)] px-6 py-2.5 rounded-[100px] flex items-center gap-3 text-[#000404] font-medium text-base leading-[1.5] hover:bg-[rgba(0,4,4,0.1)] transition-colors">
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </button>
                  <button className="flex items-center gap-2 text-[#000404] font-medium text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Learn More
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Training Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20 items-center">
              <div className="flex-1 space-y-8">
                <div>
                  <div className="text-[#000404] font-medium text-base leading-[1.5] mb-4">
                    For Businesses
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Consultation & Training
                    </h2>
                    <p className="text-[#000404] text-[18px] leading-[1.5]">
                      Our expert-led consultation and training programs equip your team with essential skills for managing healthcare efficiently. Tailored to meet compliance standards, we foster healthier workplaces that enhance productivity.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 py-2">
                  {consultationFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <feature.icon />
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <button className="bg-[rgba(0,4,4,0.05)] px-6 py-2.5 rounded-[100px] flex items-center gap-3 text-[#000404] font-medium text-base leading-[1.5] hover:bg-[rgba(0,4,4,0.1)] transition-colors">
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </button>
                  <button className="flex items-center gap-2 text-[#000404] font-medium text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Learn More
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="w-[600px] h-[640px] bg-gray-200 rounded-[40px] relative">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=640&fit=crop"
                  alt="Consultation & Training"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experiences Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20">
              <div className="flex-1 self-center">
                <div className="pb-24">
                  <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px] mb-4">
                    Client Experiences
                  </h2>
                  <p className="text-[#000404] text-[18px] leading-[1.5]">
                    Transforming corporate health management with Sage.
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-12">
                <div className="p-8 rounded-[32px] border border-[rgba(0,4,4,0.02)]">
                  <div className="space-y-12">
                    <div className="h-12 w-[120px] bg-gray-200 rounded relative overflow-hidden">
                      <Image
                        fill
                        src={testimonials[currentTestimonial].logo}
                        alt="Company Logo"
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-6">
                      <p className="text-[#000404] text-[18px] leading-[1.5]">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <div className="flex gap-5 items-center">
                        <div className="w-14 h-14 rounded-full bg-gray-200 relative overflow-hidden">
                          <Image
                            fill
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop"
                            alt={testimonials[currentTestimonial].author}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[#000404] font-bold text-base leading-[1.5]">
                            {testimonials[currentTestimonial].author}
                          </h4>
                          <p className="text-[#000404] text-base leading-[1.5]">
                            {testimonials[currentTestimonial].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="flex items-center gap-2 text-[#000404] text-base leading-[1.5] hover:text-gray-600 transition-colors">
                      Read case study
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          dot === currentTestimonial
                            ? 'bg-[#000404]'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button 
                      className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-300 transition-colors"
                      onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    >
                      <ArrowLeft size={24} className="text-[#000404]" />
                    </button>
                    <button 
                      className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-300 transition-colors"
                      onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    >
                      <ArrowRight size={24} className="text-[#000404]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sage Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20">
              <div className="w-[380px] space-y-8">
                <div>
                  <div className="h-6" />
                  <div className="space-y-6">
                    <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Why Choose Sage for Your Business Needs
                    </h2>
                    <p className="text-[#000404] text-[18px] leading-[1.5]">
                      Partnering with Sage means prioritizing your employees' health while enhancing your organization's efficiency. Experience tailored solutions that drive productivity and satisfaction.
                    </p>
                  </div>
                </div>
                <button className="bg-[rgba(0,4,4,0.05)] px-6 py-2.5 rounded-[100px] flex items-center gap-3 text-[#000404] font-medium text-base leading-[1.5] hover:bg-[rgba(0,4,4,0.1)] transition-colors">
                  Request Free Consultation
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-16">
                {/* First row */}
                <div className="grid grid-cols-2 gap-12">
                  {whyChooseFeatures.slice(0, 2).map((feature, index) => (
                    <div key={index} className="space-y-6">
                      <feature.icon size={48} className="text-[#000404]" />
                      <h3 className="text-[#000404] font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                        {feature.title}
                      </h3>
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Second row */}
                <div className="grid grid-cols-2 gap-12">
                  {whyChooseFeatures.slice(2, 4).map((feature, index) => (
                    <div key={index} className="space-y-6">
                      <feature.icon size={48} className="text-[#000404]" />
                      <h3 className="text-[#000404] font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                        {feature.title}
                      </h3>
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Third row */}
                <div className="grid grid-cols-2 gap-12">
                  {whyChooseFeatures.slice(4, 6).map((feature, index) => (
                    <div key={index} className="space-y-6">
                      <feature.icon size={48} className="text-[#000404]" />
                      <h3 className="text-[#000404] font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                        {feature.title}
                      </h3>
                      <p className="text-[#000404] text-base leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs for Businesses Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[768px] mx-auto text-center">
            <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px] mb-6">
              FAQs for Businesses
            </h2>
            <div className="h-[150px] bg-gray-200 rounded-[20px]" />
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-28">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex gap-20 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  Start Your Journey Today
                </h2>
                <p className="text-[#000404] text-[18px] leading-[1.5]">
                  Transform your organization's healthcare approach with Sage's comprehensive business solutions. Let us help you create a healthier, more productive workforce.
                </p>
                <button className="bg-[rgba(0,4,4,0.05)] px-6 py-2.5 rounded-[100px] flex items-center gap-3 text-[#000404] font-medium text-base leading-[1.5] hover:bg-[rgba(0,4,4,0.1)] transition-colors">
                  Request Free Consultation
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="w-[600px] h-[400px] bg-gray-200 rounded-[40px] relative">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                  alt="Start Your Journey"
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