'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import { useState } from 'react'
import ToggleButton from '@/components/sections/ToggleButton'
import CaseStudyCard from '../../../../components/sections/CaseStudyCard'

export const runtime = 'edge'
const caseStudyData = [
  {
    slug: '1',
    title: 'Oncology Case',
    description:
      'Urgent care for a patient from Jordan, resolved in record time.',
    image: '/images/generalImages/caseStudy.png',

    category: 'individuals',
  },
  {
    slug: '2',
    title: 'Corporate Wellness',
    description: 'Enhanced employee health programs for a leading corporation.',

    image: '/images/generalImages/Preparing2.png',
    category: 'businesses',
  },
  {
    slug: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    category: 'organizations',
  },
  {
    slug: '4',
    title: 'Sage Partners with Local Clinics',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing.png',
    category: 'organizations',
  },
  {
    slug: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing2.png',
    category: 'businesses',
  },
  {
    slug: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    category: 'individuals',
  },
]
type TabType = 'all' | 'individuals' | 'businesses' | 'organizations'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

export default function CaseStudiesPage() {
  const [currentTab, setCurrentTab] = useState<TabType>('all')

  const options: ToggleOption[] = [
    { id: 'all', label: 'View All', value: 'all' },
    { id: 'individuals', label: 'Individuals', value: 'individuals' },
    { id: 'businesses', label: 'Businesses', value: 'businesses' },
    { id: 'organizations', label: 'Organizations', value: 'organizations' },
  ]

  // Filter based on tab
  const filteredCaseStudy =
    currentTab === 'all'
      ? caseStudyData
      : caseStudyData.filter((faq) => faq.category === currentTab)

  return (
    <div className="min-h-screen ">
      <HeroPages
        title="Case Studies"
        description="Explore how Sage has transformed lives and organizations through dedicated healthcare concierge services. Our case studies showcase real-world impacts, highlighting measurable outcomes and heartfelt journeys."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/resources/case-studies' },
        ]}
      />
      <section className="py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto space-y-20">
          <div className="max-w-[768px] mx-auto ">
            <ToggleButton
              options={options}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {filteredCaseStudy.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Start Your Journey Today"
          description="Book your free consultation and discover personalized care tailored just for you."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}
