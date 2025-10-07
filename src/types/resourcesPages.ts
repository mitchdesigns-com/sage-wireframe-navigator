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

export interface CentersListItem {
  id: number
  list: ImageData[]
}

export interface CentersSectionBlock {
  __component: 'blocks.centers-section-data'
  id: number
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean
  list: CentersListItem[]
}

export interface GetInTouchBlock {
  __component: 'blocks.get-in-touch'
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export interface CertificateCardBlock {
  __component: 'resources.certificate-card'
  id: number
  title: string
  description: string
  image: ImageData
}

export type ResourceBlocks =
  | HeroPagesBlock
  | CentersSectionBlock
  | GetInTouchBlock

export interface ResourceItem {
  id: number
  documentId: string
  Name: string
  slug: string
  blocks: ResourceBlocks[]
  BlocksResources: CertificateCardBlock[]
}

export interface ResourcesResponse {
  data: ResourceItem[]
}
