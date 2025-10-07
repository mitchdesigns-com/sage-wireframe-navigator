'use client'
import Button from '@/components/ui/Button'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CareerItem } from '../../types/jobDetailsPage'

export default function JobDetailsPage({ data }: { data: CareerItem }) {
  const tagsArray = data.tags
    ? data.tags
        .replace(/'/g, '')
        .split(',')
        .map((tag) => tag.trim())
    : []
  return (
    <section>
      <div className="h-[387px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.image.url}`}
          fill
          alt={data.image.alternativeText}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/70 text-white px-2 py-3"></div>
        <div className="flex justify-center items-center w-full h-full flex-col absolute">
          <div className="flex ">
            {' '}
            <ChevronLeft className="text-white" />{' '}
            <Link
              href="/careers"
              className="text-[#F2F2F2] font-medium text-base ps-2"
            >
              All Jobs
            </Link>
          </div>
          <h1 className="heading-1 font-bold mt-6 text-white">{data.title}</h1>
          <div className="flex gap-4 mt-6 text-[#F2F2F2] font-medium text-base ">
            {tagsArray.map((tag, i) => (
              <span key={i} className="flex items-center gap-4 ">
                {tag}
                {i < data.tags.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>{' '}
      <div className="max-w-[768px] mx-auto py-15">
        {' '}
        {data.content && (
          <div className="mx-auto max-w-[1448px] py-10 md:py-20 md:px-4 px-4 space-y-6">
            {data.content.map((block, index: number) => {
              switch (block.type) {
                case 'heading':
                  if (block.level === 4) {
                    return (
                      <h4
                        key={index}
                        className="text-[32px] font-bold text-[#000404]"
                      >
                        {block.children.map((c) => c.text).join('')}
                      </h4>
                    )
                  }
                  if (block.level === 6) {
                    return (
                      <h6
                        key={index}
                        className="mt-4 text-[#000404] text-p leading-relaxed"
                      >
                        {block.children.map((c) => c.text).join('')}
                      </h6>
                    )
                  }
                  return null

                case 'paragraph':
                  // skip empty paragraphs
                  if (!block.children?.[0]?.text?.trim()) return null
                  return (
                    <p
                      key={index}
                      className="text-[#000404] text-p leading-relaxed"
                    >
                      {block.children.map((c) => c.text).join('')}
                    </p>
                  )

                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2">
                      {block.children.map((li, liIndex: number) => (
                        <li key={liIndex} className="text-[#000404] text-p">
                          {li.children.map((c) => c.text).join('')}
                        </li>
                      ))}
                    </ul>
                  )

                default:
                  return null
              }
            })}
          </div>
        )}
        <Link
          href={'/contact'}
          className="inline-block bg-primary text-white rounded-lg font-medium group cursor-pointer pt-6"
        >
          <Button variant={'primary'} rightIcon={true} fullWidth>
            Apply On This Job
          </Button>
        </Link>
      </div>
    </section>
  )
}
