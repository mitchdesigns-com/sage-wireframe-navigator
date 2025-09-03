import Link from 'next/link'
import { MapPin, Plane, Globe, Star, Award, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'World-Class Medical Facilities',
    description: 'State-of-the-art hospitals equipped with the latest technology and internationally trained specialists.',
  },
  {
    icon: Plane,
    title: 'Seamless Travel Experience',
    description: 'Easy visa processes, direct flights from major cities, and comprehensive travel support services.',
  },
  {
    icon: Globe,
    title: 'Rich Cultural Heritage',
    description: 'Immerse yourself in Saudi Arabia\'s vibrant culture, history, and hospitality during your visit.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Dedicated patient coordinators ensuring culturally sensitive and personalized healthcare experiences.',
  },
]

const facilities = [
  {
    name: 'King Faisal Specialist Hospital',
    location: 'Riyadh',
    specialties: ['Oncology', 'Cardiology', 'Organ Transplant'],
    accreditation: 'JCI Accredited',
  },
  {
    name: 'King Abdulaziz Medical City',
    location: 'Riyadh',
    specialties: ['Emergency Medicine', 'Surgery', 'Pediatrics'],
    accreditation: 'JCI Accredited',
  },
  {
    name: 'Saudi German Hospital',
    location: 'Multiple Locations',
    specialties: ['Orthopedics', 'Neurology', 'Women\'s Health'],
    accreditation: 'International Standards',
  },
]

const services = [
  'Visa assistance and documentation',
  'Airport pickup and transportation',
  'Accommodation arrangements',
  'Medical appointment scheduling',
  'Language interpretation services',
  'Cultural orientation and support',
  'Family companion assistance',
  'Post-treatment follow-up care',
]

export default function VisitSaudiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Discover Saudi Arabia's{' '}
                <span className="text-sage-400">Medical Excellence</span>
              </h1>
              <p className="text-body mb-8">
                Experience world-class healthcare in the heart of the Middle
                East. Saudi Arabia combines cutting-edge medical technology with
                warm hospitality, creating an exceptional environment for your
                healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Plan Your Visit
                </Link>
                <Link href="/our-network" className="btn-outline">
                  Explore Facilities
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Saudi Arabia Healthcare</p>
                <p className="text-sm">
                  Modern facilities & cultural landmarks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Saudi Arabia */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Why Choose Saudi Arabia for Healthcare?
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Saudi Arabia has emerged as a leading destination for medical
              tourism, offering world-class facilities, expert physicians, and
              unparalleled patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                    <Icon size={32} className="text-sage-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Medical Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Premier Medical Facilities</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our partner hospitals represent the pinnacle of medical
              excellence, combining advanced technology with compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card">
                <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Award size={32} className="mx-auto mb-2" />
                    <p className="text-sm">Hospital Image</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.name}
                </h3>
                <p className="text-sage-400 font-medium mb-4">
                  <MapPin size={16} className="inline mr-1" />
                  {facility.location}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star size={16} className="text-healthcare-gold" />
                  <span>{facility.accreditation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Support Services */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Complete Support for Your Medical Journey
              </h2>
              <p className="text-body mb-8">
                From the moment you decide to visit Saudi Arabia until your
                complete recovery, our comprehensive support services ensure a
                seamless and comfortable experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Heart size={48} className="mx-auto mb-4" />
                <p>Support Services</p>
                <p className="text-sm">Comprehensive care coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experience */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            More Than Medical Care - A Cultural Experience
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            While focusing on your health, discover Saudi Arabia's rich
            heritage, from ancient archaeological sites to modern architectural
            marvels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Globe size={48} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Historical Sites</h3>
              <p className="opacity-75">
                Explore UNESCO World Heritage sites and ancient kingdoms
              </p>
            </div>
            <div className="text-center">
              <Star size={48} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Modern Cities</h3>
              <p className="opacity-75">
                Experience the vibrant energy of Riyadh and Jeddah
              </p>
            </div>
            <div className="text-center">
              <Heart size={48} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Warm Hospitality</h3>
              <p className="opacity-75">
                Feel welcomed by the legendary Saudi Arabian hospitality
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-sage-400 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Start Planning Your Visit</span>
            <Plane size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
