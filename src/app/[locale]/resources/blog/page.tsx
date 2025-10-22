export const runtime = 'edge'

import BlogPage from '@/components/MainPages/BlogPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const [blogPageRes, singlesRes] = await Promise.all([
    fetchServer(`blog-page`, locale),
    fetchServer(`blogs`, locale),
  ])

  const blogPage = blogPageRes?.data
  const blogSingles = singlesRes?.data

  if (!blogPage) {
    return notFound()
  }

  return <BlogPage data={blogPage} singles={blogSingles} />
}
