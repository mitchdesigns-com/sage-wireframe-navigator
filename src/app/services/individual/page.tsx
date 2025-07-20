'use client'

import Button from '@/components/ui/Button'
import {
  ArrowRight,
  BarChart,
  ChevronLeft,
  ChevronRight,
  FileText,
  Heart,
  MessageCircle,
  Plane,
  Plus,
  Shield,
  UserCheck,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { JoinNetwork } from '../../../components/sections'

// Services data
const healthcareFeatures = [
  {
    icon: FileText,
    title: 'Personalized case managers for your unique healthcare journey.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent communication for peace of mind.',
  },
  {
    icon: ArrowRight,
    title: 'Access to leading international patient departments.',
  },
]

const conciergeFeatures = [
  {
    icon: Plane,
    title: 'Travel coordination for a hassle-free experience.',
  },
  {
    icon: Plane,
    title: 'Visa assistance to simplify your travel plans.',
  },
  {
    icon: Heart,
    title: 'Family care to support your loved ones.',
  },
]

const whySaudiFeatures = [
  {
    icon: BarChart,
    title: 'Expert Matching for Your Case',
    description:
      'We connect you with top doctors and hospitals that specialize in your condition.',
  },
  {
    icon: Heart,
    title: 'Personalized Travel Coordination',
    description:
      'From airport to hospital, enjoy seamless arrangements and 24/7 support.',
  },
  {
    icon: Shield,
    title: 'Second Opinions Made Simple',
    description:
      'Gain clarity and confidence with fast, expert medical reviews.',
  },
  {
    icon: UserCheck,
    title: 'Post-Treatment Peace of Mind',
    description:
      'We stay with you through recovery with coordinated follow-up and local support.',
  },
]

// FAQ data
const faqData = [
  {
    question: 'What are the costs?',
    answer:
      'Costs vary based on the type of treatment and hospital. We provide transparent pricing and can help you understand all potential expenses. Contact us for a personalized estimate.',
  },
  {
    question: 'How long will it take?',
    answer:
      'Treatment duration depends on your specific condition and chosen procedure. Most patients stay 1-4 weeks including recovery time. We provide detailed timelines during consultation.',
  },
  {
    question: 'What about language barriers?',
    answer:
      'All our partner hospitals have English-speaking staff and translators. We also provide dedicated coordinators who speak your language to assist throughout your journey.',
  },
  {
    question: 'Is it safe to travel for medical care?',
    answer:
      'Saudi Arabia has world-class medical facilities with international accreditation. We work only with top-tier hospitals that meet the highest safety and quality standards.',
  },
  {
    question: 'What support is available for family?',
    answer:
      'We provide comprehensive family support including accommodation arrangements, local transportation, cultural orientation, and 24/7 assistance during your stay.',
  },
]

export default function IndividualsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-6">
                <div className="text-black text-base font-medium leading-[1.5]">
                  For Individuals
                </div>
                <h1 className="text-black font-bold text-[56px] leading-[1.2] tracking-[-0.56px] w-[600px]">
                  Personalized Care, Every Step
                </h1>
              </div>
              <div className="space-y-6">
                <p className="text-black text-[18px] leading-[1.5]">
                  We understand that embarking on a medical journey can be
                  daunting. Rest assured, Sage is here to support you every step
                  of the way, ensuring your comfort and care from diagnosis to
                  recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    For Individuals
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                      Healthcare
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      At Sage, we prioritize your health and well-being. Our
                      dedicated team ensures seamless access to top-tier medical
                      care in Saudi Arabia.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 py-2">
                  {healthcareFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <feature.icon size={16} className="text-black shrink-0" />
                      <p className="text-black text-base leading-[1.5]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 flex items-center gap-3"
                  >
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </Button>
                  <button className="flex items-center gap-2 text-black font-medium text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Learn More
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] bg-gray-200 relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/d1d5db/9ca3af?text=Healthcare+Services"
                  alt="Healthcare Services"
                  className="rounded-[40px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Services Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] bg-gray-200 relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/d1d5db/9ca3af?text=Concierge+Services"
                  alt="Concierge Services"
                  className="rounded-[40px] object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-black font-medium text-base leading-[1.5]">
                    For Individuals
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-[560px]">
                      Concierge Services
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      Our concierge services are designed to make your medical
                      journey seamless and stress-free. From travel arrangements
                      to personalized care, we ensure your comfort every step of
                      the way.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {conciergeFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <feature.icon size={24} className="text-black shrink-0" />
                      <p className="text-black text-base leading-[1.5]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 flex items-center gap-3"
                  >
                    Request Free Consultation
                    <ChevronRight size={24} />
                  </Button>
                  <button className="flex items-center gap-2 text-black font-medium text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Learn More
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saudi Arabia Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="w-[380px] space-y-8">
                <div className="space-y-4">
                  <div className="h-6"></div> {/* Spacer for tagline */}
                  <div className="space-y-6">
                    <h2 className="text-black font-bold text-[40px] leading-[1.2] tracking-[-0.4px]">
                      Why Saudi Arabia Is Your Path to Personal Healthcare
                    </h2>
                    <p className="text-black text-[18px] leading-[1.5]">
                      Discover world-class treatment tailored to your unique
                      needs. From hospital selection to recovery, Sage makes
                      your journey smooth, supported, and stress-free.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 flex items-center gap-3"
                >
                  Request Free Consultation
                  <ChevronRight size={24} />
                </Button>
              </div>

              <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {whySaudiFeatures.slice(0, 2).map((feature, index) => (
                    <div key={index} className="space-y-6">
                      <feature.icon size={48} className="text-black" />
                      <h3 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                        {feature.title}
                      </h3>
                      <p className="text-black text-base leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {whySaudiFeatures.slice(2, 4).map((feature, index) => (
                    <div key={index} className="space-y-6">
                      <feature.icon size={48} className="text-black" />
                      <h3 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
                        {feature.title}
                      </h3>
                      <p className="text-black text-base leading-[1.5]">
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

      {/* Client Experiences Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-2 self-center">
                <div className="pb-24 space-y-4">
                  <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                    Client Experiences
                  </h2>
                  <p className="text-black text-[18px] leading-[1.5]">
                    Transforming corporate health management with Sage.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="rounded-[32px] border border-[rgba(0,4,4,0.02)] p-8 space-y-8">
                  <div className="space-y-12">
                    <div className="h-12 w-[120px] bg-gray-200 rounded overflow-hidden relative">
                      <Image
                        fill
                        src="https://placehold.co/120x48/d1d5db/9ca3af?text=Logo"
                        alt="Company Logo"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <p className="text-black text-[18px] leading-[1.5]">
                        "Sage has streamlined our medical travel process
                        significantly."
                      </p>
                      <div className="flex gap-5 items-center">
                        <div className="w-14 h-14 rounded-full bg-gray-200 relative overflow-hidden">
                          <Image
                            fill
                            src="https://placehold.co/56x56/d1d5db/9ca3af?text=JD"
                            alt="John Doe"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-black font-bold text-base leading-[1.5]">
                            John Doe
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-black text-base leading-[1.5] hover:text-gray-600 transition-colors">
                    Read case study
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4, 5].map((dot) => (
                      <button
                        key={dot}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          dot === currentTestimonial
                            ? 'bg-black'
                            : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentTestimonial(dot)}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-200 transition-colors">
                      <ChevronLeft size={24} className="text-black" />
                    </button>
                    <button className="bg-[#f2f2f2] p-3 rounded-full border border-white hover:bg-gray-200 transition-colors">
                      <ChevronRight size={24} className="text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[768px] mx-auto space-y-20">
              <div className="text-center space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  FAQs for Individuals
                </h2>
                <p className="text-black text-[18px] leading-[1.5]">
                  Here are some common questions we receive from our
                  international patients.
                </p>
              </div>

              <div className="border-0 border-b border-[rgba(0,4,4,0.02)]">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border-t border-[rgba(0,4,4,0.02)]"
                  >
                    <button
                      className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    >
                      <h3 className="text-black font-bold text-[18px] leading-[1.5] flex-1">
                        {faq.question}
                      </h3>
                      <div
                        className={`w-8 h-8 transition-transform ${openFaq === index ? 'rotate-45' : ''}`}
                      >
                        <Plus size={32} className="text-black" />
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="pb-6">
                        <p className="text-black text-base leading-[1.5]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto text-center space-y-6">
            <h2 className="text-black font-bold text-[32px] leading-[1.3] tracking-[-0.32px]">
              Still have questions?
            </h2>
            <p className="text-black text-[18px] leading-[1.5]">
              Contact our team for personalized assistance.
            </p>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-28 bg-white">
        <div className="px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  Start Your Journey Today
                </h2>
                <p className="text-black text-[18px] leading-[1.5]">
                  Take the first step towards world-class healthcare. Our expert
                  team is ready to guide you through every step of your medical
                  journey.
                </p>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="bg-[rgba(0,4,4,0.05)] border-none hover:bg-gray-100 flex items-center gap-3"
                >
                  Request Free Consultation
                  <ChevronRight size={24} />
                </Button>
              </div>

              <div className="aspect-[600/640] bg-center bg-cover bg-no-repeat rounded-[40px] bg-gray-200 relative">
                <Image
                  fill
                  src="https://placehold.co/600x640/d1d5db/9ca3af?text=Start+Journey"
                  alt="Start Your Journey"
                  className="rounded-[40px] object-cover"
                />
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
