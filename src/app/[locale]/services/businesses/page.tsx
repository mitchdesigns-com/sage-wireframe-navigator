export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import BusinessesPage from '@/components/MainPages/BusinessesPage'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  const { data: BusinessesServices } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-businesses`,
    locale
  )

  if (!BusinessesServices || !BusinessesServices.length) {
    return notFound()
  }

  return <BusinessesPage data={BusinessesServices} />
}
