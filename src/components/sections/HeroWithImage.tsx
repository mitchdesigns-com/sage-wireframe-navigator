import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import Tagline from './Tagline'
import Button from '../ui/Button'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroWithImageProps {
  image: string
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
    rightIcon?: boolean
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
  return (
    <section>
      <div className="h-[680px] relative">
        <Image src={image} fill alt={imageAlt} className="object-cover" />
      </div>

      <div className="mx-auto max-w-[1392px] w-full pt-8 pb-20">
        <Breadcrumb items={breadcrumbItems} heroWithImage />

        <div className="flex gap-20 justify-center items-end pt-16">
          <div className="space-y-2 min-w-[656px]">
            {tagline && <Tagline text={tagline} />}
            <h1 className="text-Primary-Black text-[56px] leading-[1.2] tracking-[-0.56px]">
              {title}
            </h1>
          </div>

          <div>
            {description && (
              <p className="text-Secondary-Text text-p pb-8">{description}</p>
            )}
            <div className="gap-4 flex">
              {primaryButton && (
                <Link href={primaryButton.href} className="inline-block group">
                  <Button
                    variant={primaryButton.variant || 'primary'}
                    rightIcon={primaryButton.rightIcon}
                    fullWidth
                  >
                    {primaryButton.label}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link href={secondaryButton.href} className="inline-block">
                  <Button
                    variant={secondaryButton.variant || 'light'}
                    rightIcon={secondaryButton.rightIcon}
                    fullWidth
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
