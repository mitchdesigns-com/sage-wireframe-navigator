import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'
import Button from '../ui/Button'
import { useLocale } from 'next-intl'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroWithImageProps {
  image: {
    url: string
    alternativeText: string
  }
  imageAlt?: string
  breadcrumbItems: BreadcrumbItem[]
  tagline?: string
  title: React.ReactNode
  description?: string
  primaryButton?: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    rightIcon?: boolean
  }
  secondaryButton?: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    righticon?: boolean
  }
}

const HeroWithImage: React.FC<HeroWithImageProps> = ({
  image,
  imageAlt = 'hero image',
  breadcrumbItems,
  tagline,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  const locale = useLocale()

  return (
    <section>
      <div className="h-[320px] md:h-[680px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
          fill
          alt={imageAlt}
          className="object-cover object-top "
        />
      </div>

      <div className="mx-auto max-w-[1392px] w-full py-8 md:pt-8 md:pb-20 px-4 md:px-0">
        <Breadcrumb items={breadcrumbItems} heroWithImage />

        <div className="flex gap-4 md:gap-20 justify-center items-end pt-8 md:pt-16 flex-col md:flex-row">
          <div className="space-y-2 min-w-full md:min-w-[656px]">
            {tagline && <Tagline text={tagline} />}
            <h1 className="text-Primary-Black text-[34px] md:text-[56px] leading-[1.2] tracking-[-0.56px]">
              {title}
            </h1>
          </div>

          <div className="w-full">
            {description && (
              <p className="text-Secondary-Text text-base md:text-lg pb-8">
                {description}
              </p>
            )}
            <div className="gap-4 flex overflow-x-auto scrollbar-hide md:overflow-visible">
              {primaryButton && (
                <Link href={primaryButton.href} className="inline-block group">
                  <Button
                    variant={primaryButton.variant || 'primary'}
                    righticon={primaryButton.rightIcon}
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {primaryButton.label}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link href={secondaryButton.href} className="inline-block">
                  <Button
                    variant={secondaryButton.variant || 'light'}
                    righticon={secondaryButton.righticon}
                    fullwidth
                    locale={locale as 'en' | 'ar'}
                  >
                    {secondaryButton.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithImage
