import React, { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { Locale } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LanguageSwitchButton() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [, startTransition] = useTransition()

  function handleLanguageSwitch(
    nextLocale: Locale,
    nextParams: Record<string, string>
  ) {
    startTransition(() => {
      router.replace({ pathname, query: nextParams }, { locale: nextLocale })
    })
  }

  return (
    <div
      className="hidden lg:block relative hover:opacity-80 font-['GE_SS_Two:Medium',_sans-serif] text-[12px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 cursor-pointer shrink-0"
      onClick={() =>
        handleLanguageSwitch('ar', params as Record<string, string>)
      }
    >
      <p className="leading-[1.5] whitespace-pre" dir="auto">
        تصفح بالعربية
      </p>
    </div>
  )
}
