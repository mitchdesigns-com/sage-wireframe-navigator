export const runtime = 'edge'

import { fetchServer } from '@/app/api/general'
import PrivacyPage from '../../../components/MainPages/PrivacyPage'

type Props = {
  params: { locale: string }
}

export default async function Page(props: {
  params: Promise<Props['params']>
}) {
  const { locale } = await props.params

  const [{ data: privacyPageData }] = await Promise.all([
    fetchServer('title', locale),
  ])

  return <PrivacyPage data={privacyPageData} locale={locale} />
}
