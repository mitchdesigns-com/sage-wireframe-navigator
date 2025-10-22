export const runtime = 'edge'

import OurNetworkPage from '@/components/MainPages/OurNetworkPage'
import { notFound } from 'next/navigation'
import { fetchServer } from '../../api/general'
type Locale = 'en' | 'ar'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  const { data: network } = await fetchServer(`our-network`, locale)

  if (!network) {
    return notFound()
  }

  return <OurNetworkPage data={network} />
}
