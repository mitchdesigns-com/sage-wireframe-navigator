// src/components/layout/Navigation.tsx
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import FullWidthDropdown from '@/components/ui/FullWidthDropdown'

// Types
interface NavigationItem {
  label: string
  href?: string
  description?: string
  icon?: React.ReactNode
  children?: NavigationItem[]
}

interface NavigationProps {
  className?: string
  isMobile?: boolean
  onItemClick?: () => void
}

// Navigation Data
const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'For Individuals',
        children: [
          {
            label: 'Healthcare For Your Needs',
            href: '/services/individual/healthcare',
            description: 'Discover tailored treatments in top Saudi hospitals.',
          },
          {
            label: 'Concierge Services',
            href: '/services/individual/concierge',
            description:
              'We handle everything from airport transfers to dietary needs.',
          },
        ],
      },
      {
        label: 'For Businesses',
        children: [
          {
            label: 'Healthcare for Your Team',
            href: '/services/businesses/healthcare',
            description:
              'We offer customized corporate healthcare and VIP medical access for your employee.',
          },
          {
            label: 'Concierge Services',
            href: '/services/businesses/concierge',
            description:
              'We offer concierge services for executives, featuring corporate rates.',
          },
          {
            label: 'Consultation & Training',
            href: '/services/businesses/consultation',
            description:
              'We offer guidance in wellness, medical travel, and healthcare team training.',
          },
        ],
      },
      {
        label: 'For Organizations',
        children: [
          {
            label: 'Healthcare Services',
            href: '/services/organizations/healthcare',
            description:
              'We streamline cross-border care with institutional-level coordination.',
          },
          {
            label: 'Concierge Services',
            href: '/services/organizations/concierge',
            description:
              'We manage group concierge services with compliance and care.',
          },
          {
            label: 'Consultation & Training',
            href: '/services/organizations/consultation',
            description:
              'We consult on public health programs, medical tourism, and system optimization.',
          },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Guides',
        href: '/resources/guides',
        description: 'Comprehensive healthcare resources and insights',
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        description: 'Real-life success stories from our clients',
      },
      {
        label: 'Webinars',
        href: '/resources/webinars',
        description: 'Interactive sessions with industry experts',
      },
      {
        label: 'Blog',
        href: '/resources/blog',
        description: 'Latest trends and tips in healthcare',
      },
      {
        label: 'FAQs',
        href: '/resources/faqs',
        description: 'Frequently asked questions about our services',
      },
      {
        label: 'CSR Initiatives',
        href: '/resources/csr',
        description: 'Support our community-focused projects',
      },
      {
        label: 'Certifications',
        href: '/resources/certifications',
        description: 'Verified Trust and Compliance',
      },
      {
        label: 'News & Events',
        href: '/resources/news',
        description: 'Stay Informed with Sage',
      },
      {
        label: 'Careers',
        href: '/careers',
        description: 'Join our dedicated team of professionals',
      },
      {
        label: 'Contact Us',
        href: '/contact',
        description: 'Reach out for personalized assistance',
      },
    ],
  },
  {
    label: 'Our Network',
    href: '/our-network',
  },
  {
    label: 'Visit Saudi',
    href: '/visit-saudi',
  },
]

// Main Navigation Component
export default function Navigation({
  className,
  isMobile,
  onItemClick,
}: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)

  // Clear any pending timeout
  const clearTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Handle dropdown open
  const openDropdown = useCallback(
    (label: string) => {
      clearTimeout()
      setActiveDropdown(label)
    },
    [clearTimeout]
  )

  // Handle dropdown close with delay
  const closeDropdown = useCallback(() => {
    clearTimeout()
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [clearTimeout])

  // Handle immediate close (for clicks)
  const closeDropdownImmediate = useCallback(() => {
    clearTimeout()
    setActiveDropdown(null)
    onItemClick?.()
  }, [clearTimeout, onItemClick])

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Render mobile navigation
  if (isMobile) {
    return (
      <MobileNavigation
        items={NAVIGATION_ITEMS}
        onItemClick={closeDropdownImmediate}
        className={className}
      />
    )
  }

  // Render desktop navigation
  return (
    <div ref={containerRef}>
      <nav className={cn('flex items-center space-x-8', className)}>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.label}
            item={item}
            isActive={activeDropdown === item.label}
            onMouseEnter={() => {
              // Only open dropdown for items with children
              if (item.children) {
                openDropdown(item.label)
              }
            }}
            onMouseLeave={closeDropdown}
            onClick={closeDropdownImmediate}
          />
        ))}
      </nav>

      {/* Full Width Dropdown */}
      <DropdownContainer
        activeDropdown={activeDropdown}
        items={NAVIGATION_ITEMS}
        onMouseEnter={clearTimeout}
        onMouseLeave={closeDropdown}
        onItemClick={closeDropdownImmediate}
      />
    </div>
  )
}

// Navigation Item Component
interface NavigationItemProps {
  item: NavigationItem
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

function NavigationItem({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: NavigationItemProps) {
  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          className="flex items-center gap-2.5 text-[#000404] font-normal text-base leading-[1.5] py-2 transition-colors duration-200 hover:text-gray-600"
          type="button"
        >
          <span>{item.label}</span>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="size-6"
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>
      </div>
    )
  }

  return (
    <Link
      href={item.href!}
      className="text-[#000404] font-normal text-base leading-[1.5] py-2 transition-colors duration-200 hover:text-gray-600"
      onClick={onClick}
    >
      {item.label}
    </Link>
  )
}

// Dropdown Container Component
interface DropdownContainerProps {
  activeDropdown: string | null
  items: NavigationItem[]
  onMouseEnter: () => void
  onMouseLeave: () => void
  onItemClick: () => void
}

function DropdownContainer({
  activeDropdown,
  items,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}: DropdownContainerProps) {
  // Find the active item
  const activeItem = items.find((item) => item.label === activeDropdown)

  // Don't render if no active dropdown or no children
  if (!activeDropdown || !activeItem?.children) {
    return null
  }

  // Determine dropdown type
  const getDropdownType = (label: string): 'services' | 'resources' => {
    return label.toLowerCase() === 'services' ? 'services' : 'resources'
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeDropdown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute left-0 top-full w-screen z-50"
        style={{ marginLeft: `calc(-50vw + 50%)` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <FullWidthDropdown
          items={activeItem.children}
          type={getDropdownType(activeDropdown)}
          onItemClick={onItemClick}
        />
      </motion.div>
    </AnimatePresence>
  )
}

// Mobile Navigation Component
interface MobileNavigationProps {
  items: NavigationItem[]
  onItemClick: () => void
  className?: string
}

function MobileNavigation({ items, onItemClick, className }: MobileNavigationProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (label: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(label)) {
      newOpenSections.delete(label)
    } else {
      newOpenSections.add(label)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <nav className={cn('flex flex-col space-y-2', className)}>
      {items.map((item) => (
        <MobileNavigationItem
          key={item.label}
          item={item}
          isOpen={openSections.has(item.label)}
          onToggle={() => toggleSection(item.label)}
          onItemClick={onItemClick}
        />
      ))}
    </nav>
  )
}

// Mobile Navigation Item Component
interface MobileNavigationItemProps {
  item: NavigationItem
  isOpen: boolean
  onToggle: () => void
  onItemClick: () => void
}

function MobileNavigationItem({ 
  item, 
  isOpen, 
  onToggle, 
  onItemClick 
}: MobileNavigationItemProps) {
  if (item.children) {
    return (
      <div>
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
          type="button"
        >
          <span>{item.label}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                {item.children.map((child) => (
                  <MobileNavigationItem
                    key={child.label}
                    item={child}
                    isOpen={false}
                    onToggle={() => {}}
                    onItemClick={onItemClick}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      href={item.href!}
      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
      onClick={onItemClick}
    >
      {item.icon && (
        <span className="text-gray-400 flex-shrink-0">{item.icon}</span>
      )}
      <span>{item.label}</span>
    </Link>
  )
}