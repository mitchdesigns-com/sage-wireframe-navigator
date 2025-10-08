import { fetchServer } from '@/app/api/general'
import { notFound } from 'next/navigation'
import SingleNewsPage from '@/components/MainPages/SingleNewsPage'
export const runtime = 'edge'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  // Cast props to expected shape
  const { params } = props as { params: { slug: string; locale: Locale } }
  const { slug, locale } = params

  const [{ data: singleCareer }, { data: allBlogs }] = await Promise.all([
    fetchServer(`events?filters[slug][$eq]=${slug}&`, locale),
    fetchServer(`events`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return <SingleNewsPage data={singleCareer} allBlogs={allBlogs} />
}
