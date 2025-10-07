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

export interface HeroPagesData {
  id: number
  tagline: string
  title: string
  description: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
}

export interface FeatureListItem {
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
export interface FeatureSectionItem {
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

export interface JobOpenings {
  id: number
  title: string
  description: string
}

export interface CareersPageData {
  id: number
  documentId: string
  HeroPages: HeroPagesData
  FeatureSection: FeatureSectionItem[]
  jobOpenings: JobOpenings
}
export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface CareerType {
  id: number
  documentId: string
  title: string
}

export interface ContentTextChild {
  text: string
  type: 'text'
}

export interface HeadingContent {
  type: 'heading'
  level: number
  children: ContentTextChild[]
}

export interface ParagraphContent {
  type: 'paragraph'
  children: ContentTextChild[]
}

export interface ListItemContent {
  type: 'list-item'
  text: string

  children: ContentTextChild[]
}

export interface ListContent {
  type: 'list'
  format: 'unordered' | 'ordered'
  children: ListItemContent[]
}

export type ContentBlock = HeadingContent | ParagraphContent | ListContent

export interface CareerItem {
  id: number
  documentId: string
  title: string
  tags: string
  content: ContentBlock[]
  slug: string
  image: ImageData
  career_type: CareerType
}

export interface CareersListData {
  data: CareerItem[]
}
