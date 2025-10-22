import { fetchServer } from '@/app/api/general'
import SingleCaseStudyPage from '@/components/MainPages/SingleCaseStudyPage'
import { notFound } from 'next/navigation'
export const runtime = 'edge'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  // Cast props to expected shape
  const { params } = props as { params: { slug: string; locale: Locale } }
  const { slug, locale } = params

  const [{ data: singleCareer }, { data: allBlogs }] = await Promise.all([
    fetchServer(`case-studies?filters[slug][$eq]=${slug}&`, locale),
    fetchServer(`case-studies`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return <SingleCaseStudyPage data={singleCareer} allBlogs={allBlogs} />
}
