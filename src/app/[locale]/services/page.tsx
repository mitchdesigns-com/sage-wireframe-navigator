export const runtime = 'edge'

import { notFound } from 'next/navigation'
import ServicesPage from '@/components/MainPages/ServicesPage'
import { fetchServer } from '../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: services } = await fetchServer(
    `service-pages?filters[slug][$eq]=services`,
    locale
  )

  if (!services || !services.length) {
    return notFound()
  }

  return <ServicesPage data={services} />
}
