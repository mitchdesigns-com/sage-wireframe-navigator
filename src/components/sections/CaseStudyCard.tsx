'use client'

import Image from 'next/image'
import Tagline from './Tagline'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'

export interface CaseStudy {
  slug: string
  title: string
  category: string
  image: string
  description: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/resources/case-studies/${caseStudy.slug}`}
      key={caseStudy.slug}
      className="flex flex-col rounded-4xl relative"
    >
      <div className="h-[520px] w-full relative rounded-4xl overflow-hidden">
        {/* Image */}
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Content */}
        <div className="absolute bottom-0 p-8 w-full z-20">
          <Tagline text={caseStudy.category} category={caseStudy.category} />

          <h3 className="text-2xl font-bold text-white leading-snug mb-1">
            {caseStudy.title}
          </h3>

          <p className="text-white text-base pb-6">{caseStudy.description}</p>

          <Link href={`/resources/case-studies/${caseStudy.slug}`}>
            {' '}
            <div className="group flex gap-1.5 items-center justify-start rounded-[100px]  cursor-pointer">
              {' '}
              <div className="font-aeonik-bold text-Primary-Spring group-hover:text-Primary-Light-Sage text-lg leading-[1.5]">
                Read Case Study
              </div>
              <div className="bg-Primary-Spring rounded-full p-[6px] size-7 flex items-center justify-center">
                <div className="relative shrink-0 size-6">
                  <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                    <div className="flex-none group-hover:rotate-[45deg] text-Primary-Spring group-hover:text-Primary-Light-Sage transition-all duration-300">
                      <ButtonIcon strokeColor="#1E1E1E" />
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </Link>
        </div>
      </div>
    </Link>
  )
}
