import { TargetAndTransition } from 'framer-motion'

// Core types
export type ButtonVariant = 'primary' | 'dark' | 'light' | 'dark-link' | 'light-link' | 'link' | 'ghost'
export type ButtonSize = 'small' | 'medium' | 'large'

// Configuration types
export interface SizeConfig {
  container: {
    default: string
    withLeftIcon: string
    withRightIcon: string
    withBothIcons: string
  }
  text: string
  gaps: {
    default: string
    compact: string
  }
  icon: {
    container: string
    size: string
  }
}

export interface VariantConfig {
  base: string
  hover: string
  icon: {
    background: string
    color: string
  }
}

export interface LinkSizeConfig {
  text: string
  gap: string
  iconContainer: string
}

// Props interfaces
export interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: boolean
  rightIcon?: boolean
  children: React.ReactNode
  className?: string
}

export type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'children'>

export interface LinkButtonProps extends BaseButtonProps {
  href: string
  external?: boolean
  target?: string
  rel?: string
  onClick?: () => void
}

export interface MotionButtonProps extends BaseButtonProps {
  onClick?: () => void
  disabled?: boolean
  whileHover?: TargetAndTransition
  whileTap?: TargetAndTransition
  motionProps?: object
}

// Icon props
export interface IconProps {
  size: ButtonSize
  variant: ButtonVariant
}