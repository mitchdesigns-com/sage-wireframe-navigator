export const runtime = 'edge'
import { getTranslations } from 'next-intl/server'

import { Link } from '@/i18n/navigation'

export default async function NotFound() {
  const t = await getTranslations('NotFound')

  return (
    <div className="relative flex flex-col justify-center items-center gap-5 bg-white h-[calc(100vh-305px)] md:h-[calc(100vh-105px)]">
      <h4 className="md:text-h4 text-base">Error 404</h4>

      <h2 className="-mb-2 font-horseland md:text-h1 text-4xl text-center leading-[1em]">
        {t('title')}
      </h2>

      <p className="md:text-h4 text-base text-center">{t('description')}</p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:opacity-80 transition"
      >
        {t('button')}
      </Link>
    </div>
  )
}
