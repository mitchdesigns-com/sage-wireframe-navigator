// src/components/ui/Button.tsx
'use client'

import Link from 'next/link'
import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

// Base button variants
const buttonVariants = {
  // Style variants
  variant: {
    primary:
      'bg-sage-600 text-white hover:bg-sage-700 shadow-md hover:shadow-lg',
    secondary:
      'border-2 border-sage-600 text-sage-600 bg-transparent hover:bg-sage-50',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
    ghost: 'text-sage-600 bg-transparent hover:bg-sage-50',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
  },
  // Size variants
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  },
}

// Base button styles
const baseStyles =
  'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

// Button component props
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

// Link button props (when used as Link)
interface LinkButtonProps extends Omit<ButtonProps, 'type' | 'onClick'> {
  href: string
  external?: boolean
  target?: string
  rel?: string
  onClick?: () => void
}

// Motion button props (excluding conflicting animation props)
interface MotionButtonProps
  extends Omit<ButtonProps, 'onAnimationStart' | 'onAnimationEnd'> {
  motionProps?: Omit<MotionProps, 'children'>
}

// Type guard to check if props include href
function isLinkProps(
  props: ButtonProps | LinkButtonProps | MotionButtonProps
): props is LinkButtonProps {
  return 'href' in props
}

// Type guard to check if props include motionProps
function isMotionProps(
  props: ButtonProps | LinkButtonProps | MotionButtonProps
): props is MotionButtonProps {
  return 'motionProps' in props
}

// Main Button component
const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | LinkButtonProps | MotionButtonProps
>((props, ref) => {
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
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  )

  // Handle Link rendering
  if (isLinkProps(props)) {
    const { href, external, target, rel, onClick, ...linkRest } = props

    if (external || href.startsWith('http')) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={buttonClassName}
          onClick={onClick}
          {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonContent}
        </a>
      )
    }

    return (
      <Link
        href={href}
        className={buttonClassName}
        onClick={onClick}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(linkRest as React.ComponentProps<typeof Link>)}
      >
        {buttonContent}
      </Link>
    )
  }

  // Handle motion props
  if (isMotionProps(props)) {
    const { motionProps, ...motionRest } = props
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClassName}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...motionProps}
        {...(motionRest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {buttonContent}
      </motion.button>
    )
  }

  // Regular button
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonClassName}
      disabled={disabled || loading}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  )
})

Button.displayName = 'Button'

// Export types for external use
export type { ButtonProps, LinkButtonProps, MotionButtonProps }
export default Button
