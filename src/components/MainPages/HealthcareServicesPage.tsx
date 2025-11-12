'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import Tagline from '@/components/sections/Tagline'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import { motion } from 'framer-motion'
import parse, { DOMNode, domToReact, Element } from 'html-react-parser'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import {
  CardsBlock,
  FeatureSectionBlock,
  GetInTouchBlock,
  HeroWithImageBlock,
  HowItWorksBlock,
  // IndividualHealthcareBlock,
  IndividualHealthcarePage,
  WhyChooseSectionBlock,
} from '../../types/individualHealthcareServices'
import DownloadIcon from '../svg/DownloadIcon'
import Button from '../ui/Button'

export interface Media {
  url: string
  alternativeText: string | null
}

export interface TimelineStep {
  id: number
  number: string
  title: string
  description: string
  image: Media
  button?: string | null
}

export interface Detail {
  id: number
  paragraph: string
}

export interface Card {
  id: number
  Tagline?: string | null
  icon: Media
  type: string
  title: string
  description: string
  provider: string
  details: Detail[]
  buttonText?: string | null
}

const TimelineStepComponent: React.FC<{
  step: TimelineStep
  index: number
  locale: string
}> = ({ step, index, locale }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const isEven = index % 2 === 0

  const imageContent = (
    <div className="lg:col-span-5 pb-12">
      <div
        className={`aspect-square relative rounded-[40px] overflow-hidden w-full md:w-[448px] ${isEven ? 'ml-auto' : 'mr-auto'}`}
      >
        <Image
          fill
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
          alt={step.image?.alternativeText || step.title}
          className="object-cover"
        />
      </div>
    </div>
  )

  const textContent = (
    <div
      className={`lg:col-span-5 pt-4 space-y-4 ${!isEven ? 'text-right' : ''}`}
    >
      <h3 className="text-[#9ABCB9] heading-1">{step.number}</h3>
      <h4 className="text-Primary-Black heading-4">{step.title}</h4>
      <p className="text-Secondary-Text text-lg">{step.description}</p>
      {step.button && (
        <Link href="/contact" className="inline-block group">
          <Button
            variant="primary"
            righticon={true}
            fullwidth
            locale={locale as 'en' | 'ar'}
          >
            {step.button}
          </Button>
        </Link>
      )}
    </div>
  )

  const middleLine = (
    <div className="lg:col-span-1 flex justify-center">
      <div className="flex flex-col items-center h-full min-h-[500px]">
        <div className="bg-Primary-Palm h-6 w-[3px]" />
        <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
        <div className="bg-Primary-Palm flex-1 w-[3px]" />
      </div>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
      className="grid grid-cols-1 lg:grid-cols-11 items-start gap-3 mt-20"
    >
      {isEven ? (
        <>
          {imageContent}
          {middleLine}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {middleLine}
          {imageContent}
        </>
      )}
    </motion.div>
  )
}

const MobileTimelineStepComponent: React.FC<{
  step: TimelineStep
  index: number
}> = ({ step, index }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      key={step.number + index}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
      className="relative flex items-start "
    >
      <div className="lg:col-span-1 flex justify-center">
        <div className="flex flex-col items-center h-full min-h-[532px]">
          <div className="bg-Primary-Palm h-6 w-[3px]" />
          <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
          <div className="bg-Primary-Palm flex-1 w-[3px]" />
        </div>
      </div>
      <div className="ml-8 pb-0 space-y-4 mt-4">
        <div className="aspect-square relative rounded-[40px] overflow-hidden w-full md:w-[448px] ml-auto">
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
            alt={step.image?.alternativeText || step.title}
            className="object-cover"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-[#9ABCB9] text-[40px] font-bold md:heading-1">
            {step.number}
          </h4>
        </div>
        <h3 className="mb-2 heading-4">{step.title}</h3>
        <p className="max-w-md text-base md:text-lg text-Secondary-Text">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

const HowItWorksComponent: React.FC<HowItWorksBlock> = (props) => {
  const locale = useLocale()

  return (
    <section className="py-8 md:py-28 bg-Secondary-Light-Scrub">
      <div className="px-4 max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
          className="text-center"
        >
          <Tagline text={props.tagline} className="items-center" />
          <h2 className="text-[#000404] heading-lg">{props.title}</h2>
          <p className="text-[#000404] text-base md:text-lg">
            {props.description}
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="mt-10 md:mt-20 hidden md:block">
          {props.timelineSteps?.map((step, index) => (
            <TimelineStepComponent
              key={step.id}
              step={step}
              index={index}
              locale={locale}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="mt-10 md:mt-20 md:hidden block">
          {props.timelineSteps?.map((step, index) => (
            <MobileTimelineStepComponent
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
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

const CardsBlockComponent: React.FC<CardsBlock> = (props) => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section className="bg-Secondary-Scrub ">
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
  )
}

type IndividualHealthcareBlock =
  | (HeroWithImageBlock & { __component: 'blocks.hero-with-image' })
  | (WhyChooseSectionBlock & { __component: 'blocks.why-choose-section' })
  | (FeatureSectionBlock & { __component: 'blocks.feature-section' })
  | (HowItWorksBlock & { __component: 'blocks.how-it-works' })
  | (CardsBlock & { __component: 'blocks.cards' })
  | (GetInTouchBlock & { __component: 'blocks.get-in-touch' })

const BLOCKS: {
  [K in IndividualHealthcareBlock['__component']]: React.ComponentType<
    Extract<IndividualHealthcareBlock, { __component: K }>
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
  'blocks.how-it-works': HowItWorksComponent,

  'blocks.cards': CardsBlockComponent,
  'blocks.get-in-touch': GetInTouch as React.ComponentType<GetInTouchBlock>,
}

function Block({ block }: { block: IndividualHealthcareBlock }) {
  const Component = BLOCKS[block.__component]

  if (!Component) {
    console.warn(`Unknown block component: ${block.__component}`)
    return null
  }

  const TypedComponent = Component as React.ComponentType<typeof block>
  return <TypedComponent {...block} />
}

export default function HealthcareServicesPage({
  data,
}: {
  data: IndividualHealthcarePage[]
}) {
  const page = data[0]
  const blocks: IndividualHealthcareBlock[] =
    page.blocks as IndividualHealthcareBlock[]
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
