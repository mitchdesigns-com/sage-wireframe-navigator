'use client'
import CaseStudyCard from '@/components/sections/CaseStudyCard'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'
import { useState } from 'react'
import { CaseStudy, CaseStudyPageData } from '../../types/caseStudyPageData'
import { useLocale } from 'next-intl'

type TabType = string

// interface ToggleOption {
//   id: string
//   label: string
//   value: TabType
// }

export default function CaseStudiesPage({
  data,
  singles,
}: {
  data: CaseStudyPageData
  singles: CaseStudy[]
}) {
  const locale = useLocale()

  const [currentTab, setCurrentTab] = useState<TabType>(
    locale === 'ar' ? 'الكل' : 'all'
  )

  // const options: ToggleOption[] = [
  //   { id: 'all', label: 'View All', value: 'all' },
  //   { id: 'individuals', label: 'Individuals', value: 'individuals' },
  //   { id: 'businesses', label: 'Businesses', value: 'businesses' },
  //   { id: 'organizations', label: 'Organizations', value: 'organizations' },
  // ]

  const filteredCaseStudy =
    currentTab === 'all'
      ? singles
      : singles.filter((faq) => faq.category === currentTab)

  return (
    <div className="min-h-screen ">
      <HeroPages {...data.HeroPages} />
      <section className="py-8 md:py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto space-y-8 md:space-y-20  px-4">
          <div className="max-w-[768px] mx-auto ">
            <ToggleButton
              options={data.ToggleButton.options}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-20">
            {filteredCaseStudy.map((caseStudy, idx) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                index={idx}
              />
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
