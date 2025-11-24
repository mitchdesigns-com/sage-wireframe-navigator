'use client'
import BlogCard from '@/components/sections/BlogCard'
import HeroPages from '@/components/sections/HeroPages'
import Tagline from '@/components/sections/Tagline'
import WebinarList from '@/components/sections/WebinarList'
import ButtonIcon from '@/components/svg/ButtonIcon'
import Image from 'next/image'
import Link from 'next/link'
import { EventData, NewsArticle, NewsEventsData } from '../../types/newsEvents'
import { useLocale, useTranslations } from 'next-intl'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface NewsPageProps {
  data: {
    newsEvents: NewsEventsData
    news: NewsArticle[]
    events: EventData[]
  }
}

export default function NewsPage({ data }: NewsPageProps) {
  const { newsEvents, news, events } = data
  const locale = useLocale()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white">
      <HeroPages {...newsEvents.HeroPages} />
      <section className="bg-Secondary-Dark-Palm overflow-hidden">
        <div className="px-4 mx-auto max-w-[1392px] py-8 md:py-28">
          <div className="flex items-center gap-8 md:gap-15 flex-col md:flex-row">
            {/* Animated Left Image */}
            <motion.div
              className="flex-1 content-end flex w-full"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-[576/332] rounded-[40px] bg-cover bg-center w-[400px] md:w-[606px]"
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${newsEvents.featureWithTagline.image.url}')`,
                }}
              />
            </motion.div>

            {/* Animated Right Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Tagline text={newsEvents.featureWithTagline.tagline} />
                </motion.div>

                <motion.h2
                  className="heading-4 font-bold leading-[1.2] tracking-[-1px] mb-2 whitespace-pre-line text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {newsEvents.featureWithTagline.title}
                </motion.h2>

                <motion.p
                  className="text-base text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {newsEvents.featureWithTagline.description}
                </motion.p>

                {/* Author Section */}
                <motion.div
                  className="flex items-center gap-2 py-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${newsEvents.featureWithTagline.vectorImage.url}`}
                      alt="author"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="text-sm text-white">
                    <p>{newsEvents.featureWithTagline.name}</p>
                    <p>{newsEvents.featureWithTagline.date}</p>
                  </div>
                </motion.div>

                {/* Button with hover animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link href={newsEvents.featureWithTagline.href}>
                    <div className="group flex gap-1.5 items-center justify-start rounded-[100px] cursor-pointer">
                      <div className="font-aeonik-bold text-Primary-Scrub group-hover:text-Primary-Light-Sage text-lg leading-[1.5]">
                        {newsEvents.featureWithTagline.btn}
                      </div>
                      <div className="bg-Primary-Scrub rounded-full p-[6px] size-7 flex items-center justify-center">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                            <div
                              className={`flex-none ${
                                locale === 'ar'
                                  ? 'group-hover:-rotate-[45deg]'
                                  : 'group-hover:rotate-[45deg]'
                              } text-Primary-Scrub group-hover:text-Primary-Light-Sage transition-all duration-300`}
                            >
                              <ButtonIcon strokeColor="white" locale={locale} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section ref={ref} className=" bg-Secondary-Light-Scrub">
        <div className="md:max-w-[300px] mx-auto pt-8 md:py-10">
          {' '}
          {/* <ToggleButton
            options={options}
            selectedValue={currentTab}
            onChange={(val) => setCurrentTab(val as TabType)}
          /> */}
        </div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-[1392px] mx-auto  px-4"
        >
          <span className="text-Secondary-Dark-Palm text-base font-medium">
            {t('News.News')}
          </span>
          <motion.h6 className="heading-lg"> {t('News.latestNews')}</motion.h6>
          <motion.p className="text-lg">{t('News.announcements')}</motion.p>
        </motion.div>
        <div className="max-w-[1392px] mx-auto py-8 md:py-20  px-4">
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
