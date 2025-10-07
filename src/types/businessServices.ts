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

export interface HeroPagesBlock {
  __component: 'blocks.hero-pages'
  id: number
  tagline: string
  title: string
  description: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
}

export interface FeatureIcon {
  id: number
  text: string
  icon: ImageData
}
export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: 'light' | 'dark'
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

export interface WhyFeature {
  id: number
  title: string
  description: string
  bgColor: string
  textColor: string
  type: 'image' | 'icon'
  descColor: string
  iconElement: ImageData
  image: ImageData
}

export interface WhySectionBlock {
  __component: 'blocks.why-section'
  id: number
  title: string
  description: string
  buttonText: string
  features: WhyFeature[]
}

export interface CentersSectionBlock {
  __component: 'blocks.centers-section'
  id: number
  list: ImageData[]
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface FAQSectionBlock {
  __component: 'blocks.faq-section'
  id: number
  title: string
  description: string
  faqData: FAQItem[]
}

export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export type PageBlock =
  | HeroPagesBlock
  | FeatureSectionBlock
  | WhySectionBlock
  | CentersSectionBlock
  | FAQSectionBlock
  | GetInTouchBlock

export interface BusinessServiceData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: PageBlock[]
}

export interface BusinessServicesResponse {
  data: BusinessServiceData[]
}
