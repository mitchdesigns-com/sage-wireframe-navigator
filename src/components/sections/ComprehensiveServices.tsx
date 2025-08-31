'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// Types for props
interface ServiceLink {
  label: string
  href: string
}

interface ServiceSection {
  title: string
  description: string
  links: ServiceLink[]
  backgroundColor?: string
  textColor?: string
  imageUrl?: string
  hasDecorativeVector?: boolean
}

interface ComprehensiveServicesProps {
  title?: string
  subtitle?: string
  sections?: ServiceSection[]
  className?: string
}

// Default data
const defaultSections: ServiceSection[] = [
  {
    title: 'Healthcare Services',
    description:
      'At Sage, we offer a wide range of healthcare services designed to meet your unique needs.',
    links: [
      { label: 'Explore for Individuals', href: '/services/individuals' },
      { label: 'Explore for Businesses', href: '/services/businesses' },
      { label: 'Explore for Organizations', href: '/services/organizations' },
    ],
    backgroundColor: 'bg-[#025850]',
    textColor: 'text-[#e2f2f1]',
    imageUrl: '/api/placeholder/532/386',
    hasDecorativeVector: true,
  },
  {
    title: 'Concierge Services',
    description:
      'Our medical services ensure you receive top-notch care from leading professionals.',
    links: [
      {
        label: 'Discover for Individuals',
        href: '/services/individuals/concierge',
      },
      {
        label: 'Discover for Businesses',
        href: '/services/businesses/concierge',
      },
      {
        label: 'Discover for Organizations',
        href: '/services/organizations/concierge',
      },
    ],
    backgroundColor: 'bg-[#1e1e1e]',
    textColor: 'text-white',
  },
  {
    title: 'Consultation & Training',
    description:
      'Our concierge services provide you with personalized support throughout your healthcare journey.',
    links: [
      { label: 'Learn for Businesses', href: '/services/businesses/training' },
      {
        label: 'Learn for Organizations',
        href: '/services/organizations/training',
      },
    ],
    backgroundColor: 'bg-[#013530]',
    textColor: 'text-white',
    imageUrl: '/api/placeholder/344/395',
  },
]

const TitleDecorationVector: React.FC<{ className?: string }> = ({
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Animate only once
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of element is in view
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`title-decoration ${className || ''} ${
        isVisible ? 'animate' : ''
      }`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 198 74"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M80.4309 72.0754C111.19 71.9658 155.699 72.0694 182.513 58.2419C200.054 49.9672 197.585 25.3123 191.283 17.4084C181.815 5.53446 154.436 3.78888 139.101 2.73232C111.728 0.846401 83.6293 3.07065 57.1085 8.77023C40.576 12.3232 13.8152 18.6519 4.31132 31.2472C-20.5254 64.1628 162.721 67.9473 175.063 68.4443"
          stroke="#9EBB80"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="path"
        />
      </svg>

      {/* Scoped CSS */}
      <style jsx>{`
        .path {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
        }

        .animate .path {
          animation: drawTitlePath 2.5s ease-out forwards;
        }

        @keyframes drawTitlePath {
          0% {
            stroke-dashoffset: 800;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}

// Chevron Right component
const ChevronRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Service Button component
const ServiceButton: React.FC<{
  link: ServiceLink
  textColor: string
}> = ({ link, textColor }) => (
  <Link
    href={link.href}
    className={`
      group flex items-center justify-between w-full py-3 px-0 
      transition-all duration-300 hover:translate-x-1
      ${textColor} hover:text-[#caf48e]
    `}
  >
    <span className="font-aeonik font-normal text-base leading-6">
      {link.label}
    </span>
    <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
)

// Service Section component
const ServiceSection: React.FC<{
  section: ServiceSection
  isReversed?: boolean
  hasImage?: boolean
}> = ({ section, isReversed = false, hasImage = false }) => {
  return (
    <div
      className={`flex gap-4 items-start ${isReversed ? 'flex-row-reverse' : ''}`}
    >
      {/* Content Card */}
      <div
        className={`relative ${section.backgroundColor} rounded-[24px] p-10  ${hasImage ? 'flex-1' : 'w-full'} overflow-hidden`}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h3 className="font-aeonik font-bold text-2xl leading-[1.4] tracking-[-0.24px] text-[#caf48e]">
              {section.title}
            </h3>
            <p
              className={`font-aeonik font-normal text-base leading-6 max-w-[453px] ${section.textColor}`}
            >
              {section.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col w-[452px] max-w-full">
            {section.links.map((link, index) => (
              <div key={index}>
                <ServiceButton
                  link={link}
                  textColor={section.textColor || 'text-white'}
                />
                {index < section.links.length - 1 && (
                  <div className="w-full h-px bg-gray-400/20 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Background Image for third section */}
        {section.imageUrl && isReversed && (
          <div
            className="absolute left-0 top-[-8px] w-[344px] h-[395px] bg-cover bg-center bg-no-repeat rounded-[24px]"
            style={{
              backgroundImage: `url('${section.imageUrl}')`,
              backgroundPosition: '99.04% 26.47%',
              backgroundSize: '115.56% 151.11%',
            }}
          />
        )}
      </div>

      {/* Image */}
      {hasImage && section.imageUrl && !isReversed && (
        <div
          className="w-[532px] h-[386px] rounded-[32px] bg-cover bg-center bg-no-repeat shrink-0"
          style={{ backgroundImage: `url('${section.imageUrl}')` }}
        />
      )}
    </div>
  )
}

// Main component
export default function ComprehensiveServices({
  // title = 'Discover Our Comprehensive Solutions Tailored for Your Needs',
  sections = defaultSections,
  className = '',
}: ComprehensiveServicesProps) {
  return (
    <>
      {/* CSS animations */}
      <style jsx>{`
        @keyframes drawPath {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawTitlePath {
          0% {
            stroke-dashoffset: 800;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
        }

        .title-decoration {
          opacity: 0;
          animation: fadeInTitle 1s ease-out 1s forwards;
        }

        @keyframes fadeInTitle {
          to {
            opacity: 1;
          }
        }

        .card-decoration {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .card-decoration:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .responsive-content {
            padding: 24px;
          }

          .responsive-grid {
            flex-direction: column;
            gap: 24px;
          }

          .responsive-image {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>

      <section className={`relative section-padding ${className}`}>
        <div className="container-custom mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-20">
            {/* Decorative top vector can go here if needed */}

            {/* Title with decorative vector */}
            <div className="relative flex flex-wrap justify-center items-center gap-x-4 max-w-[768px]">
              <h2 className="font-aeonik font-bold text-[40px] leading-[1.2] tracking-[-0.4px] text-[#1e1e1e] text-center">
                <span>Discover Our Comprehensive </span>
                <span className="relative inline-block">
                  <span className="z-[2] relative">Solutions</span>
                  {/* Title Decorative Vector positioned near "Solutions" */}
                  <div className="absolute -inset-3 z-[1]">
                    <TitleDecorationVector className="" />
                  </div>
                </span>
                <span> Tailored for Your Needs</span>
              </h2>
            </div>

            {/* Content Grid */}
            <div className="w-full flex flex-col gap-4 relative">
              {/* First Row - Healthcare Services + Image */}
              <ServiceSection section={sections[0]} hasImage={true} />

              {/* Second Row - Concierge + Consultation */}
              <div className="flex gap-4">
                <div className="w-[532px]">
                  <ServiceSection section={sections[1]} />
                </div>
                <div className="flex-1">
                  <ServiceSection section={sections[2]} isReversed={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
