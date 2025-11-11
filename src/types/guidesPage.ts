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

export interface GuidesCardBlock {
  __component: 'resources.guides-card'
  id: number
  title: string
  description: string
  author: string
  date: string
  readTime: string
  category: string
  image: ImageData
  ShareButtons: string
}

export type GuidesBlock = HeroPageBlock | GetInTouchBlock

export interface GuidesPage {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: GuidesBlock[]
  BlocksResources: (ToggleButtonBlock | GuidesCardBlock)[]
}

export interface GuidesPageResponse {
  data: GuidesPage[]
}
