export const runtime = 'edge'

import OrganizationHealthcarePage from '@/components/MainPages/OrganizationHealthcarePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const { data: individualOrganizationsHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-organizations-healthcare`,
    locale
  )

  if (
    !individualOrganizationsHealthcare ||
    !individualOrganizationsHealthcare.length
  ) {
    return notFound()
  }

  return <OrganizationHealthcarePage data={individualOrganizationsHealthcare} />
}
