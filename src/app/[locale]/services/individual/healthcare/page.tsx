export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import HealthcareServicesPage from '@/components/MainPages/HealthcareServicesPage'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  const { data: individualServicesHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-individual-healthcare`,
    locale
  )

  if (!individualServicesHealthcare || !individualServicesHealthcare.length) {
    return notFound()
  }

  return <HealthcareServicesPage data={individualServicesHealthcare} />
}
