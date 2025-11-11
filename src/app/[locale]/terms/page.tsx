export const runtime = 'edge'

import { fetchServer } from '@/app/api/general'
import TermsPage from '../../../components/MainPages/TermsPage'

type Props = {
  params: { locale: string }
}

export default async function Page(props: {
  params: Promise<Props['params']>
}) {
  const { locale } = await props.params

  const [{ data: privacyPageData }] = await Promise.all([
    fetchServer('terms-page', locale),
  ])

  return <TermsPage data={privacyPageData} locale={locale} />
}
