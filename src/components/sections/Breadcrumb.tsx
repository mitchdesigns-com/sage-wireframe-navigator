import Link from 'next/link'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <KeyboardArrowDown className="rotate-270" color="#ffffff" />,
  className = '',
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center ${className} py-16`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sm font-regular text-white  transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-regular text-[#626262]">
                {item.label}
              </span>
            )}

            {!isLast && <span className="mx-2">{separator}</span>}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
