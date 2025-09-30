'use client'

import CentersSection from '@/components/sections/CentersSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import ServiceSection from '@/components/sections/ServiceSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { domToReact } from 'html-react-parser'

const BLOCKS: Record<string, React.ComponentType<any>> = {
  'blocks.hero-with-image': (props: any) => (
    <HeroWithImage
      {...props}
      title={parse(props.title, {
        replace: (domNode: any) => {
          if (domNode.name === 'span') {
            return (
              <span className="font-bold text-Primary-Scrub text-nowrap">
                {domToReact(domNode.children)}
              </span>
            )
          }
        },
      })}
    />
  ),
  'blocks.why-choose-section': (props: any) => (
    <WhyChooseSection
      {...props}
      paragraphs={props.paragraphs?.map((p: any) => p.paragraph)}
    />
  ),
  'blocks.feature-section': FeatureSection,
  'blocks.centers-section-data': CentersSection,
  'blocks.details-section': ServiceSection,
  'blocks.get-in-touch': GetInTouch,
}

export default function OrganizationHealthcarePage({ data }: { data: any }) {
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
