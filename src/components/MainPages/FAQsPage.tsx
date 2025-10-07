'use client'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import parse, { domToReact, DOMNode, Element } from 'html-react-parser' // Corrected import
import {
  ServiceIndividualItem,
  ServiceIndividualBlocks,
  HeroWithImageBlock,
  WhyChooseSectionBlock,
  DetailsSectionBlock,
  FeatureSectionBlock,
  GetInTouchBlock,
} from '../../types/conciergeIndividual'

const BLOCKS: {
  [K in ServiceIndividualBlocks['__component']]: React.ComponentType<
    Extract<ServiceIndividualBlocks, { __component: K }>
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
  'blocks.details-section': (props: DetailsSectionBlock) => (
    <section className="py-28 bg-Primary-Palm">
      <div className="max-w-[1392px] mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-white text-[40px] font-bold leading-[2.75rem]">
              {props.title}
            </h2>
          </div>
          <div>
            <p className="text-white text-p">{props.description}</p>
          </div>
        </div>
        <div className="aspect-[1384/540] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${props.image.url}`}
            alt={props.image.alternativeText || 'Culturally Sensitive Care'}
            className="rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  ),
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
