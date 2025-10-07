'use client'

import CentersSection from '@/components/sections/CentersSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import ServiceSection from '@/components/sections/ServiceSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { DOMNode, domToReact, Element } from 'html-react-parser'
import {
  BusinessConciergePageData,
  CentersSectionBlock,
  DetailsSectionBlock,
  FeatureSectionBlock,
  GetInTouchBlock,
  HeroWithImageBlock,
  WhyChooseSectionBlock,
} from '../../types/businessesConcierge'

type BusinessConciergeBlockPage =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (CentersSectionBlock & { __component: 'blocks.centers-section-data' })
  | (DetailsSectionBlock & { __component: 'blocks.details-section' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in BusinessConciergeBlockPage['__component']]: React.ComponentType<
    Extract<BusinessConciergeBlockPage, { __component: K }>
  >
} = {
  'blocks.hero-with-image': (props: HeroWithImageBlock) => (
    <HeroWithImage
      {...props}
      title={parse(props.title || '', {
        replace: (domNode: DOMNode) => {
          if (domNode instanceof Element && domNode.name === 'span') {
            // Cast children to DOMNode[]
            return (
              <span className="font-bold text-Primary-Scrub text-nowrap">
                {domToReact(domNode.children as DOMNode[])}
              </span>
            )
          }
        },
      })}
    />
  ),
  'blocks.why-choose-section': (props: WhyChooseSectionBlock) => (
    <WhyChooseSection
      {...props}
      paragraphs={props.paragraphs.map((p) => p.paragraph)}
    />
  ),
  'blocks.feature-section': FeatureSection,
  'blocks.centers-section-data': CentersSection,
  'blocks.details-section': ServiceSection,
  'blocks.get-in-touch': GetInTouch,
}
function Block({ block }: { block: BusinessConciergeBlockPage }) {
  const Component = BLOCKS[block.__component]
  if (!Component) {
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function BusinessHealthcarePage({
  data,
}: {
  data: BusinessConciergePageData[]
}) {
  const page = data[0]
  const blocks: BusinessConciergeBlockPage[] =
    page.blocks as BusinessConciergeBlockPage[]

  if (!blocks || blocks.length === 0) return null

  return (
    <div className="min-h-screen bg-[#E2F2F1]">
      {blocks.map((block) => {
        return <Block key={`${block.__component}-${block.id}`} block={block} />
      })}
    </div>
  )
}
