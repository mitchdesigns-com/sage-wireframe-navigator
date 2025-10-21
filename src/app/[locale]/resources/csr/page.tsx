export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CSRPage from '@/components/MainPages/CSRPage'
import { fetchServer } from '../../../api/general'
type Locale = 'en' | 'ar'

export default async function Page(props: unknown) {
  const { params } = props as { params: { locale: Locale } }
  const { locale } = await params

  const { data: about } = await fetchServer(`csr-page`, locale)

  if (!about) {
    return notFound()
  }

  return <CSRPage data={about} />
}
