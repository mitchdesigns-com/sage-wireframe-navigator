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

export interface HeroPages {
  id: number
  tagline: string
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
}

export interface FeatureWithTagline {
  id: number
  tagline: string
  title: string
  description: string
  name: string
  date: string
  image: ImageData
  vectorImage: ImageData
}

export interface NewsSection {
  id: number
  subtitle: string
  title: string
  description: string
}

export interface ToggleOption {
  id: number
  title: string
  value: string
}

export interface ToggleButton {
  id: number
  options: ToggleOption[]
}

export interface WebinarList {
  id: number
  news: boolean
  subTitle: string | null
  title: string | null
  description: string | null
  ToggleButton: ToggleButton
}

export interface NewsEventsData {
  id: number
  documentId: string
  HeroPages: HeroPages
  featureWithTagline: FeatureWithTagline
  NewsSection: NewsSection
  WebinarList: WebinarList
}

export interface NewsEventsResponse {
  data: NewsEventsData
}
// ─────────────────────────────────────────────
// News
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

export interface RichTextChild {
  text: string
  type: 'text'
}
export interface RichTextElement {
  type: 'heading' | 'paragraph' | 'list'
  level?: number // for headings
  format?: 'unordered' | 'ordered' // for lists
  children: RichTextChild[] | RichTextElement[] // list items or heading/paragraph children
}
// export interface RichTextBlock {
//   type: string
//   level?: number
//   children: RichTextChild[]
// }

export interface HeroSinglePage {
  id: number
  title: string
  author: string
  date: string
  readTime: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
  ShareButtons: string
}

export interface NewsArticle {
  id: number
  documentId: string
  firstContent: RichTextElement[]
  secondContent: RichTextElement[]
  slug: string
  news_type: string
  HeroSinglePages: HeroSinglePage
  image: ImageData
  title: string
  bgImage: ImageData
  author: string
  date: string
  ShareButtons: string
}

export interface NewsArticlesResponse {
  data: NewsArticle[]
}

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

export interface EventType {
  id: number
  documentId: string
  title: string
}

export interface HeroCarousel {
  id: number
  title: string
  dayNumbers: string
  year: string
  day: string

  description: string
  category: string
  breadcrumbItems: BreadcrumbItem[]
  images: ImageData[]
}

export interface FeatureSection {
  id: number
  tagline: string
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean

  image: ImageData
}

export interface EventData {
  id: number
  documentId: string
  slug: string
  events_type: EventType
  HeroCarousel: HeroCarousel
  FeatureSection: FeatureSection
}

export interface EventsResponse {
  data: EventData[]
}
