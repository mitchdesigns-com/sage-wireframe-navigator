'use client'

import Button from '@/components/ui/Button'

interface Benefit {
  icon: React.ReactNode
  text: string
}

interface ContentWithImageProps {
  title: string
  subtitle?: string
  description: string
  benefits?: Benefit[]
  cta?: {
    label: string
    href: string
  }
  image?: {
    src?: string
    alt?: string
    placeholder?: React.ReactNode
  }
  flip?: boolean
  color?: 'sage' | 'spring' | 'white'
}

export default function ContentWithImage({
  title,
  subtitle,
  description,
  benefits = [],
  cta,
  image,
  flip = false,
  color = 'white',
}: ContentWithImageProps) {
  return (
    <section
      className={`section-padding ${
        color === 'sage'
          ? 'bg-sage-50'
          : color === 'spring'
            ? 'bg-Primary-Spring-Med'
            : 'bg-white'
      }`}
    >
      <div className="container-custom mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            flip ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Text Content */}
          <div>
            {subtitle && (
              <div className="text-sm font-medium text-sage-400 mb-4">
                {subtitle}
              </div>
            )}

            <h2 className="heading-lg mb-6">{title}</h2>

            <p className="text-body mb-8">{description}</p>

            {/* Benefits List */}
            {benefits.length > 0 && (
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-sage-400 mt-1">
                        {benefit.icon}
                      </div>
                      <p className="text-gray-700">{benefit.text}</p>
                    </div>
                  )
                })}
              </div>
            )}

            {/* CTA Button */}
            {cta && <Button href={cta.href}>{cta.label}</Button>}
          </div>

          {/* Image */}
          <div>
            {image?.src ? (
              <img
                src={image.src}
                alt={image.alt || ''}
                className="w-full h-auto rounded-2xl object-cover"
              />
            ) : (
              <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                {image?.placeholder || (
                  <div className="text-center text-gray-400">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 
                          002 2h12a2 2 0 002-2V5a2 2 
                          0 00-2-2H4zm12 12H4l4-8 3 
                          6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm">Placeholder Image</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
