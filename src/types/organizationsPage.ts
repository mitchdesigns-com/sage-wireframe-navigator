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

export interface Paragraph {
  id: number
  paragraph: string
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface HeroPagesBlock {
  __component: 'blocks.hero-pages'
  id: number
  tagline: string
  title: string
  description: string
  button: Button
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
}

export interface Feature {
  id: number
  text: string
  icon: ImageData
}

export interface ListItem {
  id: number
  title?: string
  description?: string
  theme?: string
  icon?: ImageData
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

export interface WhyFeature {
  id: number
  title: string
  description: string
  bgColor: string
  textColor: string
  type: 'icon' | 'image'
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

export type Block =
  | HeroPagesBlock
  | FeatureSectionBlock
  | WhySectionBlock
  | FAQSectionBlock
  | GetInTouchBlock

export interface ServicesOrganizations {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: Block[]
}

export interface ServicesOrganizationsResponse {
  data: ServicesOrganizations[]
}
