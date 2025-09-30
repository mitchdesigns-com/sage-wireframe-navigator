'use client'

import GetInTouch from '@/components/sections/GetInTouch'
import HeroPages from '@/components/sections/HeroPages'
import CentersSection from '@/components/sections/CentersSection'
import CertificateCard from '@/components/sections/CertificateCard'

const BLOCKS: Record<string, React.ComponentType<any>> = {
  'blocks.hero-pages': HeroPages,
  'blocks.centers-section-data': CentersSection,
  'blocks.get-in-touch': GetInTouch,
}

export default function CertificationsPage({ data }: { data: any }) {
  const page = data?.[0]
  const blocks = page?.blocks || []
  const certificates = page?.BlocksResources || []

  if (!blocks.length) return null

  return (
    <div className="min-h-screen">
      {blocks.map((block: any, index: number) => {
        const Component = BLOCKS[block.__component]

        // render HeroPages and then immediately the certificate cards
        if (block.__component === 'blocks.hero-pages') {
          return (
            <div key={`${block.__component}-${block.id || index}`}>
              <Component {...block} />

              {certificates.length > 0 && (
                <section className="py-20 bg-Secondary-Light-Scrub">
                  <div className="max-w-[1392px] mx-auto space-y-20">
                    <div className="grid md:grid-cols-3 gap-x-12 gap-y-20">
                      {certificates.map((certificate: any) => (
                        <CertificateCard
                          key={certificate.id}
                          certificate={certificate}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          )
        }

        if (!Component) {
          console.warn(`Unknown block component: ${block.__component}`)
          return null
        }

        return (
          <Component
            key={`${block.__component}-${block.id || index}`}
            {...block}
          />
        )
      })}
    </div>
  )
}
