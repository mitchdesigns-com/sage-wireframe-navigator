'use client'
export const runtime = 'edge'

import { Plus } from 'lucide-react'

import { useState } from 'react'
import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import VectorIcon from '@/components/svg/VectorIcon'
import WhySection from '@/components/sections/WhySection'
import GetInTouch from '@/components/sections/GetInTouch'
import ReduceCapacity from '@/components/svg/ReduceCapacity'
import WavingHand from '@/components/svg/WavingHand'

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
    tagline: 'For Organizations',
    title: 'Healthcare',
    description:
      'From staff members to field beneficiaries, we coordinate quality medical care with clarity and efficiency. Our solutions are built for institutions that demand both compassion and compliance.',
    features: [
      {
        text: 'Scheduled care at top-tier hospitals in Saudi Arabia',
        icon: <VectorIcon />,
      },
      {
        text: 'Transparent reporting for budgets and patient outcomes',
        icon: <VectorIcon />,
      },
      {
        text: 'Dedicated case managers for every patient',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/HealthcareOrganizationHeader.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
  {
    tagline: 'For Organizations',
    title: 'Concierge ',
    description:
      'We manage the non-medical journey too — from visas to accommodation, ensuring every touchpoint reflects your organization’s care and credibility.',
    features: [
      {
        text: 'Visa processing, airport reception, and transport',
        icon: <VectorIcon color="#6CBEB8" />,
      },
      {
        text: 'Cultural and religious sensitivity for patients and companions',
        icon: <VectorIcon color="#6CBEB8" />,
      },
      {
        text: '24/7 on-ground support for emergencies and logistics',
        icon: <VectorIcon color="#6CBEB8" />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/OrganizationConciergeHeader.png',
    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'For Organizations',
    title: 'Consultation & Training',
    description:
      'We partner with NGOs, embassies, and institutions to design better workflows and deliver training that prepares teams for real-world challenges.',
    features: [
      {
        text: 'Audits and design of institutional healthcare protocols',
        icon: <VectorIcon />,
      },
      {
        text: 'Onsite and virtual training programs for public staff',
        icon: <VectorIcon />,
      },
      {
        text: 'Special focus on cultural awareness and escalation handling',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/ConsultationHeader.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
]
const whySaudiFeatures = [
  {
    type: 'image',
    image: '/images/generalImages/image7.png',
    title: 'Mission-Aligned Support',
    description:
      'We tailor every service to your organization’s protocol and values.',
    bgColor: 'bg-Primary-Palm',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon',
    iconElement: <WavingHand />, // JSX element
    title: 'Compliance with Confidence',
    description:
      'Ensure full documentation, transparency, and ethical coordination.',
    bgColor: 'bg-Primary-Black',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon', // or "image"
    iconElement: <ReduceCapacity />, // JSX element
    title: 'Scalable Medical Coordination',
    description:
      'From individual cases to group care, we handle all logistics seamlessly.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    descColor: 'text-Secondary-Text',
  },
  {
    type: 'image',
    image: '/images/generalImages/image8.png',
    title: '24/7 Field Team Support',
    description: 'We’re on call to help your staff, wherever they’re deployed.',
    bgColor: 'bg-Dark-Scrub',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
]

const globalStandards = {
  title: 'Tailored Solutions for Your Organization’s Unique Healthcare Needs',
  description:
    'At Sage, we understand that every organization has distinct procurement rules and reporting requirements. Our processes are designed to seamlessly adapt to your standards, ensuring compliance and accountability.',

  features: [
    {
      text: 'Customized reporting formats for your organization',
      icon: <VectorIcon />,
    },
    {
      text: 'Adherence to strict procurement guidelines',
      icon: <VectorIcon />,
    },
    {
      text: 'Commitment to transparency and accountability',
      icon: <VectorIcon />,
    },
  ],
  image: '/images/generalImages/TailoredSolutions.png',
  backgroundColor: '#013530',
  textColor: 'white',
  reverse: false,
}
export default function OrganizationsPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <HeroPages
        tagline="For Organizations"
        title="Your Trusted Partner for Medical Travel"
        description="Sage is dedicated to facilitating compliant and compassionate medical travel for ministries, embassies, and NGOs. Our structured processes ensure that every patient receives the highest level of care while adhering to all necessary regulations."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Organizations Services', href: '/services/organizations' },
        ]}
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
        title="Why Saudi Arabia Works for Institutional Health Missions"
        description="Sage delivers compliant, efficient, and mission-aligned medical coordination for NGOs, embassies, and public entities. We handle the complexities—so you can focus on impact."
        features={whySaudiFeatures}
        buttonText="Request Free Consultation"
        onButtonClick={() => console.log('Button clicked')}
      />
      <FeatureSection
        title={globalStandards.title}
        description={globalStandards.description}
        image={globalStandards.image}
        backgroundColor={globalStandards.backgroundColor}
        textColor={globalStandards.textColor}
        reverse={globalStandards.reverse}
        features={globalStandards.features}
      />
      {/* FAQ Section */}
      <section className="py-25 bg-Secondary-Scrub">
        <div className="px-16">
          <div className="max-w-[1392px] mx-auto">
            <div className="max-w-[768px] mx-auto space-y-20">
              <div className="text-center space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  FAQs for Organizations
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
