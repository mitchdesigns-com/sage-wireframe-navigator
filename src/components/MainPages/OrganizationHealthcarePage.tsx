'use client'

import CentersSection from '@/components/sections/CentersSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import ServiceSection from '@/components/sections/ServiceSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { domToReact, DOMNode, Element } from 'html-react-parser'
import {
  ServicesOrganizationsHealthcareResponse,
  HeroWithImageBlock,
  WhyChooseSectionBlock,
  FeatureSectionBlock,
  CentersSectionDataBlock,
  DetailsSectionBlock,
  GetInTouchBlock,
} from '../../types/organizationHealthcarePage'
type OrgHealthcareBlock =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (CentersSectionDataBlock & { __component: 'blocks.centers-section-data' })
  | (DetailsSectionBlock & { __component: 'blocks.details-section' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in OrgHealthcareBlock['__component']]: React.ComponentType<
    Extract<OrgHealthcareBlock, { __component: K }>
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
      paragraphs={props.paragraphs?.map((p) => p.paragraph)}
    />
  ),
  'blocks.feature-section':
    FeatureSection as React.ComponentType<FeatureSectionBlock>,
  'blocks.centers-section-data':
    CentersSection as React.ComponentType<CentersSectionDataBlock>,
  'blocks.details-section':
    ServiceSection as React.ComponentType<DetailsSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

function Block({ block }: { block: OrgHealthcareBlock }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function OrganizationHealthcarePage({
  data,
}: {
  data: ServicesOrganizationsHealthcareResponse
}) {
  const page = data.data[0]
  const blocks: OrgHealthcareBlock[] = page.blocks

  if (!blocks || blocks.length === 0) {
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
