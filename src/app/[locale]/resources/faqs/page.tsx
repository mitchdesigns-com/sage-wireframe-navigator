export const runtime = 'edge'

import { notFound } from 'next/navigation'
import FAQsPage from '@/components/MainPages/FAQsPage'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'
export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  const { data: faqs } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-faqs`,
    locale
  )

  if (!faqs || !faqs.length) {
    return notFound()
  }

  return <FAQsPage data={faqs} />
}
