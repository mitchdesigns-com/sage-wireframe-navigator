'use client'

import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import WhySection from '@/components/sections/WhySection'
import GetInTouch from '@/components/sections/GetInTouch'
import FaqSection from '@/components/sections/FaqSection'
import {
  ServicePage,
  ServicePageResponse,
} from '../../types/servicesIndividual'

const BLOCKS: Record<string, React.ComponentType<ServicePageResponse>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.feature-section': FeatureSection,
  'blocks.why-section': WhySection,
  'blocks.faq-section': FaqSection,
  'blocks.get-in-touch': GetInTouch,
}

export default function IndividualsPage({ data }: { data: ServicePage[] }) {
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
