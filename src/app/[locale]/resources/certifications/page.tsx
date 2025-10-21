export const runtime = 'edge'

import CertificationsPage from '@/components/MainPages/CertificationsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'
export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const { data: certifications } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-certifications`,
    locale
  )

  if (!certifications || !certifications.length) {
    return notFound()
  }

  return <CertificationsPage data={certifications} />
}
