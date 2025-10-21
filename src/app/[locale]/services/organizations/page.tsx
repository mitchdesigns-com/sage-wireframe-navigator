export const runtime = 'edge'

import OrganizationsPage from '@/components/MainPages/OrganizationsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const { data: servicesOrganizations } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations`,
    locale
  )

  if (!servicesOrganizations || !servicesOrganizations.length) {
    return notFound()
  }

  return <OrganizationsPage data={servicesOrganizations} />
}
