import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

interface MobileMenuButtonProps {
  isMenuOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({
  isMenuOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <motion.button
      className="lg:hidden z-50 hover:bg-[#036e65] hover:opacity-80 p-2 rounded-md text-primary-spring"
      onClick={onClick}
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
  )
}
