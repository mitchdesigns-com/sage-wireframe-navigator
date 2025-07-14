'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from 'lucide-react'

// Social media links
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/sage', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/sage', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/sage', label: 'YouTube' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/sage',
    label: 'LinkedIn',
  },
]

// Footer navigation links
const footerLinks = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Visit Saudi', href: '/visit-saudi' },
    { label: 'News & Events', href: '/news' },
    { label: 'Careers', href: '/careers' },
  ],
  services: [
    { label: 'For Individuals', href: '/services/individuals' },
    { label: 'For Businesses', href: '/services/businesses' },
    { label: 'For Organizations', href: '/services/organizations' },
  ],
  resources: [
    { label: 'Guides', href: '/resources/guides' },
    { label: 'Case Studies', href: '/resources/case-studies' },
    { label: 'Webinars', href: '/resources/webinars' },
    { label: 'Certifications', href: '/resources/certifications' },
    { label: 'FAQs', href: '/resources/faqs' },
  ],
  exploreMore: [
    { label: 'CSR Initiatives', href: '/csr' },
    { label: 'Access Referral', href: '/referral' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Our Network', href: '/our-network' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setEmail('')
    setIsSubmitting(false)

    // You can add toast notification here
    alert('Successfully subscribed to updates!')
  }

  return (
    <footer className="bg-white">
      {/* Newsletter Subscription Section */}
      <div className="bg-Primary-Spring py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Subscribe to Updates
              </h2>
              <p className="max-w-md text-lg text-gray-700">
                Stay informed about our services and healthcare insights.
              </p>
            </div>

            {/* Right Content - Newsletter Form */}
            <div className="w-full lg:w-auto">
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex max-w-md flex-col gap-4 sm:flex-row lg:max-w-none"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <Button type="submit" loading={isSubmitting}>
                  Join
                </Button>
              </form>
              <p className="mt-3 text-center text-sm text-gray-600 lg:text-left">
                We respect your privacy. Read our{' '}
                <Link
                  href="/privacy"
                  className="font-medium text-Primary-Palm hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-green-800 py-16 text-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center space-x-2">
                <div className="text-2xl font-bold">
                  <div className="text-xs uppercase leading-tight tracking-wider text-green-200">
                    HEALTHCARE CONCIERGE
                  </div>
                  <div className="mt-1 text-3xl font-bold text-white">
                    sage.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 font-semibold text-green-200">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-green-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 font-semibold text-green-200">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-green-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-6 font-semibold text-green-200">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-green-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore More */}
            <div>
              <h3 className="mb-6 font-semibold text-green-200">
                Explore More
              </h3>
              <ul className="space-y-3">
                {footerLinks.exploreMore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-green-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-6 font-semibold text-green-200">Legal Links</h3>
              <ul className="space-y-3">
                {footerLinks.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-green-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-900 py-4 text-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <div className="text-sm text-green-200">
              © 2025 Sage. All rights reserved.
            </div>

            {/* Contact Info & Social Links */}
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              {/* Contact Information */}
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="tel:+966551234567"
                  className="flex items-center gap-2 text-green-200 transition-colors duration-200 hover:text-white"
                >
                  <Phone size={16} />
                  +966 55 123 4567
                </a>
                <a
                  href="mailto:info@sage.com"
                  className="flex items-center gap-2 text-green-200 transition-colors duration-200 hover:text-white"
                >
                  <Mail size={16} />
                  info@sage.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-green-800 transition-colors duration-200 hover:bg-green-700"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
