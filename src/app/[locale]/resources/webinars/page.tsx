export const runtime = 'edge'

import { notFound } from 'next/navigation'
import WebinarsPage from '@/components/MainPages/WebinarsPage'
import { fetchServer } from '../../../api/general'
export default async function page({ params }: { params: { locale: string } }) {
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
