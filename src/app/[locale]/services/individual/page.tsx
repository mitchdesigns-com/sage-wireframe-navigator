'use client'
export const runtime = 'edge'

import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import VectorIcon from '@/components/svg/VectorIcon'
import WhySection from '@/components/sections/WhySection'
import GetInTouch from '@/components/sections/GetInTouch'
import TravelIcon from '@/components/svg/TravelIcon'
import StarShine from '@/components/svg/StarShine'

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
const featureSections = [
  {
    tagline: 'For Individuals',
    title: 'Healthcare',
    description:
      'At Sage, we prioritize your health and well-being. Our dedicated team ensures seamless access to top-tier medical care in Saudi Arabia.',
    features: [
      {
        text: 'Personalized case managers for your unique healthcare journey.',
        icon: <VectorIcon />,
      },
      {
        text: 'Transparent communication for peace of mind.',
        icon: <VectorIcon />,
      },
      {
        text: 'Access to leading international patient departments.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/individual.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
  {
    tagline: 'For Individuals',
    title: 'Concierge Services',
    description:
      'Our concierge services are designed to make your medical journey seamless and stress-free. From travel arrangements to personalized care, we ensure your comfort every step of the way.',
    features: [
      {
        text: 'Travel coordination for a hassle-free experience.',
        icon: <VectorIcon />,
      },
      {
        text: 'Visa assistance to simplify your travel plans.',
        icon: <VectorIcon />,
      },
      {
        text: 'Family care to support your loved ones.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Concierge.png',
    backgroundColor: 'white',
    textColor: '#1E1E1E',
    reverse: true,
  },
]
const whySaudiFeatures = [
  {
    type: 'image',
    image: '/images/generalImages/WhySaudi.png',
    title: 'Expert Matching for Your Case',
    description:
      'We connect you with top doctors and hospitals that specialize in your condition.',
    bgColor: 'bg-Primary-Palm',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon',
    iconElement: <TravelIcon />, // JSX element
    title: 'Personalized Travel Coordination',
    description:
      'From airport to hospital, enjoy seamless arrangements and 24/7 support.',
    bgColor: 'bg-Primary-Black',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon', // or "image"
    iconElement: <StarShine />, // JSX element
    title: 'Second Opinions Made Simple',
    description:
      'Gain clarity and confidence with fast, expert medical reviews.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    descColor: 'text-Secondary-Text',
  },
  {
    type: 'image',
    image: '/images/generalImages/WhySaudi2.png',
    title: 'Expert Matching for Your Case',
    description:
      'We connect you with top doctors and hospitals that specialize in your condition.',
    bgColor: 'bg-Dark-Scrub',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
]

export default function IndividualsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <HeroPages
        tagline="For Individuals"
        title="Personalized Care, Every Step"
        description="We understand that embarking on a medical journey can be daunting. Rest assured, Sage is here to support you every step of the way, ensuring your comfort and care from diagnosis to recovery."
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          tagline={section.tagline}
          title={section.title}
          description={section.description}
          features={section.features}
          ctaText={section.ctaText}
          href={section.href}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}

      {/* Why Saudi Arabia Section */}
      <WhySection
        title="Why Saudi Arabia Is Your Path to Personal Healthcare"
        description="Discover world-class treatment tailored to your unique needs. From hospital selection to recovery, Sage makes your journey smooth, supported, and stress-free."
        features={whySaudiFeatures}
        buttonText="Request Free Consultation"
        onButtonClick={() => console.log('Button clicked')}
      />

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
                  <p className="text-black text-p">
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
                      <p className="text-black text-p">
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
      <section className="py-25 bg-Secondary-Scrub">
        <div className="px-16">
          <div className="max-w-[1392px] mx-auto">
            <div className="max-w-[768px] mx-auto space-y-20">
              <div className="text-center space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  FAQs for Individuals
                </h2>
                <p className="text-black text-p">
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
                      className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-Secondary-Scrub transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    >
                      <h3 className="text-black font-bold text-p flex-1">
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
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Begin Your Healthcare Journey"
          description="Contact Sage to explore tailored solutions for your healthcare needs and seamless travel experience."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}
