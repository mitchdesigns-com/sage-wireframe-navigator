import { fetchServer } from '@/app/api/general'
import { notFound } from 'next/navigation'
import SingleNewsOnlyPage from '@/components/MainPages/SingleNewsOnlyPage'
export const runtime = 'edge'

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const { slug, locale } = params

  const [{ data: singleCareer }, { data: allBlogs }] = await Promise.all([
    fetchServer(`news?filters[slug][$eq]=${slug}&`, locale),
    fetchServer(`news`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return <SingleNewsOnlyPage data={singleCareer[0]} allBlogs={allBlogs} />
}
