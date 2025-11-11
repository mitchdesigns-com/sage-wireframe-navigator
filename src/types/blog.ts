// blog.interface.ts

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

export interface HeroPages {
  id: number
  tagline: string
  title: string
  description: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
}

export interface BlogPageData {
  id: number
  documentId: string
  HeroPages: HeroPages
}
// singleBlog.interface.ts

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

// ---------- Rich Text Content ----------

export interface TextChild {
  text: string
  type: 'text'
}

export interface ListItem {
  type: 'list-item'
  children: TextChild[]
}

export interface ContentBase {
  type: string
  children: (TextChild | ListItem)[]
}

export interface HeadingContent extends ContentBase {
  type: 'heading'
  level: number
}

export interface ParagraphContent extends ContentBase {
  type: 'paragraph'
}

export interface ListContent extends ContentBase {
  type: 'list'
  format: 'unordered' | 'ordered'
  children: ListItem[]
}

export type BlogContent = HeadingContent | ParagraphContent | ListContent

// ---------- Hero Section ----------

export interface HeroSinglePages {
  id: number
  title: string
  author: string
  date: string
  readTime: string
  button: string
  href: string
  breadcrumbItems: BreadcrumbItem[]
  bgImage: ImageData
  slug: string
  image: ImageData
  HeroSinglePages: HeroSinglePages
  ShareButtons: string
}

// ---------- Blog Post ----------

export interface BlogPost {
  id: number
  documentId: string
  content: BlogContent[]
  slug: string
  blog_type: string
  HeroSinglePages: HeroSinglePages
  title: string
  category: string
  image: ImageData
  date: string
  readTime: string
  bgImage: ImageData
  author: string
  ShareButtons: string
}

// ---------- API Response ----------

export interface SingleBlogResponse {
  data: BlogPost[]
}
