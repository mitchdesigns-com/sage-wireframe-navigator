export const runtime = 'edge'

import NewsPage from '@/components/MainPages/NewsPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'

type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const [{ data: newsEvents }, { data: news }, { data: events }] =
    await Promise.all([
      fetchServer(`news-and-event`, locale),
      fetchServer(`news`, locale),
      fetchServer(`events`, locale),
    ])

  if (!newsEvents && !news && !events) {
    return notFound()
  }

  return (
    <NewsPage
      data={{
        newsEvents,
        news,
        events,
      }}
    />
  )
}
