export const runtime = 'edge'

import { notFound } from 'next/navigation'
import OrganizationConsultationPage from '@/components/MainPages/OrganizationConsultationPage'
import { fetchServer } from '../../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const { data: organizationConsultation } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations-consultation`,
    locale
  )

  if (!organizationConsultation || !organizationConsultation.length) {
    return notFound()
  }

  return <OrganizationConsultationPage data={organizationConsultation} />
}
