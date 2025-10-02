import { fetchServer } from '@/app/api/general'
import { notFound } from 'next/navigation'
import SingleNewsPage from '@/components/MainPages/SingleNewsPage'
export const runtime = 'edge'

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const { slug, locale } = params

  const [{ data: singleCareer }, { data: allBlogs }] = await Promise.all([
    fetchServer(`events?filters[slug][$eq]=${slug}&`, locale),
    fetchServer(`events`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return <SingleNewsPage data={singleCareer[0]} allBlogs={allBlogs} />
}
