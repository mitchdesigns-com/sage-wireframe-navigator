export const runtime = 'edge'

import FAQsPage from '@/components/MainPages/FAQsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: faqs } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-faqs`,
    locale
  )

  if (!faqs || !faqs.length) {
    return notFound()
  }

  return <FAQsPage data={faqs} />
}
