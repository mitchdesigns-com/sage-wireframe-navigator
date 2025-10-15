'use client'

import CentersImages from '@/components/sections/CentersImages'
import FaqSection from '@/components/sections/FaqSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import WhySection from '@/components/sections/WhySection'
import type {
  BusinessServiceData,
  PageBlock, // Make sure this is the discriminated union type
  HeroPagesBlock,
  FeatureSectionBlock,
  WhySectionBlock,
  CentersSectionBlock,
  FAQSectionBlock,
  GetInTouchBlock,
  ClientExperiencesBlock,
} from '../../types/businessServices'
import ClientExperiences from '@/components/sections/ClientExperiences'

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
  'blocks.client-experiences':
    ClientExperiences as React.ComponentType<ClientExperiencesBlock>,
  'blocks.faq-section': FaqSection as React.ComponentType<FAQSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

interface BusinessesPageProps {
  data: BusinessServiceData[]
}

function Block({ block }: { block: PageBlock }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function BusinessesPage({ data }: BusinessesPageProps) {
  const page = data?.[0]
  const blocks: PageBlock[] | undefined = page?.blocks

  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen">
      {blocks.map((block) => (
        <Block key={`${block.__component}-${block.id}`} block={block} />
      ))}
    </div>
  )
}
