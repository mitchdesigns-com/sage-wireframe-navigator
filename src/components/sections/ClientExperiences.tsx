'use client'

import Button from '@/components/ui/Button'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    company: 'Webflow',
    companyLogo: '🌐',
    quote: 'Sage has streamlined our medical travel process significantly.',
    name: 'John Doe',
    title: 'HR Director, XYZ Corp',
    caseStudyUrl: '/case-studies/webflow',
  },
  {
    id: 2,
    company: 'TechCorp',
    companyLogo: '💻',
    quote:
      "Outstanding healthcare coordination and support throughout our employees' medical journeys.",
    name: 'Sarah Johnson',
    title: 'Benefits Manager, TechCorp',
    caseStudyUrl: '/case-studies/techcorp',
  },
  {
    id: 3,
    company: 'GlobalHealth',
    companyLogo: '🏥',
    quote:
      'The level of care and attention to detail exceeded our expectations completely.',
    name: 'Michael Chen',
    title: 'Chief Medical Officer, GlobalHealth',
    caseStudyUrl: '/case-studies/globalhealth',
  },
  {
    id: 4,
    company: 'InnovateInc',
    companyLogo: '🚀',
    quote:
      'Sage transformed how we approach corporate healthcare benefits for our team.',
    name: 'Emma Davis',
    title: 'People Operations Lead, InnovateInc',
    caseStudyUrl: '/case-studies/innovate',
  },
  {
    id: 5,
    company: 'FinanceFirst',
    companyLogo: '💰',
    quote:
      'Professional, reliable, and truly caring - everything we needed for our medical travel program.',
    name: 'David Wilson',
    title: 'VP Human Resources, FinanceFirst',
    caseStudyUrl: '/case-studies/finance',
  },
]

export default function ClientExperiences() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="flex flex-col justify-center items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Client Experiences
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Transforming corporate health management with Sage.
            </p>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              {/* Company Logo */}
              <div className="mb-6 flex items-center">
                <div className="mr-3 text-2xl">
                  {currentTestimonial.companyLogo}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {currentTestimonial.company}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 text-lg leading-relaxed text-gray-700">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Person Info */}
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentTestimonial.title}
                  </div>
                </div>
              </div>

              {/* Case Study Link */}
              <Button href={currentTestimonial.caseStudyUrl}>
                Read case study
              </Button>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 hover:bg-gray-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 hover:bg-gray-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
