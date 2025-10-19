export interface ResourceIcon {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

export interface ResourceItem {
  id: number
  title: string
  description: string
  href: string
  icon: ResourceIcon
}

export interface ResourceColumns {
  id: number
  column1: ResourceItem[]
  column2: ResourceItem[]
  column3: ResourceItem[]
}

export interface ServiceItem {
  id: number
  title: string
  description: string
  href: string
  icon: ResourceIcon
}

export interface ServiceCategory {
  id: number
  title: string
  items: ServiceItem[]
}

export interface ServiceCategories {
  id: number
  individuals: ServiceCategory
  businesses: ServiceCategory
  organizations: ServiceCategory
}

export interface ResourceData {
  id: number
  documentId: string
  resourceItems: ResourceColumns
  serviceCategories: ServiceCategories
}

export interface ResourceResponse {
  data: ResourceData
}
