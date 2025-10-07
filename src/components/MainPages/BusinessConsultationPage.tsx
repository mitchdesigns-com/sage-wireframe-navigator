'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import ServiceSection from '@/components/sections/ServiceSection'
import parse, { domToReact, DOMNode, Element } from 'html-react-parser'
import Image from 'next/image'

interface ImageData {
  id: number
  url: string
  alternativeText: string
}

interface HeroWithImageBlock {
  __component: 'blocks.hero-with-image'
  id: number
  title: string
}

interface WhyChooseSectionBlock {
  __component: 'blocks.why-choose-section'
  id: number
  paragraphs: { id: number; paragraph: string }[]
}

interface FeatureSectionBlock {
  __component: 'blocks.feature-section'
  id: number
}

interface ConciergeHelpItem {
  id: number
  title: string
  description: string
  icon: ImageData
}

interface ConciergeHelpBlock {
  __component: 'blocks.concierge-help'
  id: number
  title: string
  description: string
  list: ConciergeHelpItem[]
}

interface DetailsSectionBlock {
  __component: 'blocks.details-section'
  id: number
}

interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
}

type BusinessConsultationBlock =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | ConciergeHelpBlock
  | DetailsSectionBlock
  | GetInTouchBlock

interface BusinessConsultationPageData {
  id: number
  blocks: BusinessConsultationBlock[]
}

const BLOCKS = {
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
      paragraphs={props.paragraphs?.map((p) => p.paragraph)}
    />
  ),
  'blocks.feature-section':
    FeatureSection as React.ComponentType<FeatureSectionBlock>,
  'blocks.concierge-help': (props: ConciergeHelpBlock) => (
    <section className="py-25 bg-Secondary-Light-Scrub">
      <div className="max-w-[764px] mx-auto text-center space-y-4">
        <h2 className="text-Primary-Black heading-lg max-w-[768px] mx-auto">
          {props.title}
        </h2>
        <p className="text-Secondary-Text text-base">{props.description}</p>
      </div>
      <div className="max-w-[1392px] mx-auto w-full pt-20">
        <div className="flex mb-8 gap-12 justify-center items-center text-center flex-wrap">
          {props.list?.map((li) => (
            <div
              key={li.id}
              className="flex items-center gap-2 flex-col max-w-[432px]"
            >
              <div className="flex items-center justify-center relative w-12 h-12">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.icon?.url}`}
                  alt={li.icon?.alternativeText || 'icon'}
                  className="object-cover"
                  priority
                  fill
                />
              </div>
              <h5 className="text-[#000404] text-[24px] font-bold">
                {li.title}
              </h5>
              <span className="text-Secondary-Text text-[16px] leading-[1.5] flex-1">
                {li.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  'blocks.details-section':
    ServiceSection as React.ComponentType<DetailsSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
} as const

export default function BusinessConsultationPage({
  data,
}: {
  data: BusinessConsultationPageData[]
}) {
  const page = data[0]
  const blocks = page.blocks

  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#E2F2F1]">
      {blocks.map((block) => {
        // The component is looked up using the discriminant `__component`
        const Component = BLOCKS[block.__component]
        if (!Component) {
          console.warn(`Unknown block component: ${block.__component}`)
          return null
        }
        // TypeScript correctly infers the props for `Component` based on the specific `block` type
        return <Component key={`${block.__component}-${block.id}`} {...block} />
      })}
    </div>
  )
}
