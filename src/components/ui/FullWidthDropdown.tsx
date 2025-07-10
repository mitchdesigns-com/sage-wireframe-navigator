// src/components/ui/FullWidthDropdown.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from './Button'

interface DropdownItem {
  label: string
  href?: string
  description?: string
  icon?: React.ReactNode
  children?: DropdownItem[]
}

interface FullWidthDropdownProps {
  items: DropdownItem[]
  type: 'services' | 'resources'
  onItemClick: () => void
}

export default function FullWidthDropdown({
  items,
  type,
  onItemClick,
}: FullWidthDropdownProps) {
  if (type === 'services') {
    return <ServicesFullWidthDropdown items={items} onItemClick={onItemClick} />
  }

  return <ResourcesFullWidthDropdown items={items} onItemClick={onItemClick} />
}

// Services Full Width Dropdown
function ServicesFullWidthDropdown({
  items,
  onItemClick,
}: {
  items: DropdownItem[]
  onItemClick: () => void
}) {
  return (
    <div className="bg-white border-t border-gray-100 shadow-2xl">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          {items.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.label}
                </h3>
                <div className="w-12 h-px bg-sage-600 mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6">
                {category.children?.map((service, serviceIndex) => (
                  <motion.div
                    key={service.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (serviceIndex * 0.05), duration: 0.3 }}
                  >
                    <Link
                      href={service.href!}
                      onClick={onItemClick}
                      className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 bg-sage-50 rounded-lg group-hover:bg-sage-100 transition-colors duration-300">
                          <div className="text-sage-600 group-hover:text-sage-700 transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-sage-600 transition-colors duration-300 mb-2">
                            {service.label}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight size={18} className="text-sage-600" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-100"
        >
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Transform Your Healthcare Experience?
              </h3>
              <p className="text-gray-600 text-lg">
                Discover our comprehensive healthcare solutions tailored for your specific needs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/services"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
                onClick={onItemClick}
              >
                Explore All Services
              </Button>
              <Button 
                href="/contact"
                variant="secondary"
                size="lg"
                onClick={onItemClick}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Resources Full Width Dropdown
function ResourcesFullWidthDropdown({
  items,
  onItemClick,
}: {
  items: DropdownItem[]
  onItemClick: () => void
}) {
  // Group items into categories for better organization
  const knowledgeItems = items.slice(0, 3) // Guides, Case Studies, Webinars
  const engagementItems = items.slice(3, 6) // Blog, FAQs, CSR
  const complianceItems = items.slice(6) // Certifications, News & Events

  const categories = [
    { title: 'Knowledge Hub', items: knowledgeItems },
    { title: 'Community & Support', items: engagementItems },
    { title: 'Trust & Updates', items: complianceItems },
  ]

  return (
    <div className="bg-white border-t border-gray-100 shadow-2xl">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access comprehensive resources, insights, and tools to support your healthcare journey
            </p>
          </motion.div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.15, duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <div className="w-16 h-px bg-sage-600 mx-auto lg:mx-0"></div>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: (categoryIndex * 0.15) + (itemIndex * 0.05), 
                        duration: 0.3 
                      }}
                    >
                      <Link
                        href={item.href!}
                        onClick={onItemClick}
                        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg group-hover:bg-sage-50 transition-colors duration-300">
                            <div className="text-gray-500 group-hover:text-sage-600 transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 group-hover:text-sage-600 transition-colors duration-300 mb-1">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight size={16} className="text-sage-600" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="bg-gradient-to-r from-sage-50 to-blue-50 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Latest Healthcare Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest trends, research, and best practices in healthcare and medical tourism.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href="/resources/blog"
                    rightIcon={<ArrowRight size={16} />}
                    onClick={onItemClick}
                  >
                    Read Our Blog
                  </Button>
                  <Button
                    href="/resources/newsletter"
                    variant="secondary"
                    onClick={onItemClick}
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-32 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl flex items-center justify-center">
                  <div className="text-sage-600 text-center">
                    <div className="text-4xl mb-2">📚</div>
                    <div className="font-medium">Resource Center</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}