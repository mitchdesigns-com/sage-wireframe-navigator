export const runtime = 'edge'

import { notFound } from 'next/navigation'
import OrganizationConsultationPage from '@/components/MainPages/OrganizationConsultationPage'
import { fetchServer } from '../../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: organizationConsultation } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations-consultation`,
    locale
  )

  if (!organizationConsultation || !organizationConsultation.length) {
    return notFound()
  }

  return <OrganizationConsultationPage data={organizationConsultation} />
}
