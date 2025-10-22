import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  MessageCircle,
  Phone,
  User,
} from 'lucide-react'
import Link from 'next/link'
export const runtime = 'edge'

const detailedSteps = [
  {
    number: '1',
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Needs',
    description:
      'Connect with our team to discuss your healthcare needs and medical history. We provide personalized options tailored specifically to your situation.',
    icon: MessageCircle,
    duration: '1-2 days',
    details: [
      'Comprehensive health assessment review',
      'Discussion of treatment preferences and concerns',
      'Cultural and language support identification',
      'Initial cost estimation and insurance verification',
    ],
    whatToExpect:
      'A dedicated healthcare coordinator will contact you within 24 hours to schedule your consultation.',
  },
  {
    number: '2',
    title: 'Treatment Planning',
    subtitle: 'Personalized Care Coordination',
    description:
      'Receive a detailed treatment plan outlining your options. Our team coordinates every detail for your comfort and peace of mind.',
    icon: FileText,
    duration: '3-5 days',
    details: [
      'Specialist physician recommendations and appointments',
      'Treatment timeline and procedure scheduling',
      'Accommodation and travel arrangements',
      'Pre-treatment preparation guidelines',
    ],
    whatToExpect:
      "You'll receive a comprehensive treatment plan with all logistics handled by our team.",
  },
  {
    number: '3',
    title: 'Undergoing Treatment',
    subtitle: 'World-Class Medical Care',
    description:
      'Experience world-class medical care in a supportive environment. Our team is available to assist you throughout your treatment journey.',
    icon: Heart,
    duration: 'Variable by treatment',
    details: [
      'Priority access to leading medical specialists',
      '24/7 patient support and coordination',
      'Real-time family communication and updates',
      'Cultural liaison and translation services',
    ],
    whatToExpected:
      'Continuous support ensures you feel comfortable and informed throughout your treatment.',
  },
  {
    number: '4',
    title: 'Post-Treatment Care',
    subtitle: 'Ongoing Support & Recovery',
    description:
      'Receive ongoing support and follow-up consultations. We ensure your recovery is as smooth as possible with comprehensive aftercare.',
    icon: CheckCircle,
    duration: 'Ongoing as needed',
    details: [
      'Regular follow-up appointments and monitoring',
      'Recovery progress tracking and reporting',
      'Coordination with home country physicians',
      'Long-term health maintenance guidance',
    ],
    whatToExpected:
      'Our relationship continues beyond treatment to ensure your long-term health and wellbeing.',
  },
]

const supportServices = [
  {
    icon: User,
    title: 'Dedicated Care Coordinator',
    description:
      'Your personal healthcare advocate throughout the entire journey',
  },
  {
    icon: Calendar,
    title: 'Appointment Management',
    description:
      'Seamless scheduling and coordination of all medical appointments',
  },
  {
    icon: Phone,
    title: '24/7 Support Hotline',
    description: 'Round-the-clock assistance for any questions or emergencies',
  },
  {
    icon: Heart,
    title: 'Family Support Services',
    description: 'Assistance and accommodation for accompanying family members',
  },
]

const faqs = [
  {
    question: 'How long does the entire process typically take?',
    answer:
      'The timeline varies depending on your specific treatment needs. Simple procedures may require 1-2 weeks total, while complex treatments could take several weeks to months. Your care coordinator will provide a detailed timeline during the planning phase.',
  },
  {
    question: 'What if I need emergency care during my visit?',
    answer:
      'All our partner hospitals have world-class emergency departments. Your care coordinator will provide emergency contact information, and our 24/7 support hotline ensures immediate assistance when needed.',
  },
  {
    question: 'Can my family accompany me during treatment?',
    answer:
      'Absolutely. We encourage family support and provide assistance with visa arrangements, accommodation, and local support services for accompanying family members.',
  },
  {
    question: 'How do you handle language barriers?',
    answer:
      'Our team includes multilingual coordinators and we provide professional medical interpretation services. Many of our partner physicians also speak multiple languages.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white section-padding">
        <div className="mx-auto text-center container-custom">
          <h1 className="mb-6 heading-xl">
            How <span className="text-sage-400">It Works</span>
          </h1>
          <p className="mx-auto mb-8 max-w-5xl text-body">
            Your healthcare journey with Sage follows a carefully designed
            process that prioritizes your comfort, safety, and peace of mind.
            From initial consultation to post-treatment care, we guide you
            through every step with personalized attention and expert
            coordination.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="bg-white section-padding">
        <div className="mx-auto container-custom">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex justify-center items-center bg-sage-400 rounded-full w-16 h-16 font-bold text-white text-2xl">
                        {step.number}
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900 text-2xl">
                          {step.title}
                        </h2>
                        <p className="font-medium text-sage-400">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mb-6 text-body">{step.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4 text-gray-600 text-sm">
                        <Clock size={16} className="text-sage-400" />
                        <span>Typical Duration: {step.duration}</span>
                      </div>

                      <h3 className="mb-3 font-semibold text-gray-900">
                        What's Included:
                      </h3>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-2 text-gray-600"
                          >
                            <div className="flex-shrink-0 bg-sage-400 mt-2 rounded-full w-1.5 h-1.5"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-sage-50 p-4 rounded-lg">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        What to Expect:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.whatToExpect}
                      </p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  >
                    <div className="flex justify-center items-center bg-gray-200 rounded-2xl h-96">
                      <div className="text-gray-400 text-center">
                        <Icon size={64} className="mx-auto mb-4" />
                        <p className="font-medium text-lg">{step.title}</p>
                        <p className="text-sm">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-6 heading-lg">
              Comprehensive Support Throughout Your Journey
            </h2>
            <p className="mx-auto max-w-3xl text-body">
              Beyond medical treatment, we provide comprehensive support
              services to ensure your entire experience is comfortable,
              convenient, and stress-free.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex justify-center items-center bg-sage-100 mb-6 rounded-full w-16 h-16">
                    <Icon size={32} className="text-sage-400" />
                  </div>
                  <h3 className="mb-3 font-bold text-gray-900 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="mx-auto container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-6 heading-lg">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-3xl text-body">
              Get answers to common questions about our process and what to
              expect during your healthcare journey with Sage.
            </p>
          </div>

          <div className="space-y-6 mx-auto max-w-5xl">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="mb-3 font-bold text-gray-900 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-400 text-white section-padding">
        <div className="mx-auto text-center container-custom">
          <h2 className="mb-6 font-bold text-3xl">
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p className="opacity-90 mx-auto mb-8 max-w-2xl text-xl">
            Take the first step towards exceptional medical care. Our team is
            ready to guide you through our proven process with personalized
            attention.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-sage-400 transition-colors duration-200"
            >
              <span>Schedule Free Consultation</span>
              <MessageCircle size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 hover:bg-white px-8 py-4 border-2 border-white rounded-lg font-medium text-white hover:text-sage-400 transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <Heart size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
