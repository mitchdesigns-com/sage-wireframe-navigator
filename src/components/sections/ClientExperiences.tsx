'use client'

import { ArrowLeft, ArrowRight, User } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Testimonials } from '../../types/homePage'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

  // Animation setup
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const controls = useAnimation()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  if (inView) controls.start('visible')

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-8 md:py-16 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1392px] mx-auto">
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 md:mb-15 px-4"
        >
          <h2 className="text-[28px] md:text-5xl font-bold text-[#000404] tracking-[-0.48px] mb-2">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#000404]">
            {description}
          </p>
        </motion.div>
      </div>

      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Mousewheel]}
        loop={false}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={16}
        breakpoints={{ 768: { spaceBetween: 48 } }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        className="!px-4 md:!px-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="!w-[85vw] max-w-[324px] md:!w-[680px] md:max-w-none"
          >
            <motion.div
              variants={itemVariants}
              className={`rounded-4xl ${testimonial.bg} p-8 h-[360px] md:h-[420px] flex flex-col justify-between`}
            >
              <blockquote
                className={`text-base tracking-[-0.48px] md:text-[32px] ${
                  testimonial.bg === 'bg-Secondary-Dark-Palm'
                    ? 'text-white'
                    : 'text-Primary-Black'
                } ltr:font-aeonik-light !rtl:font-arabic`}
              >
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center mt-6">
                <div className="me-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <div
                    className={`text-xs md:text-[20px] font-medium  ${
                      testimonial.bg === 'bg-Secondary-Dark-Palm'
                        ? 'text-white'
                        : 'text-Secondary-Text'
                    }`}
                  >
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </motion.div>
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
    </motion.section>
  )
}
