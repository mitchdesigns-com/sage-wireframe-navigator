export interface BreadcrumbItem {
  label: string
  href?: string
}
export interface HeroSectionProps {
  data: {
    title: string
    subtitle?: string
    description?: string
    background_image?: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    cta_primary?: {
      label: string
      url: string
      target: string
      style: string
    }
    cta_secondary?: {
      label: string
      url: string
      target: string
      style: string
    }
    alignment: 'left' | 'center' | 'right'
    theme: 'light' | 'dark' | 'sage' | 'blue'
    height: 'small' | 'medium' | 'large' | 'full'
    overlay?: boolean
    overlay_opacity?: number
    breadcrumbItems: BreadcrumbItem[]
    tagline?: string
  }
}
