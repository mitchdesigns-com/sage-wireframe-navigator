export const runtime = 'edge'

import ContactPage from '@/components/MainPages/ContactPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const { data: contact } = await fetchServer(`contact-page`, locale)

  if (!contact) {
    return notFound()
  }

  return <ContactPage data={contact} />
}
