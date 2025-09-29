export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessHealthcarePage from '@/components/MainPages/BusinessHealthcarePage'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: businessesHealthcare } = await fetchServer(
    `service-pages?filters[slug][$eq]=Businesses-Healthcare`,
    locale
  )

  if (!businessesHealthcare || !businessesHealthcare.length) {
    return notFound()
  }

  return <BusinessHealthcarePage data={businessesHealthcare} />
}
