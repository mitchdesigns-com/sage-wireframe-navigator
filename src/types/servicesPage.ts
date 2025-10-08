export interface ServicesPageData {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: Block[]
}

export type Block =
  | HeroSectionBlock
  | FeatureSectionBlock
  | ServicesSectionBlock
  | GetInTouchBlock

export interface HeroSectionBlock {
  __component: 'blocks.hero-section'
  id: number
  title: string
  subtitle: string
  description: string
  alignment: 'center' | 'left' | 'right'
  theme: 'light' | 'dark' | 'blue' | 'sage'
  height: 'small' | 'medium' | 'large' | 'full'
  overlay: boolean
  overlay_opacity: number
  tagline: string
  background_image: Image
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
  breadcrumbItems: BreadcrumbItem[]
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
  features: Feature[]
  list: FeatureListItem[] // can extend if list structure is known
  image: Image
}

export interface ServicesSectionBlock {
  __component: 'blocks.services-section'
  id: number
  tagline: string
  title: string
  description: string
  backgroundColor: string
  textColor: string
  detailedServices: DetailedService[]
  image: Image
}

export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: Image
}

export interface Feature {
  id: number
  text: string
  icon: Image
}

export interface DetailedService {
  id: number
  title: string
  description: string
  href: string
  icon: Image
}

export interface Image {
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

export interface CTA {
  id: number
  label: string
  url: string
  target: string
  style: string
}
