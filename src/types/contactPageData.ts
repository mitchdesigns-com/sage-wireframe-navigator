export interface ImageData {
  id: number
  documentId: string
  alternativeText: string
  url: string
}

export interface ToggleOption {
  id: number
  title: string
  value: string
}

export interface ToggleButton {
  id: number
  options: ToggleOption[]
}

export interface ContactCard {
  id: number
  tagline: string
  title: string
  titleColor: string
  description: string
  descriptionColor: string
  bgColor: string
  taglineColor: string
  image: ImageData
}

export interface ContactData {
  id: number
  tagline: string
  title: string
  description: string
  CardsList: ContactCard[]
  ToggleButton: ToggleButton
}

export interface ContactPageData {
  id: number
  documentId: string
  tagline: string
  title: string
  description: string
  image: ImageData
  ToggleButton: ToggleButton
  calendlySection: undefined //change later
  ContactData: ContactData
}
