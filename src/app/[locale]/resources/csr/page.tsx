export const runtime = 'edge'

import CSRPage from '@/components/MainPages/CSRPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: about } = await fetchServer(`csr-page`, locale)

  if (!about) {
    return notFound()
  }

  return <CSRPage data={about} />
}
