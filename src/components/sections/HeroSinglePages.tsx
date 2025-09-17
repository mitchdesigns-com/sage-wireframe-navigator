import React from 'react'
import Breadcrumb from './Breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage?: string
  author?: string
  date?: string
  readTime?: string
  button?: string
  href: string
}

const HeroSinglePages: React.FC<HeroProps> = ({
  title,
  breadcrumbItems,
  bgImage,
  author,
  date,
  readTime,
  button,
  href,
}) => {
  return (
    <section
      className={`pb-20 pt-10  bg-gradient-to-t from-[#013530] to-[#025850]`}
    >
      <div className="px-16">
        <div className="max-w-[1392px] mx-auto">
          <div className="grid grid-cols-1">
            <div className="pb-16">
              <Breadcrumb items={breadcrumbItems} heroPages />
            </div>
            <div className="flex pb-12">
              {' '}
              <ChevronLeft className="text-white" />{' '}
              <Link
                href={href}
                className="text-[#F2F2F2] font-medium text-base ps-2"
              >
                {button}
              </Link>
            </div>
            <h1 className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.56px] pb-20">
              {title}
            </h1>
          </div>
          {bgImage && (
            <div className="rounded-3xl aspect-[1390/600] relative w-full">
              <Image
                src={bgImage}
                alt="scr header"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          )}
          <div className="space-x-12 pt-8 flex">
            <div>
              <h4 className="font-base text-white">Author</h4>
              <p className="text-white font-medium ">{author}</p>
            </div>
            <div>
              <h4 className="font-base text-white">Published on</h4>
              <p className="text-white font-medium ">{date}</p>
            </div>
            <div>
              <h4 className="font-base text-white">Reading Duration</h4>
              <p className="text-white font-medium ">{readTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSinglePages
