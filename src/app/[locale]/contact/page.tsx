export const runtime = 'edge'

import { notFound } from 'next/navigation'
import ContactPage from '@/components/MainPages/ContactPage'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

// TODO: enhance props with Next.js 15 typings check home page
export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params
  const { data: contact } = await fetchServer(`contact-page`, locale)

  if (!contact) {
    return notFound()
  }

  return <ContactPage data={contact} />
}
