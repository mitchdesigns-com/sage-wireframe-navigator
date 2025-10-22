export const runtime = 'edge'

import AboutPage from '@/components/MainPages/AboutPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'

type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (locale !== 'en' && locale !== 'ar') {
    return notFound()
  }

  const { data: about } = await fetchServer('about', locale)
  if (!about) {
    return notFound()
  }
  return <AboutPage data={about} />
}
