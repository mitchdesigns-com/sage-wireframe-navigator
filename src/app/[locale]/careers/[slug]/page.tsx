import { fetchServer } from '@/app/api/general'
import JobDetailsPage from '@/components/MainPages/JobDetailsPage'
import { notFound } from 'next/navigation'

export const runtime = 'edge'

export default async function page(props: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await props.params

  const [{ data: singleCareer }] = await Promise.all([
    fetchServer(`career-singles?filters[slug][$eq]=${slug}&`, locale),
  ])

  if (!singleCareer || singleCareer.length === 0) {
    return notFound()
  }

  return (
    <>
      <JobDetailsPage data={singleCareer[0]} />
    </>
  )
}
