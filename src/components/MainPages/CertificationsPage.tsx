'use client'

import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import CentersSection from '@/components/sections/CentersSection'
import CertificateCard from '@/components/sections/CertificateCard'

import {
  ResourceItem,
  ResourceBlocks,
  HeroPagesBlock,
  CentersSectionBlock,
  GetInTouchBlock,
  CertificateCardBlock,
} from '../../types/resourcesPages'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const BLOCKS: {
  [K in ResourceBlocks['__component']]: React.ComponentType<
    Extract<ResourceBlocks, { __component: K }>
  >
} = {
  'blocks.hero-pages': HeroPages as React.ComponentType<HeroPagesBlock>,
  'blocks.centers-section-data':
    CentersSection as React.ComponentType<CentersSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

interface CertificationsPageProps {
  data: ResourceItem[]
}

function Block({ block }: { block: ResourceBlocks }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function CertificationsPage({ data }: CertificationsPageProps) {
  const page = data?.[0]
  const blocks: ResourceBlocks[] = page?.blocks || []
  const certificates: CertificateCardBlock[] = page?.BlocksResources || []

  // Always declare hooks first
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  if (!blocks.length && !certificates.length) return null

  return (
    <div className="min-h-screen">
      {blocks.map((block) => {
        if (block.__component === 'blocks.hero-pages') {
          return (
            <div key={`${block.__component}-${block.id}`}>
              <Block block={block} />

              {certificates.length > 0 && (
                <section className="py-8 md:py-20 bg-Secondary-Light-Scrub">
                  <div
                    className="max-w-[1392px] mx-auto space-y-8 md:space-y-20 px-4"
                    ref={ref}
                  >
                    <motion.div
                      className="grid md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-20"
                      variants={container}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      {certificates.map((certificate) => (
                        <motion.div key={certificate.id} variants={item}>
                          <CertificateCard certificate={certificate} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </section>
              )}
            </div>
          )
        }

        return <Block key={`${block.__component}-${block.id}`} block={block} />
      })}
    </div>
  )
}
