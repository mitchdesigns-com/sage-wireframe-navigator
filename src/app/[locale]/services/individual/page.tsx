export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import IndividualsPage from '@/components/MainPages/IndividualsPage'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  const { data: individualServices } = await fetchServer(
    `service-pages?filters[slug][$eq]=services-individual`,
    locale
  )

  if (!individualServices || !individualServices.length) {
    return notFound()
  }

  return <IndividualsPage data={individualServices} />
}
