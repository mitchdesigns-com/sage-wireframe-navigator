import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'

interface GetInTouchProps {
  tagline: string
  title: string
  description: string
  image: string
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  tagline,
  title,
  description,
  image,
}) => {
  return (
    <section className="py-25 ">
      <div className="mx-auto max-w-[1392px] flex gap-35 bg-Primary-Palm py-16 px-15 rounded-[40px]">
        <div className="max-w-[757px] my-auto">
          {tagline && (
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex items-center justify-center">
                <div className="transform rotate-[-6deg]">
                  <div
                    className={`bg-Primary-Spring px-1.5 py-0 rounded-[6px] text-Primary-Black`}
                  >
                    <div
                      className={`font-aeonik-medium text-Primary-Black text-base text-center leading-[1.5] text-nowrap`}
                    >
                      {tagline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
          <Image src={image} fill alt="image" className="object-contain" />
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
