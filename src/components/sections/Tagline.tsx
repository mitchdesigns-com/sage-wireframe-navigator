import React from 'react'

interface TaglineProps {
  text?: string
  className?: string
}

const Tagline: React.FC<TaglineProps> = ({ text, className }) => {
  if (!text) return null

  return (
    <div
      className={`flex flex-col  justify-start pb-1 w-full ${className || 'items-start'}`}
    >
      <div className="flex h-[34.788px] items-center justify-center">
        <div className="transform rotate-[-6deg]">
          <div className="bg-Primary-Spring px-1.5 py-0 rounded-[6px] text-Primary-Black">
            <div className="font-aeonik-medium text-Primary-Black text-base text-center leading-[1.5] text-nowrap">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tagline
