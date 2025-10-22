export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessHealthcarePage from '@/components/MainPages/BusinessHealthcarePage'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: businessesHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=Businesses-Healthcare`,
    locale
  )

  if (!businessesHealthcare || !businessesHealthcare.length) {
    return notFound()
  }

  return <BusinessHealthcarePage data={businessesHealthcare} />
}
