'use client'
import { useState } from 'react'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'
import GuidesCard from '@/components/sections/GuidesCard'
import GetInTouch from '@/components/sections/GetInTouch'
import type { GuidesPage } from '../../types/guidesPage'
import { useLocale, useTranslations } from 'next-intl'

type TabType = string

interface ToggleOption {
  id: number
  title: string
  value: string
}

export default function GuidesPage({ data }: { data: GuidesPage[] }) {
  const locale = useLocale()

  const page = data?.[0]
  const blocks = page?.blocks || []
  const resources = page?.BlocksResources || []

  const [currentTab, setCurrentTab] = useState<TabType>(
    locale === 'ar' ? 'الكل' : 'all'
  )

  const toggleBlock = resources.find(
    (res) => res.__component === 'resources.toggle-button'
  )
  const options: ToggleOption[] =
    toggleBlock?.options?.map((opt) => ({
      id: opt.id,
      title: opt.title,
      value: opt.value,
    })) || []

  const guidsData =
    resources.filter((res) => res.__component === 'resources.guides-card') || []
  const isAll = locale === 'ar' ? currentTab === 'الكل' : currentTab === 'all'

  const filteredGuids = isAll
    ? guidsData
    : guidsData.filter((guide) => guide.category === currentTab)
  const t = useTranslations()

  return (
    <div className="min-h-screen">
      {blocks.map((block) =>
        block.__component === 'blocks.hero-pages' ? (
          <HeroPages key={block.id} {...block} />
        ) : null
      )}
      <section className="py-8 md:py-20 bg-Secondary-Light-Scrub">
        {' '}
        <div className="max-w-[1392px] mx-auto space-y-8 md:space-y-20">
          <div className="max-w-[768px] mx-auto">
            <ToggleButton
              options={options}
              selectedValue={currentTab}
              onChange={(val) => setCurrentTab(val as TabType)}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-20 px-4 overflow-hidden">
            {' '}
            {filteredGuids.map((guide) => (
              <GuidesCard key={guide.id} guide={guide} />
            ))}
            {filteredGuids.length === 0 && (
              <p className="text-center col-span-3 text-Gray-600">
                {t('GeneralContracting.NoData')}{' '}
              </p>
            )}
          </div>
        </div>
      </section>
      {blocks.map((block) =>
        block.__component === 'blocks.get-in-touch' ? (
          <GetInTouch key={block.id} {...block} />
        ) : null
      )}
    </div>
  )
}
