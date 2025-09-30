export const runtime = 'edge'

import { notFound } from 'next/navigation'
import GuidesPage from '@/components/MainPages/GuidesPage'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: guides } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-guides`,
    locale
  )

  if (!guides || !guides.length) {
    return notFound()
  }

  return <GuidesPage data={guides} />
}
