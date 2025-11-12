'use client'

import React from 'react'

interface HighlightItem {
  id: number
  title: string
  description: string
  bgColor: string
  textColor: string
  descColor: string
}

interface WebinarHighlightsProps {
  title: string
  highlights: HighlightItem[]
}

export default function WebinarHighlights({
  title,
  highlights,
}: WebinarHighlightsProps) {
  return (
    <div className="bg-Secondary-Scrub">
      <div className="mx-auto max-w-[1392px] py-8 md:py-28  px-4">
        <h2 className="text-[32px] md:text-[40px] font-bold text-center pb-8 md:pb-20">
          {title}
        </h2>
        <div className="flex gap-4 flex-col md:flex-row">
          {highlights.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col pt-10 px-5 rounded-4xl w-full md:w-1/4 h-[380px] ${item.bgColor}`}
            >
              <h3
                className={`text-[20px] text-2xl font-bold mb-4 leading-snug ${item.textColor}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed text-Secondary-Scrub ${item.descColor}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
