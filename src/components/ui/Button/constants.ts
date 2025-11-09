import type {
  ButtonVariant,
  ButtonSize,
  VariantConfig,
  SizeConfig,
  LinkSizeConfig,
} from './types'

// Design system configuration
export const DESIGN_CONFIG = {
  variants: {
    primary: {
      base: 'bg-primary-palm text-primary-white cursor-pointer',
      hover: 'hover:bg-secondary-dark-palm hover:outline-none',
      icon: {
        background: 'bg-primary-spring',
        color: 'text-primary-black',
      },
    },
    dark: {
      base: 'bg-primary-black text-primary-white cursor-pointer',
      hover: 'hover:bg-black',
      icon: {
        background: 'bg-primary-spring',
        color: 'text-primary-black',
      },
    },
    light: {
      base: 'bg-white text-Primary-Black cursor-pointer py-[10px]',
      hover: 'hover:bg-black hover:text-white',
      icon: {
        background: 'bg-primary-palm',
        color: 'text-primary-white',
      },
    },
    'dark-link': {
      base: 'bg-transparent text-primary-palm cursor-pointer',
      hover: 'hover:text-secondary-dark-palm',
      icon: {
        background: 'bg-primary-palm hover:bg-secondary-dark-palm',
        color: 'text-primary-white',
      },
    },
    'light-link': {
      base: 'bg-transparent text-Primary-Palm cursor-pointer',
      hover: 'hover:text-Primary-Black hover:ps-2',
      icon: {
        background: 'bg-primary-scrub hover:bg-primary-light-sage',
        color: 'text-primary-white',
      },
    },
    ghost: {
      base: 'bg-transparent text-primary-scrub cursor-pointer',
      hover: 'hover:text-primary-light-sage',
      icon: {
        background: 'bg-primary-scrub hover:bg-primary-light-sage',
        color: 'text-primary-white',
      },
    },
    home: {
      base: 'bg-transparent text-Primary-Palm cursor-pointer',
      hover: 'hover:text-primary-light-sage',
      icon: {
        background: 'bg-Primary-Palm hover:bg-primary-light-sage',
        color: 'text-Primary-Palm',
      },
    },
    link: {
      base: 'bg-transparent text-[#000404] cursor-pointer',
      hover: 'hover:text-[#000404]/80 hover:opacity-80',
      icon: {
        background: 'bg-transparent',
        color: 'text-[#000404]',
      },
    },
  } satisfies Record<ButtonVariant, VariantConfig>,

  sizes: {
    small: {
      container: {
        default: 'px-5 py-2',
        withLeftIcon: 'pl-2.5 pr-5 py-2',
        withRightIcon: 'pl-5 pr-1.5 py-2',
        withBothIcons: 'pl-2.5 pr-1.5 py-2',
      },
      text: 'text-[14px] font-aeonik-medium leading-[1.5]',
      gaps: {
        default: 'gap-1.5',
        compact: 'gap-0.5',
      },
      icon: {
        container: 'size-7',
        size: 'size-5',
      },
    },
    medium: {
      container: {
        default: 'px-6 py-2',
        withLeftIcon: 'px-6 py-2',
        withRightIcon: 'ps-6 pe-2 py-2',
        withBothIcons: 'px-2 py-2',
      },
      text: 'text-[16px] font-aeonik-medium leading-[1.5]',
      gaps: {
        default: 'gap-4',
        compact: 'gap-3',
      },
      icon: {
        container: 'size-8',
        size: 'size-6',
      },
    },
    large: {
      container: {
        default: 'px-[34px] py-2',
        withLeftIcon: 'px-[34px] py-2',
        withRightIcon: 'pl-[34px] pr-[18px] py-2',
        withBothIcons: 'pl-[18px] pr-[18px] py-2',
      },
      text: 'text-[16px] font-aeonik-medium leading-[1.5]',
      gaps: {
        default: 'gap-4',
        compact: 'gap-3',
      },
      icon: {
        container: 'size-8',
        size: 'size-6',
      },
    },
  } satisfies Record<ButtonSize, SizeConfig>,

  linkSizes: {
    small: {
      text: 'text-[18px] font-aeonik-bold leading-[1.5]',
      gap: 'gap-1.5',
      iconContainer: 'size-7',
    },
    medium: {
      text: 'text-[18px] font-aeonik-bold leading-[1.5]',
      gap: 'gap-2.5',
      iconContainer: 'size-8',
    },
    large: {
      text: 'text-[18px] font-aeonik-bold leading-[1.5]',
      gap: 'gap-2.5',
      iconContainer: 'size-8',
    },
  } satisfies Record<ButtonSize, LinkSizeConfig>,
} as const

// Base styles
export const BASE_BUTTON_STYLES = [
  `inline-flex items-center justify-between  md:justify-center text-center`,
  'whitespace-nowrap rounded-[100px] relative',
  'transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-primary-palm focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'font-aeonik-medium',
].join(' ')
