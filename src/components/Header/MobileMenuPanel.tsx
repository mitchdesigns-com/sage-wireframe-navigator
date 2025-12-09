import Button from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'
import { Locale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import LanguageSwitchButton from './LanguageSwitchButton'

interface MobileMenuPanelProps {
  setIsMenuOpen: (isOpen: boolean) => void
  setActiveSubMenu: (menu: 'services' | 'resources' | null) => void
  locale: Locale
}

const mobileNavItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasSubMenu: true },
  { href: '/about', label: 'About Us' },
  { href: '/resources', label: 'Resources', hasSubMenu: true },
  { href: '/our-network', label: 'Our Network' },
  { href: '/visit-saudi', label: 'Visit Saudi' },
]

export default function MobileMenuPanel({
  setIsMenuOpen,
  setActiveSubMenu,
  locale,
}: MobileMenuPanelProps) {
  return (
    <motion.div
      key="main-menu"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="lg:hidden top-0 left-0 z-40 fixed bg-primary-palm shadow-2xl w-full h-full overflow-y-auto"
    >
      <div className="px-4 sm:px-6 pt-22 sm:pt-20 pb-8 w-full">
        <nav className="flex flex-col space-y-3 sm:space-y-4 pt-8 w-full">
          {mobileNavItems.map(({ href, label, hasSubMenu }) => (
            <div
              key={href}
              className="flex justify-between items-center hover:opacity-80 py-[9px] sm:py-[10px] ltr:font-aeonik-regular !rtl:font-arabic font-medium text-primary-spring text-lg sm:text-lg transition-all duration-200"
            >
              {hasSubMenu ? (
                <button
                  onClick={() =>
                    setActiveSubMenu(
                      label.toLowerCase() as 'services' | 'resources'
                    )
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>{label}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <Link href={href} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="my-2">
          <LanguageSwitchButton className="hover:opacity-80 font-['GE_SS_Two:Medium',_sans-serif] text-[12px] text-primary-spring" />
        </div>
        <div className="group mt-15">
          <Button
            variant="light"
            righticon
            fullwidth
            onClick={() => setIsMenuOpen(false)}
            locale={locale as 'en' | 'ar'}
          >
            Schedule Call
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
