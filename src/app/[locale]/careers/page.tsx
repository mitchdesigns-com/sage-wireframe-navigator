export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CareersPage from '@/components/MainPages/CareersPage'
import { fetchServer } from '../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
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
