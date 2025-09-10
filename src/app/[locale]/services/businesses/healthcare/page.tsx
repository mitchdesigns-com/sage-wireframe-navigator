'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import ManageAccounts from '@/components/svg/ManageAccounts'
import Language from '@/components/svg/Language'
import GetInTouch from '@/components/sections/GetInTouch'
import MedicalServices from '@/components/svg/MedicalServices'
import Groups from '@/components/svg/Groups'
import ServiceSection from '@/components/sections/ServiceSection'
import CentersSection from '@/components/sections/CentersSection'

const paragraphs = [
  'At Sage, we deliver end-to-end medical services crafted for modern businesses and their globally mobile teams. Whether supporting executives, insured employees, or cross-border staff, we ensure swift access to Saudi Arabia’s top hospitals and clinics. From scheduled checkups and second opinions to complex surgeries and specialized diagnostics, every medical touchpoint is coordinated to benchmark standards of quality and safety.',
  'Our dedicated case managers act as a single point of contact—handling appointments, visa and travel logistics, documentation, and real-time updates. Each employee receives a personalized care plan that aligns with company policies, insurance requirements, and cultural preferences, ensuring clarity and confidence at every step of the journey.',
  'By fusing international service protocols with local expertise, Sage minimizes operational disruption, optimizes healthcare spend, and safeguards workforce well-being. For forward-thinking businesses, our medical services are more than a benefit—they’re a strategic advantage that drives productivity, loyalty, and long-term resilience.',
]
const reasons = [
  { title: 'Travel', value: 'Arrangements' },
  { title: 'Visa', value: 'Assistance' },
  { title: 'Airport', value: 'Pickup & Drop-off' },
  { title: 'Translation', value: 'Services' },
]
const featureSections = [
  {
    title: 'Streamlined Medical Journey Management for Your Employees',
    description:
      'At Sage, we streamline the entire medical treatment process for your employees, ensuring they receive top-tier care from diagnosis to discharge. Our partnerships with leading hospitals in Saudi Arabia guarantee swift and effective medical solutions.',
    list: [
      {
        title: 'Seamless Care',
        description:
          'Experience a hassle-free medical journey with dedicated support every step of the way.',
        icon: <MedicalServices color="#CAF48E" />,
        theme: 'light',
      },
      {
        title: 'Expert Guidance',
        description:
          'Our team ensures personalized care tailored to your employees unique medical needs.',
        icon: <Groups color="#CAF48E" />,
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
    title: 'Comprehensive Healthcare Solutions for Your Business',
    description:
      'Sage offers tailored medical services designed to meet the unique needs of businesses. Our solutions ensure your employees receive top-tier care efficiently and effectively.',
    list: [
      {
        title: 'Employee-Centered Care',
        description:
          'Give your team the healthcare support they deserve—customized medical journeys designed around each employee’s needs and preferences.',
        icon: <ManageAccounts />,
        theme: 'dark',
      },
      {
        title: 'Operational Efficiency',
        description:
          'We streamline healthcare for HR teams with clear reporting, smooth coordination, and organized case management.',
        icon: <Language />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Comprehensive.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
]
const centersSectionMock = {
  title: 'Connected to Centers of Excellence',
  description:
    'Sage partners with a trusted network of top-tier hospitals and specialized clinics across Saudi Arabia—from cancer centers and heart institutes to advanced rehab facilities. \n Our partners benefit from seamless access to these accredited providers, ensuring world-class care for every patient case.',
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
export default function BusinessHealthcarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/businessHeaderCopy.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Businesses Services', href: '/services/businesses' },
          {
            label: 'Healthcare Services',
            href: '/services/businesses/healthcare',
          },
        ]}
        tagline="Healthcare for Businesses"
        title={
          <>
            <span className="font-normal text-nowrap">
              Smart{' '}
              <span className="font-bold text-Primary-Scrub">Healthcare </span>{' '}
              for
            </span>
            <span className="font-normal"> Workforces</span>
          </>
        }
        description="Sage delivers seamless Healthcare services for businesses managing cross-border employee care. From executive checkups to complex treatments, we handle everything—hospital matching, scheduling, and follow-up—ensuring exceptional care with minimal disruption to your team."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="How We Redefine Healthcare for Employee? "
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
        title="Clear Outcomes, Trusted Reporting."
        description="Sage ensures full visibility through detailed reports, cost breakdowns, and timely updates—supporting better decisions, accountability, and lasting partnerships."
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
