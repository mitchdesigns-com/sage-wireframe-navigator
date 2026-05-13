import { fetchServer } from '../../app/api/general'
import { ResourceData } from '../../types/header'
import HeaderClient from './HeaderClient'

interface HeaderProps {
  locale: string
}

export default async function Header({ locale }: HeaderProps) {
  const response = await fetchServer('header', locale)

  if (!response.data) {
    return (
      <header className="flex items-center justify-center h-16 bg-white border-b border-gray-100">
        <img src="/images/company-logo-black.webp" alt="Sage" className="h-8" />
      </header>
    )
  }

  const ResourceData = response.data as ResourceData

  return <HeaderClient ResourceData={ResourceData} />
}
