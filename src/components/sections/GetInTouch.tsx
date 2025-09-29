import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import Tagline from './Tagline'

interface GetInTouchProps {
  tagline: string
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  tagline,
  title,
  description,
  image,
}) => {
  return (
    <section className="py-25 bg-[#E2F2F1]">
      <div className="mx-auto max-w-[1392px] flex gap-35 bg-Primary-Palm py-16 px-15 rounded-[40px]">
        <div className="max-w-[757px] my-auto">
          <Tagline text={tagline} />

          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 text-white">
            {title}
          </h2>
          <p className="text-[32px] font-light leading-[1.5] text-white pb-8">
            {description}
          </p>
          <Link
            href={'/contact'}
            className="inline-block  bg-primary text-white rounded-lg font-medium group cursor-pointer"
          >
            <Button
              variant="dark"
              rightIcon={true}
              fullWidth
              //   onClick={() => setIsMenuOpen(false)}
            >
              Request Free Consultation
            </Button>
          </Link>
        </div>
        <div className="relative aspect-[373/370] w-[373px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
            fill
            alt="image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
