'use client'

import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroWithImage from '@/components/sections/HeroWithImage'
import Tagline from '@/components/sections/Tagline'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import parse, { DOMNode, domToReact, Element } from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
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
  'blocks.how-it-works': (props: HowItWorksBlock) => (
    <section className="py-8 md:py-28 bg-Secondary-Light-Scrub">
      <div className="px-4 max-w-[1280px] mx-auto">
        <div className="text-center">
          <Tagline text={props.tagline} className="items-center" />
          <h2 className="text-[#000404] heading-lg">{props.title}</h2>
          <p className="text-[#000404] text-base md:text-p">
            {props.description}
          </p>
        </div>
        <div className="mt-10 md:mt-20 hidden md:block">
          {props.timelineSteps?.map((step, index: number) => (
            <div
              key={step.id}
              className="grid grid-cols-1 lg:grid-cols-11 items-start gap-3 mt-20"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="lg:col-span-5 pb-12">
                    <div className="aspect-square relative rounded-[40px] overflow-hidden w-full md:w-[448px] ml-auto">
                      <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
                        alt={step.image?.alternativeText || step.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="flex flex-col items-center h-full min-h-[500px]">
                      <div className="bg-Primary-Palm h-6 w-[3px]" />
                      <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                      <div className="bg-Primary-Palm flex-1 w-[3px]" />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pt-4 space-y-4">
                    <h3 className="text-[#9ABCB9] heading-1">{step.number}</h3>
                    <h4 className="text-Primary-Black heading-4">
                      {step.title}
                    </h4>
                    <p className="text-Secondary-Text text-p">
                      {step.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:col-span-5 pt-4 space-y-4 text-right">
                    <h3 className="text-[#9ABCB9] heading-1">{step.number}</h3>
                    <h4 className="text-Primary-Black heading-4">
                      {step.title}
                    </h4>
                    <p className="text-Secondary-Text text-p">
                      {step.description}
                    </p>
                    {step.button && (
                      <Link href="/contact" className="inline-block group">
                        <Button variant="primary" rightIcon fullWidth>
                          {step.button}
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="flex flex-col items-center h-full min-h-[500px]">
                      <div className="bg-Primary-Palm h-6 w-[3px]" />
                      <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                      <div className="bg-Primary-Palm flex-1 w-[3px]" />
                    </div>
                  </div>
                  <div className="lg:col-span-5 pb-12">
                    <div className="aspect-square relative rounded-[40px] overflow-hidden w-full md:w-[448px] mr-auto">
                      <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
                        alt={step.image?.alternativeText || step.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-20 md:hidden block">
          {props.timelineSteps?.map((step, index) => (
            <div
              key={step.number + index}
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
                <p className="max-w-md text-base md:text-p text-Secondary-Text">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  'blocks.cards': (props: CardsBlock) => (
    <section className="bg-Secondary-Scrub ">
      <div className="py-8 md:py-25 max-w-[1392px] mx-auto w-full px-4 md:px-0">
        <h2 className="text-Primary-Black heading-lg pb-8 md:pb-20 text-center">
          {props.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-4">
          {props.cards?.map((card) => (
            <div
              key={card.id}
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
                    <div
                      key={detail.id}
                      className="flex flex-row items-center gap-2"
                    >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
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
