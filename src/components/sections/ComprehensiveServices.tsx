import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Healthcare Services',
    description: 'At Sage, we offer a wide range of healthcare services designed to meet your unique needs.',
    links: [
      { label: 'Explore for Individuals', href: '/services/individuals' },
      { label: 'Explore for Businesses', href: '/services/businesses' },
      { label: 'Explore for Organizations', href: '/services/organizations' },
    ],
  },
  {
    title: 'Concierge Services', 
    description: 'Our medical services ensure you receive top-notch care from leading professionals.',
    links: [
      { label: 'Discover for Individuals', href: '/services/individuals/concierge' },
      { label: 'Discover for Businesses', href: '/services/businesses/concierge' },
      { label: 'Discover for Organizations', href: '/services/organizations/concierge' },
    ],
  },
  {
    title: 'Consultation & Training',
    description: 'Our concierge services provide you with personalized support throughout your healthcare journey.',
    links: [
      { label: 'Learn for Businesses', href: '/services/businesses/training' },
      { label: 'Learn for Organizations', href: '/services/organizations/training' },
    ],
  },
]

export default function ComprehensiveServices() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="heading-lg mb-6">
            Discover Our Comprehensive Healthcare Solutions Tailored for Your Needs
          </h2>
        </div>
        
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, _index) => (
            <div key={category.title} className="">
              {/* Service Image Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-gray-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Service Image</p>
                </div>
              </div>
              
              {/* Category Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              
              {/* Service Links */}
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-center justify-between text-gray-700 hover:text-sage-400 font-medium py-2 border-b border-gray-200 hover:border-sage-400 transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
