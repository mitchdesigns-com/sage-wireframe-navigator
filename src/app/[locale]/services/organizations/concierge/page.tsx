'use client'
export const runtime = 'edge'

import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ServiceSection from '@/components/sections/ServiceSection'
import VectorIcon from '@/components/svg/VectorIcon'
import OrderApprove from '../../../../../components/svg/OrderApprove'
import ChecklistRTL from '../../../../../components/svg/ChecklistRTL'

const paragraphs = [
  'At Sage, our concierge services go far beyond transportation and hotel bookings—they’re a strategic layer of support for organizations managing medical travel and international care. We help NGOs, corporations, and public entities handle non-medical logistics with precision, care, and cultural awareness.',
  'From visa issuance and airport pickups to housing, interpretation, and 24/7 on-ground support, we ensure each case runs smoothly—no matter how complex the scenario. Every journey is tailored to the employee or beneficiary’s needs, while aligned with your internal protocols and mission standards.',
  'By reducing administrative burden and enhancing the patient experience, our concierge solutions let your teams focus on what matters: delivering exceptional outcomes.',
]

const featureSections = [
  {
    title: 'Custom Solutions for Institutional Needs',
    description:
      'At Sage, we understand that each institution has unique requirements. Our concierge services are designed to seamlessly align with your protocols and preferences.',
    features: [
      {
        text: 'Adapting to government travel protocols with precision.',
        icon: <VectorIcon />,
      },
      {
        text: 'Mitigating risks for NGOs through tailored support.',
        icon: <VectorIcon />,
      },
      {
        text: 'Coordinating effectively with embassy processes and timelines.',
        icon: <VectorIcon />,
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/CustomSolutions.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Elevating Patient Care Through Dignified Logistics',
    description:
      'Sage understands that the quality of patient logistics reflects on your institution’s reputation. We ensure that every aspect of medical travel is handled with care and respect.',
    list: [
      {
        title: 'Institutional Image',
        description:
          'Enhancing your public image through compassionate and efficient patient support.',
        icon: <ChecklistRTL />,
        theme: 'dark',
      },
      {
        title: 'Reputation Matters',
        description:
          'Sage ensures your commitment to care is visible and impactful.',
        icon: <OrderApprove />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/ElevatingPatient.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    title:
      'Efficient Group Coordination for Seamless Medical Travel Experiences',
    description:
      'Sage excels in managing logistics for groups, ensuring every detail is meticulously coordinated. With centralized reporting and a dedicated point-of-contact, we provide comprehensive support that enhances the experience for both patients and their sponsors.',

    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/passport.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
]

export default function OrganizationConciergePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/OrganizationConciergeHeader.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Organizations Services', href: '/services/organizations' },
          {
            label: 'Concierge Services',
            href: '/services/organizations/concierge',
          },
        ]}
        tagline="Concierge Services for Organizations "
        title={
          <>
            <span className="font-normal">
              {' '}
              Your Trusted{' '}
              <span className="font-bold text-Primary-Scrub text-nowrap">
                Concierge
              </span>{' '}
            </span>

            <span className="font-bold text-Primary-Scrub text-nowrap">
              Partner{' '}
              <span className="font-normal text-Primary-Black">
                for Medical Trave
              </span>
            </span>
          </>
        }
        description="At Sage, we specialize in providing seamless concierge services for patients from various nations, ensuring a dignified and supportive journey. Our commitment to cultural sensitivity and adherence to diplomatic frameworks sets us apart as a reliable partner for institutions."
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

      {/* Culturally Sensitive Care Section */}
      <ServiceSection
        title="Our Commitment for Compliance and Transparency"
        description="At Sage, we prioritize transparency in all our operations. Our meticulous documentation and cost tracking ensure that every detail aligns with public sector auditing standards."
        buttonText="Request Free Consultation"
        buttonHref="/contact"
        imageSrc="/images/generalImages/Transparency.png"
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
