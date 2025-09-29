export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../../api/general'
import BusinessConciergePage from '@/components/MainPages/BusinessConciergePage'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: businessesConcierge } = await fetchServer(
    `service-pages?filters[slug][$eq]=Businesses-Concierge`,
    locale
  )

  if (!businessesConcierge || !businessesConcierge.length) {
    return notFound()
  }

  return <BusinessConciergePage data={businessesConcierge} />
}
