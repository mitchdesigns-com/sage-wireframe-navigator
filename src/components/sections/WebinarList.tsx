'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
import ToggleButton from './ToggleButton'
import { Bookmark } from 'lucide-react'
import { motion } from 'framer-motion'
import type {
  EventData,
  WebinarList as WebinarListType,
} from '../../types/newsEvents'
import { useLocale } from 'next-intl'

export type TabType = 'comingSoon' | 'previous'

export interface ToggleOption {
  id: number
  title: string
  value: TabType
}

export interface ToggleButtonData {
  id: number
  options: ToggleOption[]
}

export interface WebinarListProps {
  webinars: WebinarListType
  events: EventData[]
}

const WebinarList: React.FC<WebinarListProps> = ({ webinars, events }) => {
  const [currentTab, setCurrentTab] = useState<TabType>('comingSoon')
  const locale = useLocale()

  // --- Motion Variants ---
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="bg-Secondary-Light-Scrub overflow-hidden">
      <div className="mx-auto max-w-[1280px] py-8 md:py-28 px-4">
        {webinars.news && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="pb-15"
          >
            <motion.span
              variants={fadeUp}
              className="text-Primary-Palm text-base font-medium block mb-2"
            >
              Where Healthcare Meets Insight and Impact
            </motion.span>

            <motion.h6 variants={fadeUp} className="heading-lg">
              Sage Events
            </motion.h6>

            <motion.p
              variants={fadeUp}
              className="text-lg max-w-[893px] mt-3 text-Secondary-Text"
            >
              Join us as we bring together healthcare leaders, patients, and
              organizations to explore innovation, transparency, and
              personalized care. Our events are designed to inspire, inform, and
              connect, all in one place.
            </motion.p>
          </motion.div>
        )}

        {/* ToggleButton with fade-in animation */}
        <motion.div
          className="max-w-[325px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ToggleButton
            options={webinars.ToggleButton.options}
            selectedValue={currentTab}
            onChange={(val) => setCurrentTab(val as TabType)}
          />
        </motion.div>

        {/* Animated Event List */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {events.map((webinar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start md:items-center p-8 w-full gap-8 border-b border-[#00040426]"
            >
              {/* Date box */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center justify-center bg-Primary-Spring-Med text-Primary-Palm rounded-3xl px-1 py-[11px] w-[112px]"
              >
                <span className="text-base">{webinar.HeroCarousel.day}</span>
                <span className="text-[32px] font-bold">
                  {webinar.HeroCarousel.dayNumbers}
                </span>
                <span className="text-base">{webinar.HeroCarousel.year}</span>
              </motion.div>

              {/* Content and button */}
              <div className="md:flex-row flex-col flex justify-between w-full items-start md:items-center">
                <motion.div variants={fadeUp}>
                  <h3 className="text-lg md:text-[20px] font-bold mb-2 text-Primary-Black">
                    {webinar.HeroCarousel.title}
                  </h3>
                  <p className="text-sm md:text-base text-Secondary-Text max-w-[565px] pb-8 md:pb-0">
                    {webinar.HeroCarousel.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                  className="w-full md:w-auto"
                >
                  <Link
                    href={`/resources/news-events/events/${webinar.slug}`}
                    className="inline-block bg-primary text-Primary-Black rounded-lg font-medium group cursor-pointer"
                  >
                    <Button
                      variant={'light'}
                      righticon={webinars.news ? false : true}
                      fullwidth
                      locale={locale as 'en' | 'ar'}
                    >
                      {webinars.news ? (
                        <div className="flex">
                          <Bookmark className="text-Primary-Palm w-6 h-6" />
                          <span className="ps-3">Save My Spot</span>
                        </div>
                      ) : (
                        <span>Watch Webinar</span>
                      )}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default WebinarList
