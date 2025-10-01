export const runtime = 'edge'

import { notFound } from 'next/navigation'
import ContactPage from '@/components/MainPages/ContactPage'
import { fetchServer } from '../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: contact } = await fetchServer(`contact-page`, locale)

  if (!contact) {
    return notFound()
  }

  return <ContactPage data={contact} />
}
