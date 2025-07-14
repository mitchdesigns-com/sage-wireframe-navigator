import Link from 'next/link'
import { User, Building, Users, ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    title: 'For Individuals',
    description: 'Personalized healthcare solutions for patients seeking world-class medical care in Saudi Arabia.',
    icon: User,
    href: '/services/individuals',
    features: [
      'Personal consultation and care coordination',
      'Treatment planning and medical guidance', 
      'Cultural support and language assistance',
      'Post-treatment recovery support'
    ],
    cta: 'Explore Individual Services'
  },
  {
    title: 'For Businesses',
    description: 'Comprehensive corporate wellness programs and employee healthcare initiatives.',
    icon: Building, 
    href: '/services/businesses',
    features: [
      'Corporate wellness program development',
      'Employee health screening and checkups',
      'Executive medical packages',
      'Health training and education programs'
    ],
    cta: 'Discover Business Solutions'
  },
  {
    title: 'For Organizations',
    description: 'Strategic partnerships with NGOs, universities, and government institutions.',
    icon: Users,
    href: '/services/organizations',
    features: [
      'Institutional partnership development',
      'Resource sharing and collaboration',
      'Research and academic partnerships',
      'Government healthcare initiatives'
    ],
    cta: 'Learn About Partnerships'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Comprehensive Healthcare{' '}
            <span className="text-sage-400">Services</span>
          </h1>
          <p className="text-body max-w-3xl mx-auto">
            Discover our full range of healthcare solutions designed to meet the
            unique needs of individuals, businesses, and organizations seeking
            exceptional medical care in Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="card group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6 group-hover:bg-sage-400 group-hover:text-white transition-colors duration-200">
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {category.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={category.href}
                    className="inline-flex items-center space-x-2 text-sage-400 hover:text-sage-500 font-medium group"
                  >
                    <span>{category.cta}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-md mb-6">
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss your specific needs and discover
            how Sage can provide the perfect healthcare solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/about" className="btn-outline">
              Learn About Sage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
