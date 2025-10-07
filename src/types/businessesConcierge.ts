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

export interface WhyChooseParagraph {
  id: number
  paragraph: string
}

export interface WhyChooseReason {
  id: number
  title: string
  value: string
}

export interface WhyChooseSectionBlock {
  __component: 'blocks.why-choose-section'
  id: number
  title: string
  paragraphs: WhyChooseParagraph[]
  reasons: WhyChooseReason[]
}

export interface FeatureItem {
  id: number
  title: string
  description: string
  theme: string
  icon: ImageData
}
export interface FeatureIcon {
  id: number
  text: string
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
  features: FeatureIcon[]
  list: FeatureItem[]
  image: ImageData
}

export interface ConciergeHelpItem {
  id: number
  title: string
  description: string
  theme: string
  icon: ImageData
}

export interface ConciergeHelpBlock {
  __component: 'blocks.concierge-help'
  id: number
  title: string
  description: string
  list: ConciergeHelpItem[]
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

export type BusinessConciergeBlock =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | ConciergeHelpBlock
  | DetailsSectionBlock
  | GetInTouchBlock

export interface BusinessConciergePageData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: BusinessConciergeBlock[]
}

export interface BusinessConciergeResponse {
  data: BusinessConciergePageData[]
}

export interface ImageData {
  id: number
  url: string
  alternativeText: string
}

export interface HeroWithImageBlock {
  __component: 'blocks.hero-with-image'
  id: number
  title: string
}

export interface WhyChooseSectionBlock {
  __component: 'blocks.why-choose-section'
  id: number
  paragraphs: { id: number; paragraph: string }[]
  // Add other props for WhyChooseSectionBlock as needed
}

export interface FeatureSectionBlock {
  __component: 'blocks.feature-section'
  id: number
}

export interface ConciergeHelpItem {
  id: number
  title: string
  description: string
  icon: ImageData
}

export interface ConciergeHelpBlock {
  __component: 'blocks.concierge-help'
  id: number
  title: string
  description: string
  list: ConciergeHelpItem[]
}

type BusinessConsultationBlock =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | ConciergeHelpBlock
  | DetailsSectionBlock
  | GetInTouchBlock

export interface BusinessConsultationPageData {
  id: number
  blocks: BusinessConsultationBlock[]
}
