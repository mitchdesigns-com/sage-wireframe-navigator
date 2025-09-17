'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import BlogCard from '@/components/sections/BlogCard'
import { useTranslations } from 'next-intl'
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

export default function SingleNewsPage() {
  const params = useParams()
  const newsId = params.id
  const news = blogs.find((j) => j.id === newsId)
  const t = useTranslations()

  if (!news) {
    return <div className="p-8">New not found.</div>
  }

  return (
    <>
      <section>
        <HeroSinglePages
          title={news.title}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: 'News & Events', href: '/resources/news' },
            {
              label: news.title,
              href: `/resources/news/${news.id}`,
            },
          ]}
          bgImage={news.image}
          author={news.author}
          date={news.date}
          readTime={news.readTime}
          button={'All News'}
          href={'/resources/news'}
        />

        <div className="max-w-[930px] mx-auto py-28">
          {' '}
          <h3 className="text-[32px] font-bold text-[#000404] py-6">
            Introduction
          </h3>
          <p className="text-[#000404] text-base pb-4">
            Sage Healthcare has officially unveiled its new AI-powered concierge
            platform, designed to revolutionize how patients and organizations
            access medical services. The launch took place at a private event in
            Riyadh, where healthcare leaders, tech innovators, and stakeholders
            gathered to witness the future of personalized care.
          </p>
          <div className="rounded-[40px] aspect-[930/505] relative w-full my-12">
            <Image
              src={news.image}
              alt="scr header"
              fill
              className="object-cover rounded-[40px]"
            />
          </div>
          <h3 className="text-[32px] font-bold text-[#000404] py-6">
            Conclusion
          </h3>
          <p className="text-[#000404] text-base pb-4">
            This milestone marks a significant step in Sage’s mission to make
            healthcare more accessible and human-centric. As the platform rolls
            out across key cities, individuals and organizations can expect a
            seamless, responsive, and empowering healthcare experience—anytime,
            anywhere.
          </p>
        </div>
      </section>

      <section className="bg-Secondary-Scrub">
        <div className="py-20 max-w-[1390px] mx-auto w-full">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('News.moreNews')}
            </h4>
            <div className="flex ">
              {' '}
              <Link
                href="/resources/news"
                className="text-[#000404] font-medium text-base pe-2"
              >
                {t('News.viewAll')}
              </Link>{' '}
              <ChevronRight className="text-[#000404] w-6 h-6" />{' '}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-20">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                href={`/resources/news/${blog.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
