'use client'

import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { Locale } from 'next-intl'

export default function LanguageSwitchButton({
  className = '',
}: {
  className?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [, startTransition] = useTransition()

  const nextLocale: Locale = locale === 'ar' ? 'en' : 'ar'

  function handleLanguageSwitch() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div
      className={`relative  cursor-pointer ${className}`}
      onClick={handleLanguageSwitch}
    >
      <p className="leading-[1.5] whitespace-pre" dir="auto">
        {nextLocale === 'ar' ? 'تصفح بالعربية' : 'English'}
      </p>
    </div>
  )
}
