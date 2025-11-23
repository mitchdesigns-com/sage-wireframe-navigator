'use client'

import Image from 'next/image'
import DownloadIcon from '../svg/DownloadIcon'
import Button from '../ui/Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

export interface Guide {
  id: number
  title: string
  category: string
  image: {
    url: string
    alternativeText: string
  }
  author: string
  date: string
  readTime: string
  description: string
  ShareButtons: string
}

interface GuidesCardProps {
  guide: Guide
}

export default function GuidesCard({ guide }: GuidesCardProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // The card starts 50px down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }
  const t = useTranslations()

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col bg-white rounded-4xl w-full "
    >
      <div className="h-[293px] w-full relative rounded-t-4xl overflow-hidden ">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${guide.image.url}`}
          alt={guide.image.alternativeText || guide.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-4 items-center">
          <span
            className={`text-xs md:text-sm px-2 py-1 rounded-[4px] ${
              guide.category === 'individuals'
                ? 'bg-Primary-Scrub text-Secondary-Light-Scrub'
                : guide.category === 'businesses'
                  ? 'bg-Primary-Spring text-Secondary-Dark-Palm'
                  : 'bg-Dark-Scrub text-white'
            } font-medium`}
          >
            {guide.category}
          </span>
          <p className="text-xs md:text-sm font-medium text-Secondary-Text">
            {guide.readTime}
          </p>
        </div>
        <h3 className="text-lg md:text-[20px] font-bold text-Primary-Black leading-snug mt-4 mb-2">
          {guide.title}
        </h3>
        <p className="text-Secondary-Text text-sm md:text-base pb-6">
          {guide.description}
        </p>
        <div className="">
          <div className="flex items-center justify-between mt-auto">
            <div className="w-fit">
              <Button
                variant="light-link"
                // className="p-0 text-Primary-Palm font-bold text-base md:text-lg cursor-pointer"
              >
                <div className="flex items-center gap-[2px]">
                  {' '}
                  <DownloadIcon color="#025850" />
                  <div className="overflow-hidden">
                    <span className="inline-block px-1 py-0.5 transition-transform duration-300 ease-out hover:translate-x-[2px] hover:text-Primary-Black">
                      {t('Home.downloadPDF')}
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
