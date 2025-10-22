export const runtime = 'edge'

import ConciergePage from '@/components/MainPages/ConciergePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'

type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: individualServicesHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-individual-concierge`,
    locale
  )

  if (!individualServicesHealthcare || !individualServicesHealthcare.length) {
    return notFound()
  }

  return <ConciergePage data={individualServicesHealthcare} />
}
