export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CareersPage from '@/components/MainPages/CareersPage'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'
export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params
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
