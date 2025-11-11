'use client'

import { ArrowLeft, ArrowRight, User } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState } from 'react'
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
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const locale = useLocale()

  const handleSlideChange = (swiperInstance: SwiperType) => {
    setIsBeginning(swiperInstance.isBeginning)
    setIsEnd(swiperInstance.isEnd)
  }

  return (
    <section className="py-8 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1392px] mx-auto">
        <div className="text-center mb-8 md:mb-15 px-4">
          <h2 className="text-[28px] md:text-5xl font-bold text-[#000404] tracking-[-0.48px] mb-2">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#000404]">
            {description}
          </p>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        loop={false}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 48,
          },
        }}
        className="!px-4 md:!px-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="!w-[85vw] max-w-[324px] md:!w-[680px] md:max-w-none"
          >
            <div
              className={`rounded-4xl ${testimonial.bg} p-8 h-[360px] md:h-[420px] flex flex-col justify-between`}
            >
              <blockquote
                className={`text-base tracking-[-0.48px] md:text-[32px] ${
                  testimonial.bg === 'bg-Secondary-Dark-Palm'
                    ? 'text-white'
                    : 'text-Primary-Black'
                } font-aeonik-light`}
              >
                {testimonial.quote}
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
      {testimonials.length > 2 && (
        <div className="flex gap-4 mt-8 md:mt-12 justify-center">
          <button
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            className={`w-12 h-12 rounded-full flex justify-center items-center transition cursor-pointer
              ${
                isBeginning
                  ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                  : 'bg-Secondary-Dark-Palm hover:opacity-80'
              }`}
          >
            <ArrowLeft
              color="#CAF48E"
              className={`${locale === 'ar' ? 'rotate-180' : ''}`}
            />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            className={`w-12 h-12 rounded-full flex justify-center items-center transition cursor-pointer
              ${
                isEnd
                  ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                  : 'bg-Secondary-Dark-Palm hover:opacity-80'
              }`}
          >
            <ArrowRight
              color="#CAF48E"
              className={`${locale === 'ar' ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </section>
  )
}
