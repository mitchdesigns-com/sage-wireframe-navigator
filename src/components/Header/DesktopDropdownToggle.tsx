import React from 'react'
import KeyboardArrowDown from '../svg/KeyboardArrowDown'
import MinusIcon from '../svg/MinusIcon'

interface DesktopDropdownToggleProps {
  label: string
  isOpen: boolean
  onToggle: () => void
  color?: string
}

export default function DesktopDropdownToggle({
  label,
  isOpen,
  onToggle,
  color,
}: DesktopDropdownToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="group box-border relative flex justify-start items-center content-stretch gap-1 p-0 overflow-visible cursor-pointer shrink-0"
    >
      <div className="relative group-hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0">
        <p className="leading-[1.5] whitespace-pre">{label}</p>
      </div>
      <div className="relative size-6 overflow-clip shrink-0">
        {isOpen ? (
          <MinusIcon color={color || '#CAF48E'} />
        ) : (
          <KeyboardArrowDown className="rotate-360" />
        )}
      </div>
    </button>
  )
}
