'use client'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import Tagline from '@/components/sections/Tagline'
import GetInTouch from '@/components/sections/GetInTouch'
import parse, { domToReact, DOMNode, Element } from 'html-react-parser'
import Link from 'next/link'
import Button from '../ui/Button'
import DownloadIcon from '../svg/DownloadIcon'
import {
  IndividualHealthcareBlock,
  IndividualHealthcarePageResponse,
  HeroWithImageBlock,
  WhyChooseSectionBlock,
  FeatureSectionBlock,
  HowItWorksBlock,
  CardsBlock,
  GetInTouchBlock,
} from '../../types/individualHealthcareServices'

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
    <section className="py-28 bg-Secondary-Light-Scrub">
      <div className="px-16 max-w-[1280px] mx-auto">
        <div className="text-center">
          <Tagline text={props.tagline} className="items-center" />
          <h2 className="text-[#000404] heading-lg">{props.title}</h2>
          <p className="text-[#000404] text-p">{props.description}</p>
        </div>
        <div className="mt-20">
          {props.timelineSteps?.map((step, index: number) => (
            <div
              key={step.id}
              className="grid grid-cols-1 lg:grid-cols-11 items-start gap-3 mt-20"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="lg:col-span-5 pb-12">
                    <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] ml-auto">
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
                    <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] mr-auto">
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
      </div>
    </section>
  ),
  'blocks.cards': (props: CardsBlock) => (
    <section className="bg-Secondary-Scrub py-25 max-w-[1392px] mx-auto w-full">
      <h2 className="text-Primary-Black heading-lg pb-20 text-center">
        {props.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
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
            <h6 className="text-Primary-Black font-bold text-[20px] mt-1">
              {card.title}
            </h6>
            <p className="text-Secondary-Text text-base pb-4">
              {card.description}
            </p>
            <div className="border-t border-[#D2D2D2] text-Dark-Scrub text-xs font-medium flex justify-between pt-4 pb-5">
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
  data: IndividualHealthcarePageResponse
}) {
  const page = data.data[0]
  const blocks: IndividualHealthcareBlock[] = page.blocks

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
