'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Pagination, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const images = [
  '/images/generalImages/image1.png',
  '/images/generalImages/image2.jpg',
  '/images/generalImages/image1.png',
  '/images/generalImages/image2.jpg',
]

export default function ImageCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paginationReady, setPaginationReady] = useState(false)
  const locale = useLocale()

  // Trigger re-render after pagination initializes (ensures Tailwind applies)
  useEffect(() => {
    const timer = setTimeout(() => setPaginationReady(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="overflow-x-hidden w-full h-full">
      <div className="relative max-w-[1390px] mx-auto px-4 w-full h-full">
        <Swiper
          slidesPerView={'auto'} // Use 'auto' for variable width slides
          centeredSlides={true} // Center the active slide
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 32,
            },
          }}
          className="!overflow-visible h-full w-full"
          modules={[Pagination, Mousewheel]}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onAfterInit={() => setPaginationReady(true)}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto relative">
              <div className="aspect-[324/200] md:aspect-[1280/720] relative w-full h-[200px] md:h-[500px] lg:h-[620px]">
                <Image
                  src={src}
                  fill
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fixed Arrow Buttons - Outside Swiper */}
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
          className={`absolute top-[100px] md:top-[250px] lg:top-[310px] left-8 md:left-16 lg:left-24 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex justify-center items-center bg-Primary-Spring hover:opacity-80 transition ${
            activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft
            color="#025850"
            className={`${locale === 'ar' ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex === images.length - 1}
          className={`absolute top-[100px] md:top-[250px] lg:top-[310px] right-8 md:right-16 lg:right-24 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex justify-center items-center bg-Primary-Spring hover:opacity-80 transition ${
            activeIndex === images.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          <ArrowRight
            color="#025850"
            className={`${locale === 'ar' ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Pagination dots below carousel */}
        <div
          className={`custom-pagination mt-6 flex justify-center items-center gap-3 ${
            paginationReady ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        ></div>
      </div>
    </div>
  )
}
