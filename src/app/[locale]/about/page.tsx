export const runtime = 'edge'

import { notFound } from 'next/navigation'
import AboutPage from '@/components/MainPages/AboutPage'
import { fetchServer } from '../../api/general'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: about } = await fetchServer(`about`, locale)

  if (!about) {
    return notFound()
  }

  return <AboutPage data={about} />
}
