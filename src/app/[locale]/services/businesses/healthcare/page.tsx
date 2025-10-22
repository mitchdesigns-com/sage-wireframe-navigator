export const runtime = 'edge'

import BusinessHealthcarePage from '@/components/MainPages/BusinessHealthcarePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'

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
