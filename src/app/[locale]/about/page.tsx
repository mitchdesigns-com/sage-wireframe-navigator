export const runtime = 'edge'

import { notFound } from 'next/navigation'
import AboutPage from '@/components/MainPages/AboutPage'
import { fetchServer } from '../../api/general'

type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = params

  const { data: about } = await fetchServer(`about`, locale)

  if (!about) {
    return notFound()
  }

  return <AboutPage data={about} />
}
