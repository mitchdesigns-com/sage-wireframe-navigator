export const runtime = 'edge'

import OurNetworkPage from '@/components/MainPages/OurNetworkPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'

export default async function page({ params }: { params: { locale: string } }) {
  const { locale } = params

  const { data: network } = await fetchServer(`our-network`, locale)

  if (!network) {
    return notFound()
  }

  return <OurNetworkPage data={network} />
}
