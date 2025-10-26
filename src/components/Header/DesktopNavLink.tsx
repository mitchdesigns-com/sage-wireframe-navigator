import Link from 'next/link'
import React from 'react'

interface DesktopNavLinkProps {
  href: string
  label: string
  onClick: () => void
}

export default function DesktopNavLink({
  href,
  label,
  onClick,
}: DesktopNavLinkProps) {
  return (
    <div className="relative flex justify-start items-start content-stretch gap-2.5 shrink-0">
      <Link
        href={href}
        onClick={onClick}
        className="relative hover:opacity-80 font-aeonik-regular text-[16px] text-primary-spring not-italic text-nowrap leading-[0] transition-all duration-200 shrink-0"
      >
        <p className="leading-[1.5] whitespace-pre">{label}</p>
      </Link>
    </div>
  )
}
