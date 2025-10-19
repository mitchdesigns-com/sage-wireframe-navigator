import { fetchServer } from '../../app/api/general'
import { ResourceData } from '../../types/header'
import HeaderClient from './HeaderClient'

interface HeaderProps {
  locale: string
}

export default async function Header({ locale }: HeaderProps) {
  const response = await fetchServer('header', locale)
  const ResourceData = response.data as ResourceData

  return <HeaderClient ResourceData={ResourceData} />
}
