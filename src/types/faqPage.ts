export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface BreadcrumbItem {
  id: number
  href: string
  label: string
}

export interface HeroPageBlock {
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

export interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
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

export interface ToggleOption {
  id: number
  title: string
  value: string
}

export interface ToggleButtonBlock {
  __component: 'resources.toggle-button'
  id: number
  options: ToggleOption[]
}

export type FAQBlock = HeroPageBlock | FAQSectionBlock | GetInTouchBlock

export interface FAQPage {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: FAQBlock[]
  BlocksResources: ToggleButtonBlock[]
}

export interface FAQPageResponse {
  data: FAQPage[]
}
