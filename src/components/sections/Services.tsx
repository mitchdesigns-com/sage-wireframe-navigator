import Link from 'next/link'
import { User, Building, Users } from 'lucide-react'

const services = [
  {
    title: 'Individuals',
    description: 'We assist patients in navigating their medical journeys abroad.',
    icon: User,
    href: '/services/individuals',
    features: [
      'Personal medical consultation',
      'Treatment plan coordination', 
      'Cultural support services',
      'Recovery assistance'
    ]
  },
  {
    title: 'Businesses', 
    description: 'Our programs support corporate health initiatives and training.',
    icon: Building,
    href: '/services/businesses',
    features: [
      'Employee wellness programs',
      'Corporate health packages',
      'Executive medical services',
      'Health training programs'
    ]
  },
  {
    title: 'Organization',
    description: 'We collaborate with NGOs, universities, and government bodies.',
    icon: Users,
    href: '/services/organizations', 
    features: [
      'Partnership development',
      'Resource sharing programs',
      'Institutional collaborations',
      'Government partnerships'
    ]
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-sage-400 mb-4">Our Services</div>
          <h2 className="heading-lg mb-6">
            Tailored Services for Every Healthcare Need
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            At Sage, we cater to a diverse clientele, ensuring that every individual receives 
            the care they deserve. Whether you are a patient seeking treatment or a business 
            looking to enhance employee wellness, we are here to support you.
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center group">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6 group-hover:bg-sage-400 group-hover:text-white transition-colors duration-200">
                  <Icon size={32} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  for {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <Link 
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-sage-400 hover:text-sage-500 font-medium group"
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>
        
        {/* Explore Services CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-outline"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
