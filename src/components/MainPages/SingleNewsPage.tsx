'use client'
import { useParams } from 'next/navigation'
import HeroCarousel from '@/components/sections/HeroCarousel'
import FeatureSection from '@/components/sections/FeatureSection'
import { EventData } from '../../types/newsEvents'

const webinars = [
  {
    slug: 'event1',
    title: 'Wellness Beyond Borders',
    description:
      'Explore global healthcare innovations and how Sage is making them accessible to individuals and organizations across the region.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    slug: 'event2',
    title: 'Navigating Patient-Centered Care',
    description:
      'A live panel discussion featuring experts in personalized healthcare solutions and how technology is shaping patient journeys.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
  {
    slug: 'event3',
    title: 'Transparent Healthcare Talks',
    description:
      'An educational session on building trust through clear communication, fair pricing, and concierge-style support.',
    day: 'Fri',
    dayNumbers: '09',
    year: 'Feb 2026',
  },
]

export default function SingleNewsPage({
  data,
  // allBlogs,
}: {
  data: EventData[]
  allBlogs: EventData[]
}) {
  const params = useParams()
  const newsId = params.slug
  const events = webinars.find((j) => j.slug === newsId)

  if (!events) {
    return <div className="p-8">Event not found.</div>
  }

  return (
    <>
      <section>
        <HeroCarousel {...data.HeroCarousel} />
        <FeatureSection {...data.FeatureSection} />
      </section>{' '}
    </>
  )
}
