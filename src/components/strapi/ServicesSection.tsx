// components/strapi/ServicesSection.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  image?: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
  link?: {
    label: string
    url: string
    target: string
    style: string
  }
  target_audience: 'individuals' | 'businesses' | 'organizations'
  popular?: boolean
}

interface ServicesSectionProps {
  data: {
    title?: string
    subtitle?: string
    description?: string
    services: ServiceCardProps[]
    layout: 'grid' | 'carousel' | 'list'
    columns: '2' | '3' | '4'
    theme: 'light' | 'dark' | 'sage' | 'blue'
  }
}

const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({
  title,
  description,
  icon,
  image,
  link,
  target_audience,
  popular,
  index,
}) => {
  const getAudienceColor = () => {
    switch (target_audience) {
      case 'individuals':
        return 'bg-blue-100 text-blue-800'
      case 'businesses':
        return 'bg-green-100 text-green-800'
      case 'organizations':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getAudienceLabel = () => {
    switch (target_audience) {
      case 'individuals':
        return 'For Individuals'
      case 'businesses':
        return 'For Businesses'
      case 'organizations':
        return 'For Organizations'
      default:
        return 'General'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-sage-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Popular
          </span>
        </div>
      )}

      {/* Image */}
      {image?.data && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image.data.attributes.url}
            alt={image.data.attributes.alternativeText || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon */}
        {icon && (
          <div className="mb-4">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
              <i className={`${icon} text-sage-600 text-xl`} />
            </div>
          </div>
        )}

        {/* Audience Badge */}
        <div className="mb-3">
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getAudienceColor()}`}
          >
            {getAudienceLabel()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        {/* Description */}
        <div
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Link */}
        {link && (
          <Link
            href={link.url}
            target={link.target}
            className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium"
          >
            {link.label}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => {
  const {
    title,
    subtitle,
    description,
    services,
    // layout = 'grid',
    columns = '3',
    theme = 'light',
  } = data

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-900'
      case 'dark':
        return 'bg-gray-900 text-white'
      case 'sage':
        return 'bg-sage-50 text-sage-900'
      default:
        return 'bg-white text-gray-900'
    }
  }

  const getGridClasses = () => {
    switch (columns) {
      case '2':
        return 'grid-cols-1 md:grid-cols-2'
      case '3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      case '4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }
  }

  return (
    <section className={`py-16 ${getThemeClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sage-600 font-medium mb-2"
            >
              {subtitle}
            </motion.p>
          )}

          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>
          )}

          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        {/* Services Grid */}
        <div className={`grid ${getGridClasses()} gap-8`}>
          {services.map((service, index) => (
            <ServiceCard key={`service-${index}`} {...service} index={index} />
          ))}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200"
          >
            View All Services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
