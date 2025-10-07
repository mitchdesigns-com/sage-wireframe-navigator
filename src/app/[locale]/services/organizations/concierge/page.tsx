export const runtime = 'edge'

import { notFound } from 'next/navigation'
import OrganizationConciergePage from '@/components/MainPages/OrganizationConciergePage'
import { fetchServer } from '../../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
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
