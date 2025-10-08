'use client'
import Button from '@/components/ui/Button'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CareerItem,
  RichTextChild,
  RichTextElement,
} from '../../types/jobDetailsPage'
function extractText(node: RichTextChild | RichTextElement): string {
  if ('text' in node) {
    return node.text
  }
  if ('children' in node) {
    return node.children.map(extractText).join('')
  }
  return ''
}
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
        {data.content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              if (block.level === 4) {
                return (
                  <h4
                    key={index}
                    className="text-[32px] font-bold text-[#000404]"
                  >
                    {block.children.map(extractText).join('')}
                  </h4>
                )
              }
              if (block.level === 6) {
                return (
                  <h6
                    key={index}
                    className="mt-4 text-[#000404] text-p leading-relaxed"
                  >
                    {block.children.map(extractText).join('')}
                  </h6>
                )
              }
              return null

            case 'paragraph':
              if (
                !block.children.some(
                  (c) => 'text' in c && c.text?.trim()?.length > 0
                )
              )
                return null
              return (
                <p
                  key={index}
                  className="text-[#000404] text-p leading-relaxed"
                >
                  {block.children.map(extractText).join('')}
                </p>
              )

            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 space-y-2">
                  {block.children.map((li, liIndex) => {
                    // Type guard to ensure 'li' has a 'children' property
                    if ('children' in li) {
                      return (
                        <li key={liIndex} className="text-[#000404] text-p">
                          {li.children.map(extractText).join('')}
                        </li>
                      )
                    }
                    return null // Or handle RichTextChild directly if needed
                  })}
                </ul>
              )

            default:
              return null
          }
        })}
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
