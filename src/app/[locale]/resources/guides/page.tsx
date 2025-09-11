'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import { useState } from 'react'
import ToggleButton from '@/components/sections/ToggleButton'
import GuidesCard from '@/components/sections/GuidesCard'

export const runtime = 'edge'
const guidsData = [
  {
    id: '1',
    title: 'Sage Partners with Local Clinics',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',
    image: '/images/generalImages/Preparing.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'individuals',
  },
  {
    id: '2',
    title: 'Sage Wins Healthcare Innovation Global Award',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'businesses',
  },
  {
    id: '3',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'organizations',
  },
  {
    id: '4',
    title: 'Sage Partners with Local Clinics',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'organizations',
  },
  {
    id: '5',
    title: 'Sage Wins Healthcare Innovation Global Award',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'businesses',
  },
  {
    id: '6',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'individuals',
  },
  {
    id: '7',
    title: 'Sage Partners with Local Clinics',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'businesses',
  },
  {
    id: '8',
    title: 'Sage Wins Healthcare Innovation Global Award',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing2.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'individuals',
  },
  {
    id: '9',
    title: 'Sage Attends Global Health Conference at UAE',
    description:
      'A comprehensive guide for seamless medical travel arrangements.',

    image: '/images/generalImages/Preparing3.png',
    author: 'John Doe',
    date: '15 Mar 2023',
    readTime: '3 min read',
    category: 'organizations',
  },
]
type TabType = 'all' | 'individuals' | 'businesses' | 'organizations'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

export default function GuidesPage() {
  const [currentTab, setCurrentTab] = useState<TabType>('all')

  const options: ToggleOption[] = [
    { id: 'all', label: 'View All', value: 'all' },
    { id: 'individuals', label: 'Individuals', value: 'individuals' },
    { id: 'businesses', label: 'Businesses', value: 'businesses' },
    { id: 'organizations', label: 'Organizations', value: 'organizations' },
  ]

  // Filter based on tab
  const filteredGuids =
    currentTab === 'all'
      ? guidsData
      : guidsData.filter((faq) => faq.category === currentTab)

  return (
    <div className="min-h-screen ">
      <HeroPages
        title="Guides"
        description="Welcome to our Guides page, designed to empower patients, partners, and organizations with essential resources. Explore our comprehensive guides to navigate healthcare processes and maximize your experience with Sage."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/resources/guides' },
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
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-20">
            {filteredGuids.map((guide) => (
              <GuidesCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch
          tagline="Let’s Talks"
          title="Start Your Medical Journey Today"
          description="Contact Sage to plan your treatment visit and explore the best of Saudi Arabia's healthcare."
          image="/images/generalImages/Vector.png"
        />
      </section>
    </div>
  )
}
