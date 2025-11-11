export interface RichTextNode {
  text: string
  type: 'text'
}

export interface ContentChild {
  text?: string
  type: string
  children?: ContentChild[]
}

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list'
  level?: number
  format?: 'unordered' | 'ordered'
  children: ContentChild[]
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
  category: string
  ShareButtons: string
}

export interface BlogItem {
  id: number

  documentId: string
  content: ContentBlock[]
  slug: string
  blog_type: string
  HeroSinglePages: HeroSinglePage
  title: string
  category: string
  image: ImageData
  date: string
  readTime: string
  bgImage: ImageData
  author: string
  ShareButtons: string
}

export interface BlogDataResponse {
  data: BlogItem[]
}
