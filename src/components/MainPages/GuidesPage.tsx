'use client'
import { useState } from 'react'
import HeroPages from '@/components/sections/HeroPages'
import ToggleButton from '@/components/sections/ToggleButton'
import GuidesCard from '@/components/sections/GuidesCard'
import GetInTouch from '@/components/sections/GetInTouch'
import type { GuidesPage } from '../../types/guidesPage'

type TabType = 'all' | 'individuals' | 'businesses' | 'organizations'

interface ToggleOption {
  id: number
  title: string
  value: string
}

export default function GuidesPage({ data }: { data: GuidesPage[] }) {
  const page = data?.[0]
  const blocks = page?.blocks || []
  const resources = page?.BlocksResources || []

  const [currentTab, setCurrentTab] = useState<TabType>('all')

  // Extract toggle options
  const toggleBlock = resources.find(
    (res) => res.__component === 'resources.toggle-button'
  )
  const options: ToggleOption[] =
    toggleBlock?.options?.map((opt) => ({
      id: opt.id,
      title: opt.title,
      value: opt.value,
    })) || []

  // Extract guides data
  const guidsData =
    resources.filter((res) => res.__component === 'resources.guides-card') || []

  // Filter guides
  const filteredGuids =
    currentTab === 'all'
      ? guidsData
      : guidsData.filter((guide) => guide.category === currentTab)

  return (
    <div className="min-h-screen">
      {/* HeroPages */}
      {blocks.map((block) =>
        block.__component === 'blocks.hero-pages' ? (
          <HeroPages key={block.id} {...block} />
        ) : null
      )}

      {/* Toggle Button + Guides */}
      <section className="py-20 bg-Secondary-Light-Scrub">
        <div className="max-w-[1392px] mx-auto space-y-20">
          <div className="max-w-[768px] mx-auto">
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

      {/* GetInTouch */}
      {blocks.map((block) =>
        block.__component === 'blocks.get-in-touch' ? (
          <GetInTouch key={block.id} {...block} />
        ) : null
      )}
    </div>
  )
}
