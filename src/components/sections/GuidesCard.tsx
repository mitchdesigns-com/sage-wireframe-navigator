'use client'

import Image from 'next/image'
import DownloadIcon from '../svg/DownloadIcon'
import Button from '../ui/Button'

export interface Guide {
  id: number
  title: string
  category: string
  image: {
    url: string
    alternativeText: string
  }
  author: string
  date: string
  readTime: string
  description: string
}

interface GuidesCardProps {
  guide: Guide
}

export default function GuidesCard({ guide }: GuidesCardProps) {
  return (
    <div key={guide.id} className="flex flex-col bg-white rounded-4xl">
      <div className="h-[293px] w-full relative rounded-t-4xl overflow-hidden ">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${guide.image.url}`}
          alt={guide.image.alternativeText || guide.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-4 items-center">
          {' '}
          <span
            className={`text-sm px-2 py-1 rounded-[4px] ${guide.category === 'individuals' ? 'bg-Primary-Scrub text-Secondary-Light-Scrub' : guide.category === 'businesses' ? 'bg-Primary-Spring text-Secondary-Dark-Palm' : 'bg-Dark-Scrub text-white'} font-medium`}
          >
            {guide.category}
          </span>{' '}
          <p className="text-sm font-medium text-Secondary-Text">
            {guide.readTime}
          </p>
        </div>
        <h3 className="text-[20px] font-bold text-Primary-Black leading-snug mt-4 mb-2">
          {guide.title}
        </h3>
        <p className="text-Secondary-Text text-base pb-6">
          {guide.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="w-fit">
            <Button
              variant="light-link"
              className="p-0 text-Primary-Palm font-bold text-[18px] cursor-pointer"
            >
              <div className="flex items-center gap-[2px]">
                <DownloadIcon color="#025850" />
                <span className="hover:text-Primary-Black hover:ps-1 hover:transition-all duration-300 hover:duration-300">
                  Download PDF
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
