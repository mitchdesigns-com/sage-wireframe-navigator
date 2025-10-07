import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'

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
  return (
    <section className={`py-28 ${bgColor}`}>
      <div className="max-w-[1392px] mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-white text-[40px] font-bold leading-[2.75rem] tracking-[-1px]">
              {title.split('<br/>').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('<br/>').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <div>
            <p className="text-white text-p">{description}</p>
            <Link
              href={buttonHref}
              className="inline-block rounded-lg font-medium group cursor-pointer pt-8"
            >
              <Button variant="light" rightIcon fullWidth>
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        <div className="aspect-[1384/540] bg-center bg-cover bg-no-repeat rounded-[40px] relative">
          <Image
            fill
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
            alt={image.alternativeText}
            className="rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
