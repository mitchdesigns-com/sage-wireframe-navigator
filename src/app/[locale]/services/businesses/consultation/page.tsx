export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessConsultationPage from '@/components/MainPages/BusinessConsultationPage'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: businessesConsultation } = await fetchServer(
    `service-pages?filters[slug][$eq]=businesses-consultation`,
    locale
  )

  if (!businessesConsultation || !businessesConsultation.length) {
    return notFound()
  }

  return <BusinessConsultationPage data={businessesConsultation} />
}
