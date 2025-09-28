'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import HeroPages from '@/components/sections/HeroPages'
import FeatureSection from '@/components/sections/FeatureSection'
import WhySection from '@/components/sections/WhySection'
import GetInTouch from '@/components/sections/GetInTouch'

export default function IndividualsPage({ data }: { data: any }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const blocks = data?.[0]?.blocks || []

  return (
    <div className="min-h-screen">
      {blocks.map((block: any) => {
        switch (block.__component) {
          case 'blocks.hero-pages':
            return (
              <HeroPages
                key={block.id}
                tagline={block.tagline}
                title={block.title}
                description={block.description}
                breadcrumbItems={block.breadcrumbItems}
              />
            )

          case 'blocks.feature-section':
            return (
              <FeatureSection
                key={block.id}
                tagline={block.tagline}
                title={block.title}
                description={block.description}
                features={block.features.map((f: any) => ({
                  text: f.text,
                  icon: f.icon,
                }))}
                ctaText={block.ctaText}
                href={block.href}
                image={block.image?.url}
                backgroundColor={block.backgroundColor}
                textColor={block.textColor}
                reverse={block.reverse}
              />
            )

          case 'blocks.why-section':
            return (
              <WhySection
                key={block.id}
                title={block.title}
                description={block.description}
                buttonText={block.buttonText}
                features={block.features?.map((f: any) => ({
                  type: f.type,
                  title: f.title,
                  description: f.description,
                  bgColor: f.bgColor,
                  textColor: f.textColor,
                  descColor: f.descColor,
                  image: f.image?.url || null,
                  iconElement: f.iconElement ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${f.iconElement.url}`}
                      alt={f.iconElement.alternativeText || ''}
                      width={32}
                      height={32}
                    />
                  ) : null,
                }))}
              />
            )

          case 'blocks.faq-section':
            return (
              <section key={block.id} className="py-25 bg-Secondary-Scrub">
                <div className="px-16">
                  <div className="max-w-[1392px] mx-auto">
                    <div className="max-w-[768px] mx-auto space-y-20">
                      <div className="text-center space-y-6">
                        <h2 className="text-black font-bold text-[48px]">
                          {block.title}
                        </h2>
                        <p className="text-black text-p">{block.description}</p>
                      </div>
                      <div className="border-0 border-b border-[rgba(0,4,4,0.02)]">
                        {block.faqData?.map((faq: any, index: number) => (
                          <div
                            key={faq.id}
                            className="border-t border-[rgba(0,4,4,0.02)]"
                          >
                            <button
                              className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-Secondary-Scrub transition-colors"
                              onClick={() =>
                                setOpenFaq(openFaq === index ? null : index)
                              }
                            >
                              <h3 className="text-black font-bold text-p flex-1">
                                {faq.question}
                              </h3>
                              <div
                                className={`w-8 h-8 transition-transform ${
                                  openFaq === index ? 'rotate-45' : ''
                                }`}
                              >
                                <Plus size={32} className="text-black" />
                              </div>
                            </button>
                            {openFaq === index && (
                              <div className="pb-6">
                                <p className="text-black text-base leading-[1.5]">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )

          case 'blocks.get-in-touch':
            return (
              <section key={block.id} className="bg-Secondary-Scrub">
                <GetInTouch
                  tagline={block.tagline}
                  title={block.title}
                  description={block.description}
                  image={block.image?.url}
                />
              </section>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
