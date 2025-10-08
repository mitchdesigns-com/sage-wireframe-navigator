'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import ServicesSection from '@/components/sections/ServicesSection'
import HeroSection from '@/components/strapi/HeroSection'
import { AnimatePresence, motion } from 'framer-motion'
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

export default function ServicesPage({ data }: { data: ServicesPageData[] }) {
  const [activeFilter, setActiveFilter] = useState<
    'individuals' | 'businesses' | 'organizations'
  >('individuals')

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 100)
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  useEffect(() => {
    const navEl = document.getElementById('services-nav')
    const offset = (navEl?.offsetHeight ?? 0) + 8
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveFilter(visible.target.id as typeof activeFilter)
        }
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
    if (el) {
      const navEl = document.getElementById('services-nav')
      const offset = (navEl?.offsetHeight ?? 0) + 24
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
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
              description: block.description?.replace(/\n/g, '  '),
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
            {...{
              tagline: block.tagline,
              title: block.title,
              description: block.description,
              features: block.features.map((f: Feature) => ({
                text: f.text,
                icon: f.icon,
              })),
              ctaText: block.ctaText,
              href: block.href,
              image: block.image,
              backgroundColor: block.backgroundColor,
              textColor: block.textColor,
              reverse: block.reverse,
            }}
          />
        )
      case 'blocks.services-section':
        return (
          <ServicesSection
            key={block.id}
            {...{
              tagline: block.tagline,
              title: block.title,
              description: block.description,
              detailedServices: block.detailedServices.map(
                (s: DetailedService) => ({
                  title: s.title,
                  description: s.description,
                  href: s.href,
                })
              ),
              backgroundColor: block.backgroundColor,
              textColor: block.textColor,
              image: block.image?.url,
            }}
          />
        )
      case 'blocks.get-in-touch':
        return (
          <GetInTouch
            key={block.id}
            {...{
              tagline: block.tagline,
              title: block.title,
              description: block.description,
              image: block.image,
            }}
          />
        )
      default:
        return null
    }
  }
  // --- END OF CORRECTION ---

  const groupedSections: { [key: string]: Block[] } = {
    individuals: [],
    businesses: [],
    organizations: [],
  }
  const otherBlocks: Block[] = []
  let heroBlock: Block | null = null

  if (data[0] && data[0].blocks) {
    for (const block of data[0].blocks) {
      if (block.__component === 'blocks.hero-section') {
        heroBlock = block
        continue
      }
      const tagline = block.tagline?.toLowerCase() || ''
      if (tagline.includes('individual')) {
        groupedSections.individuals.push(block)
      } else if (tagline.includes('business')) {
        groupedSections.businesses.push(block)
      } else if (tagline.includes('organization')) {
        groupedSections.organizations.push(block)
      } else {
        otherBlocks.push(block)
      }
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
        {heroBlock && (
          <div>
            {renderBlock(heroBlock)}
            <motion.section
              id="services-nav"
              className="sticky top-0 z-40 bg-Primary-Palm py-10 transition-all duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container-custom mx-auto flex justify-center">
                <div className="flex items-center rounded-full bg-Primary-Palm p-1 text-[#E2F2F1]">
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleNavClick(option.id)}
                      className={`cursor-pointer rounded-full px-4 py-2.5 text-base font-medium transition-all duration-200 ${
                        activeFilter === option.id
                          ? 'bg-white text-Primary-Palm shadow-sm'
                          : 'bg-Primary-Palm text-[#E2F2F1] hover:shadow-sm'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        )}

        {Object.entries(groupedSections).map(([sectionId, blocks]) =>
          blocks.length > 0 ? (
            <section key={sectionId} id={sectionId}>
              {blocks.map((block) => renderBlock(block))}
            </section>
          ) : null
        )}

        {otherBlocks.map((block) => renderBlock(block))}
      </motion.div>
    </AnimatePresence>
  )
}
