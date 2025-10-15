'use client'

import FaqSection from '@/components/sections/FaqSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import WhySection from '@/components/sections/WhySection'
import {
  ServicesOrganizations,
  HeroPagesBlock,
  FeatureSectionBlock,
  WhySectionBlock,
  FAQSectionBlock,
  GetInTouchBlock,
  ClientExperiencesBlock,
} from '../../types/organizationsPage'
import ClientExperiences from '@/components/sections/ClientExperiences'

type OrganizationsPageBlock =
  | (HeroPagesBlock & { __component: 'blocks.hero-pages' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (WhySectionBlock & { __component: 'blocks.why-section' })
  | (ClientExperiencesBlock & { __component: 'blocks.client-experiences' })
  | (FAQSectionBlock & { __component: 'blocks.faq-section' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in OrganizationsPageBlock['__component']]: React.ComponentType<
    Extract<OrganizationsPageBlock, { __component: K }>
  >
} = {
  'blocks.hero-pages': HeroPages as React.ComponentType<HeroPagesBlock>,
  'blocks.feature-section':
    FeatureSection as React.ComponentType<FeatureSectionBlock>,
  'blocks.why-section': WhySection as React.ComponentType<WhySectionBlock>,
  'blocks.client-experiences':
    ClientExperiences as React.ComponentType<ClientExperiencesBlock>,
  'blocks.faq-section': FaqSection as React.ComponentType<FAQSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

function Block({ block }: { block: OrganizationsPageBlock }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function OrganizationsPage({
  data,
}: {
  data: ServicesOrganizations[]
}) {
  const page = data?.[0]
  const blocks: OrganizationsPageBlock[] = page?.blocks || []

  if (!blocks.length) {
    return null
  }

  return (
    <div className="min-h-screen ">
      {blocks.map((block) => (
        <Block key={`${block.__component}-${block.id}`} block={block} />
      ))}
    </div>
  )
}
