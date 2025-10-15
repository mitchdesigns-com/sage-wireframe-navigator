'use client'

import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

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

  return (
    <div
      className={clsx('relative w-full  rounded-full p-1', className)}
      role="tablist"
      aria-label="Toggle Button Group"
    >
      <div className="relative flex items-center md:justify-center overflow-x-auto scrollbar-hide rounded-full">
        <motion.div
          className={clsx(
            'absolute top-0 h-full rounded-full',
            contact ? 'bg-Secondary-Scrub' : 'bg-Primary-Palm'
          )}
          animate={pillDimensions}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {options.map((option, index) => {
          const isSelected = option.value === selectedValue
          return (
            <button
              ref={(el) => {
                buttonRefs.current[index] = el
              }}
              key={option.id}
              onClick={() => onChange(option.value)}
              className={clsx(
                'relative z-10 flex-shrink-0 cursor-pointer items-center justify-center whitespace-nowrap px-5 py-2 text-center text-sm font-medium transition-colors sm:text-base',
                isSelected
                  ? 'text-white'
                  : contact
                    ? 'text-Secondary-Text hover:text-Primary-Palm'
                    : 'text-Primary-Black hover:text-Primary-Palm'
              )}
              role="tab"
              aria-selected={isSelected}
            >
              {option.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ToggleButton
