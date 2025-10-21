export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../api/general'
import HomePage from '../../components/MainPages/HomePage'
type Locale = 'en' | 'ar'

// TODO: enhance props with Next.js 15 typings
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const [PageRes, singlesRes] = await Promise.all([
    fetchServer(`home-page`, locale),
    fetchServer(`news`, locale),
  ])

  const Page = PageRes?.data
  const blogPage = singlesRes?.data

  if (!Page) {
    return notFound()
  }

  return <HomePage data={Page} news={blogPage} locale={locale} />
}
