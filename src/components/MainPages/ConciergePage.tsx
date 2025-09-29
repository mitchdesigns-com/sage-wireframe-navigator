'use client'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import parse, { domToReact } from 'html-react-parser'

const BLOCKS: Record<string, React.ComponentType<any>> = {
  'blocks.hero-with-image': (props: any) => (
    <HeroWithImage
      {...props}
      title={parse(props.title, {
        replace: (domNode: any) => {
          if (domNode.name === 'span') {
            return (
              <span className="font-bold text-Primary-Scrub text-nowrap">
                {domToReact(domNode.children)}
              </span>
            )
          }
        },
      })}
    />
  ),
  'blocks.why-choose-section': (props: any) => (
    <WhyChooseSection
      {...props}
      paragraphs={props.paragraphs?.map((p: any) => p.paragraph)}
    />
  ),
  'blocks.feature-section': FeatureSection,
  'blocks.details-section': (props: any) => (
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
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${props.image?.url}`}
            alt={props.image?.alternativeText || 'Culturally Sensitive Care'}
            className="rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  ),
  'blocks.get-in-touch': GetInTouch,
}

export default function ConciergePage({ data }: { data: any }) {
  const page = data[0]
  const blocks = page.blocks

  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#E2F2F1]">
      {blocks.map((block: any, index: number) => {
        const Component = BLOCKS[block.__component]
        if (!Component) {
          console.warn(`Unknown block component: ${block.__component}`)
          return null
        }
        return (
          <Component
            key={`${block.__component}-${block.id || index}`}
            {...block}
          />
        )
      })}
    </div>
  )
}
