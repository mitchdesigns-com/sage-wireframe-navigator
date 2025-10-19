import type { Viewport } from 'next'
import '../globals.css'
import Header from '@/components/Header/page'
import { ReactNode } from 'react'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { routing } from '../../i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import NotFound from './[...rest]/page'
import clsx from 'clsx'
import Footer from '@/components/Footer/page'
// type Props = {
//   children: ReactNode
//   params: Promise<{ locale: Locale }>
// }

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
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
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
// export const metadata: Metadata = {
//   title:
//     'Sage Healthcare Platform - Your Trusted Gateway to Saudi Medical Care',
//   description:
//     'Experience the perfect blend of healthcare expertise, cultural hospitality, and personalized service with Sage. We are dedicated to guiding you through every step of your medical journey.',
//   keywords:
//     'healthcare, saudi arabia, medical tourism, treatment, hospitals, medical care',
// }

type Props = {
  children: ReactNode
  params: { locale: Locale } // Correct type
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params

  if (!hasLocale(routing.locales, locale)) {
    NotFound()
  }

  setRequestLocale(locale)
  const messages = (await import(`../../messages/${locale}.json`)).default

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
      </head>
      <body
        className={clsx(
          'flex h-full flex-col overflow-x-hidden antialiased',
          locale === 'ar' ? 'font-GE-SS' : 'font-aeonik'
        )}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col">
            <Header locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
