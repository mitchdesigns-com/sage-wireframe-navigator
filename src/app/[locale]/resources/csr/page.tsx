export const runtime = 'edge'

import { notFound } from 'next/navigation'
import CSRPage from '@/components/MainPages/CSRPage'
import { fetchServer } from '../../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: about } = await fetchServer(`csr-page`, locale)

  if (!about) {
    return notFound()
  }

  return <CSRPage data={about} />
}
