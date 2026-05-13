export const runtime = 'edge'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 bg-white min-h-screen px-6 text-center">
      <Image
        src="/images/company-logo-black.webp"
        alt="Sage"
        width={120}
        height={40}
        className="mb-4"
      />

      <h2 className="font-horseland text-4xl md:text-h1 leading-[1em]">
        We&apos;ll be back soon
      </h2>

      <p className="text-base md:text-h4 max-w-md text-gray-600">
        We&apos;re currently performing maintenance. Please check back shortly.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:opacity-80 transition"
      >
        Try again
      </Link>
    </div>
  )
}
