export const runtime = 'edge'

import IndividualsPage from '@/components/MainPages/IndividualsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'

type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: individualServices } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-individual`,
    locale
  )

  if (!individualServices || !individualServices.length) {
    return notFound()
  }

  return <IndividualsPage data={individualServices} />
}
