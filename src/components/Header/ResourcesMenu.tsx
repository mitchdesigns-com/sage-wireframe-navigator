'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ResourceColumns } from '../../types/header'

interface ResourcesMenuProps {
  resourceItems: ResourceColumns
  isOpen: boolean
  onClose: () => void
}

export default function ResourcesMenu({
  resourceItems,
  isOpen,
  onClose,
}: ResourcesMenuProps) {
  if (!isOpen) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50 max-h-[90vh] overflow-y-auto"
    >
      {/* Menu content */}
      <div className="bg-[#e6eeed] px-4 md:px-5  py-8">
        <div className="max-w-[1392px] w-full mx-auto">
          <div className="flex gap-0 md:gap-8 items-start justify-start flex-col md:flex-row">
            <p className="text-lg font-medium flex md:hidden" onClick={onClose}>
              <div className="flex gap-2 justify-center items-center">
                <ChevronLeft /> Resources
              </div>
            </p>
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-0 md:gap-2 md:h-[358px]">
              {resourceItems?.column1.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-[30px] md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                      alt={item.icon.url || ''}
                      width={24}
                      height={24}
                    />{' '}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="ltr:font-aeonik-bold !rtl:font-arabic text-Neutral-Darkest text-sm md:text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="ltr:font-aeonik-regular !rtl:font-arabic text-[#626262] text-xs md:text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-0 md:gap-2 md:h-[358px]">
              {resourceItems?.column2.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-[30px] md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                      alt={item.icon.url || ''}
                      width={24}
                      height={24}
                    />{' '}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="ltr:font-aeonik-bold !rtl:font-arabic text-Neutral-Darkest text-sm md:text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="ltr:font-aeonik-regular !rtl:font-arabic text-[#626262] text-xs md:text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-0 md:gap-2 md:h-[358px]">
              {resourceItems?.column3.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="group flex gap-2 items-start px-[30px] md:px-3 py-4 rounded-[10px] hover:bg-Secondary-Light-Scrub transition-colors duration-200 w-80"
                >
                  <div className="relative shrink-0 size-6 text-primary-light-sage group-hover:text-Primary-Scrub">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon.url}`}
                      alt={item.icon.url || ''}
                      width={24}
                      height={24}
                    />{' '}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1">
                    <div className="ltr:font-aeonik-bold !rtl:font-arabic text-Neutral-Darkest text-sm md:text-base leading-[1.5]">
                      {item.title}
                    </div>
                    <div className="ltr:font-aeonik-regular !rtl:font-arabic text-[#626262] text-xs md:text-sm leading-[1.5]">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Image placeholder */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="relative  w-[314px] h-[386px] ">
                <Image
                  src="/images/generalImages/PlaceholderResources.png"
                  alt="Doctor"
                  fill
                  className="rounded-[24px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </motion.div>
  )
}
