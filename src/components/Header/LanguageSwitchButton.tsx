'use client'

import React, { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { Locale } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LanguageSwitchButton() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale() // ← correct source of current locale
  const [, startTransition] = useTransition()

  const nextLocale: Locale = locale === 'ar' ? 'en' : 'ar'

  function handleLanguageSwitch() {
    const nextParams = (params as Record<string, string>) ?? {}

    startTransition(() => {
      router.replace({ pathname, query: nextParams }, { locale: nextLocale })
    })
  }

  return (
    <div
      className="hidden lg:block relative hover:opacity-80 font-['GE_SS_Two:Medium',_sans-serif] text-[12px] text-primary-spring cursor-pointer"
      onClick={handleLanguageSwitch}
    >
      <p className="leading-[1.5] whitespace-pre" dir="auto">
        {nextLocale === 'ar' ? 'تصفح بالعربية' : 'English'}
      </p>
    </div>
  )
}
