'use client'
import BlogCard from '@/components/sections/BlogCard'
import HeroPages from '@/components/sections/HeroPages'
import Tagline from '@/components/sections/Tagline'
import WebinarList from '@/components/sections/WebinarList'
import ButtonIcon from '@/components/svg/ButtonIcon'
import Image from 'next/image'
import Link from 'next/link'
import { EventData, NewsArticle, NewsEventsData } from '../../types/newsEvents'

interface NewsPageProps {
  data: {
    newsEvents: NewsEventsData
    news: NewsArticle[]
    events: EventData[]
  }
}

export default function NewsPage({ data }: NewsPageProps) {
  const { newsEvents, news, events } = data

  return (
    <div className="min-h-screen bg-white">
      <HeroPages {...newsEvents.HeroPages} />
      <section className="bg-Secondary-Dark-Palm">
        <div className="px-4 md:px-0 mx-auto max-w-[1392px] py-8 md:py-28">
          <div
            className={`flex items-center gap-8 md:gap-15 flex-col md:flex-row`}
          >
            <div className="flex-1 content-end flex w-full">
              <div
                className="aspect-[576/332] rounded-[40px] bg-cover bg-center w-[400px] md:w-[606px]"
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${newsEvents.featureWithTagline.image.url}')`,
                }}
              />
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="mb-8">
                <div>
                  <Tagline text={newsEvents.featureWithTagline.tagline} />
                </div>
                <div className="">
                  <h2 className="heading-4 font-bold leading-[1.2] tracking-[-1px] mb-2 whitespace-pre-line text-white">
                    {newsEvents.featureWithTagline.title}{' '}
                  </h2>
                  <p className={`text-base text-white`}>
                    {newsEvents.featureWithTagline.description}
                  </p>
                  <div className="flex items-center gap-2 py-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${newsEvents.featureWithTagline.vectorImage.url}`}
                        alt={'author'}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="text-sm text-white">
                      <p>{newsEvents.featureWithTagline.name}</p>
                      <p>{newsEvents.featureWithTagline.date}</p>
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
        <div className="md:max-w-[300px] mx-auto pt-8 md:py-10">
          {' '}
          {/* <ToggleButton
            options={options}
            selectedValue={currentTab}
            onChange={(val) => setCurrentTab(val as TabType)}
          /> */}
        </div>
        <div className="max-w-[1392px] mx-auto px-4 md:px-0">
          <span className="text-Secondary-Dark-Palm text-base font-medium">
            News
          </span>
          <h6 className="heading-lg">Latest News and Events</h6>
          <p className="text-lg">
            Stay updated with Sage's latest achievements and announcements.
          </p>
        </div>
        <div className="max-w-[1392px] mx-auto py-8 md:py-20 px-4 md:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                href={`/resources/news-events/news/${blog.slug}`}
                news
              />
            ))}
          </div>
        </div>
      </section>
      <WebinarList webinars={newsEvents.WebinarList} events={events} />
    </div>
  )
}
