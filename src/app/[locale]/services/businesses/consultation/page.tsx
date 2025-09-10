'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ListCheck from '@/components/svg/ListCheck'
import Concierge from '@/components/svg/Concierge'
import { ReactElement } from 'react'
import ServiceSection from '../../../../../components/sections/ServiceSection'
import VectorIcon from '../../../../../components/svg/VectorIcon'
import ModelTraining from '../../../../../components/svg/ModelTraining'
import PersonCelebrate from '../../../../../components/svg/PersonCelebrate'
import VideoCamera from '../../../../../components/svg/VideoCamera'

const paragraphs = [
  'At Sage, our consultation and training services empower businesses to elevate their healthcare programs with confidence. We help corporate teams, HR departments, and healthcare coordinators build scalable, compliant, and employee-centric medical travel frameworks—backed by international standards and local insight.',
  'Whether you are looking to streamline internal processes, design cost-efficient care models, or up skill your teams, our advisors provide hands-on support tailored to your organization’s structure and goals. From policy design to concierge operations, we equip your staff with the tools to deliver seamless healthcare experiences.',
  'With Sage, training goes beyond theory. It’s actionable, results-driven, and designed to align your business with the future of global healthcare delivery.',
]

const featureSections = [
  {
    title: 'Expert Guidance Built for Public Institutions',
    description:
      'Our consultation and training programs are designed to support embassies, NGOs, and government bodies in delivering structured, compliant, and culturally sensitive healthcare support. Whether you are designing internal systems or training front-line teams, Sage offers the tools to elevate care standards with confidence.',
    list: [
      {
        title: 'Consultation Services',
        description:
          'We help institutions build efficient, compliant healthcare travel frameworks from the ground up.',
        icon: <ListCheck />,
        theme: 'light',
      },
      {
        title: 'Training Programs',
        description:
          'Up skill your teams with real-world, practical training to enhance patient support.',
        icon: <Concierge />,
        theme: 'light',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Guidance.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    tagline: 'Consultation Services',
    title: 'Streamlined Healthcare Solutions',
    description:
      'We help institutions streamline their medical travel and patient support workflows through expert consultations. Our goal is to build sustainable, efficient, and compliant systems that align with your mission.',
    features: [
      {
        text: 'Identify inefficiencies and improve internal healthcare logistics',
        icon: <VectorIcon color="#025850" />,
      },
      {
        text: 'Build structured, scalable processes from approvals to post-care.',
        icon: <VectorIcon color="#025850" />,
      },
      {
        text: 'Align with international medical travel and patient care standards.',
        icon: <VectorIcon color="#025850" />,
      },
    ],

    image: '/images/generalImages/Streamlined.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    tagline: 'Training Programs',

    title: 'Equip Your Teams for Real-World Scenarios',
    description:
      'Our hands-on training prepares public-sector and NGO staff to handle patient cases with sensitivity, speed, and professionalism—no matter the complexity.',
    features: [
      {
        text: 'Train teams on secure, culturally appropriate support.',
        icon: <VectorIcon />,
      },
      {
        text: 'Teach efficient case coordination and communication.',
        icon: <VectorIcon />,
      },
      {
        text: 'Ensure your teams are ready for any urgent situation.',
        icon: <VectorIcon />,
      },
    ],

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
    title: 'Train the Way You Need',
    description:
      'Our diverse delivery models ensure effective training that fits your schedule and preferences.',
    icon: <ModelTraining />,
  },
  {
    title: 'Practical Onsite Training',
    description:
      'Engage directly with our experts in your environment for impactful learning.',
    icon: <PersonCelebrate />,
  },
  {
    title: 'Flexible Remote Workshops',
    description:
      'Participate in interactive sessions designed to fit your remote work needs.',
    icon: <VideoCamera />,
  },
]
export default function BusinessConsultationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/ConsultationHeader.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Businesses Services', href: '/services/businesses' },
          {
            label: 'Consultation & Training',
            href: '/services/businesses/consultation',
          },
        ]}
        tagline="Consultation & Training for Businesses"
        title={
          <>
            <span className="font-bold text-Primary-Scrub text-nowrap">
              Consultation & Training
            </span>
            <span className="font-normal"> For Businesses</span>
          </>
        }
        description="Sage’s Consultation & Training services are essential for businesses aiming to enhance their internal systems and teams. We focus on knowledge transfer, operational excellence, and aligning with global healthcare standards."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="Where Strategy Meets Healthcare Excellence"
        paragraphs={paragraphs}
      />
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          tagline={section.tagline}
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
            Flexible Delivery Models Tailored to Your Business Needs
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
        title="Training Aligned with Global Healthcare Standards"
        description="At Sage, our training programs are designed to meet the highest international standards. We ensure that our methodologies align with CBAHI, GHA, and JCI, tailored specifically for the Saudi and GCC healthcare landscape."
        buttonText="Request Free Consultation"
        buttonHref="/contact"
        imageSrc="/images/generalImages/HealthcareStandards.png"
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
