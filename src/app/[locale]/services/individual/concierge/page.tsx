'use client'
export const runtime = 'edge'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ListCheck from '@/components/svg/ListCheck'
import Concierge from '@/components/svg/Concierge'
import LocationHome from '@/components/svg/LocationHome'
import Groups from '@/components/svg/Groups'
import AssignmentLate from '@/components/svg/AssignmentLate'
import CallQuality from '@/components/svg/CallQuality'

const paragraphs = [
  'At Sage, our concierge services extend far beyond traditional hospitality. We understand that traveling for medical treatment can be overwhelming, which is why we provide comprehensive non-medical support tailored to your unique needs. From seamless travel arrangements to personalized accommodation, we ensure every detail is managed with care and precision.',
  'Our dedicated team assists with visa applications, airport pickups, and drop-offs, ensuring a smooth transition upon your arrival. We also offer translation services to bridge any language barriers, making communication effortless during your stay.',
  'Accommodation is another vital aspect of our service. We prioritize booking healing-friendly spaces that are not only close to medical facilities but also designed for comfort and recovery. Family members accompanying you will find suitable options that cater to their needs as well.',
  'Whether you require dietary considerations or personal guides to navigate local customs, our concierge service is equipped to handle all requests. We aim to create a worry-free experience that allows you to focus on your health and well-being.',
  'At Sage, we recognize the importance of companionship, especially for elderly patients. Our team is here to provide support, ensuring that no one feels alone during their journey.',
]

const reasons = [
  { title: 'Travel', value: 'Arrangements' },
  { title: 'Visa', value: 'Assistance' },
  { title: 'Airport', value: 'Pickup & Drop-off' },
  { title: 'Translation', value: 'Services' },
]
const featureSections = [
  {
    title: 'Full Travel Coordination for Your Journey',
    description:
      'At Sage, we manage every detail of your travel experience, ensuring a smooth transition from your home to your treatment destination. Our dedicated team takes care of all logistics, allowing you to focus on your health and well-being.',
    list: [
      {
        title: 'Comprehensive Planning',
        description: 'From flights to local transport, we handle everything.',
        icon: <ListCheck />,
        theme: 'light',
      },
      {
        title: 'Personalized Service',
        description: 'We ensure your arrival is smooth and welcoming.',
        icon: <Concierge />,
        theme: 'light',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Travel.png',
    backgroundColor: '#025850',
    textColor: 'white',
    reverse: false,
  },
  {
    title: 'Your Healing Starts with the Right Stay',
    description:
      'At Sage, we prioritize your recovery by securing accommodations that are not only close to medical facilities but also designed for tranquility. Our spaces are sanitized, quiet, and tailored for your healing journey.',
    list: [
      {
        title: 'Ideal Locations',
        description:
          'Stay close to your treatment while enjoying a peaceful environment.',
        icon: <LocationHome />,
        theme: 'dark',
      },
      {
        title: 'Family Options',
        description:
          'Accommodations for family members ensure you’re never alone during recovery.',
        icon: <Groups />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Healing.png',
    backgroundColor: '#DAF7AF',
    textColor: '#1E1E1E',
    reverse: true,
  },
  {
    title: 'Always Here for Your Needs',
    description:
      'With Sage, you have a dedicated assistant available at all times. Whether in person or via WhatsApp, we ensure your needs are met promptly.',
    list: [
      {
        title: 'Personal Assistance',
        description:
          'Expert assistance for translations and unexpected requests during your stay.',
        icon: <AssignmentLate />,
        theme: 'dark',
      },
      {
        title: 'Reliable Support',
        description:
          'Your comfort is our priority for a smooth treatment journey.',
        icon: <CallQuality />,
        theme: 'dark',
      },
    ],
    ctaText: 'Request Free Consultation',
    href: '/contact',
    image: '/images/generalImages/Needs.png',
    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
  },
]

export default function ConciergePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        image="/images/generalImages/ConciergeCopy.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Individuals Services', href: '/services/individual' },
          {
            label: 'Concierge Services',
            href: '/services/individual/concierge',
          },
        ]}
        tagline="Concierge Services for Individuals"
        title={
          <>
            <span className="font-normal">Tailored Premium </span>
            <span className="font-bold text-Primary-Scrub text-nowrap">
              Healthcare Concierge
            </span>
          </>
        }
        description="Experience seamless healthcare with our dedicated concierge services, designed to provide you peace of mind throughout your journey. From travel arrangements to personalized assistance, we ensure every detail is taken care of for your comfort."
        primaryButton={{
          label: 'Request Free Consultation',
          href: '/contact',
          variant: 'primary',
          rightIcon: true,
        }}
      />

      {/* Why Choose Saudi Arabia Section */}
      <WhyChooseSection
        title="What Concierge Services Mean at Sage?"
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

      {/* Culturally Sensitive Care Section */}
      <section className="py-28 bg-Primary-Palm">
        <div className="max-w-[1392px] mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-white text-[40px] font-bold leading-[2.75rem]">
                Culturally Sensitive Care Tailored to Your Unique Needs
              </h2>
            </div>
            <div>
              <p className="text-white text-p">
                At Sage, we recognize the importance of cultural, dietary, and
                religious considerations in healthcare. Our team is dedicated to
                honoring these values, ensuring that your experience is
                respectful and aligned with your beliefs. Whether you're from
                the Middle East, Africa, or Asia, we provide personalized
                support that makes you feel at home.
              </p>
            </div>
          </div>

          <div className="aspect-[1384/540] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
            <Image
              fill
              src="/images/generalImages/Culturally.png"
              alt="Culturally Sensitive Care"
              className="rounded-[40px] object-cover"
            />
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
