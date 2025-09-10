import React from 'react'

interface TaglineProps {
  text?: string
  className?: string
  taglineColor?: string
}

const Tagline: React.FC<TaglineProps> = ({ text, className, taglineColor }) => {
  if (!text) return null

  return (
    <div
      className={`flex flex-col  justify-start pb-1 w-full ${className || 'items-start'}`}
    >
      <div className="flex h-[34.788px] items-center justify-center">
        <div className="transform rotate-[-6deg]">
          <div
            className={`${taglineColor === '#DAF7AF' ? 'bg-Primary-Scrub text-white' : 'bg-Primary-Spring text-Primary-Black'}  px-1.5 py-0 rounded-[6px] `}
          >
            <div
              className={`${taglineColor === '#DAF7AF' ? 'text-white' : 'text-Primary-Black'} font-aeonik-medium  text-base text-center leading-[1.5] text-nowrap`}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tagline
