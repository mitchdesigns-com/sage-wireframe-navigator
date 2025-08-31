'use client'

import Image from 'next/image'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

const SERVICES = [
  {
    key: 'individual',
    label: 'Individuals',
    imageLabel: '/images/services/01.png',
    href: '/services/individual',
    description:
      'We provide personalized concierge services, wellness programs, and medical treatments for a seamless healthcare journey in Saudi Arabia.',
    width: 350,
  },
  {
    key: 'businesses',
    label: 'Businesses',
    imageLabel: '/images/services/02.png',
    href: '/services/businesses',
    description:
      'We offer comprehensive corporate health solutions, including concierge support and preventive care, to enhance employee well-being and productivity.',
    width: undefined,
  },
  {
    key: 'organizations',
    label: 'Organization',
    imageLabel: '/images/services/03.png',
    href: '/services/organizations',
    description:
      'We partner with organizations, governments, and hospitals to build medical tourism ecosystems, enhancing efficiency and global reach through consultancy and training.',
    width: undefined,
  },
]

function ServiceCard({
  label,
  imageLabel,
  href,
  description,
  width,
}: {
  label: string
  imageLabel: string
  href: string
  description: string
  width?: number
}) {
  return (
    <div className="flex-1 flex flex-col gap-3 items-center justify-start">
      <div className="relative inline-grid place-items-start">
        <Image src={imageLabel} alt="" width={212} height={222} unoptimized />
      </div>

      <div className="font-aeonik-bold text-primary-black text-center tracking-[-0.32px]">
        <p className={label === 'Individuals' ? 'whitespace-pre' : undefined}>
          <span className="font-aeonik-regular text-[20px] leading-[1.5]">
            for{' '}
          </span>
          <span className="text-primary-palm text-[32px] leading-[1.3]">
            {label}
          </span>
        </p>
      </div>

      {/* Description */}
      <div
        className={`font-aeonik-regular text-primary-black text-base leading-[1.5] text-center${
          width ? ` w-[${width}px]` : ''
        }`}
      >
        <p className="mb-0">{description}</p>
      </div>

      {/* Learn More Button */}
      <Button variant="link" href={href} rightIcon={true}>
        Learn More
      </Button>
    </div>
  )
}

export default function Services() {
  return (
    <section className="bg-secondary-dark-palm px-[60px] py-20">
      <div className="bg-secondary-light-scrub rounded-[40px] p-[60px] max-w-[1392px] mx-auto">
        <SectionHeader
          heading="Tailored Services for Every Healthcare Need"
          description={`At Sage, we serve a diverse clientele, providing the care everyone
              deserves. Whether you're a patient seeking treatment or a business
              enhancing employee wellness, we're here to help.`}
          tagline="Our Services"
        />

        {/* Service Cards Grid */}
        <div className="flex flex-col gap-16 items-start justify-start w-full mb-16">
          <div className="flex gap-12 items-start justify-start w-full">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.key}
                label={service.label}
                imageLabel={service.imageLabel}
                href={service.href}
                description={service.description}
                width={service.width}
              />
            ))}
          </div>
        </div>

        {/* Explore Services CTA Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="/services" rightIcon={true}>
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
