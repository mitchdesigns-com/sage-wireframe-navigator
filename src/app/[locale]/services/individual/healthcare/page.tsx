export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import HealthcareServicesPage from '@/components/MainPages/HealthcareServicesPage'

export default async function page({ params }: { params: { locale: string } }) {
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
