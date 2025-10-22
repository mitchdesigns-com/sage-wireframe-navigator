export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessConsultationPage from '@/components/MainPages/BusinessConsultationPage'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: businessesConsultation } = await fetchServer(
    `service-pages?filters[slug][$eq]=businesses-consultation`,
    locale
  )

  if (!businessesConsultation || !businessesConsultation.length) {
    return notFound()
  }

  return <BusinessConsultationPage data={businessesConsultation} />
}
