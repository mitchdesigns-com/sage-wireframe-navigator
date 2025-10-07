'use client'

import CentersImages from '@/components/sections/CentersImages'
import FaqSection from '@/components/sections/FaqSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import WhySection from '@/components/sections/WhySection'
import type {
  BusinessServiceData,
  PageBlock,
  HeroPagesBlock,
  FeatureSectionBlock,
  WhySectionBlock,
  CentersSectionBlock,
  FAQSectionBlock,
  GetInTouchBlock,
} from '../../types/businessServices'

const BLOCKS: {
  [K in PageBlock['__component']]: React.ComponentType<
    Extract<PageBlock, { __component: K }>
  >
} = {
  'blocks.hero-pages': HeroPages as React.ComponentType<HeroPagesBlock>,
  'blocks.feature-section':
    FeatureSection as React.ComponentType<FeatureSectionBlock>,
  'blocks.why-section': WhySection as React.ComponentType<WhySectionBlock>,
  'blocks.centers-section':
    CentersImages as React.ComponentType<CentersSectionBlock>,
  'blocks.faq-section': FaqSection as React.ComponentType<FAQSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

interface BusinessesPageProps {
  data: BusinessServiceData[]
}

export default function BusinessesPage({ data }: BusinessesPageProps) {
  const page = data?.[0]
  const blocks = page?.blocks

  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen">
      {blocks.map((block, index) => {
        const Component = BLOCKS[block.__component]
        if (!Component) {
          console.warn(`Unknown block component: ${block.__component}`)
          return null
        }

        return (
          <Component
            key={`${block.__component}-${block.id || index}`}
            {...(block as Extract<
              PageBlock,
              { __component: typeof block.__component }
            >)}
          />
        )
      })}
    </div>
  )
}
