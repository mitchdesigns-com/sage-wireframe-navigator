import { fetchServer } from '../../app/api/general'
import { FooterData } from '../../types/footer'
import FooterClient from './FooterClient'

interface FooterProps {
  locale: string
}

export default async function Footer({ locale }: FooterProps) {
  const response = await fetchServer('footer', locale)

  if (!response.data) {
    return null
  }

  const footerData = response.data as FooterData

  return <FooterClient footerData={footerData} />
}
