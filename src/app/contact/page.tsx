import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+966 11 123 4567',
    description: 'Available 24/7 for urgent inquiries'
  },
  {
    icon: Mail,
    title: 'Email', 
    value: 'info@sagehealthcare.sa',
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Riyadh, Saudi Arabia',
    description: 'King Fahd Road, Olaya District'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Sun - Thu: 8AM - 6PM',
    description: 'Emergency support available 24/7'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Get in <span className="text-sage-400">Touch</span>
          </h1>
          <p className="text-body max-w-3xl mx-auto">
            Ready to begin your healthcare journey? Our team is here to answer your questions, 
            provide guidance, and help you take the first step toward exceptional medical care.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                    <Icon size={32} className="text-sage-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sage-400 font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="heading-md mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="individuals">Individual Healthcare</option>
                    <option value="businesses">Business Solutions</option>
                    <option value="organizations">Organization Partnerships</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Tell us about your healthcare needs or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Additional Info */}
            <div>
              <h2 className="heading-md mb-6">Why Choose Sage Healthcare?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized Care Coordination
                    </h3>
                    <p className="text-gray-600">
                      Every patient receives individualized attention with dedicated care coordinators 
                      who understand your unique needs and cultural preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      World-Class Medical Network
                    </h3>
                    <p className="text-gray-600">
                      Access to Saudi Arabia's top hospitals and medical specialists, 
                      all vetted for quality and excellence in patient care.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cultural Sensitivity & Support
                    </h3>
                    <p className="text-gray-600">
                      Our team understands diverse cultural backgrounds and provides 
                      appropriate support throughout your healthcare journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transparent & Comprehensive
                    </h3>
                    <p className="text-gray-600">
                      Clear communication about costs, timelines, and processes ensures 
                      you can make informed decisions about your healthcare.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-sage-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Need Urgent Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent medical inquiries or emergencies, please call our 24/7 hotline:
                </p>
                <a 
                  href="tel:+966111234567" 
                  className="text-sage-400 font-bold text-xl hover:text-sage-500"
                >
                  +966 11 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
