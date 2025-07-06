import { MessageCircle, FileText, Heart, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description: 'Connect with our team to discuss your healthcare needs. We\'ll provide personalized options tailored to you.',
    icon: MessageCircle,
  },
  {
    number: '2', 
    title: 'Treatment Planning',
    description: 'Receive a detailed treatment plan outlining your options. Our team coordinates every detail for your comfort.',
    icon: FileText,
  },
  {
    number: '3',
    title: 'Undergoing Treatment', 
    description: 'Experience world-class medical care in a supportive environment. Our team is available to assist you throughout your treatment.',
    icon: Heart,
  },
  {
    number: '4',
    title: 'Post-Treatment Care',
    description: 'Receive ongoing support and follow-up consultations. We ensure your recovery is as smooth as possible.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm font-medium text-sage-400 mb-4">How It Works</div>
            <h2 className="heading-lg mb-6">
              Your Path to Exceptional Healthcare Awaits
            </h2>
            <p className="text-body mb-8">
              Experience a seamless journey from your first inquiry to post-treatment care. 
              Our dedicated team is here to guide you every step of the way.
            </p>
          </div>
          
          {/* Right Content - Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sage-300 -z-10"></div>
            
            <div className="space-y-8">
              {steps.map((step, _index) => {
                const _Icon = step.icon
                return (
                  <div key={step.number} className="flex items-start space-x-4">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-400 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Step {step.number}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
              
              {/* CTA at the end */}
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-2 text-sage-400 hover:text-sage-500 font-medium group"
                >
                  <span>Request Free Consultation</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
