'use client'

import Button from '@/components/ui/Button'
import {
  ChevronLeft,
  ChevronRight,
  Dribbble,
  Linkedin,
  Twitter,
  Play,
} from 'lucide-react'
import { HeroText, JoinNetwork } from '@/components/sections'
import Image from 'next/image'
import { useState } from 'react'

const values = [
  {
    title: 'Structured: Clarity and Reliability in Care',
    description:
      'We prioritize clear processes to ensure dependable healthcare experiences.',
    image: 'https://placehold.co/400x240/d1d5db/9ca3af?text=Healthcare+Process',
  },
  {
    title: 'Scalable: Adaptable Solutions for Every Patient',
    description:
      'Our services evolve to meet the diverse needs of our patients.',
    image: 'https://placehold.co/400x240/d1d5db/9ca3af?text=Adaptable+Care',
  },
  {
    title: 'Transparent: Honest Communication and Pricing',
    description: 'We believe in open dialogue and clear pricing structures.',
    image:
      'https://placehold.co/400x240/d1d5db/9ca3af?text=Clear+Communication',
  },
]

const teamMembers = [
  {
    name: 'Dr. Amina',
    role: 'Medical Director',
    description:
      'Expert in healthcare innovation with over 15 years of experience in medical tourism.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Dr.+Amina',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Mr. Khalid',
    role: 'Operations Manager',
    description:
      'Specializes in optimizing patient experiences and operational efficiency across our services.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Mr.+Khalid',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Ms. Layla',
    role: 'Client Relations',
    description:
      'Dedicated to ensuring seamless communication and support for all our international patients.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Ms.+Layla',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Dr. Omar',
    role: 'Quality Assurance',
    description:
      'Committed to maintaining the highest standards of patient safety and care quality.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Dr.+Omar',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Ms. Sara',
    role: 'Marketing Director',
    description:
      "Passionate about promoting our services and enhancing our brand's global presence.",
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Ms.+Sara',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Mr. Faisal',
    role: 'Finance Officer',
    description:
      'Ensures financial integrity and supports sustainable growth for our healthcare initiatives.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Mr.+Faisal',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Dr. Fatima',
    role: 'Research Director',
    description:
      'Leading innovative research initiatives in medical tourism and patient care.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Dr.+Fatima',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Mr. Ahmed',
    role: 'Technology Lead',
    description:
      'Driving digital transformation and innovative technology solutions.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Mr.+Ahmed',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
]

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsPerView = 3
  const totalSlides = Math.ceil(teamMembers.length / cardsPerView)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroText
        title="About Sage"
        description="Discover how we redefine healthcare concierge services for a transformative medical tourism experience."
        size="large"
        variant="default"
        backgroundImage="https://placehold.co/1512x370/4a5568/ffffff?text=Medical+Tourism+Hero"
        backgroundOverlay={true}
        animated={true}
      />

      {/* Overview Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-black font-medium text-base leading-[1.5]">
                      Overview
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Redefining Medical Tourism in Saudi Arabia
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      Sage is a pioneering healthcare concierge company
                      dedicated to transforming medical tourism in Saudi Arabia.
                      We build robust systems and partnerships that enhance the
                      healthcare journey, aligning with Vision 2030.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                    <div className="space-y-4">
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                        Our Commitment
                      </h3>
                      <p className="text-black text-base leading-[1.5]">
                        Transforming healthcare journeys through structure,
                        trust, and innovative solutions.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                        Vision 2030
                      </h3>
                      <p className="text-black text-base leading-[1.5]">
                        Aligning with national goals to enhance global medical
                        tourism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] bg-gray-200 relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/d1d5db/9ca3af?text=Overview+Image"
                  alt="Overview"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Video */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="w-[468px]">
                <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                  Our Vision: Saudi Arabia as a Medical Hub
                </h2>
              </div>
              <div className="space-y-4">
                <div className="text-black text-base leading-[1.5] space-y-4">
                  <p>
                    At Sage, we envision Saudi Arabia as a premier global
                    destination for medical tourism—where patients from around
                    the world receive exceptional care in a culturally rich and
                    welcoming environment. Our mission goes beyond coordination;
                    we aim to deliver structured, world-class healthcare
                    experiences.
                  </p>
                  <p>
                    In line with Vision 2030, we're building a fully integrated
                    healthcare ecosystem through strategic partnerships,
                    advanced systems, and international standards. Our goal is
                    to simplify the medical travel journey while ensuring every
                    patient receives personalized attention and trusted support.
                  </p>
                  <p>
                    Through innovation, transparency, and a commitment to
                    excellence, we are redefining healthcare for global patients
                    and partners alike—positioning Saudi Arabia as a beacon of
                    healing and leadership in the global healthcare economy.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div
              className="relative aspect-[1280/738] bg-gray-800 rounded-[40px] overflow-hidden bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://placehold.co/1280x738/4a5568/ffffff?text=Vision+Video')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <Play
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[768px] mx-auto text-center space-y-6">
              <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px] w-[890px] mx-auto">
                Our Mission: Simplifying Global Healthcare with Structured,
                World-Class Concierge Services
              </h2>
              <p className="text-black text-[18px] leading-[1.5]">
                At Sage, we are dedicated to providing comprehensive concierge
                services that streamline the international patient experience.
                Our mission is to enhance the national healthcare economy while
                ensuring every patient receives world-class care tailored to
                their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto space-y-20">
            <div className="max-w-[768px] space-y-4">
              <div>
                <p className="text-black font-medium text-base leading-[1.5]">
                  Our Values
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  Our Core Values That Drive Us Forward
                </h2>
                <p className="text-black text-[18px] leading-[1.5]">
                  At Sage, our core values shape every interaction and service
                  we provide. They reflect our commitment to excellence and
                  patient-centered care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={index} className="space-y-8">
                  <div className="aspect-[394.667/240] bg-center bg-cover bg-no-repeat rounded-[32px] bg-gray-200 relative">
                    <Image
                      fill
                      src={value.image}
                      alt={value.title}
                      className="rounded-[32px] object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                      {value.title}
                    </h3>
                    <p className="text-black text-base leading-[1.5]">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto space-y-20">
            <div className="max-w-[768px] space-y-6">
              <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                Our Team
              </h2>
              <p className="text-black text-[18px] leading-[1.5]">
                Meet our experienced and dedicated healthcare professionals.
              </p>
            </div>

            {/* Team Carousel */}
            <div className="space-y-12">
              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out gap-12"
                  style={{
                    transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                  }}
                >
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex-none w-[394.67px] space-y-6"
                    >
                      <div className="aspect-square bg-center bg-cover bg-no-repeat rounded-[32px] bg-gray-200 relative">
                        <Image
                          fill
                          src={member.image}
                          alt={member.name}
                          className="rounded-[32px] object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-0">
                          <h3 className="text-black font-bold text-[20px] leading-[1.5]">
                            {member.name}
                          </h3>
                          <p className="text-black text-[18px] leading-[1.5]">
                            {member.role}
                          </p>
                        </div>
                        <p className="text-black text-base leading-[1.5]">
                          {member.description}
                        </p>
                      </div>
                      <div className="flex gap-3.5">
                        <a
                          href={member.social.linkedin}
                          className="text-black hover:text-gray-600 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-black hover:text-gray-600 transition-colors"
                        >
                          <Twitter size={24} />
                        </a>
                        <a
                          href={member.social.dribbble}
                          className="text-black hover:text-gray-600 transition-colors"
                        >
                          <Dribbble size={24} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                {/* Dots */}
                <div className="flex gap-1">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      setCurrentSlide(Math.max(0, currentSlide - 1))
                    }
                    disabled={currentSlide === 0}
                    className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={24} className="text-black" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        Math.min(totalSlides - 1, currentSlide + 1)
                      )
                    }
                    disabled={currentSlide === totalSlides - 1}
                    className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={24} className="text-black" />
                  </button>
                </div>
              </div>
            </div>

            {/* We're Hiring Section */}
            <div className="max-w-[768px] space-y-6">
              <div className="space-y-4">
                <h3 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                  We're hiring!
                </h3>
                <p className="text-black text-[18px] leading-[1.5]">
                  Join our team of dedicated healthcare professionals.
                </p>
              </div>
              <div>
                <Button
                  href="/careers"
                  // variant="outline"
                  // size="large"
                  className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100"
                >
                  Open Positions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <JoinNetwork />
    </div>
  )
}
