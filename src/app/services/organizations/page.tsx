import Link from 'next/link'
import { Users, Building2, GraduationCap, Heart, Globe, Handshake } from 'lucide-react'

const organizationTypes = [
  {
    icon: GraduationCap,
    title: 'Academic Institutions',
    description: 'Universities and research institutions seeking healthcare collaboration and medical education partnerships.',
    programs: [
      'Medical research collaboration programs',
      'Student exchange and training opportunities',
      'Faculty development initiatives',
      'Joint degree and certification programs'
    ]
  },
  {
    icon: Heart,
    title: 'Non-Governmental Organizations',
    description: 'NGOs focused on healthcare access, public health initiatives, and humanitarian medical services.',
    programs: [
      'Public health program development',
      'Community healthcare initiatives',
      'Medical mission support',
      'Healthcare capacity building'
    ]
  },
  {
    icon: Building2,
    title: 'Government Institutions',
    description: 'Government healthcare agencies and ministries working to improve population health outcomes.',
    programs: [
      'Policy development and implementation',
      'Healthcare system strengthening',
      'Cross-border medical cooperation',
      'Best practices knowledge sharing'
    ]
  },
  {
    icon: Globe,
    title: 'International Organizations',
    description: 'Global health organizations and multilateral institutions advancing healthcare worldwide.',
    programs: [
      'Global health initiative partnerships',
      'Technical assistance programs',
      'Capacity building support',
      'Healthcare innovation collaboration'
    ]
  }
]

const partnershipBenefits = [
  {
    title: 'Knowledge Exchange',
    description: 'Access to cutting-edge medical knowledge, research findings, and best practices from Saudi Arabia\'s leading healthcare institutions.',
    icon: GraduationCap
  },
  {
    title: 'Resource Sharing',
    description: 'Collaborative use of medical facilities, equipment, and expertise to maximize impact and efficiency.',
    icon: Handshake
  },
  {
    title: 'Capacity Building',
    description: 'Professional development opportunities for healthcare workers and administrators through training programs.',
    icon: TrendingUp
  },
  {
    title: 'Innovation Collaboration',
    description: 'Joint development of healthcare solutions, technologies, and treatment protocols.',
    icon: Target
  }
]

const successStories = [
  {
    organization: 'Regional University Medical School',
    type: 'Academic Partnership',
    impact: 'Established joint medical training program graduating 150+ physicians annually',
    duration: '5 years',
    participants: '750 students'
  },
  {
    organization: 'International Health NGO',
    type: 'Public Health Initiative',
    impact: 'Implemented maternal health program reaching 50,000+ women',
    duration: '3 years',
    participants: '50,000 beneficiaries'
  },
  {
    organization: 'Ministry of Health Partnership',
    type: 'Government Collaboration',
    impact: 'Developed telemedicine network serving remote communities',
    duration: '4 years',
    participants: '25 healthcare facilities'
  }
]

const collaborationProcess = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Understanding your organization\'s goals, capabilities, and partnership objectives.'
  },
  {
    step: '2',
    title: 'Partnership Design',
    description: 'Developing a customized collaboration framework aligned with both organizations\' missions.'
  },
  {
    step: '3',
    title: 'Implementation Planning',
    description: 'Creating detailed project plans, timelines, and resource allocation strategies.'
  },
  {
    step: '4',
    title: 'Program Execution',
    description: 'Launching collaborative initiatives with ongoing support and coordination.'
  },
  {
    step: '5',
    title: 'Impact Measurement',
    description: 'Monitoring outcomes and continuously improving partnership effectiveness.'
  }
]

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Strategic Healthcare <span className="text-sage-400">Partnerships</span>
              </h1>
              <p className="text-body mb-8">
                Forge meaningful collaborations with Saudi Arabia's healthcare ecosystem. 
                Whether you're an academic institution, NGO, government agency, or international 
                organization, we facilitate partnerships that advance healthcare and improve lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=organizations" className="btn-primary">
                  Explore Partnership
                </Link>
                <Link href="#programs" className="btn-outline">
                  View Programs
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Users size={48} className="mx-auto mb-4" />
                <p>Strategic Partnerships</p>
                <p className="text-sm">Global healthcare collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Types */}
      <section id="programs" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Partnership Opportunities</h2>
            <p className="text-body max-w-3xl mx-auto">
              We work with diverse organizations to create impactful healthcare partnerships 
              that benefit communities, advance knowledge, and improve health outcomes globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {organizationTypes.map((org, index) => {
              const Icon = org.icon
              return (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-sage-100 rounded-lg flex items-center justify-center group-hover:bg-sage-400 group-hover:text-white transition-colors duration-200">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {org.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {org.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Partnership Programs:</h4>
                        {org.programs.map((program, programIndex) => (
                          <div key={programIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Partnership Benefits</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our collaborative approach ensures mutual benefit and sustainable impact 
              for all participating organizations and the communities they serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-sage-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Partnership Success Stories</h2>
            <p className="text-body max-w-3xl mx-auto">
              See how our strategic partnerships have created lasting impact and 
              advanced healthcare capabilities across different sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {story.organization}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                    {story.type}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {story.impact}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>
                    <div className="font-semibold text-gray-900">Duration</div>
                    <div>{story.duration}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Reach</div>
                    <div>{story.participants}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Collaboration Process</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our structured approach ensures successful partnerships from initial 
              consultation through long-term collaboration and impact measurement.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-sage-300 h-full"></div>
            
            <div className="space-y-12">
              {collaborationProcess.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card max-w-md mx-auto lg:mx-0">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-sage-400 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-6 h-6 bg-sage-400 rounded-full border-4 border-white relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build a Strategic Partnership?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's explore how we can work together to advance healthcare, share knowledge, 
            and create lasting impact in the communities we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?service=organizations" 
              className="inline-flex items-center space-x-2 bg-white text-sage-400 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Start Partnership Discussion</span>
              <Handshake size={20} />
            </Link>
            <Link 
              href="/our-network" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-sage-400 transition-all duration-200"
            >
              <span>View Our Network</span>
              <Globe size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
