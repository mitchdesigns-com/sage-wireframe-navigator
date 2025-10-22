export const runtime = 'edge'

import BusinessConciergePage from '@/components/MainPages/BusinessConciergePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'

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
