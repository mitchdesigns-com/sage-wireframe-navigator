'use client'

import Image from 'next/image'

export interface Certificate {
  id: string
  title: string
  image: {
    url: string
    alternativeText: string
  }
  description: string
}

interface CertificateCardProps {
  certificate: Certificate
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div key={certificate.id} className="flex flex-col rounded-3xl">
      <div className="h-[240px] w-full relative rounded-3xl overflow-hidden ">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${certificate.image.url}`}
          alt={certificate.image.alternativeText || certificate.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-[20px] md:text-2xl font-bold text-Primary-Black leading-snug mt-8 mb-4">
          {certificate.title}
        </h3>
        <p className="text-Secondary-Text text-sm md:text-base ">
          {certificate.description}
        </p>
      </div>
    </div>
  )
}
