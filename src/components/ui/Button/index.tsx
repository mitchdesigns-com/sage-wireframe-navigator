'use client'

/**
 * Button component matching Figma design system
 *
 * Features:
 * - Primary, Dark, Light, Dark Link, Light Link, Link variants
 * - Small, Medium, Large sizes
 * - Icon configurations (left, right, both, none)
 * - Loading states and animations
 * - Link and motion variants
 */

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { forwardRef, JSX } from 'react'

// Local imports
import { BASE_BUTTON_STYLES, DESIGN_CONFIG } from './constants'
import type {
  BaseButtonProps,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  IconProps,
  LinkButtonProps,
  MotionButtonProps,
  SizeConfig,
} from './types'
import ButtonIcon from '../../svg/ButtonIcon'

// Cube Icon matching Figma design exactly
const CubeIcon = ({ size = 24 }: { size?: number }) => (
  <div
    className="overflow-clip relative shrink-0 group"
    style={{ width: size, height: size }}
  >
    <div className="absolute inset-[8.33%_12.5%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
      >
        <path
          clipRule="evenodd"
          d="M17.73 5.12L17.59 4.87C17.4094 4.56769 17.1547 4.31643 16.85 4.14L10.14 0.27C9.8362 0.09375 9.4913 0.00062 9.14 0H8.85C8.4987 0.00062 8.1538 0.09375 7.85 0.27L1.14 4.15C0.83697 4.32526 0.58526 4.57697 0.41 4.88L0.27 5.13C0.0937499 5.43384 0.00062 5.77874 0 6.13V13.88C0.00062 14.2313 0.0937499 14.5762 0.27 14.88L0.41 15.13C0.58979 15.4295 0.84049 15.6802 1.14 15.86L7.86 19.73C8.1623 19.9099 8.5082 20.0033 8.86 20H9.14C9.4913 19.9994 9.8362 19.9063 10.14 19.73L16.85 15.85C17.156 15.6787 17.4087 15.426 17.58 15.12L17.73 14.87C17.9041 14.5653 17.9971 14.221 18 13.87V6.12C17.9994 5.76874 17.9063 5.42384 17.73 5.12ZM8.85 2H9.14L15 5.38L9 8.84L3 5.38L8.85 2ZM10 17.5L15.85 14.12L16 13.87V7.11L10 10.58V17.5Z"
          fill="var(--fill-0, #000404)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  </div>
)

// Helper functions
const isLinkVariant = (variant: ButtonVariant): boolean =>
  variant.includes('link') || variant === 'link'

const getContainerPadding = (
  sizeConfig: SizeConfig | undefined,
  leftIcon: boolean,
  rightIcon: boolean
): string => {
  // Fallback to medium size config if sizeConfig is undefined
  const config = sizeConfig || DESIGN_CONFIG.sizes.medium

  if (leftIcon && rightIcon) return config.container.withBothIcons
  if (leftIcon) return config.container.withLeftIcon
  if (rightIcon) return config.container.withRightIcon
  return config.container.default
}

const getGapClass = (
  variant: ButtonVariant,
  size: ButtonSize,
  leftIcon: boolean,
  rightIcon: boolean
): string => {
  if (isLinkVariant(variant)) {
    return (
      DESIGN_CONFIG.linkSizes[size]?.gap || DESIGN_CONFIG.linkSizes.medium.gap
    )
  }

  const sizeConfig = DESIGN_CONFIG.sizes[size] || DESIGN_CONFIG.sizes.medium

  if (leftIcon && rightIcon) {
    return sizeConfig.gaps.compact
  }

  if (leftIcon || (!leftIcon && !rightIcon)) {
    return sizeConfig.gaps.compact
  }

  return sizeConfig.gaps.default
}

// Icon components
const LeftIcon = ({ size, variant }: IconProps) => {
  if (variant === 'link') {
    return <Plus size={16} className="text-current" />
  }

  if (isLinkVariant(variant)) {
    return <Plus size={16} className="text-current" />
  }

  const sizeConfig = DESIGN_CONFIG.sizes[size] || DESIGN_CONFIG.sizes.medium
  const variantConfig =
    DESIGN_CONFIG.variants[variant] || DESIGN_CONFIG.variants.primary

  return (
    <div
      className={cn(
        'flex items-center justify-center p-[6px] rounded-full',
        sizeConfig.icon.container,
        variantConfig.icon.background
      )}
    >
      <Plus size={16} className={variantConfig.icon.color} />
    </div>
  )
}

// Loading spinner component
const LoadingSpinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

// Hook for building button classes
const useButtonClasses = (props: BaseButtonProps) => {
  const {
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    leftIcon = false,
    rightIcon = false,
    className,
  } = props

  // Ensure we have valid variant and size with fallbacks
  const safeVariant = (
    DESIGN_CONFIG.variants[variant] ? variant : 'primary'
  ) as ButtonVariant
  const safeSize = (DESIGN_CONFIG.sizes[size] ? size : 'medium') as ButtonSize

  const variantConfig = DESIGN_CONFIG.variants[safeVariant]
  const sizeConfig = DESIGN_CONFIG.sizes[safeSize]

  // For simple 'link' variant, match Figma design exactly
  if (safeVariant === 'link') {
    return cn(
      'content-stretch flex gap-2 items-center justify-center relative rounded-[100px] group',
      'whitespace-nowrap transition-all duration-200',
      '',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'text-[16px] leading-[1.5] not-italic text-[#000404] text-nowrap',
      // Use Aeonik Medium font with fallback
      "font-['Aeonik:Medium',_sans-serif]",
      'hover:text-[#000404]/80 hover:opacity-80',
      fullWidth && 'w-full size-full',
      loading && 'cursor-wait',
      className
    )
  }

  const paddingClass = getContainerPadding(sizeConfig, leftIcon, rightIcon)
  const gapClass = getGapClass(safeVariant, safeSize, leftIcon, rightIcon)

  const textClass = isLinkVariant(safeVariant)
    ? DESIGN_CONFIG.linkSizes[safeSize]?.text ||
      DESIGN_CONFIG.linkSizes.medium.text
    : sizeConfig.text

  return cn(
    BASE_BUTTON_STYLES,
    variantConfig.base,
    variantConfig.hover,
    paddingClass,
    gapClass,
    textClass,
    fullWidth && 'w-full',
    loading && 'cursor-wait',
    className
  )
}

// Hook for button content
const useButtonContent = (props: BaseButtonProps) => {
  const {
    loading,
    leftIcon,
    rightIcon,
    children,
    size = 'medium',
    variant = 'primary',
  } = props

  // Ensure we have valid variant and size with fallbacks
  const safeVariant = (
    DESIGN_CONFIG.variants[variant] ? variant : 'primary'
  ) as ButtonVariant
  const safeSize = (DESIGN_CONFIG.sizes[size] ? size : 'medium') as ButtonSize

  // Simple content for 'link' variant matching Figma
  if (safeVariant === 'link') {
    return (
      <>
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && (
          <LeftIcon size={safeSize} variant={safeVariant} />
        )}
        <div className="font-['Aeonik:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000404] text-[16px] text-nowrap">
          <p className="leading-[1.5] whitespace-pre">{children}</p>
        </div>
        {!loading && rightIcon && <CubeIcon size={24} />}
      </>
    )
  }

  return (
    <>
      {/* Transparent border for consistent sizing */}
      <div
        aria-hidden="true"
        className={`absolute border ${variant === 'light' ? 'border-Primary-Palm' : 'border-transparent'}  inset-[-1px] pointer-events-none rounded-[101px] cursor-pointer`}
      />

      {loading && <LoadingSpinner />}
      {!loading && leftIcon && (
        <LeftIcon size={safeSize} variant={safeVariant} />
      )}
      <span className="relative shrink-0">{children}</span>
      {!loading && rightIcon && (
        <div
          className={`flex-none group-hover:rotate-[45deg] ${variant === 'dark' ? 'text-Primary-Spring ' : variant === 'primary' ? 'text-Primary-Spring ' : 'text-Primary-Palm '} group-hover:ms-2 transition-all duration-300`}
        >
          <ButtonIcon
            fillColor={
              variant === 'dark'
                ? 'black'
                : variant === 'primary'
                  ? '#025850'
                  : 'white'
            }
            strokeColor={
              variant === 'dark'
                ? 'black'
                : variant === 'primary'
                  ? '#025850'
                  : 'white'
            }
          />
        </div>
      )}
    </>
  )
}

// Main Button component with overloads
function Button(props: LinkButtonProps): JSX.Element
function Button(props: ButtonProps): JSX.Element
function Button(props: MotionButtonProps & { motionProps: object }): JSX.Element
function Button(
  props: ButtonProps | LinkButtonProps | MotionButtonProps
): JSX.Element {
  const buttonClassName = useButtonClasses(props)
  const buttonContent = useButtonContent(props)

  // Handle Link rendering
  if ('href' in props) {
    const { href, external, target, rel, onClick, ...linkRest } = props

    if (external || href.startsWith('http')) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={buttonClassName}
          onClick={onClick}
          {...linkRest}
        >
          {buttonContent}
        </a>
      )
    }

    return (
      <Link href={href} className={buttonClassName} onClick={onClick}>
        {buttonContent}
      </Link>
    )
  }

  // Handle motion props
  if ('motionProps' in props) {
    const {
      disabled,
      onClick,
      loading,
      whileHover = { scale: 1.02 },
      whileTap = { scale: 0.98 },
      motionProps,
      ...motionRest
    } = props as MotionButtonProps

    return (
      <motion.button
        className={buttonClassName}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
        {...motionProps}
        {...motionRest}
      >
        {buttonContent}
      </motion.button>
    )
  }

  // Regular button
  const { disabled, loading, ...buttonRest } = props as ButtonProps

  return (
    <button
      className={buttonClassName}
      disabled={disabled || loading}
      {...buttonRest}
    >
      {buttonContent}
    </button>
  )
}

// Standalone Motion Button component
const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (props, ref) => {
    const {
      disabled,
      onClick,
      loading,
      whileHover = { scale: 1.02 },
      whileTap = { scale: 0.98 },
      motionProps,
      ...rest
    } = props

    const buttonClassName = useButtonClasses(props)
    const buttonContent = useButtonContent(props)

    return (
      <motion.button
        ref={ref}
        className={buttonClassName}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
        {...motionProps}
        {...rest}
      >
        {buttonContent}
      </motion.button>
    )
  }
)

MotionButton.displayName = 'MotionButton'

// Exports
export { MotionButton }
export type { ButtonProps, LinkButtonProps, MotionButtonProps }
export default Button
