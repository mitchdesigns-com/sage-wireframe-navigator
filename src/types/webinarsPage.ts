export interface WebinarsPageData {
  id: number
  documentId: string
  HeroPages: HeroPages
  FeatureSection: FeatureSection[]
  WebinarHighlights: WebinarHighlights
  WebinarList: WebinarList
}

export interface HeroPages {
  id: number
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
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
  features: FeatureItem[]
  image: Media
}

export interface FeatureItem {
  id: number
  text: string
  icon: Media
}

export interface WebinarHighlights {
  id: number
  title: string
  highlights: HighlightItem[]
}

export interface HighlightItem {
  id: number
  title: string
  description: string
  bgColor: string
  textColor: string
  descColor: string
}

export interface WebinarList {
  id: number
  news: boolean
  subTitle: string
  title: string
  description: string
  ToggleButton: ToggleButton
}

export interface ToggleButton {
  id: number
  options: ToggleOption[]
}

export interface ToggleOption {
  id: number
  title: string
  value: string
}

export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}

export interface Media {
  id: number
  documentId: string
  alternativeText: string
  url: string
}
