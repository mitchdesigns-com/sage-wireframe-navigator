export interface RichTextChild {
  text: string
  type: 'text'
}

export interface RichTextElement {
  type: 'heading' | 'paragraph' | 'list'
  level?: number // for headings
  format?: 'unordered' | 'ordered' // for lists
  children: RichTextChild[] | RichTextElement[] // list items or heading/paragraph children
}

export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface CareerType {
  id: number
  documentId: string
  title: string
}

export interface CareerItem {
  id: number
  documentId: string
  title: string
  tags: string
  content: RichTextElement[]
  slug: string
  image: ImageData
  career_type: CareerType
}

export interface CareerResponse {
  data: CareerItem[]
}

export interface RichTextChild {
  text: string
  type: 'text'
}

export interface RichTextElement {
  type: 'heading' | 'paragraph' | 'list'
  level?: number // for headings
  format?: 'unordered' | 'ordered' // for lists
  children: RichTextChild[] | RichTextElement[]
}

// Image type
export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface CareerType {
  id: number
  documentId: string
  title: string
}

export interface CareerItem {
  id: number
  documentId: string
  title: string
  tags: string
  content: RichTextElement[]
  slug: string
  image: ImageData
  career_type: CareerType
}

export interface CareerResponse {
  data: CareerItem[]
}
