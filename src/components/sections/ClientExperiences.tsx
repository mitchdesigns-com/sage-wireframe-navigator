'use client'

import { ArrowLeft, ArrowRight, User } from 'lucide-react'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Testimonials } from '../../types/homePage'

export default function ClientExperiences({
  title,
  description,
  testimonials,
}: {
  title: string
  description: string
  testimonials: Testimonials[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const grouped: Testimonials[][] = []
  for (let i = 0; i < testimonials.length; i += 6) {
    grouped.push(testimonials.slice(i, i + 6))
  }
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div>
        <div className="max-w-[1392px] px-4 mx-auto text-center mb-8 md:mb-15">
          <h2 className="text-[28px] md:text-5xl font-bold  text-[#000404] tracking-[-0.48px] mb-2">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#000404]">
            {description}{' '}
          </p>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation]}
          loop={false}
          centeredSlides
          spaceBetween={48}
          slidesPerView="auto"
          breakpoints={{
            0: {
              centeredSlides: false,
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              centeredSlides: true,
              slidesPerView: 'auto',
              spaceBetween: 48,
            },
          }}
          className="!px-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={testimonial.id}
              className="!w-[324px] md:!w-[680px]"
            >
              <div
                className={`rounded-4xl ${testimonial.bg} p-8 h-[360px] md:h-[420px] flex flex-col justify-between`}
              >
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-300 rounded-4xl ${
                    activeIndex === index ? 'opacity-0' : 'opacity-50'
                  }`}
                />

                <blockquote
                  className={`text-base tracking-[-0.48px] md:text-[32px] ${
                    testimonial.bg === 'bg-Secondary-Dark-Palm'
                      ? 'text-white'
                      : 'text-Primary-Black'
                  } font-aeonik-light`}
                >
                  “{testimonial.quote}”
                </blockquote>

                <div className="flex items-center mt-6">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <div
                      className={`text-xs md:text-[20px] font-medium ${
                        testimonial.bg === 'bg-Secondary-Dark-Palm'
                          ? 'text-white'
                          : 'text-Secondary-Text'
                      }`}
                    >
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-4 mt-8 md:mt-12 justify-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={activeIndex === 0}
            className={`w-12 h-12 rounded-full flex justify-center items-center transition cursor-pointer
              ${
                activeIndex === 0
                  ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                  : 'bg-Secondary-Dark-Palm hover:opacity-80'
              }`}
          >
            <ArrowLeft color="#CAF48E" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={activeIndex === testimonials.length - 1}
            className={`w-12 h-12 rounded-full flex justify-center items-center transition cursor-pointer
              ${
                activeIndex === testimonials.length - 1
                  ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                  : 'bg-Secondary-Dark-Palm hover:opacity-80'
              }`}
          >
            <ArrowRight color="#CAF48E" />
          </button>
        </div>
      </div>
    </section>
  )
}
