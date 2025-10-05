'use client'

import SectionHeader from '../ui/SectionHeader'
import ArrowOutWard from '../svg/ArrowOutWard'

interface ResourceItem {
  id: number
  title: string
  description: string
  href: string
}

interface SectionHeaderResources {
  id: number
  heading: string
  color: string
  tagline: string
  description: string
  home: boolean
}

interface ImageData {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

interface ResourcesData {
  id: number
  SectionHeaderResources: SectionHeaderResources
  image: ImageData
  resourcesSection: ResourceItem[]
}

export default function Resources({ Resources }: { Resources: ResourcesData }) {
  const { SectionHeaderResources, image, resourcesSection } = Resources

  return (
    <section className="py-25 bg-sage-gradient">
      <div className="max-w-[1392px] px-4 mx-auto">
        <SectionHeader
          heading={SectionHeaderResources.heading}
          color="light"
          tagline={SectionHeaderResources.tagline}
          description={SectionHeaderResources.description}
          home={SectionHeaderResources.home}
        />

        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div
              className="aspect-[600/650] rounded-[40px] bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url})`,
              }}
            />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            {resourcesSection.map((resource) => (
              <a
                href={resource.href}
                key={resource.id}
                className="block border-b border-[#4B4B4B] pb-8 last:border-b-0 hover:opacity-80 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {resource.title}
                    </h3>
                    <p className="leading-relaxed text-white">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowOutWard />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
