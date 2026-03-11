'use client'

import Link from 'next/link'

export default function FooterCredit() {
  return (
    <div itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="MitchDesigns" />
      <meta itemProp="address" content="Egypt" />
      <Link
        href="https://www.mitchdesigns.com"
        target="_blank"
        rel="noopener noreferrer"
        itemProp="url"
        title="MitchDesigns – Web Design & Development Agency in Egypt"
        className="hover:underline uppercase"
      >
        <span itemProp="name">Web Design & Development by MitchDesigns</span>
      </Link>
    </div>
  )
}
