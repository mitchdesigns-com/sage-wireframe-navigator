'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
import ToggleButton from './ToggleButton'
import { Bookmark } from 'lucide-react'
import type {
  EventData,
  WebinarList as WebinarListType,
} from '../../types/newsEvents' // <-- fix here
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

  return (
    <div className="bg-Secondary-Light-Scrub">
      <div className=" mx-auto max-w-[1280px] py-28">
        {webinars.news && (
          <div className="pb-15">
            <span className="text-Primary-Palm text-base font-medium">
              Where Healthcare Meets Insight and Impact
            </span>
            <h6 className="heading-lg">Sage Events</h6>
            <p className="text-p max-w-[893px]">
              Join us as we bring together healthcare leaders, patients, and
              organizations to explore innovation, transparency, and
              personalized care. Our events are designed to inspire, inform, and
              connect, all in one place.{' '}
            </p>
          </div>
        )}
        <div className="max-w-[325px]">
          <ToggleButton
            options={webinars.ToggleButton.options}
            selectedValue={currentTab}
            onChange={(val) => setCurrentTab(val as TabType)}
          />
        </div>
        <div className="flex  overflow-x-auto flex-col">
          {events.map((webinar, index) => (
            <Link
              href={`/resources/news-events/events/${webinar.slug}`}
              key={index}
              className="flex flex-row items-center p-8 w-full gap-8 border-b border-[#00040426]"
            >
              <div className="flex flex-col items-center justify-center bg-Primary-Spring-Med text-Primary-Palm rounded-3xl px-1 py-[11px] w-[112px]">
                <span className="text-base">{webinar.HeroCarousel.day}</span>
                <span className="text-[32px] font-bold">
                  {webinar.HeroCarousel.dayNumbers}
                </span>
                <span className="text-base">{webinar.HeroCarousel.year}</span>
              </div>

              <div className="flex-row flex justify-between w-full items-center">
                <div>
                  <h3 className="text-[20px] font-bold mb-2 text-Primary-Black">
                    {webinar.HeroCarousel.title}
                  </h3>
                  <p className="text-base text-Secondary-Text max-w-[565px]">
                    {webinar.HeroCarousel.description}
                  </p>
                </div>
                <div>
                  {' '}
                  <Link
                    href={`/resources/news-events/events/${webinar.slug}`}
                    className="inline-block  bg-primary text-Primary-Black rounded-lg font-medium group cursor-pointer"
                  >
                    <Button
                      variant={'light'}
                      rightIcon={webinars.news ? false : true}
                      fullWidth
                    >
                      {webinars.news ? (
                        <div className="flex">
                          <Bookmark className="text-Primary-Palm w-6 h-6" />
                          <span className="ps-3">Save my spot</span>
                        </div>
                      ) : (
                        <>
                          <span>Watch Webinar</span>
                        </>
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WebinarList
