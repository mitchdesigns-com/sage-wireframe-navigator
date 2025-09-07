'use client'
export const runtime = 'edge'

import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import HeroSection from '../../../components/strapi/HeroSection'
import FeatureSection from '../../../components/sections/FeatureSection'
import PersonIcon from '../../../components/svg/PersonIcon'
import ContactSupport from '../../../components/svg/ContactSupport'
import TravelIcon from '../../../components/svg/TravelIcon'
import ServicesSection from '../../../components/sections/ServicesSection'

const filterOptions = [
  { id: 'individuals', label: 'Individuals' },
  { id: 'businesses', label: 'Businesses' },
  { id: 'organizations', label: 'Organizations' },
]

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('individuals')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <HeroSection
        data={{
          title: 'Our Services',
          subtitle: undefined,
          description: `
      Tailored medical journeys for 
    individuals <br/>
    businesses and organizations.
    `,
          background_image: {
            data: {
              attributes: {
                url: '/images/generalImages/servicesHero.jpg',
                alternativeText: 'Services Hero',
              },
            },
          },
          cta_primary: undefined,
          cta_secondary: undefined,
          alignment: 'left',
          theme: 'dark',
          height: 'large',
          overlay: true,
          overlay_opacity: 40,
        }}
      />
      {/* Sticky Filter Navigation */}
      <motion.section
        className={`sticky top-16 z-40 bg-Primary-Palm transition-all duration-300 py-10 ${
          isScrolled ? 'shadow-md border-b border-gray-200' : ''
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom mx-auto flex justify-center">
          <div className="flex items-center text-[#E2F2F1] bg-Primary-Palm rounded-full p-1">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === option.id
                    ? 'bg-white text-Primary-Palm shadow-sm'
                    : 'text-[#E2F2F1] bg-Primary-Palm hover:shadow-sm'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Service Section */}
          <FeatureSection
            tagline="For Individuals"
            title="Your Personalized Medical Journey Awaits"
            description="At Sage, we guide individuals through every step of their medical journey in Saudi Arabia. From initial diagnosis to full recovery, our dedicated team ensures seamless travel logistics and personalized care."
            features={[
              {
                text: 'Tailored treatment plans in top Saudi hospitals.',
                icon: <PersonIcon />,
              },
              {
                text: 'Comprehensive support for your wellness and recovery.',
                icon: <ContactSupport />,
              },
              {
                text: 'Expert assistance with travel and accommodation arrangements.',
                icon: <TravelIcon />,
              },
            ]}
            ctaText="Explore Individuals Services"
            href="/services/individual"
            image="/images/generalImages/individuals.png"
            backgroundColor="#025850"
            textColor="white"
            reverse={false}
          />

          {/* Detailed Services Section */}
          <ServicesSection
            tagline="For Individuals Services"
            title="Comprehensive Services for Your Health Journey"
            description="At Sage, we empower those seeking medical care in Saudi Arabia, ensuring a smooth journey from diagnosis to recovery."
            detailedServices={[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Healthcare',
                description:
                  'Experience customized treatment journeys in Saudi Arabia’s leading hospitals.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Concierge',
                description:
                  'We handle everything from airport transfers to dietary needs.',
              },
            ]}
            backgroundColor="#F0F8F8"
            textColor="#1E1E1E"
            image="/images/generalImages/service.png"
          />
          {/* //Businesses */}
          <FeatureSection
            tagline="For Businesses"
            title="Streamlined Healthcare Solutions for Your Employees"
            description="At Sage, we understand the complexities of managing employee healthcare across borders. Our tailored solutions ensure seamless access to premium medical services for your workforce."
            features={[
              {
                text: 'VIP medical access for your employees healthcare needs.',
                icon: <PersonIcon />,
              },
              {
                text: 'Corporate rates and tailored support for business travel.',
                icon: <ContactSupport />,
              },
              {
                text: 'Expert consultation for your corporate wellness initiatives.',
                icon: <TravelIcon />,
              },
            ]}
            ctaText="Explore Businesses Services"
            href="/services/businesses"
            image="/images/generalImages/Businesses.png"
            backgroundColor="#025850"
            textColor="white"
            reverse={false}
          />

          <ServicesSection
            tagline="For Businesses"
            title="Comprehensive Healthcare Solutions for Businesses"
            description="At Sage, we simplify healthcare for businesses, ensuring employees get quality medical services and support, including seamless access to medical tourism."
            detailedServices={[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Healthcare',
                description:
                  'We offer corporate healthcare facilitation, VIP medical access, and coordinated care plans tailored to your employees needs.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Concierge',
                description:
                  'Our concierge services provide logistics for executives, including corporate rates and tailored support for seamless travel.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Consultation & Training',
                description:
                  'We offer advisory services for corporate wellness programs, medical travel planning, and internal healthcare team development.',
              },
            ]}
            backgroundColor="#F0F8F8"
            textColor="#1E1E1E"
            // image="/images/generalImages/service.png"
          />
          {/* //Organizations */}
          <FeatureSection
            tagline="For Organizations"
            title="Partnering for Scalable Healthcare Solutions"
            description="At Sage, we work closely with hospitals, government entities, and organizations to create effective healthcare travel programs. Our expertise ensures compliance and efficiency in delivering quality medical services."
            features={[
              {
                text: 'Tailored consulting for public health initiatives.',
                icon: <PersonIcon />,
              },
              {
                text: 'Customized coordination for patient groups and delegations.',
                icon: <ContactSupport />,
              },
              {
                text: 'Streamlined medical services for cross-border patient workflows.',
                icon: <TravelIcon />,
              },
            ]}
            ctaText="Explore Organizations Services"
            href="/services/organizations"
            image="/images/generalImages/Organizations.png"
            backgroundColor="#025850"
            textColor="white"
            reverse={false}
          />
          <ServicesSection
            tagline="For Organizations"
            title="Comprehensive Services for Organizations"
            description="At Sage, we offer customized solutions to improve healthcare services, ensuring smooth coordination and compliance for healthcare travel."
            detailedServices={[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Healthcare',
                description:
                  'We specialize in institutional-grade coordination with hospitals and managing cross-border patient workflows.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Concierge',
                description:
                  'Our concierge services streamline coordination for groups, patients, and delegations, emphasizing compliance and customization.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Consultation & Training',
                description:
                  'We offer consulting services for public sector health initiatives, medical tourism readiness, and operational improvement.',
              },
            ]}
            backgroundColor="#F0F8F8"
            textColor="#1E1E1E"
            // image="/images/generalImages/service.png"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
