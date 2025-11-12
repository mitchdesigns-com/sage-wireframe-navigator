'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { DOMNode, domToReact, Element } from 'html-react-parser' // Corrected import
import {
  DetailsSectionBlock,
  FeatureSectionBlock,
  GetInTouchBlock,
  HeroWithImageBlock,
  ServiceIndividualBlocks,
  ServiceIndividualItem,
  WhyChooseSectionBlock,
} from '../../types/conciergeIndividual'
import ServiceSection from '../sections/ServiceSection'

type BusinessConciergeBlockPage =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
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
  'blocks.feature-section':
    FeatureSection as React.ComponentType<FeatureSectionBlock>,
  'blocks.details-section': ServiceSection,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

function Block({ block }: { block: ServiceIndividualBlocks }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

interface ConciergePageProps {
  data: ServiceIndividualItem[]
}

export default function ConciergePage({ data }: ConciergePageProps) {
  const page = data[0]
  const blocks: ServiceIndividualBlocks[] = page.blocks

  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#E2F2F1]">
      {blocks.map((block) => (
        <Block key={`${block.__component}-${block.id}`} block={block} />
      ))}
    </div>
  )
}
