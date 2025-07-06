import Link from 'next/link'
import { MapPin, Award, Users, Phone, Star } from 'lucide-react'

const networkStats = [
  { number: '50+', label: 'Partner Hospitals', description: 'Accredited medical facilities' },
  { number: '500+', label: 'Specialist Doctors', description: 'Board-certified physicians' },
  { number: '25+', label: 'Medical Specialties', description: 'Comprehensive care options' },
  { number: '15+', label: 'Cities Covered', description: 'Nationwide healthcare network' },
]

const hospitals = [
  {
    name: 'King Faisal Specialist Hospital & Research Centre',
    location: 'Riyadh',
    type: 'Tertiary Care',
    specialties: ['Oncology', 'Organ Transplant', 'Genetics', 'Cardiac Surgery'],
    accreditations: ['JCI', 'CBAHI', 'CAP'],
    established: '1975',
    beds: '1,095',
  },
  {
    name: 'King Abdulaziz Medical City',
    location: 'Riyadh',
    type: 'Multi-Specialty',
    specialties: ['Emergency Medicine', 'Surgery', 'Pediatrics', 'Cardiology'],
    accreditations: ['JCI', 'CBAHI'],
    established: '1983',
    beds: '1,200',
  },
  {
    name: 'Saudi German Hospital',
    location: 'Jeddah',
    type: 'Private Hospital',
    specialties: ['Orthopedics', 'Neurology', 'Women\'s Health', 'Diabetes'],
    accreditations: ['JCI', 'ISO 9001'],
    established: '1988',
    beds: '350',
  },
  {
    name: 'King Abdullah Medical Complex',
    location: 'Jeddah',
    type: 'University Hospital',
    specialties: ['Psychiatry', 'Rehabilitation', 'Geriatrics', 'Research'],
    accreditations: ['CBAHI', 'Academic Medical Center'],
    established: '2005',
    beds: '650',
  },
  {
    name: 'Prince Sultan Military Medical City',
    location: 'Riyadh',
    type: 'Military Hospital',
    specialties: ['Cardiothoracic Surgery', 'Neurosurgery', 'Oncology'],
    accreditations: ['JCI', 'CBAHI'],
    established: '1979',
    beds: '900',
  },
  {
    name: 'Al Mouwasat Hospital',
    location: 'Dammam',
    type: 'Private Hospital',
    specialties: ['Obstetrics', 'Pediatrics', 'Internal Medicine'],
    accreditations: ['JCI', 'CBAHI'],
    established: '1975',
    beds: '280',
  },
]

const regions = [
  {
    name: 'Central Region (Riyadh)',
    hospitals: 18,
    specialties: ['Cardiology', 'Oncology', 'Transplant', 'Research'],
    highlights: 'Capital region with premier medical research facilities',
  },
  {
    name: 'Western Region (Jeddah/Mecca)',
    hospitals: 15,
    specialties: ['Emergency Care', 'Pilgrimage Medicine', 'General Surgery'],
    highlights: 'Gateway to holy cities with specialized pilgrimage healthcare',
  },
  {
    name: 'Eastern Region (Dammam)',
    hospitals: 12,
    specialties: ['Occupational Health', 'Trauma Care', 'Pediatrics'],
    highlights: 'Industrial region with advanced occupational medicine',
  },
  {
    name: 'Northern Region',
    hospitals: 6,
    specialties: ['General Medicine', 'Emergency Care', 'Telemedicine'],
    highlights: 'Expanding healthcare infrastructure with modern facilities',
  },
]

export default function OurNetworkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Our Healthcare <span className="text-sage-400">Network</span>
          </h1>
          <p className="text-body max-w-4xl mx-auto mb-8">
            Sage Healthcare partners with Saudi Arabia's most prestigious medical institutions, 
            ensuring you have access to world-class facilities and internationally recognized specialists 
            throughout your healthcare journey.
          </p>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mx-auto max-w-4xl">
            <div className="text-center text-gray-400">
              <MapPin size={48} className="mx-auto mb-4" />
              <p>Saudi Arabia Healthcare Network Map</p>
              <p className="text-sm">Interactive facility locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Statistics */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Network by Numbers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A comprehensive healthcare ecosystem spanning the Kingdom of Saudi Arabia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2 opacity-90">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hospitals */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Premier Partner Hospitals</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our carefully selected partner hospitals represent the highest standards 
              of medical care, technology, and patient experience in Saudi Arabia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hospitals.map((hospital, index) => (
              <div key={index} className="card group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {hospital.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{hospital.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award size={14} />
                        <span>{hospital.type}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>Est. {hospital.established}</div>
                    <div>{hospital.beds} beds</div>
                  </div>
                </div>
                
                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Accreditations */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Accreditations:</h4>
                  <div className="flex items-center space-x-3">
                    {hospital.accreditations.map((accred, accredIndex) => (
                      <span 
                        key={accredIndex}
                        className="flex items-center space-x-1 text-sm text-gray-600"
                      >
                        <Star size={14} className="text-healthcare-gold" />
                        <span>{accred}</span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href={`/contact?hospital=${encodeURIComponent(hospital.name)}`}
                    className="text-sage-400 hover:text-sage-500 font-medium text-sm group-hover:underline"
                  >
                    Learn More About This Facility →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Nationwide Coverage</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our network spans all major regions of Saudi Arabia, ensuring accessible 
              healthcare regardless of your location or travel preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {region.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sage-400">{region.hospitals}</div>
                    <div className="text-sm text-gray-600">Hospitals</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{region.highlights}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Leading Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Rigorous Quality Standards
              </h2>
              <p className="text-body mb-8">
                Every hospital in our network meets stringent quality criteria, ensuring 
                you receive care that meets or exceeds international standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award size={20} className="text-sage-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">International Accreditation</h3>
                    <p className="text-gray-600 text-sm">JCI, CBAHI, and other recognized quality certifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users size={20} className="text-sage-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Medical Staff</h3>
                    <p className="text-gray-600 text-sm">Board-certified physicians with international training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star size={20} className="text-sage-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art medical equipment and treatment protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-sage-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Patient Support Services</h3>
                    <p className="text-gray-600 text-sm">Comprehensive care coordination and cultural sensitivity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Award size={48} className="mx-auto mb-4" />
                <p>Quality Accreditation</p>
                <p className="text-sm">International standards compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="heading-md mb-6">
            Ready to Connect with Our Network?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Let our team help you identify the best facility and specialists 
            for your specific healthcare needs within our extensive network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Find the Right Facility
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
