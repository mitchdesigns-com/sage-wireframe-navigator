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
  primaryButton: ButtonData
  secondaryButton: ButtonData
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

export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: 'light' | 'dark' | 'sage' | 'blue'
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
  list: FeatureListItem[]
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

export type ServiceIndividualBlocks =
  | HeroWithImageBlock
  | WhyChooseSectionBlock
  | FeatureSectionBlock
  | DetailsSectionBlock
  | GetInTouchBlock

export interface ServiceIndividualItem {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: ServiceIndividualBlocks[]
}

export interface ServiceIndividualResponse {
  data: ServiceIndividualItem[]
}
