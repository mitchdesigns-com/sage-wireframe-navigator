export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import TestimonialsPage from '../../../../components/MainPages/TestimonialsPage'
type Locale = 'en' | 'ar'
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: testimonials } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-testimonials`,
    locale
  )

  if (!testimonials || !testimonials.length) {
    return notFound()
  }

  return <TestimonialsPage data={testimonials} />
}
