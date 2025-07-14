import { Building, ChevronRight, User, Users } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'

const services = [
  {
    title: 'Individuals',
    description:
      'We assist patients in navigating their medical journeys abroad.',
    icon: User,
    href: '/services/individuals',
    features: [
      'Personal medical consultation',
      'Treatment plan coordination',
      'Cultural support services',
      'Recovery assistance',
    ],
  },
  {
    title: 'Businesses',
    description:
      'Our programs support corporate health initiatives and training.',
    icon: Building,
    href: '/services/businesses',
    features: [
      'Employee wellness programs',
      'Corporate health packages',
      'Executive medical services',
      'Health training programs',
    ],
  },
  {
    title: 'Organization',
    description:
      'We collaborate with NGOs, universities, and government bodies.',
    icon: Users,
    href: '/services/organizations',
    features: [
      'Partnership development',
      'Resource sharing programs',
      'Institutional collaborations',
      'Government partnerships',
    ],
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-sage-400 mb-4 text-sm font-medium">
            Our Services
          </div>
          <h2 className="heading-lg mb-6">
            Tailored Services for Every Healthcare Need
          </h2>
          <p className="text-body mx-auto max-w-5xl">
            At Sage, we cater to a diverse clientele, ensuring that every
            individual receives the care they deserve. Whether you are a patient
            seeking treatment or a business looking to enhance employee
            wellness, we are here to support you.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="group text-center">
                {/* Icon */}
                <div className="bg-sage-100 group-hover:bg-sage-400 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-200 group-hover:text-white">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="mb-4 heading-4">
                  <span className="text-large">for</span> {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>

                {/* Learn More Link */}
                <Link
                  href={service.href}
                  className="hover:gap-3 group inline-flex items-center gap-2 font-medium transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Explore Services CTA */}
        <div className="text-center pt-10">
          <Button href="/services" variant="primary">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
