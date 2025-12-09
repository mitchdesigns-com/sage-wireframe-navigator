import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

interface HeaderLogoProps {
  isMobile: boolean
  onClick: () => void
}

export default function HeaderLogo({ isMobile, onClick }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className="z-50 flex items-center space-x-2 ps-4 md:ps-0"
      onClick={onClick}
    >
      <motion.div className="relative w-[110px] h-12 shrink-0">
        <div className="ltr:font-aeonik-regular !rtl:font-arabic text-[32px] text-primary-spring leading-[1.2]">
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
  )
}
