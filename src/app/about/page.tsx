import Link from 'next/link'
import { Target, Users, Award, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to providing the highest quality healthcare services and exceeding patient expectations.',
  },
  {
    icon: Users,
    title: 'Cultural Sensitivity',
    description: 'We understand and respect diverse cultural backgrounds, providing culturally appropriate care.',
  },
  {
    icon: Award,
    title: 'Trust & Transparency',
    description: 'We build lasting relationships through honest communication and transparent processes.',
  },
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'We combine international best practices with local knowledge and cultural understanding.',
  },
]

const stats = [
  { number: '1000+', label: 'Patients Served', description: 'Successful medical journeys facilitated' },
  { number: '50+', label: 'Partner Hospitals', description: 'World-class medical facilities' },
  { number: '25+', label: 'Countries', description: 'International patients welcomed' },
  { number: '99%', label: 'Satisfaction Rate', description: 'Patient satisfaction score' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="heading-xl mb-6">
            About <span className="text-sage-400">Sage Healthcare</span>
          </h1>
          <p className="text-body max-w-4xl mx-auto mb-8">
            We are Saudi Arabia's premier healthcare gateway, dedicated to connecting patients 
            with world-class medical facilities and services. Our mission is to provide exceptional 
            healthcare experiences that combine medical excellence with cultural hospitality.
          </p>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mx-auto max-w-4xl">
            <div className="text-center text-gray-400">
              <Users size={48} className="mx-auto mb-4" />
              <p>Team Photo / Company Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-body mb-6">
                To serve as your trusted gateway to Saudi Arabia's exceptional medical care, 
                providing seamless healthcare experiences that honor both medical excellence 
                and cultural values.
              </p>
              <p className="text-gray-600">
                We believe that healthcare should be accessible, culturally sensitive, and 
                of the highest quality. Our team works tirelessly to ensure every patient 
                receives personalized care that exceeds expectations.
              </p>
            </div>
            <div>
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-body mb-6">
                To become the world's leading healthcare facilitation platform, recognized 
                for connecting patients with transformative medical experiences in Saudi Arabia.
              </p>
              <p className="text-gray-600">
                We envision a future where geographical boundaries don't limit access to 
                world-class healthcare, and where every patient can receive the care they 
                need with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-body max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the way 
              we serve our patients, partners, and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                    <Icon size={32} className="text-sage-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              These numbers represent our commitment to excellence and the trust 
              patients place in our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2 opacity-90">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Leadership Team</h2>
            <p className="text-body max-w-3xl mx-auto">
              Meet the experienced professionals who lead Sage Healthcare's mission 
              to provide exceptional medical care experiences.
            </p>
          </div>
          
          {/* Team Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member {item}</h3>
                <p className="text-sage-400 font-medium mb-3">Executive Position</p>
                <p className="text-gray-600 text-sm">
                  Brief description of team member's background and expertise in healthcare.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="heading-md mb-6">
            Ready to Experience the Sage Difference?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have trusted Sage Healthcare with their 
            medical journey. Let us guide you to exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started Today
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
