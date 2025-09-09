import React from 'react'

interface Reason {
  title: string
  value: string
}

interface WhyChooseSectionProps {
  title: string
  paragraphs: string[]
  reasons: Reason[]
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  paragraphs,
  reasons,
}) => {
  return (
    <section className="py-28 bg-Secondary-Scrub">
      <div className="max-w-[1392px] mx-auto w-full flex gap-20 items-start">
        <div className="min-w-[464px] lg:sticky lg:top-26">
          <h2 className="text-Primary-Black text-[40px] font-bold ">{title}</h2>
        </div>

        <div>
          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-Secondary-Text text-base leading-[1.5]"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="border-0 bg-Secondary-Light-Scrub p-6 rounded-3xl mt-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-5 border-b border-[#D2D2D2] last:border-b-0"
              >
                <h3 className="text-Primary-Black font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                  {reason.title}
                </h3>
                <span className="text-Dark-Scrub font-medium text-base leading-[1.5]">
                  {reason.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
