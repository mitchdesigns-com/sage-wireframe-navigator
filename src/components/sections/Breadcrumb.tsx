import Link from 'next/link'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'
import { useLocale } from 'next-intl'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
  heroPages?: boolean
  heroWithImage?: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className = '',
  heroPages,
  heroWithImage,
}) => {
  const locale = useLocale()
  const defaultSeparator = (
    <KeyboardArrowDown
      className={` w-4 h-4 ${locale === 'ar' ? 'rotate-90' : 'rotate-270'}`}
      color={heroWithImage ? '#025850' : '#ffffff'}
    />
  )

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`text-xs md:text-sm font-regular ${
                  heroWithImage ? 'text-Primary-Palm' : 'text-white'
                } transition`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`text-xs md:text-sm font-regular ${
                  heroPages
                    ? 'text-[#a5a5a5]'
                    : heroWithImage
                      ? 'text-[#9ABCB9]'
                      : 'text-[#626262]'
                }`}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="flex items-center mx-2">
                {separator ?? defaultSeparator}
              </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
