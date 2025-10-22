'use client'

import Button from '@/components/ui/Button'
import { usePathname, useRouter } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Locale, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState, useTransition } from 'react'
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

  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<
    null | 'services' | 'resources'
  >(null)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

  const [isPending, startTransition] = useTransition()

  function handleLanguageSwitch(
    nextLocale: Locale,
    nextParams: Record<string, string>
  ) {
    startTransition(() => {
      router.replace({ pathname, params: nextParams }, { locale: nextLocale })
    })
  }

  return (
    <div
      ref={headerRef}
      className={`bg-primary-palm content-stretch flex flex-col items-center justify-start w-full top-0 z-50 relative`}
    >
      {/* Top Banner */}
      <div className="z-50 box-border relative flex justify-center items-center content-stretch gap-2.5 bg-secondary-dark-palm px-2.5 py-0.5 w-full shrink-0">
        <div className="relative font-aeonik-medium text-[12px] text-primary-scrub not-italic text-nowrap leading-[0] shrink-0">
          <p className="leading-[1.5] whitespace-pre">
            Empowering Wellness, Globally.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <motion.div
        className="box-border relative flex justify-between items-center mx-auto py-[14px] md:py-[22px] w-full max-w-[1392px] overflow-clip shrink-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Left Section - Logo & Navigation */}
        <div className="relative flex justify-start items-center content-stretch gap-[72px] shrink-0">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 flex items-center space-x-2 ps-4 md:ps-0"
            onClick={closeAllDropdowns}
          >
            <motion.div className="relative w-[110px] h-12 shrink-0">
              <div className="font-aeonik-regular text-[32px] text-primary-spring leading-[1.2]">
                <div className="relative w-[110px] h-[48px]">
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
            <nav className="relative flex justify-start items-center content-stretch gap-6 overflow-clip shrink-0">
              <div className="relative flex justify-start items-start content-stretch gap-2.5 shrink-0">
                <Link
                  href="/"
                  onClick={closeAllDropdowns}
                  className="relative hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0"
                >
                  <p className="leading-[1.5] whitespace-pre">Home</p>
                </Link>
              </div>

              <button
                onClick={handleServicesToggle}
                className="group box-border relative flex justify-start items-center content-stretch gap-1 p-0 overflow-visible cursor-pointer shrink-0"
              >
                <div className="relative group-hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0">
                  <p className="leading-[1.5] whitespace-pre">Services</p>
                </div>
                <div className="relative size-6 overflow-clip shrink-0">
                  {servicesOpen ? (
                    <MinusIcon color="#CAF48E" />
                  ) : (
                    <KeyboardArrowDown className="rotate-360" />
                  )}
                </div>
              </button>

              <div className="relative flex justify-start items-start content-stretch gap-2.5 shrink-0">
                <Link
                  href="/about"
                  onClick={closeAllDropdowns}
                  className="relative hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0"
                >
                  <p className="leading-[1.5] whitespace-pre">About Us</p>
                </Link>
              </div>

              <button
                onClick={handleResourcesToggle}
                className="group box-border relative flex justify-start items-center content-stretch gap-1 p-0 overflow-visible cursor-pointer shrink-0"
              >
                <div className="relative group-hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0">
                  <p className="leading-[1.5] whitespace-pre">Resources</p>
                </div>
                <div className="relative size-6 overflow-clip shrink-0">
                  {resourcesOpen ? (
                    <MinusIcon />
                  ) : (
                    <KeyboardArrowDown className="rotate-360" />
                  )}
                </div>
              </button>

              <div className="relative flex justify-start items-start content-stretch gap-2.5 shrink-0">
                <Link
                  href="/our-network"
                  onClick={closeAllDropdowns}
                  className="relative hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0"
                >
                  <p className="leading-[1.5] whitespace-pre">Our Network</p>
                </Link>
              </div>

              <div className="relative font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] shrink-0">
                <Link
                  href="/visit-saudi"
                  onClick={closeAllDropdowns}
                  className="hover:opacity-80 leading-[1.5] whitespace-pre transition-all duration-200"
                >
                  Visit Saudi
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Right Section - Language Toggle & CTA Button */}
        <div className="relative flex justify-start items-center content-stretch gap-4 shrink-0">
          {/* Arabic Language Toggle */}
          <div className="hidden lg:block relative hover:opacity-80 font-['GE_SS_Two:Medium',_sans-serif] text-[12px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 cursor-pointer shrink-0">
            <p
              className="leading-[1.5] whitespace-pre"
              dir="auto"
              onClick={() => handleLanguageSwitch('ar', params)}
            >
              تصفح بالعربية
            </p>
          </div>

          {/* Schedule Call Button - Desktop */}
          <div className="group hidden lg:block cursor-pointer">
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
            className="lg:hidden z-50 hover:bg-[#036e65] hover:opacity-80 p-2 rounded-md text-primary-spring"
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
            className="lg:hidden top-0 left-0 z-40 fixed bg-primary-palm shadow-2xl w-full h-full overflow-y-auto"
          >
            <div className="px-4 sm:px-6 pt-22 sm:pt-20 pb-8 w-full">
              <nav className="flex flex-col space-y-3 sm:space-y-4 pt-8 w-full">
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
                    className="flex justify-between items-center hover:opacity-80 py-[9px] sm:py-[10px] font-aeonik-regular font-medium text-primary-spring text-lg sm:text-lg transition-all duration-200"
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
                {' '}
                <div
                  className="mb-4 font-['GE_SS_Two:Medium',_sans-serif] font-mediums text-primary-spring text-lg"
                  // dir="auto"
                >
                  {' '}
                  تصفح بالعربية{' '}
                </div>{' '}
              </div>
              <div className="group mt-15">
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
