import Image from 'next/image'
import FeatureSection from '@/components/sections/FeatureSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HealthAndSafety from '@/components/svg/HealthAndSafety'
import Percentage from '@/components/svg/Percentage'
import PersonPinIcon from '@/components/svg/PersonPinIcon'
import VectorIcon from '@/components/svg/VectorIcon'
import Tagline from '@/components/sections/Tagline'
import BlogSection from '@/components/sections/BlogSection'
import HeroWithVideo from '@/components/sections/HeroWithVideo'

export const runtime = 'edge'

const list = [
  {
    tagline: 'Riyadh',
    image: '/images/generalImages/MedicalExcellence.png',
    title: 'Saudi Arabia Medical Excellence',
    titleColor: '#CAF48E', // custom title color
    description:
      'Riyadh boasts state-of-the-art hospitals and a thriving healthcare ecosystem.',
    descriptionColor: '#E2F2F1', // custom description color
    bgColor: '#025850',
    taglineColor: '#CAF48E',
  },
  {
    tagline: 'Jeddah',

    image: '/images/generalImages/MedicalExcellence.png',
    title: 'A Coastal Gem with Excellent Healthcare',
    titleColor: '#025850',
    description:
      'Jeddah offers a unique blend of advanced medical care and beautiful seaside relaxation.',
    descriptionColor: '#626262',
    bgColor: '#CAF48E',
    taglineColor: '#1E1E1E',
  },
  {
    tagline: 'Riyadh',

    image: '/images/generalImages/MedicalExcellence.png',
    title: 'Your Center for Health and Wellness',
    titleColor: '#013530',
    description:
      'The Eastern Province is known for its exceptional healthcare facilities and local culture.',
    descriptionColor: '#1E1E1E',
    bgColor: '#6CBEB8',
    taglineColor: '#CAF48E',
  },
]
const blogs = [
  {
    slug: '1',
    title: 'Sage Partners with Local Clinics',
    category: 'News',
    image: '/images/generalImages/blog1.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    category: 'News',
    image: '/images/generalImages/blog2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
  {
    slug: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    category: 'News',
    image: '/images/generalImages/blog3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
  },
]

export default function VisitSaudiPage({ data }: { data: any }) {
  return (
    <div className="min-h-screen">
      <HeroWithVideo
        title="Discover World-Class Healthcare in Saudi Arabia"
        description="Welcome to Saudi Arabia, a premier destination for international patients seeking exceptional medical care and wellness experiences. Our high-end healthcare concierge service ensures a seamless journey tailored to your needs."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Visit Saudi', href: '/visit-saudi' },
        ]}
      />
      {data.FeatureSection.map((section: any, index: any) => (
        <FeatureSection key={index} {...section} />
      ))}
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className="max-w-[764px] mx-auto">
          <div className=" mx-auto  text-center">
            <div className="space-y-4">
              <h2 className="text-Primary-Black text-[40px] font-bold">
                Explore Premier Healthcare Destinations in Saudi Arabia for Your
                Medical Needs{' '}
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex  gap-15 justify-center items-start text-start">
            {list?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start gap-2 flex-col max-w-[432px] p-10 rounded-3xl relative"
              >
                <div className="absolute -top-5 left-6 w-full">
                  {' '}
                  <Tagline text={li.tagline} taglineColor={li.taglineColor} />
                </div>
                <Image
                  src={li.image}
                  alt={li.title}
                  width={181}
                  height={188}
                  className={`rounded-lg `}
                />
                <h5
                  className={` text-[32px] font-bold`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-[16px] leading-[1.5] flex-1 `}
                  style={{ color: li.descriptionColor }}
                >
                  {li.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {data.FeatureSectionLast.map((section: any, index: any) => (
        <FeatureSection key={index} {...section} />
      ))}
      <BlogSection blogs={blogs} />
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data.GetInTouch} />
      </section>
    </div>
  )
}
