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

export interface HeroSection {
  id: number
  title: string
  subtitle?: string
  description?: string
  background_image?: {
    url: string
    alternativeText: string
  }
  cta_primary?: {
    label: string
    url: string
    target: string
    style: string
  }
  cta_secondary?: {
    label: string
    url: string
    target: string
    style: string
  }
  alignment: 'left' | 'center' | 'right'
  theme: 'light' | 'dark' | 'sage' | 'blue'
  height: 'small' | 'medium' | 'large' | 'full'
  overlay?: boolean
  overlay_opacity?: number
  breadcrumbItems: BreadcrumbItem[]
  tagline?: string
}

export interface AboutData {
  id: number
  title: string
  description: string
}

export interface OverviewSection {
  id: number
  mainSubtitle: string
  mainTitle: string
  mainDescription: string
  tagline: string
  title: string
  description: string
  mainImage: ImageData
  aboutData: AboutData[]
  vectorImage: ImageData
}

export interface VideoSection {
  id: number
  video: ImageData
  playButton: ImageData
}

export interface MissionSection {
  id: number
  tagline: string
  title: string
  description: string
}

export interface ValuesCard {
  id: number
  tagline: string | null
  title: string
  titleColor: string
  description: string
  descriptionColor: string
  bgColor: string
  taglineColor: string
  image: ImageData
}

export interface ValuesSection {
  id: number
  tagline: string
  title: string
  description: string
  CardsList: ValuesCard[]
}

export interface TeamMember {
  id: number
  name: string
  title: string
  image: ImageData
}

export interface HiringSection {
  id: number
  tagline: string
  title: string
  description: string
  cta: string
  href: string
}

export interface OurTeam {
  id: number
  title: string
  description: string
  TeamMember: TeamMember[]
  hiringSection: HiringSection
}

export interface CenterImage extends ImageData {}

export interface CenterImageList {
  id: number
  list: CenterImage[]
}

export interface CentersSection {
  id: number
  tagline: string
  title: string
  description: string
  ctaText: string
  href: string
  backgroundColor: string
  textColor: string
  reverse: boolean
  list: CenterImageList[]
}

export interface AboutPageData {
  id: number
  documentId: string
  HeroSection: HeroSection[]
  OverviewSection: OverviewSection
  videoSection: VideoSection
  MissionSection: MissionSection
  ValuesSection: ValuesSection
  OurTeam: OurTeam
  CentersSection: CentersSection[]
}

export interface AboutResponse {
  data: AboutPageData
}
