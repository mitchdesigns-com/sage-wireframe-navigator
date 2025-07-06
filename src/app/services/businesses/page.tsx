import Link from 'next/link'
import { Building, Users, TrendingUp, Shield, Award, Target } from 'lucide-react'

const businessServices = [
  {
    icon: Users,
    title: 'Employee Wellness Programs',
    description: 'Comprehensive health programs designed to improve employee wellbeing and productivity.',
    features: [
      'Annual health screenings and assessments',
      'Preventive care program development',
      'Chronic disease management support',
      'Mental health and wellness initiatives'
    ]
  },
  {
    icon: Award,
    title: 'Executive Health Packages',
    description: 'Premium healthcare services tailored for executives and senior leadership teams.',
    features: [
      'Comprehensive executive medical exams',
      'Priority scheduling and concierge services',
      'Specialized health risk assessments',
      'Confidential medical consultations'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Corporate Health Analytics',
    description: 'Data-driven insights to optimize your company\'s health program investments.',
    features: [
      'Health program ROI analysis',
      'Employee health trend reporting',
      'Benchmarking against industry standards',
      'Custom health dashboard development'
    ]
  },
  {
    icon: Shield,
    title: 'Occupational Health Services',
    description: 'Workplace safety and health compliance programs for various industries.',
    features: [
      'Workplace health and safety assessments',
      'Occupational injury treatment',
      'Return-to-work program management',
      'Regulatory compliance support'
    ]
  }
]

const benefits = [
  {
    title: 'Improved Employee Satisfaction',
    description: 'Comprehensive health benefits lead to higher employee retention and satisfaction rates.',
    metric: '85% satisfaction increase'
  },
  {
    title: 'Reduced Healthcare Costs',
    description: 'Preventive care programs significantly reduce long-term healthcare expenses.',
    metric: '30% cost reduction'
  },
  {
    title: 'Enhanced Productivity',
    description: 'Healthier employees demonstrate improved performance and reduced sick days.',
    metric: '25% productivity boost'
  },
  {
    title: 'Better Talent Attraction',
    description: 'Superior health benefits help attract and retain top-tier talent.',
    metric: '40% better retention'
  }
]

const implementationSteps = [
  {
    step: '1',
    title: 'Health Needs Assessment',
    description: 'Comprehensive analysis of your workforce health needs and current program gaps.'
  },
  {
    step: '2',
    title: 'Program Design & Planning',
    description: 'Custom health program development aligned with your company culture and budget.'
  },
  {
    step: '3',
    title: 'Implementation & Launch',
    description: 'Seamless program rollout with employee communication and training support.'
  },
  {
    step: '4',
    title: 'Monitoring & Optimization',
    description: 'Ongoing program evaluation and optimization based on participation and outcomes.'
  }
]

export default function BusinessesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Corporate Health <span className="text-sage-400">Solutions</span>
              </h1>
              <p className="text-body mb-8">
                Transform your workplace with comprehensive health programs that boost employee 
                satisfaction, reduce healthcare costs, and enhance productivity. Our corporate 
                solutions are designed for businesses of all sizes seeking to invest in their 
                most valuable asset - their people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=businesses" className="btn-primary">
                  Request Consultation
                </Link>
                <Link href="#services" className="btn-outline">
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Building size={48} className="mx-auto mb-4" />
                <p>Corporate Wellness</p>
                <p className="text-sm">Employee health programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Why Invest in Employee Health?</h2>
            <p className="text-body max-w-3xl mx-auto">
              Companies that prioritize employee health see measurable returns in productivity, 
              retention, and overall business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-sage-400 mb-3">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Corporate Health Services</h2>
            <p className="text-body max-w-3xl mx-auto">
              Comprehensive health solutions designed to meet the unique needs of your business 
              and workforce, from startups to large enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-sage-100 rounded-lg flex items-center justify-center group-hover:bg-sage-400 group-hover:text-white transition-colors duration-200">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Implementation Process</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our proven 4-step process ensures smooth implementation and maximum 
              employee engagement with your new health programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Success Story: Regional Tech Company
              </h2>
              <p className="text-xl mb-6 opacity-90">
                A 500-employee technology company saw remarkable improvements after 
                implementing our comprehensive wellness program.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">42%</div>
                  <div className="text-sm opacity-75">Reduction in sick days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$2.3M</div>
                  <div className="text-sm opacity-75">Annual healthcare savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">89%</div>
                  <div className="text-sm opacity-75">Employee participation rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.8/5</div>
                  <div className="text-sm opacity-75">Program satisfaction score</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Sage Healthcare's corporate wellness program transformed our company culture. 
                Our employees are healthier, happier, and more productive than ever before."
              </blockquote>
              <div className="text-sm opacity-75">
                - Sarah Al-Rashid, HR Director<br />
                Regional Technology Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="heading-md mb-6">
            Ready to Transform Your Workplace Health?
          </h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Let's discuss how our corporate health solutions can benefit your organization. 
            Our team will work with you to design a program that fits your company's unique needs and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=businesses" className="btn-primary">
              Schedule Business Consultation
            </Link>
            <Link href="/our-network" className="btn-outline">
              View Our Healthcare Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
