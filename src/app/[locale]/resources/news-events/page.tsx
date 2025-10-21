export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
import NewsPage from '@/components/MainPages/NewsPage'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
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
