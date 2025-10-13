'use client'

import React from 'react'
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
  contact,
}) => {
  return (
    <div
      className={clsx(
        'relative flex rounded-full overflow-hidden',
        'w-full max-w-full justify-center items-center',
        'bg-gray-100 md:bg-transparent'
      )}
      data-name="Toggle Button"
    >
      {/* Animated highlight background */}
      <div className="absolute inset-0 flex rounded-full px-1 md:px-0">
        {options.map((option) =>
          option.value === selectedValue ? (
            <motion.div
              key={option.id}
              layoutId="active-pill"
              className={clsx(
                contact
                  ? 'bg-Secondary-Scrub text-Primary-Palm'
                  : 'bg-Primary-Palm',
                'rounded-full'
              )}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ flex: 1 }}
            />
          ) : (
            <div key={option.id} className="flex-1" />
          )
        )}
      </div>

      {/* Buttons */}
      {options.map((option) => {
        const isSelected = option.value === selectedValue
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.value)}
            className={clsx(
              'relative flex-1 flex items-center justify-center text-center truncate',
              'px-3 md:px-4 py-2 md:py-[10px] font-medium',
              'text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors cursor-pointer min-w-[90px]',
              isSelected
                ? contact
                  ? 'text-Primary-Palm'
                  : 'text-white'
                : contact
                  ? 'text-Secondary-Text hover:text-Primary-Palm'
                  : 'text-Primary-Black hover:text-Primary-Palm'
            )}
            data-name="Button"
          >
            {option.title}
          </button>
        )
      })}
    </div>
  )
}

export default ToggleButton
