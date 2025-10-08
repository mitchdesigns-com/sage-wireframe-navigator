export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}

export interface Button {
  id: number
  label: string
  href: string
  variant: string
  rightIcon: boolean
}

export interface HeroWithImageBlock {
  __component: 'blocks.hero-with-image'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
  breadcrumbItems: BreadcrumbItem[]
  primaryButton: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    rightIcon?: boolean
  }
  secondary: {
    label: string
    href: string
    variant?: 'primary' | 'light'
    rightIcon?: boolean
  }
}

export interface Paragraph {
  id: number
  paragraph: string
}
export interface Reason {
  id: number
  title: string
  value: string
}
export interface WhyChooseSectionBlock {
  __component: 'blocks.why-choose-section'
  id: number
  title: string
  paragraphs: Paragraph[]
  reasons: Reason[]
}

export interface Feature {
  id: number
  text: string
  icon: ImageData
}

export interface ListItem {
  id: number
  title: string
  description: string
  theme: string
  icon: ImageData
}

export interface FeatureSectionBlock {
  __component: 'blocks.feature-section'
  id: number
  tagline: string
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean
  features: Feature[]
  list: ListItem[]
  image: ImageData
}

export interface DetailsSectionBlock {
  __component: 'blocks.details-section'
  id: number
  title: string
  description: string
  buttonText: string
  buttonHref: string
  image: ImageData
}

export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export type Block =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | DetailsSectionBlock
  | GetInTouchBlock

export interface ServicesOrganizationsConcierge {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: Block[]
}

export interface ServicesOrganizationsConciergeResponse {
  data: ServicesOrganizationsConcierge[]
}
