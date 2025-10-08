'use client'

import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from '@/components/strapi/HeroSection'
import FeatureSection from '@/components/sections/FeatureSection'
import ServicesSection from '@/components/sections/ServicesSection'
import GetInTouch from '@/components/sections/GetInTouch'
import { useEffect, useState } from 'react'
import {
  Block,
  DetailedService,
  Feature,
  ServicesPageData,
} from '../../types/servicesPage'

const SECTION_IDS = ['individuals', 'businesses', 'organizations'] as const
const filterOptions = SECTION_IDS.map((id) => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1),
}))

export default function ServicesPage({ data }: { data: ServicesPageData }) {
  const [activeFilter, setActiveFilter] = useState<
    'individuals' | 'businesses' | 'organizations'
  >('individuals')
  const [isScrolled, setIsScrolled] = useState(false)
  console.log(isScrolled)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy for sections
  useEffect(() => {
    const navEl = document.getElementById('services-nav')
    const offset = (navEl?.offsetHeight ?? 0) + 8
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id)
          setActiveFilter(visible.target.id as typeof activeFilter)
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: `-${offset}px 0px -50% 0px`,
      }
    )

    const els: HTMLElement[] = SECTION_IDS.map(
      (id) => document.getElementById(id)!
    ).filter(Boolean)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: (typeof SECTION_IDS)[number]) => {
    setActiveFilter(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderBlock = (block: Block) => {
    switch (block.__component) {
      case 'blocks.hero-section':
        return (
          <HeroSection
            key={block.id}
            data={{
              title: block.title,
              subtitle: block.subtitle,
              description: block.description?.replace(/\n/g, '<br/>'),
              background_image: block.background_image,
              cta_primary: block.cta_primary,
              cta_secondary: block.cta_secondary,
              alignment: block.alignment,
              theme: block.theme,
              height: block.height,
              overlay: block.overlay,
              overlay_opacity: block.overlay_opacity,
              breadcrumbItems: block.breadcrumbItems,
            }}
          />
        )

      case 'blocks.feature-section':
        return (
          <FeatureSection
            key={block.id}
            tagline={block.tagline}
            title={block.title}
            description={block.description}
            features={block.features.map((f: Feature) => ({
              text: f.text,
              icon: f.icon,
            }))}
            ctaText={block.ctaText}
            href={block.href}
            image={block.image}
            backgroundColor={block.backgroundColor}
            textColor={block.textColor}
            reverse={block.reverse}
          />
        )

      case 'blocks.services-section':
        return (
          <ServicesSection
            key={block.id}
            tagline={block.tagline}
            title={block.title}
            description={block.description}
            detailedServices={block.detailedServices.map(
              (s: DetailedService) => ({
                title: s.title,
                description: s.description,
                href: s.href,
              })
            )}
            backgroundColor={block.backgroundColor}
            textColor={block.textColor}
            image={block.image?.url}
          />
        )

      case 'blocks.get-in-touch':
        return (
          <GetInTouch
            key={block.id}
            tagline={block.tagline}
            title={block.title}
            description={block.description}
            image={block.image}
          />
        )

      default:
        return null
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {data?.blocks?.map((block) => {
          // check if block is hero
          if (block.__component === 'blocks.hero-section') {
            return (
              <div key={block.id}>
                {renderBlock(block)}

                {/* Sticky Filter Navigation goes right after hero */}
                <motion.section
                  id="services-nav"
                  className="sticky top-0 z-40 bg-Primary-Palm transition-all duration-300 py-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="container-custom mx-auto flex justify-center">
                    <div className="flex items-center text-[#E2F2F1] bg-Primary-Palm rounded-full p-1">
                      {filterOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleNavClick(option.id)}
                          className={`px-4 py-2.5 rounded-full text-base font-medium transition-all duration-200 cursor-pointer ${
                            activeFilter === option.id
                              ? 'bg-white text-Primary-Palm shadow-sm'
                              : 'text-[#E2F2F1] bg-Primary-Palm hover:shadow-sm'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.section>
              </div>
            )
          }

          // handle the rest of sections normally
          const sectionId = block.tagline?.toLowerCase().includes('individual')
            ? 'individuals'
            : block.tagline?.toLowerCase().includes('business')
              ? 'businesses'
              : block.tagline?.toLowerCase().includes('organization')
                ? 'organizations'
                : undefined

          return sectionId ? (
            <section
              key={block.id}
              id={sectionId}
              className="scroll-mt-[120px]"
            >
              {renderBlock(block)}
            </section>
          ) : (
            renderBlock(block)
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}
