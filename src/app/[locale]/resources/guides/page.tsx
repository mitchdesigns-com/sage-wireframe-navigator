export const runtime = 'edge'

import GuidesPage from '@/components/MainPages/GuidesPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: guides } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-guides`,
    locale
  )

  if (!guides || !guides.length) {
    return notFound()
  }

  return <GuidesPage data={guides} />
}
