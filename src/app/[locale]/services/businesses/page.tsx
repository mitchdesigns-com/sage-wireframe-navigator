export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import BusinessesPage from '@/components/MainPages/BusinessesPage'

export default async function page({ params }: { params: { locale: string } }) {
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
