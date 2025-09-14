'use client'
import Image from 'next/image'
import HeroPages from '../../../../components/sections/HeroPages'
import Tagline from '../../../../components/sections/Tagline'
import Link from 'next/link'
import ButtonIcon from '../../../../components/svg/ButtonIcon'
import BlogCard from '../../../../components/sections/BlogCard'
import ToggleButton from '../../../../components/sections/ToggleButton'
import React, { useState } from 'react'
import WebinarList from '../../../../components/sections/WebinarList'
export const runtime = 'edge'
const blogs = [
  {
    id: '1',
    title: 'Sage Partners with Local Clinics',
    category: 'news',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    category: 'news',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    category: 'news',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '4',
    title: 'Sage Partners with Local Clinics',
    category: 'events',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    category: 'events',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    category: 'events',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
]
const webinars = [
  {
    title: 'Wellness Beyond Borders',
    description:
      'Explore global healthcare innovations and how Sage is making them accessible to individuals and organizations across the region.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    title: 'Navigating Patient-Centered Care',
    description:
      'A live panel discussion featuring experts in personalized healthcare solutions and how technology is shaping patient journeys.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    title: 'Transparent Healthcare Talks',
    description:
      'An educational session on building trust through clear communication, fair pricing, and concierge-style support.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
]
type TabType = 'all' | 'news' | 'events'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

const options: ToggleOption[] = [
  { id: 'all', label: 'View All', value: 'all' },
  { id: 'news', label: 'News', value: 'news' },
  { id: 'events', label: 'Events', value: 'events' },
]

export default function NewsPage() {
  const [currentTab, setCurrentTab] = useState<TabType>('all')
  const filteredBlogs =
    currentTab === 'all'
      ? blogs
      : blogs.filter((blog) => blog.category === currentTab)

  return (
    <div className="min-h-screen bg-white">
      <HeroPages
        title="News & Events"
        description="Stay informed with the latest updates from Sage—featuring industry insights, expert talks, upcoming healthcare events, and milestones that shape our journey in medical excellence."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'News & Events', href: '/resources/news' },
        ]}
      />
      <section className="bg-Secondary-Dark-Palm">
        <div className="container-custom mx-auto max-w-[1392px] py-28">
          <div className={`flex items-center gap-15`}>
            <div className="flex-1 content-end flex">
              <div
                className="aspect-[576/332] rounded-[40px] bg-cover bg-center w-[606px]"
                style={{
                  backgroundImage: `url('/images/generalImages/news.png')`,
                }}
              />
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="mb-8">
                <div>
                  <Tagline text={'Featured News'} />
                </div>
                <div className="">
                  <h2 className="heading-4 font-bold leading-[1.2] tracking-[-1px] mb-2 whitespace-pre-line text-white">
                    Sage Wins Healthcare Innovation Award
                  </h2>
                  <p className={`text-base text-white`}>
                    Discover the latest updates, achievements, and appearances
                    from the Sage team. Stay connected with our ongoing journey
                    in the healthcare industry.
                  </p>
                  <div className="flex items-center gap-2 py-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/generalImages/avatar1.png"
                        alt={'author'}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="text-sm text-white">
                      <p>John Doe</p>
                      <p>15 Mar 2023 • 3 min read</p>
                    </div>
                  </div>
                  <Link href={'/'}>
                    {' '}
                    <div className="group flex gap-1.5 items-center justify-start rounded-[100px]  cursor-pointer">
                      {' '}
                      <div className="font-aeonik-bold text-Primary-Scrub group-hover:text-Primary-Light-Sage text-lg leading-[1.5]">
                        Read More
                      </div>
                      <div className="bg-Primary-Scrub rounded-full p-[6px] size-7 flex items-center justify-center">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                            <div className="flex-none group-hover:rotate-[45deg] text-Primary-Scrub group-hover:text-Primary-Light-Sage transition-all duration-300">
                              <ButtonIcon strokeColor="white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{' '}
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
          </div>
        </div>
      </section>
      <section className=" bg-Secondary-Light-Scrub">
        <div className="max-w-[300px] mx-auto py-10">
          {' '}
          <ToggleButton
            options={options}
            selectedValue={currentTab}
            onChange={(val) => setCurrentTab(val as TabType)}
          />
        </div>
        <div className="max-w-[1392px] mx-auto">
          <span className="text-Secondary-Dark-Palm text-base font-medium">
            News
          </span>
          <h6 className="heading-lg">Latest News and Events</h6>
          <p className="text-p">
            Stay updated with Sage's latest achievements and announcements.
          </p>
        </div>
        <div className="max-w-[1392px] mx-auto py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
      <WebinarList webinars={webinars} news />
    </div>
  )
}
