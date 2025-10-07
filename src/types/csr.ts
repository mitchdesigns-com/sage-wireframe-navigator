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

export interface FeatureIcon {
  id: number
  text: string
  icon: ImageData
}
export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: string
  icon: ImageData
}
export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: string
  icon: ImageData
}
export interface FeatureSectionData {
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

export interface SageSponsorsData {
  id: number
  title: string
}

export interface CSRRegistrationData {
  id: number
  subTitle: string
  title: string
  description: string
}

export interface CSRPageData {
  id: number
  documentId: string
  HeroPages: HeroPagesData
  FeatureSection: FeatureSectionData[]
  sageSponsors: SageSponsorsData
  FeatureSectionLast: FeatureSectionData[]
  CSRRegistration: CSRRegistrationData
}

export interface CSRApiResponse {
  data: CSRPageData
}
