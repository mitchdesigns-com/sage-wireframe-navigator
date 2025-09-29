import React from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'
import Image from 'next/image'

interface List {
  list: { url: string; alternativeText: string }[]
}
interface CentersSectionProps {
  tagline?: string
  title: string
  description?: string
  list?: List[]
  ctaText?: string
  href?: string
  backgroundColor?: string
  textColor?: string
  reverse?: boolean // if true => List first
  secondaryButton?: boolean
}

const CentersSection: React.FC<CentersSectionProps> = ({
  tagline,
  title,
  description,
  list,
  ctaText,
  href,
  backgroundColor = 'white',
  textColor = 'black',
  reverse = false,
  secondaryButton,
}) => {
  return (
    <section style={{ backgroundColor }}>
      <div className="container-custom mx-auto max-w-[1392px] py-28">
        <div
          className={`flex items-center gap-18 ${
            reverse ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Content */}
          <div className="flex-1">
            <div className="mb-8">
              <div>
                <Tagline
                  text={tagline}
                  taglineColor={backgroundColor === '#DAF7AF' ? '#DAF7AF' : ''}
                />
              </div>
              <div className="mb-8">
                <h2
                  className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 whitespace-pre-line"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
                <p
                  className={`text-p ${textColor === '#1E1E1E' ? 'text-Secondary-Text' : 'text-Secondary-Light-Scrub'} whitespace-pre-line`}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* CTA */}
            {ctaText && (
              <Link
                href={href || '/contact'}
                className={`inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer ${secondaryButton ? ' w-[148px]' : ''}`}
              >
                <Button
                  variant={
                    backgroundColor === '#DAF7AF'
                      ? 'primary'
                      : backgroundColor === '#F0F8F8'
                        ? 'primary'
                        : backgroundColor === '#E2F2F1'
                          ? 'primary'
                          : 'light'
                  }
                  rightIcon={secondaryButton ? false : true}
                  fullWidth
                >
                  {ctaText}
                </Button>
              </Link>
            )}
            {secondaryButton && (
              <Button href="/our-network" variant="light-link" rightIcon={true}>
                Explore Our Network
              </Button>
            )}
          </div>

          {/* Image */}
          <div className="flex-1">
            {list && (
              <div className="grid grid-cols-2 gap-4 ">
                {list[0]?.list.map((li, idx) => (
                  <div
                    key={idx}
                    className="flex items-start  flex-col bg-white w-full h-[120px] rounded-[8px] relative overflow-hidden"
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.url}`}
                      alt="center"
                      className="object-contain p-5"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CentersSection
