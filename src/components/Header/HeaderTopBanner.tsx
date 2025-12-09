import { useTranslations } from 'next-intl'
import React from 'react'

export default function HeaderTopBanner() {
  const t = useTranslations()

  return (
    <div className="z-50 box-border relative flex justify-center items-center content-stretch gap-2.5 bg-secondary-dark-palm px-2.5 py-0.5 w-full shrink-0">
      <div className="relative ltr:font-aeonik-medium !rtl:font-arabic text-[12px] text-primary-scrub not-italic text-nowrap leading-[0] shrink-0">
        <p className="leading-[1.5] whitespace-pre ">{t('Header.topBanner')}</p>
      </div>
    </div>
  )
}
