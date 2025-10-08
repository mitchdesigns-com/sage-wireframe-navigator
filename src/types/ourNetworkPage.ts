export interface NetworkData {
  id: number
  documentId: string
  HeroPages: HeroPage
  FeatureSection: FeatureSectionItem[]
  SingleCenter: SingleCenter
  CentersSection: CenterSectionItem[]
  TrustedPartner: TrustedPartner
  LoginSection: LoginSection
}

export interface HeroPage {
  id: number
  tagline: string
  title: string
  description: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: Image
}

export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}

export interface Image {
  id: number
  documentId: string
  alternativeText: string
  url: string
}
export interface FeatureIcon {
  id: number
  text: string
  icon: Image
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
  image: Image
}

export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: string
  icon: Image
}

export interface SingleCenter {
  id: number
  tagline: string
  title: string
  category: string
  description: string
  image: Image
}

export interface CenterSectionItem {
  id: number
  tagline: string
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean
  list: CenterListWrapper[]
}

export interface CenterListWrapper {
  id: number
  list: Image[]
}

export interface TrustedPartner {
  id: number
  title: string
  shortDescription: string
  description: string
  image: Image
}

export interface LoginSection {
  id: number
  title: string
  description: string
  cta: CTA
}

export interface CTA {
  id: number
  label: string
  url: string
  target: string
  style: string
}
