import React from 'react'

interface Reason {
  title: string
  value: string
}

interface WhyChooseSectionProps {
  title: string
  paragraphs: string[]
  reasons?: Reason[]
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  paragraphs,
  reasons,
}) => {
  return (
    <section className="py-8 md:py-28 bg-Secondary-Scrub">
      <div className="max-w-[1392px] mx-auto w-full flex gap-8 md:gap-20 items-start flex-col md:flex-row px-4 md:px-0">
        <div className="md:min-w-[464px] lg:sticky lg:top-26">
          <h2 className="text-Primary-Black text-[28px] md:text-[40px] font-bold ">
            {title}
          </h2>
        </div>

        <div className="w-full">
          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-Secondary-Text text-sm md:text-base leading-[1.5]"
              >
                {text}
              </p>
            ))}
          </div>
          {reasons && reasons.length > 0 && (
            <div className="border-0 bg-Secondary-Light-Scrub p-6 rounded-3xl mt-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-5 border-b border-[#D2D2D2] last:border-b-0"
                >
                  <h3 className="text-Primary-Black font-bold text-lg md:text-[20px] leading-[1.4] tracking-[-0.2px] ">
                    {reason.title}
                  </h3>
                  <span className="text-Dark-Scrub font-medium text-sm md:text-base leading-[1.5] text-nowrap">
                    {reason.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
