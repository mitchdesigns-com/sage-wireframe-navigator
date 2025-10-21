export const runtime = 'edge'

import { notFound } from 'next/navigation'
import GuidesPage from '@/components/MainPages/GuidesPage'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
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
