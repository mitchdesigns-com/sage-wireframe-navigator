export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import ConciergePage from '@/components/MainPages/ConciergePage'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: individualServicesHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-individual-concierge`,
    locale
  )

  if (!individualServicesHealthcare || !individualServicesHealthcare.length) {
    return notFound()
  }

  return <ConciergePage data={individualServicesHealthcare} />
}
