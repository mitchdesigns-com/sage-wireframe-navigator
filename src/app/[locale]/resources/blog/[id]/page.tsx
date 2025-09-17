'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import HeroSinglePages from '@/components/sections/HeroSinglePages'
import BlogCard from '@/components/sections/BlogCard'
import { useTranslations } from 'next-intl'
import ButtonIcon from '@/components/svg/ButtonIcon'

const blogs = [
  {
    id: '1',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '4',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '7',
    title: 'Sage Partners with Local Clinics',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '8',
    title: 'Sage Wins Healthcare Innovation Global Award',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    id: '9',
    title: 'Sage Attends Global Health Conference at UAE',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
]

export default function SingleBlogsPage() {
  const params = useParams()
  const blogId = params.id
  const blog = blogs.find((j) => j.id === blogId)
  const t = useTranslations()

  if (!blog) {
    return <div className="p-8">New not found.</div>
  }

  return (
    <>
      <section>
        <HeroSinglePages
          title={blog.title}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/resources/blog' },
            {
              label: blog.title,
              href: `/resources/blog/${blog.id}`,
            },
          ]}
          bgImage={blog.image}
          author={blog.author}
          date={blog.date}
          readTime={blog.readTime}
          button={'All Blog Posts'}
          href={'/resources/blog'}
        />

        <div className="max-w-[930px] mx-auto py-15">
          {' '}
          <h3 className="text-[32px] font-bold text-[#000404] py-6">
            1. The Hidden Burden of Disorganized Healthcare Journeys
          </h3>
          <p className="text-[#000404] text-base pb-4">
            For many organizations, medical travel is reactive. Emergency
            referrals, last-minute paperwork, miscommunication with
            hospitals—all of these contribute to stress for both the patient and
            the sponsoring team. Beyond the human cost, there’s a reputational
            risk. Patients judge their experience holistically, not just by the
            treatment received but by how they were cared for along the way.
          </p>
          <h3 className="text-[32px] font-bold text-[#000404] py-6">
            4.Final Thought
          </h3>
          <p className="text-[#000404] text-base pb-4">
            Healthcare is more than a service—it’s a statement of how much an
            organization values its people. With the right logistics partner,
            your institution can deliver world-class care that’s not just
            effective, but unforgettable.
          </p>
        </div>
      </section>

      <section className="bg-Secondary-Scrub">
        <div className="py-25 max-w-[1390px] mx-auto w-full">
          <div className="flex justify-between items-end w-full">
            <h4 className="text-[32px] font-bold text-[#000404] ">
              {' '}
              {t('Blog.moreNews')}
            </h4>
            <div className="flex ">
              <Link href={'/resources/blog'}>
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
          <div className="grid md:grid-cols-3 gap-8 pt-15">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                href={`/resources/blog/${blog.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
