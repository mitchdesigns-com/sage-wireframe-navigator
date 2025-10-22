'use client'

import Button from '@/components/ui/Button'
import { usePathname, useRouter } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState, useTransition } from 'react'
import { Locale, useLocale } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ResourceData } from '../../types/header'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'
import MinusIcon from '../svg/MinusIcon'
import ResourcesMenu from './ResourcesMenu'
import ServicesMenu from './ServicesMenu'

interface HeaderClientProps {
  ResourceData: ResourceData
}

export default function HeaderClient({ ResourceData }: HeaderClientProps) {
  const locale = useLocale()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<
    null | 'services' | 'resources'
  >(null)

  console.log(isScrolled)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  // Close dropdowns when clicking outside
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
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // const handleMenuClick = (type: 'services' | 'resources') => {
  //   if (type === 'services') {
  //     setServicesOpen(true)
  //     setIsMenuOpen(false)
  //   } else if (type === 'resources') {
  //     setResourcesOpen(true)
  //     setIsMenuOpen(false)
  //   }
  // }
  const [isPending, startTransition] = useTransition()
  console.log(isPending)
  function handleLanguageSwitch(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error: we skip runtime checks because pathname and params match
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }
  return (
    <div
      ref={headerRef}
      className={`bg-primary-palm content-stretch flex flex-col items-center justify-start w-full top-0 z-50 relative`}
    >
      {/* Top Banner */}
      <div className="bg-secondary-dark-palm box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0.5 relative shrink-0 w-full z-50">
        <div className="font-aeonik-medium leading-[0] not-italic relative shrink-0 text-primary-scrub text-[12px] text-nowrap">
          <p className="leading-[1.5] whitespace-pre">
            Empowering Wellness, Globally.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <motion.div
        className="box-border max-w-[1392px] w-full mx-auto flex items-center justify-between overflow-clip py-[14px] md:py-[22px] relative shrink-0 "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Left Section - Logo & Navigation */}
        <div className="content-stretch flex gap-[72px] items-center justify-start relative shrink-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 z-50 ps-4 md:ps-0"
            onClick={closeAllDropdowns}
          >
            <motion.div className="h-12 relative shrink-0 w-[110px]">
              <div className="text-primary-spring font-aeonik-regular text-[32px] leading-[1.2]">
                <div className="w-[110px] h-[48px] relative">
                  {isMobile ? (
                    <Image
                      fill
                      src="/favicon/favicon.png"
                      alt="Sage Logo"
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      fill
                      src="/images/company-logo.webp"
                      alt="Sage Logo"
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav className="content-stretch flex gap-6 items-center justify-start overflow-clip relative shrink-0">
              <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0">
                <Link
                  href="/"
                  onClick={closeAllDropdowns}
                  className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap hover:opacity-80 transition-all duration-200"
                >
                  <p className="leading-[1.5] whitespace-pre">Home</p>
                </Link>
              </div>

              <button
                onClick={handleServicesToggle}
                className="box-border content-stretch cursor-pointer flex gap-1 items-center justify-start overflow-visible p-0 relative shrink-0 group"
              >
                <div className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap group-hover:opacity-80 transition-all duration-200">
                  <p className="leading-[1.5] whitespace-pre">Services</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-6">
                  {servicesOpen ? (
                    <MinusIcon color="#CAF48E" />
                  ) : (
                    <KeyboardArrowDown className="rotate-360" />
                  )}
                </div>
              </button>

              <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0">
                <Link
                  href="/about"
                  onClick={closeAllDropdowns}
                  className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap hover:opacity-80 transition-all duration-200"
                >
                  <p className="leading-[1.5] whitespace-pre">About Us</p>
                </Link>
              </div>

              <button
                onClick={handleResourcesToggle}
                className="box-border content-stretch cursor-pointer flex gap-1 items-center justify-start overflow-visible p-0 relative shrink-0 group"
              >
                <div className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap group-hover:opacity-80 transition-all duration-200">
                  <p className="leading-[1.5] whitespace-pre">Resources</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-6">
                  {resourcesOpen ? (
                    <MinusIcon />
                  ) : (
                    <KeyboardArrowDown className="rotate-360" />
                  )}
                </div>
              </button>

              <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0">
                <Link
                  href="/our-network"
                  onClick={closeAllDropdowns}
                  className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap hover:opacity-80 transition-all duration-200"
                >
                  <p className="leading-[1.5] whitespace-pre">Our Network</p>
                </Link>
              </div>

              <div className="font-aeonik-regular leading-[0] not-italic relative shrink-0 text-primary-spring text-[16px] text-nowrap">
                <Link
                  href="/visit-saudi"
                  onClick={closeAllDropdowns}
                  className="leading-[1.5] whitespace-pre hover:opacity-80 transition-all duration-200"
                >
                  Visit Saudi
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Right Section - Language Toggle & CTA Button */}
        <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
          {/* Arabic Language Toggle */}
          <div className="hidden lg:block font-['GE_SS_Two:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-primary-spring text-[12px] text-nowrap hover:opacity-80 transition-all duration-200 cursor-pointer">
            <p
              className="leading-[1.5] whitespace-pre"
              dir="auto"
              onClick={() => handleLanguageSwitch('ar')}
            >
              تصفح بالعربية
            </p>
          </div>

          {/* Schedule Call Button - Desktop */}
          <div className="hidden lg:block group cursor-pointer">
            <Button
              variant="light"
              righticon={true}
              locale={locale as 'en' | 'ar'}
            >
              Schedule Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-primary-spring hover:opacity-80 hover:bg-[#036e65] z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Dropdown Menus */}
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

      {/* Mobile Navigation Panel */}
      <AnimatePresence mode="wait">
        {isMenuOpen && !activeSubMenu && (
          <motion.div
            key="main-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-0 left-0 h-full w-full bg-primary-palm shadow-2xl z-40 overflow-y-auto"
          >
            <div className="px-4 sm:px-6 pt-22 sm:pt-20 pb-8 w-full">
              <nav className="flex flex-col space-y-3 sm:space-y-4 w-full pt-8">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/services', label: 'Services', hasSubMenu: true },
                  { href: '/about', label: 'About Us' },
                  { href: '/resources', label: 'Resources', hasSubMenu: true },
                  { href: '/our-network', label: 'Our Network' },
                  { href: '/visit-saudi', label: 'Visit Saudi' },
                ].map(({ href, label, hasSubMenu }) => (
                  <div
                    key={href}
                    className="flex items-center justify-between text-primary-spring font-aeonik-regular text-lg font-medium sm:text-lg py-[9px] sm:py-[10px] hover:opacity-80 transition-all duration-200"
                  >
                    {hasSubMenu ? (
                      <button
                        onClick={() =>
                          setActiveSubMenu(
                            label.toLowerCase() as 'services' | 'resources'
                          )
                        }
                        className="flex items-center justify-between w-full text-left"
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
              <div className="my-2 ">
                {' '}
                <div
                  className="font-['GE_SS_Two:Medium',_sans-serif] text-primary-spring text-lg font-mediums mb-4"
                  // dir="auto"
                >
                  {' '}
                  تصفح بالعربية{' '}
                </div>{' '}
              </div>
              <div className="mt-15 group">
                {' '}
                <Button
                  variant="light"
                  righticon
                  fullwidth
                  onClick={() => setIsMenuOpen(false)}
                  locale={locale as 'en' | 'ar'}
                >
                  {' '}
                  Schedule Call{' '}
                </Button>{' '}
              </div>
            </div>
          </motion.div>
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
