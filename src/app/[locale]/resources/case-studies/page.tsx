export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CaseStudiesPage from '@/components/MainPages/CaseStudiesPage'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

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
