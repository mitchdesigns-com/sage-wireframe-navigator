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
    <section className="py-8 md:py-25  px-4">
      <div className="mx-auto max-w-[1392px] flex gap-8 md:gap-35 bg-Primary-Palm py-4 md:py-16 px-4 md:px-15 rounded-3xl md:rounded-[40px] flex-col md:flex-row justify-between">
        <div className="max-w-[757px] my-auto">
          <Tagline text={tagline} />

          <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.48px] mb-6 text-white max-w-[620px]">
            {title}
          </h2>
          <p className="text-2xl md:text-[32px] font-light leading-[1.5] text-white pb-8 max-w-[620px]">
            {description}
          </p>
          <Link
            href={'/contact'}
            className="inline-block w-full md:w-fit bg-primary text-white rounded-lg font-medium group cursor-pointer"
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
        <div className="relative aspect-[373/370] w-full md:w-[373px]">
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
