'use client'

import Image from 'next/image'
import parse, { domToReact, DOMNode, Element } from 'html-react-parser'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import ServiceSection from '@/components/sections/ServiceSection'
import GetInTouch from '@/components/sections/GetInTouch'
import {
  BusinessConciergePageData,
  HeroWithImageBlock,
  ConciergeHelpBlock,
  WhyChooseSectionBlock,
  ConciergeHelpItem,
  FeatureSectionBlock,
  DetailsSectionBlock,
  GetInTouchBlock,
} from '../../types/businessesConcierge'

type BusinessConciergeBlockPage =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (ConciergeHelpBlock & { __component: 'blocks.concierge-help' })
  | (DetailsSectionBlock & { __component: 'blocks.details-section' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in BusinessConciergeBlockPage['__component']]: React.ComponentType<
    Extract<BusinessConciergeBlockPage, { __component: K }>
  >
} = {
  'blocks.hero-with-image': (props) => (
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
  'blocks.why-choose-section': (props) => (
    <WhyChooseSection
      {...props}
      paragraphs={props.paragraphs.map(
        (p: { id: number; paragraph: string }) => p.paragraph
      )}
    />
  ),
  'blocks.feature-section': FeatureSection,
  'blocks.concierge-help': (props) => (
    <section className="py-8 md:py-25 bg-Secondary-Light-Scrub">
      <div className="max-w-[764px] mx-auto text-center space-y-4 px-4 md:px-0">
        <h2 className="text-Primary-Black heading-lg text-nowrap">
          {props.title}
        </h2>
        <p className="text-Secondary-Text text-sm md:text-base">
          {props.description}
        </p>
      </div>
      <div className="max-w-[1392px] mx-auto w-full pt-8 md:pt-20 px-4 md:px-0">
        <div className="flex mb-8 gap-12 justify-center items-center text-center flex-wrap">
          {props.list.map((li: ConciergeHelpItem) => (
            <div
              key={li.id}
              className="flex items-center gap-2 flex-col max-w-[432px]"
            >
              <div className="flex items-center justify-center relative w-12 h-12">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.icon.url}`}
                  alt={li.icon.alternativeText || 'icon'}
                  className="object-cover"
                  priority
                  fill
                />
              </div>
              <h5 className="text-[#000404] text-[20px] md:text-2xl font-bold">
                {li.title}
              </h5>
              <span className="text-Secondary-Text text-sm md:text-base leading-[1.5] flex-1">
                {li.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
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

export default function BusinessConciergePage({
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
