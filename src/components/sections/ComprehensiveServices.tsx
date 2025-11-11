'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export interface Image {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

// Types for props
interface ServiceLink {
  id: number
  label: string
  href: string
}

interface ServiceSection {
  title: string
  description: string
  links: ServiceLink[]
  backgroundColor?: string
  textColor?: string
  imageUrl?: Image
  hasDecorativeVector?: boolean
  id: number
}

interface ComprehensiveServicesProps {
  before_highlight?: string
  highlight?: string
  after_highlight?: string
  subtitle?: string
  ServiceSection: ServiceSection[]
  className?: string
  locale?: 'en' | 'ar'
}

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
  locale?: 'en' | 'ar'
}> = ({ link, textColor, locale }) => (
  <Link
    href={link.href}
    className={`
      group flex items-center justify-between w-full py-4 px-0 
      transition-all duration-300 hover:translate-x-1
      text-${textColor} hover:text-[#caf48e]
    `}
  >
    <span className="font-aeonik font-normal text-base leading-6">
      {link.label}
    </span>
    <ChevronRight
      className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 ${locale === 'ar' ? 'rotate-180' : ''}`}
    />
  </Link>
)

// Service Section component

const ServiceSectionComponent: React.FC<{
  section: ServiceSection
  isReversed?: boolean
  hasImage?: boolean
  locale?: 'en' | 'ar'
}> = ({ section, isReversed = false, hasImage = false, locale }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% visible
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  // Simple fade-up animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      className={`flex gap-4 items-start flex-col md:flex-row ${isReversed ? 'flex-row-reverse' : ''}`}
    >
      {/* Content Card */}
      <motion.div
        variants={fadeInUp}
        className={`relative bg-${section.backgroundColor} rounded-[24px] px-4 py-10 md:p-10 ${
          hasImage ? 'flex-1' : 'w-full'
        } max-w-full min-h-full md:overflow-hidden md:min-h-[368px]`}
      >
        {/* Content */}
        <motion.div
          variants={fadeInUp}
          className={`relative z-10 flex flex-col gap-4 md:gap-[30px] min-w-full ${
            section.imageUrl && isReversed && 'items-end'
          }`}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-2">
            <h3 className="font-aeonik font-bold text-2xl leading-[1.4] tracking-[-0.24px] text-[#caf48e]">
              {section.title}
            </h3>
            <p
              className={`font-aeonik font-normal text-base leading-6 max-w-[453px] text-${section.textColor}`}
            >
              {section.description}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-15 md:gap-22 justify-between flex-col md:flex-row w-full md:w-fit items-end"
          >
            <div className="flex flex-col md:min-w-[452px] max-w-full justify-end w-full md:w-fit">
              {section.links.map((link, index) => (
                <div key={index}>
                  <ServiceButton
                    link={link}
                    textColor={section.textColor || 'text-white'}
                    locale={locale}
                  />
                  {index < section.links.length - 1 && (
                    <div className="w-full h-px bg-gray-400/20" />
                  )}
                </div>
              ))}
            </div>

            {hasImage && (
              <motion.div
                variants={fadeInUp}
                className="relative h-[190px] w-[225px] flex"
              >
                <Image
                  src="/images/generalImages/VectorHome.png"
                  alt="vector"
                  fill
                  className="object-cover md:object-bottom object-right-bottom"
                  priority
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Background Image for reversed layout */}
        {section.imageUrl && isReversed && (
          <motion.div
            variants={fadeInUp}
            className="relative md:absolute left-8 md:left-0 -bottom-10 md:top-0 w-[344px] h-[395px] bg-cover bg-center bg-no-repeat rounded-[24px]"
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${section.imageUrl.url}')`,
            }}
          />
        )}
      </motion.div>

      {/* Image (non-reversed layout) */}
      {hasImage && section.imageUrl && !isReversed && (
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-[532px] h-[386px] rounded-[32px] bg-cover bg-center bg-no-repeat shrink-0"
          style={{
            backgroundImage: `url('/images/generalImages/Solutions.png')`,
          }}
        />
      )}
    </motion.div>
  )
}

// Main component
export default function ComprehensiveServices({
  before_highlight,
  highlight,
  after_highlight,
  ServiceSection,
  className = '',
  locale,
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

      <section
        className={`relative section-padding bg-Secondary-Light-Scrub ${className}`}
      >
        <div className="max-w-[1392px] mx-auto pt-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-[18px] md:gap-20">
            {/* Decorative top vector can go here if needed */}

            {/* Title with decorative vector */}
            <div className="relative flex flex-wrap justify-center items-center gap-x-4 max-w-[768px]">
              <h2 className="font-aeonik text-[28px] md:text-[40px] font-bold text-[#1e1e1e] text-center">
                <span>{before_highlight} </span>
                <span className="relative inline-block">
                  <span className="z-[2] relative">{highlight}</span>
                  <div className="absolute -inset-3 z-[1]">
                    <TitleDecorationVector />
                  </div>
                </span>
                <span> {after_highlight}</span>
              </h2>
            </div>

            {/* Content Grid */}
            <div className="w-full flex flex-col gap-4 relative">
              {ServiceSection.map((section, index) => {
                if (index === 0) {
                  // First row (Healthcare Services + Image)
                  return (
                    <ServiceSectionComponent
                      key={index}
                      section={section}
                      hasImage={true}
                      locale={locale}
                    />
                  )
                }

                // Second row (Concierge + Consultation)
                if (index === 1) {
                  return (
                    <div
                      key="second-row"
                      className="flex gap-4 flex-col md:flex-row"
                    >
                      <div className="w-fit md:w-[532px]">
                        <ServiceSectionComponent
                          section={ServiceSection[1]}
                          hasImage={false}
                          locale={locale}
                        />
                      </div>
                      <div className="flex-1">
                        {ServiceSection[2] && (
                          <ServiceSectionComponent
                            section={ServiceSection[2]}
                            isReversed={true}
                            locale={locale}
                          />
                        )}
                      </div>
                    </div>
                  )
                }

                // Skip the ones already handled (indexes 0, 1, 2)
                return null
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
