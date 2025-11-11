'use client'

import SectionHeader from '../ui/SectionHeader'
import ArrowOutWard from '../svg/ArrowOutWard'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ResourceItem {
  id: number
  title: string
  description: string
  href: string
}

interface SectionHeaderResources {
  id: number
  heading: string
  color: string
  tagline: string
  description: string
  home: boolean
}

interface ImageData {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

interface ResourcesData {
  id: number
  SectionHeaderResources: SectionHeaderResources
  image: ImageData
  resourcesSection: ResourceItem[]
}

export default function Resources({
  Resources,
  locale,
}: {
  Resources: ResourcesData
  locale?: 'en' | 'ar'
}) {
  const { SectionHeaderResources, image, resourcesSection } = Resources
  const [isMobile, setIsMobile] = useState(false)

  // Animation setup
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-8 md:py-25 bg-sage-gradient"
    >
      <div className="max-w-[1392px] px-4 mx-auto">
        <motion.div variants={itemVariants}>
          <SectionHeader
            heading={SectionHeaderResources.heading}
            color="light"
            tagline={SectionHeaderResources.tagline}
            description={SectionHeaderResources.description}
            home={SectionHeaderResources.home}
            image={image}
          />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-0 md:gap-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            {!isMobile && (
              <motion.div
                variants={itemVariants}
                className="aspect-[600/650] rounded-[40px] bg-cover bg-center w-full"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url})`,
                }}
              />
            )}
          </div>

          <motion.div
            variants={containerVariants}
            className="order-1 space-y-9 md:space-y-8 lg:order-2"
          >
            {resourcesSection.map((resource) => (
              <motion.a
                href={resource.href}
                key={resource.id}
                variants={itemVariants}
                className="block border-b border-[#4B4B4B] pb-9 md:pb-8 last:border-b-0 hover:opacity-80 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {resource.title}
                    </h3>
                    <p className="leading-relaxed text-white">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowOutWard
                    className={`${locale === 'ar' ? '-rotate-90' : ''}`}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
