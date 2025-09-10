'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ListCheck from '@/components/svg/ListCheck'
import Concierge from '@/components/svg/Concierge'
import LocationHome from '@/components/svg/LocationHome'
import Groups from '@/components/svg/Groups'
import { ReactElement } from 'react'
import SettingsHeart from '../../../../../components/svg/SettingsHeart'
import Diagnosis from '../../../../../components/svg/Diagnosis'
import ContactSupportIcon from '../../../../../components/svg/ContactSupportIcon'
import ServiceSection from '../../../../../components/sections/ServiceSection'

const paragraphs = [
  'At Sage, our concierge services go far beyond hotel bookings or logistics—they are a strategic layer of support that enhances employee care, reduces HR workload, and ensures peace of mind for business leaders. Whether you are coordinating VIP medical travel or managing treatment for an overseas employee, we provide seamless, culturally sensitive support at every step.',
  'Our team acts as a dedicated partner—handling all non-medical needs including visas, travel, airport reception, accommodations, translation, and day-to-day assistance. We tailor each experience based on the employee’s preferences, company protocols, and destination requirements, ensuring personalized and efficient support throughout the journey.',
  'By blending operational precision with human-centered care, we help businesses minimize disruption, maintain employee satisfaction, and focus on what matters most. For forward-thinking organizations, Sage’s concierge services offer more than convenience—they are an extension of your company’s commitment to well-being and excellence.',
]

const reasons = [
  { title: 'Visa', value: 'Issuance & Invitation Letters' },
  { title: 'Accommodation', value: 'Hotel or Housing Coordination' },
  { title: 'Airport', value: 'Pickup & Drop-off' },
  { title: 'Emergency', value: '24/7 Response & Assistance' },
]
const featureSections = [
  {
    title: 'Institutional Concierge Solutions, Adapted to Your Protocols',
    description:
      'We specialize in concierge services uniquely crafted for government bodies, NGOs, and embassies. From official travel approvals to diplomatic coordination, our team adapts to your internal processes and compliance standards—ensuring seamless support for every patient under your care.',
    list: [
      {
        title: 'Protocol-Aligned Logistics',
        description:
          'We help institutions build efficient, compliant healthcare travel frameworks from the ground up.',
        icon: <ListCheck />,
        theme: 'light',
      },
      {
        title: 'Culturally-Aware Support',
        description:
          'From gender preferences to religious considerations, we deliver care with sensitivity and respect—tailored to your institution’s needs.',
        icon: <Concierge />,
        theme: 'light',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/ConciergeSolutions.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Seamless Integration for Corporate Needs',
    description:
      'Sage enhances communication and efficiency within your HR and insurance teams. Our solutions ensure that every detail is managed, allowing you to focus on your core business.',
    list: [
      {
        title: 'Reliable Processes',
        description:
          'Reduce miscommunication and enhance workflow with our integrated approach.',
        icon: <LocationHome />,
        theme: 'dark',
      },
      {
        title: 'Centralized Reporting',
        description:
          'Access real-time data for informed decision-making and improved patient care.',
        icon: <Groups />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/ConciergeSolutions2.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
]
interface List {
  title: string
  description: string
  icon: ReactElement
}
const list: List[] = [
  {
    title: 'Manage Multiple Cases',
    description:
      'We handle group logistics with ease, whether for delegations, treatment programs, or government-led initiatives.',
    icon: <SettingsHeart />,
  },
  {
    title: 'Consolidated Insights',
    description:
      'We provide HR teams with the tools to manage medical travel efficiently and effectively.',
    icon: <Diagnosis />,
  },
  {
    title: 'Dedicated Point of Contact',
    description:
      'Each group is assigned a single coordinator for smooth communication, real-time updates, and tailored support.',
    icon: <ContactSupportIcon />,
  },
]
export default function BusinessConciergePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/businessHeader.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Businesses Services', href: '/services/businesses' },
          {
            label: 'Concierge Services',
            href: '/services/businesses/concierge',
          },
        ]}
        tagline="Concierge Services for Businesses"
        title={
          <>
            <span className="font-bold text-Primary-Scrub text-nowrap">
              Healthcare Concierge
            </span>
            <span className="font-normal"> for Businesses</span>
          </>
        }
        description="At Sage, we provide comprehensive support for business-sponsored patients, ensuring a seamless and stress-free experience throughout their medical journey. Our concierge services are designed to enhance treatment outcomes while prioritizing employee well-being."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="Where Corporate Care Meets Comfort"
        paragraphs={paragraphs}
        reasons={reasons}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          list={section.list}
          ctaText={section.ctaText}
          href={section.href}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <section className="py-25 bg-Secondary-Light-Scrub">
        <div className="max-w-[764px] mx-auto">
          <div className=" mx-auto  text-center">
            <div className="space-y-4">
              <h2 className="text-Primary-Black heading-lg text-nowrap">
                Everyday Examples of Concierge Help{' '}
              </h2>
              <p className="text-Secondary-Text text-base">
                Explore how our concierge services cater to diverse employee
                needs. From medical emergencies to preventive care, we ensure
                every scenario is handled with expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-20">
          <div className="flex mb-8 gap-12 justify-center items-center text-center">
            {list?.map((li, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 flex-col max-w-[432px]"
              >
                <div className="flex items-center justify-center">
                  {li.icon}
                </div>
                <h5 className={`text-[#000404]  text-[24px] font-bold`}>
                  {li.title}
                </h5>
                <span
                  className={`text-Secondary-Text text-[16px] leading-[1.5] flex-1 `}
                >
                  {li.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Culturally Sensitive Care Section */}
      <ServiceSection
        title="Reliable Service Level Agreements for Corporate Healthcare Concierge"
        description="At Sage, we prioritize your business needs by offering Service Level Agreements (SLAs) that ensure timely response and meticulous case handling. Our commitment to documentation accuracy guarantees a seamless experience for your employees."
        buttonText="Request Free Consultation"
        buttonHref="/contact"
        imageSrc="/images/generalImages/businessConcierge.png"
        imageAlt="Culturally Sensitive Care"
      />
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
