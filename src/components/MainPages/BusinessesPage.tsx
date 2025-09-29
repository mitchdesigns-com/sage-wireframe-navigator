'use client'

import CentersImages from '@/components/sections/CentersImages'
import FaqSection from '@/components/sections/FaqSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import WhySection from '@/components/sections/WhySection'

const BLOCKS: Record<string, React.ComponentType<any>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.feature-section': FeatureSection,
  'blocks.why-section': WhySection,
  'blocks.centers-section': CentersImages,
  'blocks.faq-section': FaqSection,
  'blocks.get-in-touch': GetInTouch,
}

export default function BusinessesPage({ data }: { data: any }) {
  const page = data?.[0]
  const blocks = page?.blocks
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen ">
      {blocks.map((block: any, index: number) => {
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
