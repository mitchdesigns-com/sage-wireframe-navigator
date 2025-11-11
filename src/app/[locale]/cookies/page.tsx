export const runtime = 'edge'

import { fetchServer } from '@/app/api/general'
import CookiesPage from '../../../components/MainPages/CookiesPage'

type Props = {
  params: { locale: string }
}

export default async function Page(props: {
  params: Promise<Props['params']>
}) {
  const { locale } = await props.params

  const [{ data: privacyPageData }] = await Promise.all([
    fetchServer('cookies-page', locale),
  ])

  return <CookiesPage data={privacyPageData} locale={locale} />
}
