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

export interface ButtonData {
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

export interface FeatureItem {
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
  features: FeatureItem[]
  list: ListItem[]
  image: ImageData
}

export interface TimelineStep {
  id: number
  number: string
  title: string
  description: string
  button: string
  image: ImageData
}

export interface HowItWorksBlock {
  __component: 'blocks.how-it-works'
  id: number
  tagline: string
  title: string
  description: string
  timelineSteps: TimelineStep[]
}

export interface CardDetail {
  id: number
  paragraph: string
}

export interface Card {
  id: number
  Tagline?: string // Added as optional based on your component code
  type: string
  title: string
  description: string
  provider: string
  buttonText: string
  icon: ImageData
  details: CardDetail[]
}

export interface CardsBlock {
  __component: 'blocks.cards'
  id: number
  title: string
  cards: Card[]
}

export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

// FIX: This is the correct discriminated union of all possible blocks.
// This is the type we should use for the 'blocks' array and for typing the BLOCKS map.
export type IndividualHealthcareBlock =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | HowItWorksBlock
  | CardsBlock
  | GetInTouchBlock

export interface IndividualHealthcarePage {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: IndividualHealthcareBlock[] // This already correctly uses the union type.
}

// This is the shape of the full API response. It is NOT the block union itself.
export interface IndividualHealthcarePageResponse {
  data: IndividualHealthcarePage[]
}
