export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessConciergePage from '@/components/MainPages/BusinessConciergePage'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: businessesConcierge } = await fetchServer(
    `service-pages?filters[slug][$eq]=Businesses-Concierge`,
    locale
  )

  if (!businessesConcierge || !businessesConcierge.length) {
    return notFound()
  }

  return <BusinessConciergePage data={businessesConcierge} />
}
