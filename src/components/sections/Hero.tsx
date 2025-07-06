import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="heading-xl mb-6">
          Your Trusted Gateway to{' '}
          <span className="text-sage-400">Saudi's Medical Care</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-body max-w-4xl mx-auto mb-8">
          Experience the perfect blend of healthcare expertise, cultural hospitality, 
          and personalized service with Sage. We are dedicated to guiding you through 
          every step of your medical journey.
        </p>
        
        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4 group"
        >
          <span>Speak With Our Team</span>
          <ArrowRight 
            size={20} 
            className="group-hover:translate-x-1 transition-transform duration-200" 
          />
        </Link>
        
        {/* Hero Image Placeholder */}
        <div className="mt-12">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mx-auto max-w-4xl">
            <div className="text-center text-gray-400">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-gray-400" 
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
              <p className="text-sm">Hero Video/Image Placeholder</p>
              <p className="text-xs mt-1">Healthcare facilities showcase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
