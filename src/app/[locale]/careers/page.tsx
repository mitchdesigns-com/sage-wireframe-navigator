export const runtime = 'edge'

import CareersPage from '@/components/MainPages/CareersPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const [careerRes, singlesRes] = await Promise.all([
    fetchServer(`career`, locale),
    fetchServer(`career-singles`, locale),
  ])

  const career = careerRes?.data
  const careerSingles = singlesRes?.data

  if (!career) {
    return notFound()
  }

  return <CareersPage data={career} singles={careerSingles} />
}
