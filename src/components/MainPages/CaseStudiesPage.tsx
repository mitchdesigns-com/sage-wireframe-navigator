'use client'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import { useState } from 'react'
import ToggleButton from '@/components/sections/ToggleButton'
import CaseStudyCard from '@/components/sections/CaseStudyCard'

type TabType = 'all' | 'individuals' | 'businesses' | 'organizations'

interface ToggleOption {
  id: string
  label: string
  value: TabType
}

export default function CaseStudiesPage({
  data,
  singles,
}: {
  data: any
  singles: any
}) {
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
      ? singles
      : singles.filter((faq: any) => faq.category === currentTab)

  return (
    <div className="min-h-screen ">
      <HeroPages {...data.HeroPages} />
      <section className="py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto space-y-20">
          <div className="max-w-[768px] mx-auto ">
            <ToggleButton
              options={data.ToggleButton.options}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {filteredCaseStudy.map((caseStudy: any) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-Secondary-Scrub">
        <GetInTouch {...data.GetInTouch} />
      </section>
    </div>
  )
}
