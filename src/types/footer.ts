export interface FooterData {
  id: number
  documentId: string
  phone: string
  email: string
  logo: Logo
  menu: MenuSection[]
  socialMedia: SocialMedia[]
}

export interface Logo {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

export interface MenuSection {
  id: number
  title: string
  SingleLink: SingleLink[]
}

export interface SingleLink {
  id: number
  title: string
  href: string
}

export interface SocialMedia {
  id: number
  href: string
  icon: Icon
}

export interface Icon {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

export interface FooterResponse {
  data: FooterData
  meta: Record<string, unknown>
}
