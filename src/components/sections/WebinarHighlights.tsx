'use client'

import React from 'react'

interface HighlightItem {
  title: string
  description: string
  bgColor: string
  textColor: string
  descColor: string
}

interface WebinarHighlightsProps {
  highlights: HighlightItem[]
}

export default function WebinarHighlights({
  highlights,
}: WebinarHighlightsProps) {
  return (
    <div className="bg-Secondary-Scrub">
      <div className=" mx-auto max-w-[1392px] py-28">
        <h2 className="text-[40px] font-bold text-center pb-20">
          Webinar Highlights
        </h2>
        <div className="flex gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col pt-10 px-5 rounded-4xl w-1/4 h-[380px] ${item.bgColor}`}
            >
              <h3
                className={`text-2xl font-bold mb-4 leading-snug ${item.textColor}`}
              >
                {item.title}
              </h3>
              <p className={`text-base leading-relaxed ${item.descColor}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
