import { fetchServer } from '@/app/api/general'
import { notFound } from 'next/navigation'
import SingleCaseStudyPage from '@/components/MainPages/SingleCaseStudyPage'
export const runtime = 'edge'

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  const { slug, locale } = params

  const [{ data: singleCareer }, { data: allBlogs }] = await Promise.all([
    fetchServer(`case-studies?filters[slug][$eq]=${slug}&`, locale),
    fetchServer(`case-studies`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return <SingleCaseStudyPage data={singleCareer[0]} allBlogs={allBlogs} />
}
