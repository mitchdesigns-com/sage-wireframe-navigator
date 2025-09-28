'use client'

import Image from 'next/image'
import HeroWithImage from '@/components/sections/HeroWithImage'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import FeatureSection from '@/components/sections/FeatureSection'
import Tagline from '@/components/sections/Tagline'

import GetInTouch from '@/components/sections/GetInTouch'
import Link from 'next/link'
import Button from '../ui/Button'
import DownloadIcon from '../svg/DownloadIcon'

export default function HealthcareServicesPage({ data }: { data: any }) {
  const page = data[0]
  const blocks = page.blocks

  return (
    <div className="min-h-screen bg-[#E2F2F1]">
      {blocks.map((block: any) => {
        switch (block.__component) {
          case 'blocks.hero-with-image':
            return (
              <HeroWithImage
                key={block.id}
                image={block.image?.url}
                breadcrumbItems={block.breadcrumbItems}
                tagline={block.tagline}
                title={
                  <span dangerouslySetInnerHTML={{ __html: block.title }} />
                }
                description={block.description}
                primaryButton={block.primaryButton}
                secondaryButton={block.secondaryButton}
              />
            )

          case 'blocks.why-choose-section':
            return (
              <WhyChooseSection
                key={block.paragraphs.map((p: any) => p.id)}
                title={block.title}
                paragraphs={block.paragraphs.map((p: any) => p.paragraph)}
                reasons={block.reasons}
              />
            )

          case 'blocks.feature-section':
            return (
              <FeatureSection
                key={block.id}
                title={block.title}
                description={block.description}
                features={block.features.map((f: any) => ({
                  text: f.text,
                  icon: f.icon,
                }))}
                list={block.list.map((f: any) => ({
                  title: f.title,
                  description: f.description,
                  theme: f.theme,
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

          case 'blocks.how-it-works':
            return (
              <section
                key={block.id}
                className="py-28 bg-Secondary-Light-Scrub"
              >
                <div className="px-16 max-w-[1280px] mx-auto">
                  <div className="text-center">
                    <Tagline text={block.tagline} className="items-center" />
                    <h2 className="text-[#000404] heading-lg">{block.title}</h2>
                    <p className="text-[#000404] text-p">{block.description}</p>
                  </div>
                  <div className="mt-20">
                    <div className="space-y-0 mt-20">
                      {block.timelineSteps.map((step: any, index: number) => (
                        <div
                          key={step.id}
                          className="grid grid-cols-1 lg:grid-cols-11 items-start gap-3"
                        >
                          {index % 2 === 0 ? (
                            <>
                              {/* Image on Left */}
                              <div className="lg:col-span-5 pb-12">
                                <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] ml-auto">
                                  <Image
                                    fill
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
                                    alt={
                                      step.image?.alternativeText || step.title
                                    }
                                    className="object-cover"
                                  />
                                </div>
                              </div>

                              {/* Timeline Line */}
                              <div className="lg:col-span-1 flex justify-center">
                                <div className="flex flex-col items-center h-full min-h-[500px]">
                                  <div className="bg-Primary-Palm h-6 w-[3px]" />
                                  <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                                  <div className="bg-Primary-Palm flex-1 w-[3px]" />
                                </div>
                              </div>

                              {/* Content on Right */}
                              <div className="lg:col-span-5 pt-4 space-y-4">
                                <div className="space-y-4">
                                  <h3 className="text-[#9ABCB9] heading-1">
                                    {step.number}
                                  </h3>
                                  <h4 className="text-Primary-Black heading-4">
                                    {step.title}
                                  </h4>
                                </div>
                                <p className="text-Secondary-Text text-p">
                                  {step.description}
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Content on Left */}
                              <div className="lg:col-span-5 pt-4 space-y-4 text-right">
                                <div className="space-y-4">
                                  <h3 className="text-[#9ABCB9] heading-1">
                                    {step.number}
                                  </h3>
                                  <h4 className="text-Primary-Black heading-4">
                                    {step.title}
                                  </h4>
                                </div>
                                <p className="text-Secondary-Text text-p">
                                  {step.description}
                                </p>

                                {step.button && (
                                  <Link
                                    href={'/contact'}
                                    className="inline-block group"
                                  >
                                    <Button
                                      variant="primary"
                                      rightIcon={true}
                                      fullWidth
                                    >
                                      {step.button}
                                    </Button>
                                  </Link>
                                )}
                              </div>

                              {/* Timeline Line */}
                              <div className="lg:col-span-1 flex justify-center">
                                <div className="flex flex-col items-center h-full min-h-[500px]">
                                  <div className="bg-Primary-Palm h-6 w-[3px]" />
                                  <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                                  <div className="bg-Primary-Palm flex-1 w-[3px]" />
                                </div>
                              </div>

                              {/* Image on Right */}
                              <div className="lg:col-span-5 pb-12">
                                <div className="aspect-square relative rounded-[40px] overflow-hidden w-[448px] mr-auto">
                                  <Image
                                    fill
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${step.image?.url}`}
                                    alt={
                                      step.image?.alternativeText || step.title
                                    }
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )

          case 'blocks.cards':
            return (
              <section
                key={block.cards.map((c: any) => c.id)}
                className="bg-Secondary-Scrub py-25 max-w-[1392px] mx-auto w-full"
              >
                <h2 className="text-Primary-Black heading-lg pb-20 text-center">
                  {block.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                  {block.cards.map((card: any) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-3xl p-5 flex flex-col relative"
                    >
                      {/* Tagline (if provided in API) */}
                      {card.Tagline && (
                        <div className="absolute -top-3 right-5">
                          <Tagline text={card.Tagline} />
                        </div>
                      )}

                      {/* Icon */}
                      <div className="bg-Secondary-Scrub rounded-full p-2 w-fit">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${card.icon?.url}`}
                          alt={card.icon?.alternativeText || card.title}
                          width={40}
                          height={40}
                        />
                      </div>

                      {/* Type */}
                      <div className="type bg-Primary-Scrub px-[6px] text-sm font-medium w-fit rounded-[4px] text-white mt-4">
                        {card.type}
                      </div>

                      {/* Title */}
                      <h6 className="text-Primary-Black font-bold text-[20px] mt-1">
                        {card.title}
                      </h6>

                      {/* Description */}
                      <p className="text-Secondary-Text text-base pb-4">
                        {card.description}
                      </p>

                      {/* Provider + Details */}
                      <div className="border-t border-[#D2D2D2] text-Dark-Scrub text-xs font-medium flex justify-between pt-4 pb-5">
                        <p>{card.provider}</p>

                        {/* Details with dots between */}
                        <div className="flex gap-2">
                          {card.details?.map((detail: any, i: number) => (
                            <div
                              key={detail.id}
                              className="flex flex-row items-center gap-2"
                            >
                              <span>{detail.paragraph}</span>
                              {i < card.details.length - 1 && (
                                <div className="w-[5px] h-[5px] bg-Primary-Scrub rounded-full" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Button */}
                      {card.buttonText && (
                        <div className="w-fit">
                          <Button variant="primary">
                            <div className="flex items-center gap-2">
                              <DownloadIcon />
                              <span>{card.buttonText}</span>
                            </div>
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )

          case 'blocks.get-in-touch':
            return (
              <GetInTouch
                key={block.id}
                tagline={block.tagline}
                title={block.title}
                description={block.description}
                image={block.image?.url}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
