import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import { useLocale } from 'next-intl'

interface ServiceSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  image: {
    url: string
    alternativeText: string
  }
  bgColor?: string
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  image,
  bgColor = 'bg-Primary-Palm',
}) => {
  const locale = useLocale()

  return (
    <section className={`py-8 md:py-28 ${bgColor}`}>
      <div className="max-w-[1392px] mx-auto space-y-6 md:space-y-20 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
          <div>
            <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-[2.75rem] tracking-[-1px]">
              {title.split('<br/>').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('<br/>').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <div>
            <p className="text-white text-base md:text-lg">{description}</p>
            <Link
              href={buttonHref}
              className="inline-block rounded-lg font-medium group cursor-pointer pt-8"
            >
              <Button
                variant="light"
                rightIcon
                fullWidth
                locale={locale as 'en' | 'ar'}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        <div className="aspect-[1384/540] bg-center bg-cover bg-no-repeat rounded-3xl md:rounded-[40px] relative">
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
            alt={image.alternativeText || 'service image'}
            className="rounded-3xl md:rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
