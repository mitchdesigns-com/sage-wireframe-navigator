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

export default function CertificationsPage({ data }: CertificationsPageProps) {
  const page = data?.[0]
  const blocks = page?.blocks || []
  const certificates = page?.BlocksResources || []

  if (!blocks.length) return null

  return (
    <div className="min-h-screen">
      {blocks.map((block: ResourceBlocks, index: number) => {
        const Component = BLOCKS[block.__component]

        // render HeroPages and then immediately the certificate cards
        if (block.__component === 'blocks.hero-pages') {
          return (
            <div key={`${block.__component}-${block.id || index}`}>
              <Component
                {...block}
                key={`${block.__component}-${block.id || index}`}
              />

              {certificates.length > 0 && (
                <section className="py-20 bg-Secondary-Light-Scrub">
                  <div className="max-w-[1392px] mx-auto space-y-20">
                    <div className="grid md:grid-cols-3 gap-x-12 gap-y-20">
                      {certificates.map((certificate: CertificateCardBlock) => (
                        <CertificateCard
                          key={certificate.id}
                          certificate={certificate}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          )
        }

        if (!Component) {
          console.warn(`Unknown block component: ${block.__component}`)
          return null
        }

        return (
          <Component
            key={`${block.__component}-${block.id || index}`}
            {...block}
          />
        )
      })}
    </div>
  )
}
