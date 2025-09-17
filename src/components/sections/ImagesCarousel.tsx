'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

const images = [
  '/images/generalImages/image1.png',
  '/images/generalImages/image2.jpg',
  '/images/generalImages/image1.png',
  '/images/generalImages/image2.jpg',
]

export default function ImageCarousel() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-[1390px] mx-auto px-4">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={32}
          className="!overflow-visible"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="aspect-[1280/720] w-full rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  width={1280}
                  height={720}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper {
            /* 'overflow: visible' is critical for the full-bleed effect */
            overflow: visible;
          }
          .swiper-wrapper {
            /* These margins and paddings create the full-bleed effect */
            margin-left: calc((100vw - 1390px) / -2);
            margin-right: calc((100vw - 1390px) / -2);
            padding-left: calc((100vw - 1390px) / 2);
            padding-right: calc((100vw - 1390px) / 2);
          }
        `}</style>
      </div>
    </div>
  )
}
