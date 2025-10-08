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
      className={'relative flex flex-row rounded-full'}
      data-name="Toggle Button"
    >
      {/* Animated highlight background */}
      <div className="absolute inset-0 flex rounded-full">
        {options.map((option) =>
          option.value === selectedValue ? (
            <motion.div
              key={option.id}
              layoutId="active-pill"
              className={`${contact ? 'bg-Secondary-Scrub text-Primary-Palm' : 'bg-Primary-Palm'} rounded-full`}
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
              'relative flex-1 px-4 md:px-[16px] py-2 md:py-[10px] font-medium text-base whitespace-nowrap transition-colors cursor-pointer',
              isSelected
                ? `${contact ? 'text-Primary-Palm' : 'text-white'}`
                : `${contact ? 'text-Secondary-Text' : 'text-Primary-Black'}  hover:text-Primary-Palm hover:transition-colors`
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
