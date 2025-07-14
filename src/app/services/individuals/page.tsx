import Link from 'next/link'
import { Heart, Shield, Users, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Personal Medical Consultation',
    description: 'One-on-one consultations with our healthcare coordinators to understand your specific medical needs and preferences.',
  },
  {
    icon: Shield,
    title: 'Treatment Planning & Coordination',
    description: 'Comprehensive treatment planning with coordination between multiple specialists and facilities.',
  },
  {
    icon: Globe,
    title: 'Cultural & Language Support', 
    description: 'Dedicated support staff to help navigate cultural differences and provide translation services.',
  },
  {
    icon: Users,
    title: 'Family & Companion Services',
    description: 'Support services for family members and companions accompanying patients during treatment.',
  }
]

const process = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Connect with our team to discuss your healthcare needs and medical history.'
  },
  {
    step: '2', 
    title: 'Medical Assessment',
    description: 'Comprehensive review of your condition with our network of specialists.'
  },
  {
    step: '3',
    title: 'Treatment Planning',
    description: 'Detailed treatment plan with timeline, costs, and facility recommendations.'
  },
  {
    step: '4',
    title: 'Care Coordination',
    description: 'Full coordination of your medical journey from arrival to recovery.'
  }
]

export default function IndividualsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Healthcare Services{' '}
                <span className="text-sage-400">for Individuals</span>
              </h1>
              <p className="text-body mb-8">
                Experience personalized healthcare solutions designed
                specifically for your individual needs. Our comprehensive
                support ensures you receive world-class medical care with the
                cultural sensitivity and personal attention you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Journey
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  How It Works
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Heart size={48} className="mx-auto mb-4" />
                <p>Individual Care Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Individual Services</h2>
            <p className="text-body max-w-3xl mx-auto">
              We provide comprehensive support throughout your entire healthcare
              journey, ensuring every aspect of your care is coordinated and
              personalized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center group-hover:bg-sage-400 group-hover:text-white transition-colors duration-200">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Your Journey With Sage</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our proven 4-step process ensures you receive the best possible
              care with minimal stress and maximum support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience World-Class Healthcare?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards exceptional medical care. Our team is
            ready to guide you through every aspect of your healthcare journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-sage-400 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
