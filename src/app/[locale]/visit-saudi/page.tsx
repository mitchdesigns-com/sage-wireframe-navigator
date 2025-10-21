export const runtime = 'edge'

import VisitSaudiPage from '@/components/MainPages/VisitSaudiPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  // const { data: network } = await fetchServer(`visit-saudi`, locale)
  const [data, singlesRes] = await Promise.all([
    fetchServer(`visit-saudi`, locale),
    fetchServer(`blogs`, locale),
  ])

  const network = data?.data
  const blogSingles = singlesRes?.data

  if (!network) {
    return notFound()
  }

  return <VisitSaudiPage data={network} blogs={blogSingles} />
}
