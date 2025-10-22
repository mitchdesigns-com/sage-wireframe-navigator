export const runtime = 'edge'

import { notFound } from 'next/navigation'
import ServicesPage from '@/components/MainPages/ServicesPage'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: services } = await fetchServer(
    `service-pages?filters[slug][$eq]=services`,
    locale
  )

  if (!services || !services.length) {
    return notFound()
  }

  return <ServicesPage data={services} />
}
