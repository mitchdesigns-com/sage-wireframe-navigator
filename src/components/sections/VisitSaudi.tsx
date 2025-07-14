import { MapPin, Plane, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'

const benefits = [
  {
    icon: MapPin,
    text: 'World-class hospitals and healthcare professionals await you.',
  },
  {
    icon: Plane,
    text: 'Easy access to major airports and transport links.',
  },
  {
    icon: Globe,
    text: 'Immerse yourself in Saudi Arabia\'s vibrant culture.',
  },
]

export default function VisitSaudi() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-sm font-medium text-sage-400 mb-4">
              Visit Saudi
            </div>
            <h2 className="heading-lg mb-6">
              Discover the Excellence of Saudi Healthcare
            </h2>
            <p className="text-body mb-8">
              Saudi Arabia boasts state-of-the-art medical facilities, ensuring
              top-tier care for all patients. Experience seamless travel
              accessibility and rich cultural experiences that enhance your
              healthcare journey.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 text-sage-400 mt-1">
                      <Icon size={20} />
                    </div>
                    <p className="text-gray-700">{benefit.text}</p>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <Button href="/visit-saudi">Visit Saudi</Button>
          </div>

          {/* Right Content - Image */}
          <div className="">
            <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
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
                <p className="text-sm">Saudi Healthcare Image</p>
                <p className="text-xs mt-1">
                  Medical facilities & cultural highlights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
