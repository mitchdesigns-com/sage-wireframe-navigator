'use client'

import FaqSection from '@/components/sections/FaqSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import WhySection from '@/components/sections/WhySection'
import {
  ServicesOrganizations,
  ServicesOrganizationsResponse,
} from '../../types/organizationsPage'

const BLOCKS: Record<
  string,
  React.ComponentType<ServicesOrganizationsResponse>
> = {
  'blocks.hero-pages': HeroPages,
  'blocks.feature-section': FeatureSection,
  'blocks.why-section': WhySection,
  'blocks.faq-section': FaqSection,
  'blocks.get-in-touch': GetInTouch,
}

export default function OrganizationsPage({
  data,
}: {
  data: ServicesOrganizations[]
}) {
  const page = data?.[0]
  const blocks = page?.blocks
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen ">
      {blocks.map((block, index: number) => {
        const Component = BLOCKS[block.__component]
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
