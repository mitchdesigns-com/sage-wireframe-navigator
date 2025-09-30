export const runtime = 'edge'

import CertificationsPage from '@/components/MainPages/CertificationsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: certifications } = await fetchServer(
    `resources-pages?filters[slug][$eq]=resources-certifications`,
    locale
  )

  if (!certifications || !certifications.length) {
    return notFound()
  }

  return <CertificationsPage data={certifications} />
}
