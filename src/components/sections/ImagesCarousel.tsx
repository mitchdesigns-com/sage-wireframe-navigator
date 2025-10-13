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
    <div className="overflow-x-hidden  w-full h-full ">
      <div className="relative max-w-[1390px] mx-auto px-4  w-full h-full">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            768: {
              slidesPerView: 1.1,
              spaceBetween: 32,
            },
          }}
          className="!overflow-visible h-full w-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="aspect-[324/200] md:aspect-[1280/720] relative w-full h-[200px] md:h-[720px] rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  fill
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper {
            overflow: visible;
          }

          /* Web (desktop) styles remain unchanged */
          @media (min-width: 1024px) {
            .swiper-wrapper {
              margin-left: calc((100vw - 1390px) / -2);
              margin-right: calc((100vw - 1390px) / -2);
              padding-left: calc((100vw - 1390px) / 2);
              padding-right: calc((100vw - 1390px) / 2);
            }
          }

          /* Mobile fix — remove the side overflow/padding logic */
          @media (max-width: 1023px) {
            .swiper-wrapper {
              margin: 0 !important;
              padding: 0 1rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
