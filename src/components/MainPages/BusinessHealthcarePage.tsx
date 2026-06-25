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
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Image from 'next/image'
import Tagline from '@/components/sections/Tagline'
import DownloadIcon from '../svg/DownloadIcon'
import { CardsBlock } from '../../types/individualHealthcareServices'
import { Card } from '../../components/MainPages/HealthcareServicesPage'
const CardsBlockComponent: React.FC<CardsBlock> = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <>
      {props.cards && props.cards.length > 0 && (
        <section className="bg-Secondary-Scrub " id="cards">
          <div className="py-8 md:py-25 max-w-[1392px] mx-auto w-full  px-4">
            <motion.h2
              ref={titleRef}
              initial={{ opacity: 0, y: 50 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-Primary-Black heading-lg pb-8 md:pb-20 text-center"
            >
              {props.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-4">
              {props.cards?.map((card) => (
                <CardComponent key={card.id} card={card} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-5 flex flex-col relative"
    >
      {card.Tagline && (
        <div className="absolute -top-3 right-5">
          <Tagline text={card.Tagline} />
        </div>
      )}
      <div className="bg-Secondary-Scrub rounded-full p-2 w-fit">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${card.icon?.url}`}
          alt={card.icon?.alternativeText || card.title}
          width={40}
          height={40}
        />
      </div>
      <div className="type bg-Primary-Scrub px-[6px] text-sm font-medium w-fit rounded-[4px] text-white mt-4">
        {card.type}
      </div>
      <h6 className="text-Primary-Black font-bold text-lg md:text-[20px] my-1">
        {card.title}
      </h6>
      <p className="text-Secondary-Text text-sm md:text-base pb-4">
        {card.description}
      </p>
      <div className="border-t border-[#D2D2D2] text-Dark-Scrub text-[10px] md:text-xs font-medium flex justify-between pt-4 pb-5 flex-col md:flex-row">
        <p>{card.provider}</p>
        <div className="flex gap-2">
          {card.details?.map((detail, i: number) => (
            <div key={detail.id} className="flex flex-row items-center gap-2">
              <span>{detail.paragraph}</span>
              {i < card.details.length - 1 && (
                <div className="w-[5px] h-[5px] bg-Primary-Scrub rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
      {card.buttonText && (
        <div className="w-fit">
          <Button variant="primary">
            <div className="flex items-center gap-2">
              <DownloadIcon />
              <span>{card.buttonText}</span>
            </div>
          </Button>
        </div>
      )}
    </motion.div>
  )
}
type BusinessConciergeBlockPage =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (CentersSectionBlock & { __component: 'blocks.centers-section-data' })
  | (DetailsSectionBlock & { __component: 'blocks.details-section' })
  | (CardsBlock & { __component: 'blocks.cards' })
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
  'blocks.cards': CardsBlockComponent,
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
