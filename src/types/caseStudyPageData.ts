export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}

export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
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

export interface ToggleOption {
  id: number
  title: string
  value: string
}

export interface ToggleButtonData {
  id: number
  options: ToggleOption[]
}

export interface GetInTouchData {
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export interface CaseStudyPageData {
  id: number
  documentId: string
  HeroPages: HeroPagesData
  ToggleButton: ToggleButtonData
  GetInTouch: GetInTouchData
}

export interface BreadcrumbItem {
  id: number
  label: string
  href: string
}

export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface CaseStudyType {
  id: number
  documentId: string
  title: string
}

export interface HeroCarouselData {
  id: number
  title: string
  dayNumbers: string
  year: string
  description: string
  category: string
  breadcrumbItems: BreadcrumbItem[]
}

export interface FeatureListItem {
  id: number
  title: string
  description: string
  theme: string
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
  list: FeatureListItem[]
  image: ImageData
}

// ─────────────────────────────────────────────
// Challenge Section
export interface ChallengeTextNode {
  text: string
  type: string
}

export interface ChallengeContentItem {
  type: 'heading' | 'paragraph' | 'list'
  level?: number
  format?: 'unordered' | 'ordered'
  children: ChallengeTextNode[] | ChallengeContentItem[]
}

export interface ChallengeDataItem {
  id: number
  title: string
  description: string
}

export interface ChallengeSectionData {
  id: number
  content: ChallengeContentItem[]
  ChallengeData: ChallengeDataItem[]
}

export interface GallerySectionData {
  id: number
  title: string
  description: string
  images: ImageData[]
}

export interface GetInTouchData {
  id: number
  tagline: string
  title: string
  description: string
  image: ImageData
}

export interface CaseStudy {
  id: number
  documentId: string
  slug: string
  description: string
  category: string
  case_study_type: CaseStudyType
  HeroCarousel: HeroCarouselData
  FeatureSection: FeatureSectionItem[]
  ChallengeSection: ChallengeSectionData
  GallerySection: GallerySectionData
  GetInTouch: GetInTouchData
}

export interface CaseStudiesResponse {
  data: CaseStudy[]
}
