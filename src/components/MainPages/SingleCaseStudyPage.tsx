'use client'
import { useState } from 'react'

import { useTranslations } from 'next-intl'
import HeroCarousel from '@/components/sections/HeroCarousel'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import Link from 'next/link'
import ButtonIcon from '@/components/svg/ButtonIcon'
import CaseStudyCard from '@/components/sections/CaseStudyCard'
import Image from 'next/image'
import GalleryPopup, { singleImage } from '@/components/sections/GalleryPopup'
import { CaseStudy } from '../../types/caseStudyPageData'

export default function SingleCaseStudyPage({
  data,
  allBlogs,
}: {
  data: CaseStudy[]
  allBlogs: CaseStudy[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  console.log(photoIndex)
  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  const galleryImages: singleImage[] = data.GallerySection.images.map(
    (url, index) => ({
      id: index,
      attributes: {
        alternativeText: `Gallery image ${index + 1}`,
        url: url.url,
      },
    })
  )

  const t = useTranslations()

  return (
    <>
      <section>
        <HeroCarousel
          title={data.HeroCarousel.title}
          description={data.HeroCarousel.description}
          breadcrumbItems={data.HeroCarousel.breadcrumbItems}
          category={data.HeroCarousel.category}
        />

        {data.FeatureSection.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
      </section>{' '}
      <section className=" bg-[#E6EEED] flex items-start py-28 flex-col">
        <div className="max-w-[1280px] mx-auto w-full gap-20 flex items-center">
          <div>
            <p className="text-base text-Primary-Palm font-medium mb-1">
              {data.ChallengeSection.ChallengeData[0]?.title}
            </p>
            <h1 className="text-[46px] font-bold text-Primary-Black leading-[1.2] tracking-[-0.48px]">
              {data.ChallengeSection.ChallengeData[0]?.description}
            </h1>
          </div>
          {data.ChallengeSection.ChallengeData.slice(1).map((item) => (
            <div key={item.id}>
              <h4 className="text-[20px] font-bold text-Primary-Palm">
                {item.title}
              </h4>
              <p className="text-base text-Primary-Black mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-28 flex justify-center max-w-[768px] mx-auto w-full">
          <div className="w-full  bg-white shadow-sm border border-transparent relative">
            <div className="absolute -top-1 left-0 right-0 mx-auto h-1 bg-Primary-Palm" />

            <div className="px-10 ">
              {data.ChallengeSection.content && (
                <div className="mx-auto max-w-[1448px] py-10 md:py-20 md:px-4 px-4 space-y-6">
                  {data.ChallengeSection.content.map((block, index: number) => {
                    switch (block.type) {
                      case 'heading':
                        if (block.level === 4) {
                          return (
                            <h4
                              key={index}
                              className="text-[32px] font-bold text-[#000404] mb-4"
                            >
                              {block.children.map((c) => c.text).join('')}
                            </h4>
                          )
                        }
                        if (block.level === 6) {
                          return (
                            <h6
                              key={index}
                              className="mt-4 text-[#000404] text-p leading-relaxed"
                            >
                              {block.children.map((c) => c.text).join('')}
                            </h6>
                          )
                        }
                        return null

                      case 'paragraph':
                        // skip empty paragraphs
                        if (!block.children?.[0]?.text?.trim()) return null
                        return (
                          <p
                            key={index}
                            className="text-p text-[#000404] leading-relaxed"
                          >
                            {block.children.map((c) => c.text).join('')}
                          </p>
                        )

                      case 'list':
                        return (
                          <ul key={index} className="list-disc pl-6 space-y-2">
                            {block.children.map((li, liIndex: number) => (
                              <li
                                key={liIndex}
                                className="text-[#000404] text-p"
                              >
                                {li.children.map((c) => c.text).join('')}
                              </li>
                            ))}
                          </ul>
                        )

                      default:
                        return null
                    }
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-Secondary-Dark-Palm text-white">
        <div className="py-25 max-w-[1392px] mx-auto ">
          <div className="text-center pb-20">
            <h3 className=" font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
              {data.GallerySection.title}
            </h3>
            <p className="text-p">{data.GallerySection.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1 row-span-2">
              <div className="relative w-full aspect-square">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.GallerySection.images[0].url}`}
                  fill
                  alt="Gallery"
                  className="object-cover cursor-pointer rounded-4xl"
                  onClick={() => openLightbox(0)}
                />
              </div>
            </div>

            <div className="grid grid-rows-2 grid-cols-2 gap-8">
              {data.GallerySection.images.slice(1, 5).map((img, i) => (
                <div
                  className="relative w-full aspect-square"
                  key={i}
                  onClick={() => openLightbox(i + 1)}
                >
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${img.url}`}
                    alt="Gallery"
                    className="w-full h-full object-cover cursor-pointer rounded-4xl"
                  />

                  {i === data.GallerySection.images.slice(1, 5).length - 1 && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white text-xl font-medium rounded-4xl flex-col cursor-pointer">
                      <span className="font-bold text-[32px]">
                        +{data.GallerySection.images.length - 5}
                      </span>{' '}
                      <p>more</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {isOpen && (
              <GalleryPopup
                onClickHandle={() => setIsOpen(false)}
                Images={galleryImages}
              />
            )}
          </div>
        </div>
      </div>
      <section className="bg-Secondary-Light-Scrub">
        <div className="py-20 max-w-[1390px] mx-auto w-full">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('News.caseStudy')}
            </h4>
            <div className="flex ">
              <Link href={'/resources/case-studies'}>
                {' '}
                <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                  {' '}
                  <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                    {t('Blog.viewAll')}
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
                </div>{' '}
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 pt-15">
            {allBlogs.slice(0, 2).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data.GetInTouch} />
      </section>
    </>
  )
}
