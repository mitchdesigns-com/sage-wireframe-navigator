import React from 'react'
import DesktopDropdownToggle from './DesktopDropdownToggle'
import DesktopNavLink from './DesktopNavLink'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface DesktopNavigationProps {
  servicesOpen: boolean
  resourcesOpen: boolean
  handleServicesToggle: () => void
  handleResourcesToggle: () => void
  closeAllDropdowns: () => void
}

export default function DesktopNavigation({
  servicesOpen,
  resourcesOpen,
  handleServicesToggle,
  handleResourcesToggle,
  closeAllDropdowns,
}: DesktopNavigationProps) {
  const t = useTranslations()

  return (
    <div className="hidden lg:block">
      <nav className="relative flex justify-start items-center content-stretch gap-6 overflow-clip shrink-0">
        <DesktopNavLink
          href="/"
          label={t('Header.Home')}
          onClick={closeAllDropdowns}
        />

        <DesktopDropdownToggle
          label={t('Header.Services')}
          isOpen={servicesOpen}
          onToggle={handleServicesToggle}
        />

        <DesktopNavLink
          href="/about"
          label={t('Header.About')}
          onClick={closeAllDropdowns}
        />

        <DesktopDropdownToggle
          label={t('Header.Resources')}
          isOpen={resourcesOpen}
          onToggle={handleResourcesToggle}
          color={resourcesOpen ? '#CAF48E' : undefined} // MinusIcon in original had no color, so passing undefined or a default
        />

        <DesktopNavLink
          href="/our-network"
          label={t('Header.Network')}
          onClick={closeAllDropdowns}
        />

        <div className="relative ltr:font-aeonik-regular !rtl:font-arabic text-[16px] text-primary-spring not-italic text-nowrap leading-[0] shrink-0">
          <Link
            href="/visit-saudi"
            onClick={closeAllDropdowns}
            className="hover:opacity-80 leading-[1.5] whitespace-pre transition-all duration-200"
          >
            {t('Header.Visit')}
          </Link>
        </div>
      </nav>
    </div>
  )
}
