'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export interface ToggleOption {
  id: number | string
  title: string
  value: string
}

export interface ToggleButtonProps {
  options: ToggleOption[]
  selectedValue: string
  onChange: (value: string) => void
  className?: string
  contact?: boolean
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  selectedValue,
  onChange,
  className,
  contact,
}) => {
  const [pillDimensions, setPillDimensions] = useState({ width: 0, left: 0 })
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const selectedIndex = options.findIndex(
      (option) => option.value === selectedValue
    )
    const activeButton = buttonRefs.current[selectedIndex]

    if (activeButton) {
      setPillDimensions({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      })

      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [selectedValue, options])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }
  console.log(options)

  return (
    <motion.div
      className={clsx('relative w-full rounded-full p-1', className)}
      role="tablist"
      aria-label="Toggle Button Group"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className={clsx(
          'relative flex items-center gap-2 px-1',
          'h-12', // 🔒 lock height
          'overflow-x-auto scrollbar-hide no-scrollbar',
          'md:justify-center md:overflow-visible md:flex-nowrap',
          'rounded-full text-Secondary-Text'
        )}
      >
        {/* Sliding pill */}
        <motion.div
          className={clsx(
            'absolute left-1 top-1 bottom-1 rounded-full',
            contact ? 'bg-Secondary-Scrub' : 'bg-Primary-Palm'
          )}
          animate={pillDimensions}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {options.map((option, index) => {
          const isSelected = option.value === selectedValue
          return (
            <motion.button
              key={option.id}
              ref={(el) => {
                buttonRefs.current[index] = el
              }}
              onClick={() => onChange(option.value)}
              role="tab"
              aria-selected={isSelected}
              variants={buttonVariants}
              className={clsx(
                'relative z-10 flex-shrink-0 cursor-pointer items-center justify-center whitespace-nowrap px-6 py-2 text-center text-sm font-medium transition-colors sm:text-base',
                isSelected
                  ? `${contact ? 'text-Primary-Palm' : 'text-white'} `
                  : contact
                    ? 'text-Secondary-Text hover:text-Primary-Palm'
                    : 'text-Primary-Black hover:text-Primary-Palm'
              )}
            >
              {option.title}
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

export default ToggleButton
