import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import clsx from 'clsx'
import type { Viewport } from 'next'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { routing } from '../../i18n/routing'
import '../globals.css'
import NotFound from './[...rest]/page'
import { GoogleTagManager } from '@next/third-parties/google'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}
export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Sage' }],
    creator: 'Sage',
    publisher: 'Sage',
    robots: {
      index: process.env.NODE_ENV === 'production',
      follow: process.env.NODE_ENV === 'production',
      googleBot: {
        index: process.env.NODE_ENV === 'production',
        follow: process.env.NODE_ENV === 'production',
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sage.com',
      siteName: 'Sage',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: '@Sage',
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
  }
}

type Props = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    NotFound()
  }

  setRequestLocale(locale)
  // const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html
      className="h-full"
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.png"
        />
        <meta name="view-transition" content="same-origin" />
        <GoogleTagManager gtmId="GTM-P9RN9PFP" />
      </head>
      <body
        className={clsx(
          'flex flex-col h-full antialiased',
          locale === 'ar' ? 'font-arabic' : 'font-aeonik'
        )}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9RN9PFP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider locale={locale}>
          <div className="flex flex-col ">
            <Header locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
