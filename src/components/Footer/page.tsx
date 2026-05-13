import { fetchServer } from '../../app/api/general'
import { FooterData } from '../../types/footer'
import FooterClient from './FooterClient'

interface FooterProps {
  locale: string
}

export default async function Footer({ locale }: FooterProps) {
  const response = await fetchServer('footer', locale)

  if (!response.data) {
    return (
      <footer className="flex items-center justify-center h-16 bg-black">
        <img src="/images/footer-logo.png" alt="Sage" className="h-8" />
      </footer>
    )
  }

  const footerData = response.data as FooterData

  return <FooterClient footerData={footerData} />
}
