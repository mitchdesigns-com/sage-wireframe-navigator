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

// ─────────────────────────────────────────────
// BLOCK: Hero With Image
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// BLOCK: Why Choose Section
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// BLOCK: Feature Section
// ─────────────────────────────────────────────
export interface FeatureItem {
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
  features: any[] // If the backend may expand this later
  list: FeatureItem[]
  image: ImageData
}

// ─────────────────────────────────────────────
// BLOCK: Concierge Help
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// BLOCK: Details Section
// ─────────────────────────────────────────────
export interface DetailsSectionBlock {
  __component: 'blocks.details-section'
  id: number
  title: string
  description: string
  buttonText: string
  buttonHref: string
  image: ImageData
}

// ─────────────────────────────────────────────
// BLOCK: Get In Touch
// ─────────────────────────────────────────────
export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

// ─────────────────────────────────────────────
// Union of all block types
// ─────────────────────────────────────────────
export type BusinessConciergeBlock =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | ConciergeHelpBlock
  | DetailsSectionBlock
  | GetInTouchBlock

// ─────────────────────────────────────────────
// Main page type
// ─────────────────────────────────────────────
export interface BusinessConciergePageData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: BusinessConciergeBlock[]
}

// The full API response shape
export interface BusinessConciergeResponse {
  data: BusinessConciergePageData[]
}
