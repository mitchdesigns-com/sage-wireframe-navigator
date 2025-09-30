export const runtime = 'edge'

import OrganizationHealthcarePage from '@/components/MainPages/OrganizationHealthcarePage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

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
