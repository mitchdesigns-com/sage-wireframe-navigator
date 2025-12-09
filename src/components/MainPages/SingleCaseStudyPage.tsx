'use client'
import { useState } from 'react'

import CaseStudyCard from '@/components/sections/CaseStudyCard'
import FeatureSection from '@/components/sections/FeatureSection'
import GalleryPopup, { singleImage } from '@/components/sections/GalleryPopup'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroCarousel from '@/components/sections/HeroCarousel'
import ButtonIcon from '@/components/svg/ButtonIcon'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {
  CaseStudy,
  ChallengeContentItem,
  ChallengeTextNode,
} from '../../types/caseStudyPageData'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
}
function extractText(node: ChallengeContentItem | ChallengeTextNode): string {
  if ('text' in node) {
    return node.text
  }
  if ('children' in node) {
    return node.children.map(extractText).join('')
  }
  return ''
}
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

  const galleryImages: singleImage[] = data[0]?.GallerySection.images.map(
    (url, index) => ({
      id: index,
      attributes: {
        alternativeText: `Gallery image ${index + 1}`,
        url: url.url,
      },
    })
  )

  const t = useTranslations()
  const locale = useLocale()

  return (
    <>
      <section>
        <HeroCarousel
          title={data[0].HeroCarousel.title}
          description={data[0].HeroCarousel.description}
          breadcrumbItems={data[0].HeroCarousel.breadcrumbItems}
          category={data[0].HeroCarousel.category}
        />

        {data[0].FeatureSection.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
      </section>{' '}
      <section className="bg-[#E6EEED] flex flex-col items-start pt-8 md:pt-28 ">
        <div className="max-w-[1280px] mx-auto w-full gap-8 md:gap-20 flex flex-col md:flex-row items-start px-4 md:px-0">
          {/* Main Challenge Title & Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-base text-Primary-Palm font-medium mb-1"
            >
              {data[0].ChallengeSection.ChallengeData[0]?.title}
            </motion.p>
            <motion.h1
              custom={2}
              variants={fadeUp}
              className="text-[28px] md:text-[46px] font-bold text-Primary-Black leading-[1.2] tracking-[-0.48px]"
            >
              {data[0].ChallengeSection.ChallengeData[0]?.description}
            </motion.h1>
          </motion.div>

          {/* Additional Items */}
          {data[0].ChallengeSection.ChallengeData.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 3}
              variants={fadeUp}
            >
              <h4 className="text-lg md:text-[20px] font-bold text-Primary-Palm">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-Primary-Black mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content Blocks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 md:mt-28 flex justify-center max-w-[768px] mx-auto w-full px-4 md:px-0"
        >
          <motion.div
            custom={1}
            variants={fadeUp}
            className="w-full bg-white shadow-sm border border-transparent relative px-4 md:px-0"
          >
            <div className="absolute -top-1 left-0 right-0 mx-auto h-1 bg-Primary-Palm" />
            <div className="px-0 md:px-10 py-10 md:py-20">
              {data[0].ChallengeSection.content?.map((block, index: number) => {
                switch (block.type) {
                  case 'heading':
                    if (block.level === 4)
                      return (
                        <motion.h4
                          key={index}
                          custom={index + 2}
                          variants={fadeUp}
                          className="text-2xl md:text-[32px] font-bold text-[#000404] mb-4"
                        >
                          {block.children.map(extractText).join('')}
                        </motion.h4>
                      )
                    if (block.level === 6)
                      return (
                        <motion.h6
                          key={index}
                          custom={index + 2}
                          variants={fadeUp}
                          className="mt-4 text-[#000404] text-lg leading-relaxed"
                        >
                          {block.children.map(extractText).join('')}
                        </motion.h6>
                      )
                    return null
                  case 'paragraph':
                    return (
                      <motion.p
                        key={index}
                        custom={index + 2}
                        variants={fadeUp}
                        className="text-[#000404] text-base md:text-lg leading-relaxed"
                      >
                        {block.children.map(extractText).join('')}
                      </motion.p>
                    )
                  case 'list':
                    return (
                      <motion.ul
                        key={index}
                        custom={index + 2}
                        variants={fadeUp}
                        className="list-disc ps-6 space-y-2"
                      >
                        {block.children.map((li, liIndex) => {
                          if ('children' in li) {
                            return (
                              <li
                                key={liIndex}
                                className="text-[#000404] text-base md:text-lg"
                              >
                                {li.children.map(extractText).join('')}
                              </li>
                            )
                          }
                          return null
                        })}
                      </motion.ul>
                    )
                  default:
                    return null
                }
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-Secondary-Dark-Palm text-white mt-20 w-full"
        >
          <motion.div
            custom={1}
            variants={fadeUp}
            className="py-8 md:py-25 max-w-[1392px] mx-auto px-4"
          >
            <motion.div
              custom={2}
              variants={fadeUp}
              className="text-center pb-8 md:pb-20"
            >
              <h3 className="font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
                {data[0].GallerySection.title}
              </h3>
              <p className="text-base md:text-lg">
                {data[0].GallerySection.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                custom={3}
                variants={fadeUp}
                className="col-span-1 row-span-2"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0].GallerySection.images[0].url}`}
                    fill
                    alt="Gallery"
                    className="object-cover cursor-pointer rounded-4xl"
                    onClick={() => openLightbox(0)}
                  />
                </div>
              </motion.div>

              <div className="grid grid-rows-2 grid-cols-2 gap-8">
                {data[0].GallerySection.images.slice(1, 5).map((img, i) => (
                  <motion.div
                    key={i}
                    custom={i + 4}
                    variants={fadeUp}
                    className="relative w-full aspect-square"
                    onClick={() => openLightbox(i + 1)}
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${img.url}`}
                      alt="Gallery"
                      className="w-full h-full object-cover cursor-pointer rounded-4xl"
                    />
                    {i ===
                      data[0].GallerySection.images.slice(1, 5).length - 1 && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white text-xl font-medium rounded-4xl flex-col cursor-pointer">
                        <span className="font-bold text-[32px]">
                          +{data[0].GallerySection.images.length - 5}
                        </span>
                        <p>more</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        {isOpen && (
          <GalleryPopup
            onClickHandle={() => setIsOpen(false)}
            Images={galleryImages}
          />
        )}
      </section>
      <section className="bg-Secondary-Light-Scrub">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 md:py-20 max-w-[1390px] mx-auto w-full  px-4"
        >
          <div className="flex justify-between items-end w-full">
            <motion.h4
              custom={1}
              variants={fadeUp}
              className="text-2xl md:text-[32px] font-bold text-[#000404] "
            >
              {' '}
              {t('News.caseStudy')}
            </motion.h4>
            <motion.div custom={2} variants={fadeUp} className="flex ">
              <Link href={'/resources/case-studies'}>
                {' '}
                <div className="group flex gap-1.5 items-center justify-start rounded-[100px] pt-8 cursor-pointer">
                  {' '}
                  <div className="ltr:font-aeonik-bold !rtl:font-arabic text-primary-palm group-hover:text-Secondary-Dark-Palm text-base md:text-lg leading-[1.5]">
                    {t('Blog.viewAll')}
                  </div>
                  <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                    <div className="relative shrink-0 size-6">
                      <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                        <div
                          className={`flex-none ${locale === 'ar' ? 'group-hover:-rotate-[45deg]' : 'group-hover:rotate-[45deg]'} text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300`}
                        >
                          <ButtonIcon strokeColor="white" locale={locale} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </Link>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-15">
            {allBlogs.slice(0, 2).map((caseStudy, idx) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data[0].GetInTouch} />
      </section>
    </>
  )
}
