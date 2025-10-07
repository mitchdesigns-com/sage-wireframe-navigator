'use client'
import { useState } from 'react'
import { MinusIcon, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'
import { CareerItem } from '../../types/careersPageData'

export default function AccordionJobs({ data }: { data: CareerItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  return (
    <div className="mx-auto">
      {data.map((job, index) => {
        const tagsArray = job.tags
          ? job.tags
              .replace(/'/g, '')
              .split(',')
              .map((tag) => tag.trim())
          : []

        const descriptionBlock = job.content.find(
          (block) => block.type === 'paragraph' && block.children[0]?.text
        )
        const description = descriptionBlock?.children[0]?.text || ''

        return (
          <div
            key={job.documentId}
            className="overflow-hidden border-b border-[#00040426]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center p-5 ps-0 cursor-pointer"
            >
              <span className="text-[32px] font-bold">
                {job.career_type?.title || job.title}
              </span>
              <span className="text-xl">
                {openIndex === index ? <MinusIcon /> : <ChevronDown />}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-4 rounded-[40px] bg-white mb-8">
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <Link href={`/careers/${job.slug}`}>
                      <div className="group flex gap-1.5 items-center justify-start rounded-[100px] cursor-pointer">
                        <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                          View Details
                        </div>
                        <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                          <div className="relative shrink-0 size-6">
                            <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                              <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                                <ButtonIcon strokeColor="white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="text-base font-medium text-Primary-Palm mb-6 flex gap-4">
                    {tagsArray.map((tag, i) => (
                      <span key={i} className="flex items-center gap-4">
                        {tag}
                        {i < tagsArray.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-Secondary-Text max-w-[768px]">
                    {description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
