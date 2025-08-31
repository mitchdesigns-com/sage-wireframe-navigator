'use client'

/**
 * Header component matching Figma design
 * 
 * This component implements the exact design from Figma with:
 * - Dark teal theme (#025850)
 * - Top banner with "Empowering Wellness, Globally."
 * - Sage logo and navigation menu
 * - Arabic language toggle
 * - Custom "Schedule Call" button
 * - Full-width dropdown menus for Services and Resources
 */

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import ServicesMenu from './ServicesMenu'
import ResourcesMenu from './ResourcesMenu'

interface KeyboardArrowDownProps {
  className?: string
}

function KeyboardArrowDown({ className }: KeyboardArrowDownProps) {
  return (
    <div className={`relative size-full ${className}`}>
      <ChevronDown
        size={16}
        className="text-primary-spring absolute inset-[35.51%_25.93%_36.66%_25.88%]"
      />
    </div>
  )
}

function MinusIcon({ className }: KeyboardArrowDownProps) {
  return (
    <div className={`relative size-full ${className}`}>
      <Minus
        size={16}
        className="text-primary-spring absolute inset-[46.45%_24.35%_46.45%_24.38%]"
      />
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

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

  return (
    <div
      ref={headerRef}
      className={`bg-primary-palm content-stretch flex flex-col items-center justify-start w-full top-0 z-50 ${isScrolled ? 'sticky' : 'relative'}`}
    >
      {/* Top Banner */}
      <div className="bg-secondary-dark-palm box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0.5 relative shrink-0 w-full">
        <div className="font-aeonik-medium leading-[0] not-italic relative shrink-0 text-primary-scrub text-[12px] text-nowrap">
          <p className="leading-[1.5] whitespace-pre">
            Empowering Wellness, Globally.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <motion.div
        className="box-border content-stretch flex items-center justify-between overflow-clip px-4 sm:px-6 lg:px-[60px] py-[22px] relative shrink-0 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Left Section - Logo & Navigation */}
        <div className="content-stretch flex gap-[72px] items-center justify-start relative shrink-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 z-50"
            onClick={closeAllDropdowns}
          >
            <motion.div
              className="h-12 relative shrink-0 w-[110px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-primary-spring font-aeonik-regular text-[32px] leading-[1.2]">
                sage.
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
                  {servicesOpen ? <MinusIcon /> : <KeyboardArrowDown />}
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
                  {resourcesOpen ? <MinusIcon /> : <KeyboardArrowDown />}
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
            <p className="leading-[1.5] whitespace-pre" dir="auto">
              تصفح بالعربية
            </p>
          </div>

          {/* Schedule Call Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="light" rightIcon={true}>
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
            isOpen={servicesOpen}
            onClose={() => setServicesOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {resourcesOpen && (
          <ResourcesMenu
            isOpen={resourcesOpen}
            onClose={() => setResourcesOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-0 right-0 h-full w-80 bg-primary-palm shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/resources"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/our-network"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Network
                </Link>
                <Link
                  href="/visit-saudi"
                  className="text-primary-spring font-aeonik-regular text-lg py-2 hover:opacity-80 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Visit Saudi
                </Link>
              </nav>

              {/* Mobile Language Toggle */}
              <div className="mt-6 pt-4 border-t border-[#036e65]">
                <div
                  className="font-['GE_SS_Two:Medium',_sans-serif] text-primary-spring text-sm mb-4"
                  dir="auto"
                >
                  تصفح بالعربية
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-4">
                <Button
                  variant="light"
                  rightIcon={true}
                  fullWidth
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
