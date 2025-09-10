'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ServiceSection from '@/components/sections/ServiceSection'
import CentersSection from '@/components/sections/CentersSection'
import MedicalInformation from '../../../../../components/svg/MedicalInformation'
import CalendarClock from '../../../../../components/svg/CalendarClock'
import VectorIcon from '../../../../../components/svg/VectorIcon'

const paragraphs = [
  'At Sage, our medical services are tailored for organizations that need trusted, end-to-end care solutions for staff, partners, or beneficiaries. We work closely with NGOs, corporations, and institutions to ensure each medical case is managed with professionalism, speed, and compassion.',
  'Whether it’s arranging specialized treatment for one patient or coordinating healthcare for entire teams, we streamline every touchpoint—from hospital matching and appointment scheduling to post-care updates. Your teams receive world-class medical attention while your organization gains full visibility and control over every case.',
  'With Sage, you don’t just get access to care—you gain a partner in delivering reliable, transparent healthcare services aligned with your mission.',
]

const featureSections = [
  {
    title:
      'Personalized Medical Coordination Designed for Your Institutions Needs',
    description:
      'At Sage, we ensure seamless medical coordination for organizations, managing every detail of patient care. Our dedicated team specializes in case intake, appointment scheduling, and emergency responses to guarantee timely access to top-tier healthcare.',
    list: [
      {
        title: 'Case Intake',
        description:
          'Expert matching of patient needs with appropriate medical specialists and facilities.',
        icon: <MedicalInformation />,
        theme: 'light',
      },
      {
        title: 'Appointment Scheduling',
        description:
          'Timely arrangements with leading hospitals to ensure prompt and effective treatment.',
        icon: <CalendarClock />,
        theme: 'light',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/HealthCareBusiness.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Tailored Care for Diverse Patient Needs',
    description:
      'At Sage, we understand that every patient is unique. Our dedicated services cater to a wide range of medical needs, ensuring optimal care and support.',
    features: [
      {
        text: 'Urgent Treatment for Critical Cases',
        icon: <VectorIcon color="#025850" />,
      },
      {
        text: 'Long-Term Recovery Programs for Patients',
        icon: <VectorIcon color="#025850" />,
      },
      {
        text: 'Specialized Care for Elderly and Disabled Patients',
        icon: <VectorIcon color="#025850" />,
      },
    ],

    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Comprehensive.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    title:
      'Custom Solutions for Public Services: Keeping Healthcare Management On Point and Responsible',
    description:
      'Sage offers comprehensive support designed specifically for public institutions, ensuring seamless healthcare coordination. Our services include audit-ready documentation and tailored billing models to meet your unique requirements.',
    features: [
      {
        text: 'Audit-ready documentation for full transparency and compliance.',
        icon: <VectorIcon />,
      },
      {
        text: 'Custom billing models to suit diverse institutional needs.',
        icon: <VectorIcon />,
      },
      {
        text: 'Official approvals and visa coordination for hassle-free access.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Responsible.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
]
const centersSectionMock = {
  title: 'Trusted by top healthcare institutions worldwide',
  description:
    'Sage is proud to be the trusted partner of leading healthcare institutions across the globe. Our proven expertise, consistent quality, and commitment to excellence make us the preferred choice for organizations seeking reliable and tailored medical concierge solutions.',
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
  ctaText: 'Book Your Consultation',
  href: '/contact',
  backgroundColor: '#F0F8F8',
  textColor: '#1E1E1E',
  reverse: false,
}
export default function OrganizationHealthcarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/HealthcareOrganizationHeader.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Organizations Services', href: '/services/organizations' },
          {
            label: 'Healthcare Services',
            href: '/services/organizations/healthcare',
          },
        ]}
        tagline="Healthcare for Organizations"
        title={
          <>
            <span className="font-normal text-nowrap">
              Trusted{' '}
              <span className="font-bold text-Primary-Scrub">Healthcare </span>{' '}
              in
            </span>
            <span className="font-normal"> Saudi Arabia</span>
          </>
        }
        description="Sage specializes in providing expedited and transparent access to specialized medical care throughout Saudi Arabia. With extensive experience in managing cross-border cases, we ensure comprehensive support at every stage of the patient journey."
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
      <CentersSection
        title={centersSectionMock.title}
        description={centersSectionMock.description}
        list={centersSectionMock.list}
        ctaText={centersSectionMock.ctaText}
        href={centersSectionMock.href}
        backgroundColor={centersSectionMock.backgroundColor}
        textColor={centersSectionMock.textColor}
        reverse={centersSectionMock.reverse}
      />
      <ServiceSection
        title="Outcome Monitoring and Reporting for Better Decisions"
        description="Comprehensive Outcome Monitoring and Reporting for Informed Decision-Making"
        buttonText="Request Free Consultation"
        buttonHref="/contact"
        imageSrc="/images/generalImages/businessHealth.png"
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
