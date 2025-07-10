'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <motion.header 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-b border-gray-200' : 'shadow-sm border-b border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <motion.div 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sage-600">SA</span>
              <div className="text-xs text-gray-600 -mt-1 leading-tight">
                SAUDI ARABIA<br />
                GLOBAL<br />
                EXPANSION
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact">
              Schedule Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 z-50"
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
      </div>

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
            className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <Navigation 
                className="flex flex-col space-y-2" 
                isMobile={true}
                onItemClick={() => setIsMenuOpen(false)}
              />
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button 
                  href="/contact" 
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
    </motion.header>
  )
}
