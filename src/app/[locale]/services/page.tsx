'use client'
export const runtime = 'edge'

import Button from '@/components/ui/Button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  Heart,
  Phone,
  Plane,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from 'lucide-react'
import { useEffect, useState } from 'react'

// Types
interface ServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

interface ServiceCategory {
  id: string
  title: string
  tagline: string
  description: string
  features: string[]
  detailedServices?: ServiceFeature[]
  image: string
  ctaText: string
  href: string
}

// Service Data
const serviceCategories: ServiceCategory[] = [
  {
    id: 'individuals',
    title: 'Your Personalized Medical Journey Awaits',
    tagline: 'For Individuals',
    description:
      'At Sage, we guide individuals through every step of their medical journey in Saudi Arabia. From initial diagnosis to full recovery, our dedicated team ensures seamless travel logistics and personalized care.',
    features: [
      'Tailored treatment plans in top Saudi hospitals.',
      'Comprehensive support for your wellness and recovery.',
      'Expert assistance with travel and accommodation arrangements.',
    ],
    detailedServices: [
      {
        icon: <Stethoscope className="w-12 h-12" />,
        title: 'Healthcare',
        description:
          "Experience customized treatment journeys in Saudi Arabia's leading hospitals.",
      },
      {
        icon: <UserCheck className="w-12 h-12" />,
        title: 'Concierge',
        description:
          'We handle everything from airport transfers to dietary needs.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=640&fit=crop&auto=format&q=80',
    ctaText: 'Explore Individuals Services',
    href: '/services/individuals',
  },
  {
    id: 'businesses',
    title: 'Streamlined Healthcare Solutions for Your Employees',
    tagline: 'For Businesses',
    description:
      'At Sage, we understand the complexities of managing employee healthcare across borders. Our tailored solutions ensure seamless access to premium medical services for your workforce.',
    features: [
      "VIP medical access for your employees' healthcare needs.",
      'Corporate rates and tailored support for business travel.',
      'Expert consultation for your corporate wellness initiatives.',
    ],
    detailedServices: [
      {
        icon: <Stethoscope className="w-12 h-12" />,
        title: 'Healthcare',
        description:
          "We offer corporate healthcare facilitation, VIP medical access, and coordinated care plans tailored to your employees' needs.",
      },
      {
        icon: <UserCheck className="w-12 h-12" />,
        title: 'Concierge',
        description:
          'Our concierge services provide logistics for executives, including corporate rates and tailored support for seamless travel.',
      },
      {
        icon: <GraduationCap className="w-12 h-12" />,
        title: 'Consultation & Training',
        description:
          'We offer advisory services for corporate wellness programs, medical travel planning, and internal healthcare team development.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=640&fit=crop&auto=format&q=80',
    ctaText: 'Explore Businesses Services',
    href: '/services/businesses',
  },
  {
    id: 'organizations',
    title: 'Partnering for Scalable Healthcare Solutions',
    tagline: 'For Organizations',
    description:
      'At Sage, we work closely with hospitals, government entities, and organizations to create effective healthcare travel programs. Our expertise ensures compliance and efficiency in delivering quality medical services.',
    features: [
      'Tailored consulting for public health initiatives.',
      'Customized coordination for patient groups and delegations.',
      'Streamlined medical services for cross-border patient workflows.',
    ],
    detailedServices: [
      {
        icon: <Stethoscope className="w-12 h-12" />,
        title: 'Healthcare Services',
        description:
          'We streamline cross-border care with institutional-level coordination.',
      },
      {
        icon: <UserCheck className="w-12 h-12" />,
        title: 'Concierge Services',
        description:
          'We manage group concierge services with compliance and care.',
      },
      {
        icon: <GraduationCap className="w-12 h-12" />,
        title: 'Consultation & Training',
        description:
          'We consult on public health programs, medical tourism, and system optimization.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=640&fit=crop&auto=format&q=80',
    ctaText: 'Explore Organizations Services',
    href: '/services/organizations',
  },
]

const filterOptions = [
  { id: 'all', label: 'All Services' },
  { id: 'individuals', label: 'Individuals' },
  { id: 'businesses', label: 'Businesses' },
  { id: 'organizations', label: 'Organizations' },
]

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredCategories =
    activeFilter === 'all'
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[369px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1440&h=400&fit=crop&auto=format&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom mx-auto px-16">
            <div className="max-w-4xl">
              <motion.h1
                className="text-white text-[56px] font-bold leading-[1.2] tracking-[-0.56px] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="text-white text-[18px] leading-[1.5] max-w-[768px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span>Tailored medical journeys for </span>
                <span className="font-bold">individuals</span>
                <span>, </span>
                <span className="font-bold">businesses</span>
                <span>, and </span>
                <span className="font-bold">organizations</span>
                <span>.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Navigation */}
      <motion.section
        className={`sticky top-16 z-40 bg-white transition-all duration-300 py-10 ${
          isScrolled ? 'shadow-md border-b border-gray-200' : ''
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom mx-auto flex justify-center">
          <div className="flex items-center bg-gray-50 rounded-full p-1">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 ${
                  activeFilter === option.id
                    ? 'bg-white text-black shadow-sm'
                    : 'text-black hover:bg-white hover:shadow-sm'
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
          {filteredCategories.map((category, index) => (
            <div key={index}>
              {/* Main Service Section */}
              <section className="py-28 px-16">
                <div className="container-custom mx-auto max-w-[1280px]">
                  <div className="flex items-center gap-20">
                    <div className="flex-1">
                      <div className="mb-8">
                        <div className="mb-4">
                          <span className="text-black text-[16px] font-medium">
                            {category.tagline}
                          </span>
                        </div>
                        <div className="mb-6">
                          <h2 className="text-black text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6">
                            {category.title}
                          </h2>
                          <p className="text-black text-[18px] leading-[1.5]">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="py-2 mb-8">
                        {category.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 mb-4"
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              {category.id === 'individuals' && (
                                <Heart className="w-4 h-4 text-black" />
                              )}
                              {category.id === 'businesses' && (
                                <Building2 className="w-4 h-4 text-black" />
                              )}
                              {category.id === 'organizations' && (
                                <ShieldCheck className="w-4 h-4 text-black" />
                              )}
                            </div>
                            <span className="text-black text-[16px] leading-[1.5] flex-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button href={category.href} variant="primary">
                        {category.ctaText}
                      </Button>
                    </div>

                    <div className="flex-1">
                      <div
                        className="aspect-[600/640] bg-gray-200 rounded-[40px] bg-cover bg-center"
                        style={{ backgroundImage: `url('${category.image}')` }}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Services Section */}
              {category.detailedServices && (
                <section className="py-28 px-16 bg-white">
                  <div className="container-custom mx-auto max-w-[1280px]">
                    <div className="mb-20">
                      <div className="max-w-[768px] mb-4">
                        <span className="text-black text-[16px] font-medium">
                          {category.tagline}
                        </span>
                      </div>
                      <div className="max-w-[768px] mb-6">
                        <h2 className="text-black text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6">
                          Comprehensive{' '}
                          {category.id === 'individuals'
                            ? 'Services for Your Health Journey'
                            : category.id === 'businesses'
                              ? 'Healthcare Solutions for Businesses'
                              : 'Healthcare Solutions for Organizations'}
                        </h2>
                        <p className="text-black text-[18px] leading-[1.5]">
                          {category.id === 'individuals'
                            ? 'At Sage, we empower individuals seeking medical care in Saudi Arabia. From initial diagnosis to complete recovery, we ensure a seamless experience tailored to your needs.'
                            : category.id === 'businesses'
                              ? 'At Sage, we streamline healthcare journeys for businesses, ensuring employees receive top-tier medical services and support. Our expertise in medical tourism facilitates seamless access to healthcare across borders.'
                              : 'At Sage, we partner with institutions to deliver scalable healthcare solutions that meet organizational needs while maintaining the highest standards of care and compliance.'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {category.detailedServices.map((service, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                          <div className="text-black">{service.icon}</div>
                          <h3 className="text-black text-[32px] font-bold leading-[1.3] tracking-[-0.32px]">
                            {service.title}
                          </h3>
                          <p className="text-black text-[16px] leading-[1.5]">
                            {service.description}
                          </p>
                          <button className="bg-[rgba(0,4,4,0.05)] rounded-[100px] px-6 py-2.5 text-black text-[16px] font-medium hover:bg-[rgba(0,4,4,0.1)] transition-colors duration-200 self-start">
                            Explore
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Final CTA Section */}
      <section className="py-28 px-16 bg-white">
        <div className="container-custom mx-auto max-w-[1280px]">
          <div className="flex items-center gap-20">
            <div className="flex-1">
              <div className="mb-8">
                <div className="mb-4">
                  <span className="text-black text-[16px] font-medium">
                    Begin Your Journey
                  </span>
                </div>
                <div className="mb-6">
                  <h2 className="text-black text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6">
                    Begin Your Healthcare Journey
                  </h2>
                  <p className="text-black text-[18px] leading-[1.5]">
                    Ready to experience world-class healthcare in Saudi Arabia?
                    Our team is here to guide you through every step of your
                    medical journey with personalized care and expert support.
                  </p>
                </div>
              </div>

              <div className="py-2 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-4 h-4 text-black" />
                  <span className="text-black text-[16px] leading-[1.5] flex-1">
                    24/7 consultation support available
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Plane className="w-4 h-4 text-black" />
                  <span className="text-black text-[16px] leading-[1.5] flex-1">
                    Complete travel and logistics coordination
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span className="text-black text-[16px] leading-[1.5] flex-1">
                    Certified and trusted healthcare partnerships
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/contact">Schedule Consultation</Button>
                <button className="bg-[rgba(0,4,4,0.05)] rounded-[100px] px-6 py-2.5 text-black text-[16px] font-medium hover:bg-[rgba(0,4,4,0.1)] transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div
                className="aspect-[600/640] bg-gray-200 rounded-[40px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=640&fit=crop&auto=format&q=80")',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
