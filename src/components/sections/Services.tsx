'use client'

import Image from 'next/image'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { ChevronRight } from 'lucide-react'

interface ImageLabel {
  id: number
  documentId: string
  alternativeText?: string | null
  url: string
}

interface Service {
  id: number
  key: string
  label: string
  href: string
  description: string
  width?: number
  imageLabel: ImageLabel
}

interface ServicesProps {
  heading: string
  description: string
  tagline: string
  cta: string
  href: string
  SERVICES: Service[]
}

function ServiceCard({
  label,
  imageLabel,
  href,
  description,
  width,
}: {
  label: string
  imageLabel: ImageLabel
  href: string
  description: string
  width?: number
}) {
  const imageSrc = `${process.env.NEXT_PUBLIC_API_BASE_URL}${imageLabel?.url}`

  return (
    <div className="flex-1 flex flex-col gap-3 items-center justify-start">
      <div className="relative inline-grid place-items-start">
        <Image
          src={imageSrc}
          alt={imageLabel?.alternativeText || label}
          width={212}
          height={222}
          unoptimized
        />
      </div>

      <div className="font-aeonik-bold text-primary-black text-center tracking-[-0.32px]">
        <p className={label === 'Individuals' ? 'whitespace-pre' : undefined}>
          <span className="font-aeonik-regular text-lg md:text-[20px] leading-[1.5]">
            for{' '}
          </span>
          <span className="text-primary-palm text-2xl md:text-[32px] leading-[1.3]">
            {label}
          </span>
        </p>
      </div>

      <div
        className={`font-aeonik-regular text-primary-black text-base leading-[1.5] text-center${
          width ? ` w-[${width}px]` : ''
        }`}
      >
        <p className="mb-0">{description}</p>
      </div>

      <div className="flex flex-row gap-2 text-Primary-Palm">
        <Button variant="link" href={href} rightIcon={false}>
          <span className="text-sm md:text-base font-medium text-Primary-Palm">
            Learn More
          </span>
        </Button>
        <ChevronRight />
      </div>
    </div>
  )
}

export default function Services({
  heading,
  description,
  tagline,
  cta,
  href,
  SERVICES,
}: ServicesProps) {
  return (
    <section className="bg-secondary-dark-palm px-4 md:px-[60px] py-8 md:py-20">
      <div className="bg-secondary-light-scrub rounded-[40px] px-5 py-8 md:py-15 md:p-[60px] max-w-[1392px] mx-auto">
        <SectionHeader
          heading={heading}
          description={description}
          tagline={tagline}
          home={true}
        />

        <div className="flex flex-col gap-16 items-start justify-start w-full mb-8">
          <div className="flex gap-8 md:gap-12 items-start justify-start w-full flex-col md:flex-row">
            {SERVICES?.map((service) => (
              <ServiceCard
                key={service.id}
                label={service.label}
                imageLabel={service.imageLabel}
                href={service.href}
                description={service.description}
                width={service.width}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Button variant="primary" href={href} rightIcon={true} size="large">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
