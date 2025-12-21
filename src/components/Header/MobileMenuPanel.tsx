import Button from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'
import { Locale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import LanguageSwitchButton from './LanguageSwitchButton'

interface MobileMenuPanelProps {
  setIsMenuOpen: (isOpen: boolean) => void
  setActiveSubMenu: (menu: 'services' | 'resources' | null) => void
  locale: Locale
}

export default function MobileMenuPanel({
  setIsMenuOpen,
  setActiveSubMenu,
  locale,
}: MobileMenuPanelProps) {
  const t = useTranslations()

  const mobileNavItems = [
    { href: '/', label: t('Header.Home') },
    { href: '/services', label: t('Header.Services'), hasSubMenu: true },
    { href: '/about', label: t('Header.About') },
    { href: '/resources', label: t('Header.Resources'), hasSubMenu: true },
    { href: '/our-network', label: t('Header.Network') },
    { href: '/visit-saudi', label: t('Header.Visit') },
  ]
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
                  onClick={() => {
                    if (label === t('Header.Services')) {
                      setActiveSubMenu('services')
                    }
                    if (label === t('Header.Resources')) {
                      setActiveSubMenu('resources')
                    }
                  }}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>{label}</span>
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
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
          <Link href="/contact#ScheduleMeeting">
            <Button
              variant="light"
              righticon
              fullwidth
              onClick={() => setIsMenuOpen(false)}
              locale={locale as 'en' | 'ar'}
            >
              {t('Header.Schedule')}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
