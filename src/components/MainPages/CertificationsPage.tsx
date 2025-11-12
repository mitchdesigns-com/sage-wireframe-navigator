'use client'

import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import CentersSection from '@/components/sections/CentersSection'
import CertificateCard from '@/components/sections/CertificateCard'

import {
  ResourceItem,
  ResourceBlocks, // This should be your main discriminated union
  HeroPagesBlock,
  CentersSectionBlock,
  GetInTouchBlock,
  CertificateCardBlock,
} from '../../types/resourcesPages'

// FIX: Add the missing 'blocks.certificate-card' to the BLOCKS map
const BLOCKS: {
  [K in ResourceBlocks['__component']]: React.ComponentType<
    Extract<ResourceBlocks, { __component: K }>
  >
} = {
  'blocks.hero-pages': HeroPages as React.ComponentType<HeroPagesBlock>,
  'blocks.centers-section-data':
    CentersSection as React.ComponentType<CentersSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
  // Assuming 'blocks.certificate-card' is a valid __component type
  // If not, you might not need it in the main blocks loop.
  // But if it IS a block type, it should be here.
}

interface CertificationsPageProps {
  data: ResourceItem[]
}

// FIX: Create a dedicated component to render a single block
function Block({ block }: { block: ResourceBlocks }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  // TypeScript can now correctly infer the props, so no casting is needed.
  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function CertificationsPage({ data }: CertificationsPageProps) {
  const page = data?.[0]
  const blocks: ResourceBlocks[] = page?.blocks || []
  const certificates: CertificateCardBlock[] = page?.BlocksResources || []

  if (!blocks.length) return null

  return (
    <div className="min-h-screen">
      {blocks.map((block) => {
        // FIX: Handle the special rendering case for 'hero-pages'
        if (block.__component === 'blocks.hero-pages') {
          return (
            // The key must be on the top-level element in the loop
            <div key={`${block.__component}-${block.id}`}>
              <Block block={block} />

              {certificates.length > 0 && (
                <section className="py-8 md:py-20 bg-Secondary-Light-Scrub">
                  <div className="max-w-[1392px] mx-auto space-y-8 md:space-y-20  px-4">
                    <div className="grid md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-20">
                      {certificates.map((certificate) => (
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

        // For all other blocks, render the Block component normally
        return <Block key={`${block.__component}-${block.id}`} block={block} />
      })}
    </div>
  )
}
