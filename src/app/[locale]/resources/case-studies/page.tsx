export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CaseStudiesPage from '@/components/MainPages/CaseStudiesPage'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const [caseStudyPageRes, singlesRes] = await Promise.all([
    fetchServer(`case-study-page`, locale),
    fetchServer(`case-studies`, locale),
  ])

  const caseStudyPage = caseStudyPageRes?.data
  const caseSingles = singlesRes?.data

  if (!caseStudyPage) {
    return notFound()
  }

  return <CaseStudiesPage data={caseStudyPage} singles={caseSingles} />
}
