export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { fetchServer } from '../api/general'
import HomePage from '../../components/MainPages/HomePage'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  // const { data: network } = await fetchServer(`home-page`, locale)
  const [PageRes, singlesRes] = await Promise.all([
    fetchServer(`home-page`, locale),
    fetchServer(`blogs`, locale),
  ])

  const Page = PageRes?.data
  const blogPage = singlesRes?.data

  if (!Page) {
    return notFound()
  }

  return <HomePage data={Page} singles={blogPage} />
}
