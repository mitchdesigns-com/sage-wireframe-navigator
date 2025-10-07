export const runtime = 'edge'

import { notFound } from 'next/navigation'
import WebinarsPage from '@/components/MainPages/WebinarsPage'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params
  const [{ data: webinar }, { data: events }] = await Promise.all([
    fetchServer(`webinar`, locale),
    fetchServer(`events`, locale),
  ])

  if (!webinar) {
    return notFound()
  }

  return (
    <WebinarsPage
      data={{
        webinar,
        events,
      }}
    />
  )
}
