import Button from '@/components/ui/Button'
import {
  ChevronLeft,
  ChevronRight,
  Dribbble,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { HeroText, JoinNetwork } from '../../components/sections'
import Image from 'next/image'

const values = [
  {
    title: 'Structured: Clarity and Reliability in Care',
    description:
      'We prioritize clear processes to ensure dependable healthcare experiences.',
    image: 'https://placehold.co/400x300/d1d5db/9ca3af?text=Healthcare+Process',
  },
  {
    title: 'Scalable: Adaptable Solutions for Every Patient',
    description:
      'Our services evolve to meet the diverse needs of our patients.',
    image: 'https://placehold.co/400x300/d1d5db/9ca3af?text=Adaptable+Care',
  },
  {
    title: 'Transparent: Honest Communication and Pricing',
    description: 'We believe in open dialogue and clear pricing structures.',
    image:
      'https://placehold.co/400x300/d1d5db/9ca3af?text=Clear+Communication',
  },
]

const teamMembers = [
  {
    name: 'Dr. Amina',
    role: 'Medical Director',
    description:
      'Expert in healthcare innovation with over 15 years of experience in medical tourism.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Dr.+Amina',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Mr. Khalid',
    role: 'Operations Manager',
    description:
      'Specializes in optimizing patient experiences and operational efficiency across our services.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Mr.+Khalid',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Ms. Layla',
    role: 'Client Relations',
    description:
      'Dedicated to ensuring seamless communication and support for all our international patients.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Ms.+Layla',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Dr. Omar',
    role: 'Quality Assurance',
    description:
      'Committed to maintaining the highest standards of patient safety and care quality.',
    image: 'https://placehold.co/400x400/d1d5db/9ca3af?text=Dr.+Omar',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
]

const stats = [
  {
    number: '1000+',
    label: 'Patients Served',
    description: 'Successful medical journeys facilitated',
  },
  {
    number: '50+',
    label: 'Partner Hospitals',
    description: 'World-class medical facilities',
  },
  {
    number: '25+',
    label: 'Countries',
    description: 'International patients welcomed',
  },
  {
    number: '99%',
    label: 'Satisfaction Rate',
    description: 'Patient satisfaction score',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroText
        title="About Sage"
        description="Discover how we redefine healthcare concierge services for a transformative medical tourism experience."
        size="large"
        variant="default"
        backgroundImage="https://placehold.co/1512x370"
        backgroundOverlay={true}
        animated={true}
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-body mb-6">
                To serve as your trusted gateway to Saudi Arabia's exceptional
                medical care, providing seamless healthcare experiences that
                honor both medical excellence and cultural values.
              </p>
              <p className="text-gray-600">
                We believe that healthcare should be accessible, culturally
                sensitive, and of the highest quality. Our team works tirelessly
                to ensure every patient receives personalized care that exceeds
                expectations.
              </p>
            </div>
            <div>
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-body mb-6">
                To become the world's leading healthcare facilitation platform,
                recognized for connecting patients with transformative medical
                experiences in Saudi Arabia.
              </p>
              <p className="text-gray-600">
                We envision a future where geographical boundaries don't limit
                access to world-class healthcare, and where every patient can
                receive the care they need with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="mb-4">
            <p className="text-sage-600 font-medium mb-2">Our Values</p>
            <h2 className="heading-lg mb-6">
              Our Core Values That Drive Us Forward
            </h2>
            <p className="text-body max-w-3xl">
              At Sage, our core values shape every interaction and service we
              provide. They reflect our commitment to excellence and
              patient-centered care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
            {values.map((value, index) => {
              return (
                <div key={index} className="">
                  <div className="mb-6 aspect-video rounded-2xl bg-gray-200 overflow-hidden relative">
                    <Image
                      fill
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="mb-16">
            <h2 className="heading-lg mb-4">Our Team</h2>
            <p className="text-body">
              Meet our experienced and dedicated healthcare professionals.
            </p>
          </div>

          {/* Team Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="">
                  <div className="mb-6 aspect-square rounded-2xl bg-gray-200 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-sage-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-sage-600 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={member.social.dribbble}
                      className="text-gray-400 hover:text-sage-600 transition-colors"
                    >
                      <Dribbble size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4, 5].map((dot) => (
                  <button
                    key={dot}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      dot === 0 ? 'bg-sage-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex space-x-2">
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* We're Hiring Section */}
          <div className="mt-16">
            <h3 className="heading-4 mb-4">We're hiring!</h3>
            <p className="text-body mb-6">
              Join our team of dedicated healthcare professionals.
            </p>
            <Button href="/careers" variant="outline" size="lg">
              Open Positions
            </Button>
          </div>
        </div>
      </section>

      <JoinNetwork />
    </div>
  )
}
