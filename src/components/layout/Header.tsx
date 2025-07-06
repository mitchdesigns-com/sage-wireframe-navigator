'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-sage-400">SA</span>
              <div className="text-xs text-gray-600 -mt-1">
                SAUDI ARABIA<br />
                GLOBAL<br />
                EXPANSION
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Schedule Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <Navigation 
              className="flex flex-col space-y-2" 
              isMobile={true}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <div className="mt-4">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
