'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import ServiceSection from '@/components/sections/ServiceSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { DOMNode, domToReact, Element } from 'html-react-parser'
import Image from 'next/image'
import {
  ConciergeHelpBlock as ConciergeHelpBlockType,
  DetailsSectionBlock,
  FeatureSectionBlock,
  GetInTouchBlock,
  HeroWithImageBlock,
  ServicesOrganizationsConsultation,
  WhyChooseSectionBlock,
} from '../../types/organizationConsultationPage'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { ConciergeHelpItem } from '../../types/businessesConcierge'
type ConciergeHelpProps = ConciergeHelpBlockType & {
  __component: 'blocks.concierge-help'
}

// This is now a valid React component because its name starts with an uppercase letter.
const ConciergeHelpBlockComponent: React.FC<ConciergeHelpProps> = (props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-8 md:py-25 bg-Secondary-Light-Scrub">
      {/* Title + Description */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-[764px] mx-auto text-center space-y-4  px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-Primary-Black heading-lg"
        >
          {props.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-Secondary-Text text-sm md:text-base"
        >
          {props.description}
        </motion.p>
      </motion.div>

      {/* Items */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-[1392px] mx-auto w-full pt-8 md:pt-20  px-4"
      >
        <div className="flex mb-8 gap-12 justify-center items-center text-center flex-wrap">
          {/* Removed unused 'index' variable */}
          {props.list.map((li: ConciergeHelpItem) => (
            <motion.div
              key={li.id}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
type OrgConsultationBlock =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (ConciergeHelpBlockType & { __component: 'blocks.concierge-help' })
  | (DetailsSectionBlock & { __component: 'blocks.details-section' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in OrgConsultationBlock['__component']]: React.ComponentType<
    Extract<OrgConsultationBlock, { __component: K }>
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
  'blocks.concierge-help': ConciergeHelpBlockComponent,
  'blocks.details-section':
    ServiceSection as React.ComponentType<DetailsSectionBlock>,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

function Block({ block }: { block: OrgConsultationBlock }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function OrganizationConsultationPage({
  data,
}: {
  data: ServicesOrganizationsConsultation[]
}) {
  const page = data[0]
  const blocks: OrgConsultationBlock[] = page.blocks

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
