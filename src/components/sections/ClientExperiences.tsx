'use client'

import { ArrowLeft, ArrowRight, User } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
interface Testimonials {
  id: number
  quote: string
  bg: string
  name: string
}
const testimonials = [
  {
    id: 1,
    quote:
      'We partnered with Sage to provide wellness packages for our staff. The result? Happier employees and reduced sick days. Their concierge-level service truly makes a difference.',
    name: 'Dina F., HR Manager, GulfTech Solutions',
    bg: 'bg-Secondary-Dark-Palm',
  },
  {
    id: 2,
    quote:
      'Sage made my medical journey to Saudi Arabia incredibly smooth. From scheduling appointments to follow-up care, everything was handled with care and professionalism.',
    name: 'Layla M., UAE',
    bg: 'bg-Primary-Spring',
  },
  {
    id: 3,
    quote:
      'Sage’s coordination and cultural sensitivity were invaluable during the treatment of our nationals abroad. Their team goes above and beyond.',
    name: 'Mr. Tariq S., Consular Services, Embassy of Jordan',
    bg: 'bg-Secondary-Scrub',
  },
  {
    id: 4,
    quote:
      'Sage made my medical journey to Saudi Arabia incredibly smooth. From scheduling appointments to follow-up care, everything was handled with care and professionalism.',
    name: 'Layla M., UAE',
    bg: 'bg-Secondary-Dark-Palm',
  },
  {
    id: 5,
    quote:
      'I’ve referred multiple clients to Sage for complex treatments. They deliver consistently high-quality service, with excellent hospital partnerships and patient care.',
    name: 'Ranya K., Founder, MedBridge Facilitators',
    bg: 'bg-Primary-Spring',
  },
  {
    id: 6,
    quote:
      'Their training sessions for our hospital teams were insightful, practical, and well-organized. Sage helped us implement real improvements in patient logistics.',
    name: 'Dr. Nabil H., Ministry of Health',
    bg: 'bg-Secondary-Scrub',
  },
]

export default function ClientExperiences() {
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
          <h2 className="text-[28px] md:text-5xl font-bold leading-tight text-[#000404]  mb-2">
            Client Experiences
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#000404]">
            Transforming corporate health management with Sage.
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
                  className={`text-base  md:text-[32px] ${
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
