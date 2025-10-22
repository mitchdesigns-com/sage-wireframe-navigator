export const runtime = 'edge'

import OrganizationConciergePage from '@/components/MainPages/OrganizationConciergePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'

type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

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
