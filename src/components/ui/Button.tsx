// src/components/ui/Button.tsx
'use client'

import Link from 'next/link'
import { forwardRef, JSX } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { cn } from '@/lib/utils'

// Base button variants
const buttonVariants = {
  variant: {
    primary:
      'bg-sage-600 text-white hover:bg-sage-700 shadow-md hover:shadow-lg',
    secondary:
      'border-2 border-sage-600 text-sage-600 bg-transparent hover:bg-sage-50',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
    ghost: 'text-sage-600 bg-transparent hover:bg-sage-50',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-6 py-2.5 text-base font-medium',
  },
}

// Base button styles
const baseStyles =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

// Core button props
interface BaseButtonProps {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

// Regular button props
type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'children'>
interface LinkButtonProps extends BaseButtonProps {
  href: string
  external?: boolean
  target?: string
  rel?: string
  onClick?: () => void
}

// Motion button props
interface MotionButtonProps extends BaseButtonProps {
  onClick?: () => void
  disabled?: boolean
  // whileHover?: object
  // whileTap?: object
  whileHover?: TargetAndTransition
  whileTap?: TargetAndTransition
  motionProps?: object
}

// Main Button component with overloads
function Button(props: LinkButtonProps): JSX.Element
function Button(props: ButtonProps): JSX.Element
function Button(props: MotionButtonProps & { motionProps: object }): JSX.Element
function Button(
  props: ButtonProps | LinkButtonProps | MotionButtonProps
): JSX.Element {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    ...rest
  } = props

  // Build the className
  const buttonClassName = cn(
    baseStyles,
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    fullWidth && 'w-full',
    loading && 'cursor-wait',
    className
  )

  // Button content with icons and loading state
  const buttonContent = (
    <>
      {loading && (
        <svg
          className="-ml-1 mr-2 h-4 w-4 animate-spin"
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
      )}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </>
  )

  // Handle Link rendering
  if ('href' in props) {
    const { href, external, target, rel, onClick } = props

    if (external || href.startsWith('http')) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={buttonClassName}
          onClick={onClick}
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

  // Handle motion props (if motionProps is provided)
  if ('motionProps' in props) {
    const {
      disabled,
      onClick,
      whileHover = { scale: 1.02 },
      whileTap = { scale: 0.98 },
      motionProps,
    } = props as MotionButtonProps

    return (
      <motion.button
        className={buttonClassName}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
        {...motionProps}
      >
        {buttonContent}
      </motion.button>
    )
  }

  // Regular button
  const { disabled, ...buttonRest } = rest as ButtonProps
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

// Motion Button component (separate component to avoid conflicts)
const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      onClick,
      whileHover = { scale: 1.02 },
      whileTap = { scale: 0.98 },
      motionProps,
      ...rest
    } = props

    const buttonClassName = cn(
      baseStyles,
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      fullWidth && 'w-full',
      loading && 'cursor-wait',
      className
    )

    const buttonContent = (
      <>
        {loading && (
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin"
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
        )}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </>
    )

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

// Export types and components
export type { ButtonProps, LinkButtonProps, MotionButtonProps }
export { MotionButton }
export default Button