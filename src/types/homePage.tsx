export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface VideoData {
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

export interface HeroWithVideo {
  id: string
  title: string
  description: string
  breadcrumbItems: BreadcrumbItem[]
  video: VideoData
}

export interface ServiceItem {
  id: number
  key: string
  label: string
  href: string
  description: string
  width: number
  imageLabel: ImageData
}

export interface SectionHeader {
  id: number
  heading: string
  description: string
  tagline: string
  cta: string
  href: string
  SERVICES: ServiceItem[]
}

export interface FeatureItem {
  id: number
  text: string
  icon: ImageData
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
  image: ImageData
}

export interface ServiceLink {
  id: number
  label: string
  href: string
}

export interface ServiceSectionItem {
  id: number
  title: string
  description: string
  backgroundColor: string
  textColor: string
  hasDecorativeVector: boolean
  links: ServiceLink[]
  imageUrl: ImageData
}

export interface ComprehensiveServices {
  id: number
  ServiceSection: ServiceSectionItem[]
}

export interface HowItWorksStep {
  id: number
  number: string
  title: string
  description: string
}

export interface HowItWorks {
  id: number
  tagline: string
  title: string
  description: string
  steps: HowItWorksStep[]
}

export interface Awards {
  id: number
  title: string
  images: ImageData[]
}

export interface SectionHeaderResources {
  id: number
  heading: string
  color: string
  tagline: string
  description: string
  home: boolean
}

export interface ResourceItem {
  id: number
  title: string
  description: string
  href: string
}

export interface Resources {
  id: number
  SectionHeaderResources: SectionHeaderResources
  image: ImageData
  resourcesSection: ResourceItem[]
}

export interface CenterImageItem {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface CenterList {
  id: number
  list: CenterImageItem[]
}

export interface CentersSectionItem {
  id: number
  tagline: string
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean
  list: CenterList[]
}

export interface BlogSection {
  id: number
  heading: string
  subheading: string
}

export interface GetInTouch {
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export interface ServicesPageData {
  id: number
  documentId: string
  HeroWithVideo: HeroWithVideo[]
  SectionHeader: SectionHeader
  featureSection: FeatureSection[]
  ComprehensiveServices: ComprehensiveServices
  HowItWorks: HowItWorks
  Awards: Awards
  Resources: Resources
  CentersSection: CentersSectionItem[]
  BlogSection: BlogSection
  GetInTouch: GetInTouch
}

export interface ServicesPageResponse {
  data: ServicesPageData
}
