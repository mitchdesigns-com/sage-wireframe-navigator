export const runtime = 'edge'

import OrganizationsPage from '@/components/MainPages/OrganizationsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: servicesOrganizations } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations`,
    locale
  )

  if (!servicesOrganizations || !servicesOrganizations.length) {
    return notFound()
  }

  return <OrganizationsPage data={servicesOrganizations} />
}
