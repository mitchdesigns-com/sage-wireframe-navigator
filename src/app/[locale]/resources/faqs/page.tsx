export const runtime = 'edge'

import { notFound } from 'next/navigation'
import FAQsPage from '@/components/MainPages/FAQsPage'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
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
