'use client'

import Button from '@/components/ui/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { ResourceData } from '../../types/header'
import DesktopNavigation from './DesktopNavigation'
import HeaderLogo from './HeaderLogo'
import HeaderTopBanner from './HeaderTopBanner'
import LanguageSwitchButton from './LanguageSwitchButton'
import MobileMenuButton from './MobileMenuButton'
import MobileMenuPanel from './MobileMenuPanel'
import ResourcesMenu from './ResourcesMenu'
import ServicesMenu from './ServicesMenu'

interface HeaderClientProps {
  ResourceData: ResourceData
}

export default function HeaderClient({ ResourceData }: HeaderClientProps) {
  const locale = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState<
    null | 'services' | 'resources'
  >(null)
  const [isMobile, setIsMobile] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
        setResourcesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen)
    setResourcesOpen(false)
  }

  const handleResourcesToggle = () => {
    setResourcesOpen(!resourcesOpen)
    setServicesOpen(false)
  }

  const closeAllDropdowns = () => {
    setServicesOpen(false)
    setResourcesOpen(false)
  }
  const t = useTranslations()

  return (
    <div
      ref={headerRef}
      className={`bg-primary-palm content-stretch flex flex-col items-center justify-start w-full top-0 z-50 relative `}
    >
      <HeaderTopBanner />
      <motion.div
        className="box-border relative flex justify-between items-center mx-auto py-[14px] md:py-[22px] w-full max-w-[1392px] overflow-clip shrink-0 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex justify-start items-center content-stretch gap-[72px] shrink-0">
          <HeaderLogo isMobile={isMobile} onClick={closeAllDropdowns} />
          <DesktopNavigation
            servicesOpen={servicesOpen}
            resourcesOpen={resourcesOpen}
            handleServicesToggle={handleServicesToggle}
            handleResourcesToggle={handleResourcesToggle}
            closeAllDropdowns={closeAllDropdowns}
          />
        </div>
        <div className="relative flex justify-start items-center content-stretch gap-4 shrink-0">
          <LanguageSwitchButton />
          <div className="group hidden lg:block cursor-pointer">
            <Button
              variant="light"
              righticon={true}
              locale={locale as 'en' | 'ar'}
            >
              {t('Header.Schedule')}
            </Button>
          </div>
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              setActiveSubMenu(null)
            }}
          />
        </div>
      </motion.div>
      <AnimatePresence>
        {servicesOpen && (
          <ServicesMenu
            serviceCategories={ResourceData.serviceCategories}
            isOpen={servicesOpen}
            onClose={() => setServicesOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {resourcesOpen && (
          <ResourcesMenu
            resourceItems={ResourceData.resourceItems}
            isOpen={resourcesOpen}
            onClose={() => setResourcesOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isMenuOpen && !activeSubMenu && (
          <MobileMenuPanel
            setIsMenuOpen={setIsMenuOpen}
            setActiveSubMenu={setActiveSubMenu}
            locale={locale}
          />
        )}

        {isMenuOpen && activeSubMenu === 'resources' && (
          <ResourcesMenu
            resourceItems={ResourceData.resourceItems}
            isOpen={true}
            onClose={() => setActiveSubMenu(null)}
          />
        )}
        {isMenuOpen && activeSubMenu === 'services' && (
          <ServicesMenu
            serviceCategories={ResourceData.serviceCategories}
            isOpen={true}
            onClose={() => setActiveSubMenu(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
