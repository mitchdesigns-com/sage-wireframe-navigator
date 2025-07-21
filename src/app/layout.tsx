import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:
    'Sage Healthcare Platform - Your Trusted Gateway to Saudi Medical Care',
  description:
    'Experience the perfect blend of healthcare expertise, cultural hospitality, and personalized service with Sage. We are dedicated to guiding you through every step of your medical journey.',
  keywords:
    'healthcare, saudi arabia, medical tourism, treatment, hospitals, medical care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
