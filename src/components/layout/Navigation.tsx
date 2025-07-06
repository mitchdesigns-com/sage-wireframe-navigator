'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationProps {
  className?: string
  isMobile?: boolean
  onItemClick?: () => void
}

const navigationItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'For Individuals', href: '/services/individuals' },
      { label: 'For Businesses', href: '/services/businesses' },
      { label: 'For Organizations', href: '/services/organizations' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Patient Guides', href: '/resources/patient-guides' },
      { label: 'Medical Tourism', href: '/resources/medical-tourism' },
      { label: 'Success Stories', href: '/resources/success-stories' },
    ],
  },
  { label: 'Our Network', href: '/our-network' },
  { label: 'Visit Saudi', href: '/visit-saudi' },
]

export default function Navigation({ className, isMobile, onItemClick }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleItemClick = () => {
    setOpenDropdown(null)
    onItemClick?.()
  }

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className={cn('flex items-center space-x-8', className)}>
      {navigationItems.map((item) => {
        if (item.children) {
          return (
            <div key={item.label} className="relative group">
              {isMobile ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-sage-400 font-medium py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        'transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-gray-600 hover:text-sage-400 py-1"
                          onClick={handleItemClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-sage-400 font-medium py-2">
                    <span>{item.label}</span>
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:text-sage-400 hover:bg-gray-50"
                          onClick={handleItemClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-sage-400 font-medium py-2 transition-colors duration-200"
            onClick={handleItemClick}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
