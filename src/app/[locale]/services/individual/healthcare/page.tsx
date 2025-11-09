export const runtime = 'edge'

import HealthcareServicesPage from '@/components/MainPages/HealthcareServicesPage'
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
    `service-pages?filters[slug][$eq]=services-individual-healthcare`,
    locale
  )

  if (!individualServicesHealthcare || !individualServicesHealthcare.length) {
    return notFound()
  }
  console.log('individualServicesHealthcare', individualServicesHealthcare)
  return <HealthcareServicesPage data={individualServicesHealthcare} />
}
