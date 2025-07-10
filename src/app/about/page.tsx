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
      <section className="section-padding from-sage-50 bg-gradient-to-br to-white">
        <div className="container mx-auto text-center">
          <h1 className="heading-xl mb-6">
            About <span className="text-sage-400">Sage Healthcare</span>
          </h1>
          <p className="text-body mx-auto mb-8 max-w-4xl">
            We are Saudi Arabia's premier healthcare gateway, dedicated to connecting patients 
            with world-class medical facilities and services. Our mission is to provide exceptional 
            healthcare experiences that combine medical excellence with cultural hospitality.
          </p>
          <div className="mx-auto flex h-64 max-w-4xl items-center justify-center rounded-2xl bg-gray-200">
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-body mx-auto max-w-3xl">
              These fundamental principles guide everything we do and shape the way 
              we serve our patients, partners, and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-sage-100 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon size={32} className="text-sage-400" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold">Our Impact in Numbers</h2>
            <p className="mx-auto max-w-3xl text-xl opacity-90">
              These numbers represent our commitment to excellence and the trust 
              patients place in our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold">{stat.number}</div>
                <div className="mb-2 text-xl font-semibold opacity-90">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-6">Our Leadership Team</h2>
            <p className="text-body mx-auto max-w-3xl">
              Meet the experienced professionals who lead Sage Healthcare's mission 
              to provide exceptional medical care experiences.
            </p>
          </div>
          
          {/* Team Grid Placeholder */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-200">
                  <Users size={48} className="text-gray-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Team Member {item}</h3>
                <p className="text-sage-400 mb-3 font-medium">Executive Position</p>
                <p className="text-sm text-gray-600">
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
          <p className="text-body mx-auto mb-8 max-w-2xl">
            Join thousands of patients who have trusted Sage Healthcare with their 
            medical journey. Let us guide you to exceptional care.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
