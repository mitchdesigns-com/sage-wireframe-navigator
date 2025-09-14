import React from 'react'

interface TaglineProps {
  text?: string
  className?: string
  taglineColor?: string
  category?: string
}

const Tagline: React.FC<TaglineProps> = ({
  text,
  className,
  taglineColor,
  category,
}) => {
  if (!text) return null
  const categoryClasses =
    category === 'individuals'
      ? 'bg-[#6CBEB8] text-[#F0F8F8]'
      : category === 'organizations'
        ? 'bg-[#569893] text-white'
        : 'bg-Primary-Spring text-Primary-Black'

  const taglineClasses =
    taglineColor === '#DAF7AF'
      ? 'bg-Primary-Scrub text-white'
      : taglineColor === '#569893'
        ? 'bg-[#569893] text-white'
        : taglineColor === '#1E1E1E'
          ? 'bg-Primary-Black text-[#CAF48E]'
          : 'bg-Primary-Spring text-Primary-Black'

  const finalClasses = taglineColor ? taglineClasses : categoryClasses
  return (
    <div
      className={`flex flex-col  justify-start pb-1 w-full ${className || 'items-start'}`}
    >
      <div className="flex h-[34.788px] items-center justify-center">
        <div className="transform rotate-[-6deg]">
          <div className={`${finalClasses} px-1.5 py-0 rounded-[6px] `}>
            <div
              className={` font-aeonik-medium  text-base text-center leading-[1.5] text-nowrap`}
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
