'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import { ReactElement } from 'react'
import ServiceSection from '@/components/sections/ServiceSection'
import VectorIcon from '@/components/svg/VectorIcon'
import ModelTraining from '@/components/svg/ModelTraining'
import PersonCelebrate from '@/components/svg/PersonCelebrate'
import VideoCamera from '@/components/svg/VideoCamera'
import Percentage from '@/components/svg/Percentage'

const paragraphs = [
  'At Sage, our concierge services go far beyond transportation and hotel bookings—they’re a strategic layer of support for organizations managing medical travel and international care. We help NGOs, corporations, and public entities handle non-medical logistics with precision, care, and cultural awareness.',
  'From visa issuance and airport pickups to housing, interpretation, and 24/7 on-ground support, we ensure each case runs smoothly—no matter how complex the scenario. Every journey is tailored to the employee or beneficiary’s needs, while aligned with your internal protocols and mission standards.',
  'By reducing administrative burden and enhancing the patient experience, our concierge solutions let your teams focus on what matters: delivering exceptional outcomes.',
]

const featureSections = [
  {
    title: 'Tailored Consultation and Training Solutions',
    description:
      'At Sage, we specialize in enhancing healthcare logistics and patient services for public entities. Our expertise empowers organizations to optimize their internal capabilities and improve service quality.',
    features: [
      {
        text: 'Conduct internal audits and optimize medical workflows',
        icon: <VectorIcon />,
      },
      {
        text: 'Train teams on patient care and emergency protocols',
        icon: <VectorIcon />,
      },
      {
        text: 'Choose from onsite, virtual, or hybrid delivery models',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/TailoredConsultation.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Aligning Global Standards with Local Governance',
    description:
      'At Sage, we ensure our services meet international healthcare standards while being tailored to local regulations. Our commitment to excellence aligns with WHO, GHA, and JCI frameworks, ensuring compliance with CBAHI and local legal requirements.',
    list: [
      {
        title: 'Global compliance with local healthcare needs.',
        icon: <Percentage />,
        theme: 'dark',
      },
      {
        title: 'Bridging international standards with local practices.',
        icon: <Percentage />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Aligning.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    title: 'Custom Solutions for Healthcare Teams & Organizations',
    description:
      'We provide customized consultation and training programs designed to meet the unique needs of healthcare support teams and organizations. Our solutions ensure better coordination, enhanced performance, and lasting impact across various healthcare settings.',
    features: [
      {
        text: 'Empowering Public Entities with Expert Training and Consultation Services',
        icon: <VectorIcon />,
      },
      {
        text: 'Support Staff Enhancing Healthcare Delivery in Embassies and NGOs',
        icon: <VectorIcon />,
      },
      {
        text: 'Government Healthcare Offices Seeking Improved Patient Handling and Coordination',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/TrainingPrograms.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
]
interface List {
  title: string
  description: string
  icon: ReactElement
}
const list: List[] = [
  {
    title: 'Tailored Solutions for Your Organizational Needs in Healthcare',
    description:
      'Our delivery models are designed to meet the diverse needs of your organization.',
    icon: <ModelTraining />,
  },
  {
    title: 'Onsite Workshops for Hands-On Learning and Engagement',
    description:
      'Participate in interactive sessions that enhance practical skills and knowledge.',
    icon: <PersonCelebrate />,
  },
  {
    title: 'Web-Based Training for Flexible and Accessible Learning',
    description:
      'Access our comprehensive training modules from anywhere, at any time.',
    icon: <VideoCamera />,
  },
]
export default function OrganizationConsultationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/OrganizationsHeader.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Organizations Services', href: '/services/organizations' },
          {
            label: 'Consultation & Training',
            href: '/services/organizations/consultation',
          },
        ]}
        tagline="Consultation & Training for Organizations"
        title={
          <>
            <span className="font-normal"> Empowering Through </span>

            <span className="font-bold text-Primary-Scrub text-nowrap">
              Consultation & Training
            </span>
          </>
        }
        description="At Sage, we specialize in consulting and training tailored for public-sector and nonprofit organizations. Our expertise in healthcare logistics and international patient services ensures your team is equipped to deliver exceptional care."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="Where Seamless Logistics Elevate Healthcare Delivery"
        paragraphs={paragraphs}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          list={section.list}
          features={section.features}
          ctaText={section.ctaText}
          href={section.href}
          image={section.image}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          reverse={section.reverse}
        />
      ))}
      <section className="py-25 bg-Secondary-Light-Scrub">
        <div className=" max-w-[764px] mx-auto w-full  text-center">
          <h2 className="text-Primary-Black text-[40px] font-bold">
            Flexible Delivery Models for Effective Healthcare Training and
            Consultation
          </h2>
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
        title="Transforming Healthcare Delivery Through Strategic Training and Consultation"
        description="Our tailored programs focus on enhancing internal accountability and streamlining communication. By prioritizing patient outcomes and safety, we empower organizations to deliver exceptional care and support."
        buttonText="Request Free Consultation"
        buttonHref="/contact"
        imageSrc="/images/generalImages/Transforming.png"
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
