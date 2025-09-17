'use client'
import { useParams } from 'next/navigation'
import HeroCarousel from '@/components/sections/HeroCarousel'
import FeatureSection from '@/components/sections/FeatureSection'
export const runtime = 'edge'

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
const featureSections = [
  {
    title: 'Join Us for the Annual Healthcare Innovation Summit 2023',
    description:
      'This summit brings together leading voices in healthcare to explore cutting-edge innovations, emerging technologies, and global best practices that are shaping the future of the industry.',

    image: '/images/generalImages/event.png',
    backgroundColor: '#F0F8F8',
    textColor: '#1E1E1E',
    reverse: false,
    ctaText: 'Save my spot',
    href: '/',
  },
]
export default function SingleNewsPage() {
  const params = useParams()
  const newsId = params.slug
  const events = webinars.find((j) => j.slug === newsId)

  if (!events) {
    return <div className="p-8">Event not found.</div>
  }

  return (
    <>
      <section>
        <HeroCarousel
          title={events.title}
          breadcrumbItems={[
            { label: 'Home', href: '/' },
            { label: 'News & Events', href: '/resources/news-events' },
            {
              label: events.title,
              href: `/resources/news-events/${events.slug}`,
            },
          ]}
          dayNumbers={events.dayNumbers}
          year={events.year}
          description={events.description}
        />

        {featureSections.map((section, index) => (
          <FeatureSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            backgroundColor={section.backgroundColor}
            textColor={section.textColor}
            reverse={section.reverse}
            ctaText={section.ctaText}
          />
        ))}
      </section>{' '}
    </>
  )
}
