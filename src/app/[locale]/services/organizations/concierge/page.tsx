export const runtime = 'edge'

import { notFound } from 'next/navigation'
import OrganizationConciergePage from '@/components/MainPages/OrganizationConciergePage'
import { fetchServer } from '../../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: servicesOrganizationsConcierge } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations-concierge`,
    locale
  )

  if (
    !servicesOrganizationsConcierge ||
    !servicesOrganizationsConcierge.length
  ) {
    return notFound()
  }

  return <OrganizationConciergePage data={servicesOrganizationsConcierge} />
}
