// src/components/sections/HeroText/HeroText.types.ts

export interface HeroTextProps {
    title: string
    description?: string
    subtitle?: string
    backgroundImage?: string
    backgroundOverlay?: boolean
    textAlignment?: 'left' | 'center' | 'right'
    size?: 'small' | 'medium' | 'large'
    variant?: 'default' | 'sage' | 'healthcare' | 'minimal'
    className?: string
    animated?: boolean
    children?: React.ReactNode
    titleClassName?: string
    descriptionClassName?: string
}

export interface HeroTextVariantConfig {
    section: string
    title: string
    subtitle: string
    description: string
}

export interface HeroTextVariantStyles {
    background: string
    text: string
}