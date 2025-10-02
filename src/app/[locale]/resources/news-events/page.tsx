export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import NewsPage from '@/components/MainPages/NewsPage'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params

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
