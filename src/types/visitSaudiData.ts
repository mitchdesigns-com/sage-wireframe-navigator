export interface VisitSaudiData {
  id: number
  documentId: string
  HeroWithVideo: HeroWithVideo
  FeatureSection: FeatureSection[]
  ChangingColorsCards: ChangingColorsCards
  FeatureSectionLast: FeatureSectionLast[]
  BlogsSection: BlogsSection
  GetInTouch: GetInTouch
}

export interface HeroWithVideo {
  id: number
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
  video: Media
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
  list: FeatureListItem[]
  image: Media
}

export interface FeatureItem {
  id: number
  text: string
  icon?: Media
}

export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: string
  icon: Media
}

export interface ChangingColorsCards {
  id: number
  tagline: string
  title: string
  description: string
  CardsList: CardItem[]
}

export interface CardItem {
  id: number
  tagline: string
  title: string
  titleColor: string
  description: string
  descriptionColor: string
  bgColor: string
  taglineColor: string
  image: Media
}

export interface FeatureSectionLast {
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
  list: FeatureListItem[]
  image: Media
}

export interface BlogsSection {
  id: number
  tagline: string
  heading: string
  subheading: string
  cta: Cta
}

export interface Cta {
  id: number
  label: string
  href: string
  variant?: string
  rightIcon?: boolean
}

export interface GetInTouch {
  id: number
  tagline: string
  title: string
  description: string
  image: Media
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
