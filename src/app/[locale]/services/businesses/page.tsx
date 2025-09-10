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
import CentersImages from '@/components/sections/CentersImages'

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
    tagline: 'For Business',
    title: 'Healthcare',
    description:
      'Sage connects your employees with top-tier healthcare in Saudi Arabia. Our dedicated case managers ensure seamless communication and personalized care throughout the medical journey.',
    features: [
      {
        text: 'Expert appointments at leading Saudi hospitals.',
        icon: <VectorIcon />,
      },
      {
        text: 'Second opinions from renowned specialists.',
        icon: <VectorIcon />,
      },
      {
        text: 'Comprehensive chronic illness management and post-operative care.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/employees.png',
    backgroundColor: '#013530',
    textColor: 'white',
    reverse: false,
  },
  {
    tagline: 'For Businesses',
    title: 'Healthcare Concierge  ',
    description:
      'Our concierge services simplify medical travel for your employees, ensuring a seamless experience from start to finish. We handle everything from visa assistance to wellness recovery, allowing your team to focus on what matters most.',
    features: [
      {
        text: 'Travel coordination for a hassle-free experience.',
        icon: <VectorIcon color="#6CBEB8" />,
      },
      {
        text: 'Visa assistance to simplify your travel plans.',
        icon: <VectorIcon color="#6CBEB8" />,
      },
      {
        text: 'Family care to support your loved ones.',
        icon: <VectorIcon color="#6CBEB8" />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Concierge.png',
    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'For Business',
    title: 'Consultation & Training ',
    description:
      'Our expert-led consultation and training programs equip your team with essential skills for managing healthcare efficiently. Tailored to meet compliance standards, we foster healthier workplaces that enhance productivity.',
    features: [
      {
        text: 'Compliance-focused training for a healthier workplace.',
        icon: <VectorIcon />,
      },
      {
        text: 'Expert consultation to streamline healthcare processes.',
        icon: <VectorIcon />,
      },
      {
        text: 'Empower your team with essential medical knowledge.',
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
    image: '/images/generalImages/image5.png',
    title: 'Key Benefits of Partnering with Sage',
    description: 'Enjoy lower healthcare costs while boosting employee morale.',
    bgColor: 'bg-Primary-Palm',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon',
    iconElement: <WavingHand />, // JSX element
    title: 'Enhance Employee Satisfaction',
    description: 'Enjoy lower healthcare costs while boosting employee morale.',
    bgColor: 'bg-Primary-Black',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
  {
    type: 'icon', // or "image"
    iconElement: <ReduceCapacity />, // JSX element
    title: 'Simplify Admin Tasks and Cut Costs',
    description:
      'Gain clarity and confidence with fast, expert medical reviews.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    descColor: 'text-Secondary-Text',
  },
  {
    type: 'image',
    image: '/images/generalImages/image4.png',
    title: 'Access Trusted Medical Networks and Resources',
    description: 'We connect you with top-tier healthcare providers.',
    bgColor: 'bg-Dark-Scrub',
    textColor: 'text-white',
    descColor: 'text-Secondary-Light-Scrub',
  },
]
const centersSectionMock = {
  list: [
    {
      image: '/images/generalImages/center1.png',
    },
    {
      image: '/images/generalImages/center2.png',
    },
    {
      image: '/images/generalImages/center3.png',
    },
    {
      image: '/images/generalImages/center4.png',
    },
    {
      image: '/images/generalImages/center5.png',
    },
    {
      image: '/images/generalImages/center6.png',
    },
  ],
}
const globalStandards = {
  title:
    'Global Standards with Local Expertise: Your Trusted Partner in Healthcare Solutions',
  description:
    'At Sage, we ensure that our services meet international healthcare standards while adhering to local regulations. Our team is equipped with cultural fluency and privacy expertise, providing a seamless experience for your organization.',
  image: '/images/generalImages/GlobalStandars.png',
  backgroundColor: '#013530',
  textColor: 'white',
  reverse: false,
}
export default function BusinessesPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <HeroPages
        tagline="For Businesses"
        title="Optimizing Workforce Wellbeing"
        description="At Sage, we are your strategic partner in enhancing employee wellness and optimizing productivity through tailored healthcare solutions. Discover how our comprehensive medical travel and concierge services can elevate your organization’s health management."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Business Services', href: '/services/business' },
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
        title="Why Choose Sage for Your Business Needs"
        description="Partnering with Sage means prioritizing your employees' health while enhancing your organization's efficiency. Experience tailored solutions that drive productivity and satisfaction."
        features={whySaudiFeatures}
        buttonText="Request Free Consultation"
        onButtonClick={() => console.log('Button clicked')}
      />
      <CentersImages list={centersSectionMock.list} />

      <FeatureSection
        title={globalStandards.title}
        description={globalStandards.description}
        image={globalStandards.image}
        backgroundColor={globalStandards.backgroundColor}
        textColor={globalStandards.textColor}
        // features={globalStandards.features}
        reverse={globalStandards.reverse}
      />
      {/* FAQ Section */}
      <section className="py-25 bg-Secondary-Scrub">
        <div className="px-16">
          <div className="max-w-[1392px] mx-auto">
            <div className="max-w-[768px] mx-auto space-y-20">
              <div className="text-center space-y-6">
                <h2 className="text-black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                  FAQs for Business
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
