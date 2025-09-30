export const runtime = 'edge'

import VisitSaudiPage from '@/components/MainPages/VisitSaudiPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: network } = await fetchServer(`visit-saudi`, locale)

  if (!network) {
    return notFound()
  }

  return <VisitSaudiPage data={network} />
}
