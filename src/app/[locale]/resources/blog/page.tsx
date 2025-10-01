export const runtime = 'edge'

import { notFound } from 'next/navigation'
import BlogPage from '@/components/MainPages/BlogPage'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

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
