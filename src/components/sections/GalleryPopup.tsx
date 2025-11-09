'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGallerySwiper } from '../../app/hooks/useGallerySwiper'
import { ArrowLeft, ArrowRight, XIcon } from 'lucide-react'
export interface singleImage {
  id: number
  attributes: {
    alternativeText: string
    url: string
  }
}
export default function GalleryPopup({
  Images,
  onClickHandle,
}: {
  Images: singleImage[]
  onClickHandle: () => void
}) {
  const {
    mainNav,
    thumbNav,
    thumbsSwiper,
    setThumbsSwiper,
    mainSwiperRef,
    mainPrevRef,
    mainNextRef,
    thumbPrevRef,
    thumbNextRef,
  } = useGallerySwiper(Images.length)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-Primary-Palm fixed inset-0 w-full z-40 py-[50px] space-y-16 md:space-y-6 h-full"
    >
      <div className="relative w-full flex justify-end items-end max-w-[1384px] px-4 mx-auto">
        {' '}
        <button
          onClick={onClickHandle}
          className="p-2  text-Primary-Spring rounded-full float-end z-10 flex  transition-all duration-500  justify-center items-center"
        >
          <span className="w-6 h-6">
            <XIcon color="#CAF48E" />
          </span>
        </button>
      </div>
      {/* Main Swiper */}
      <div className="max-w-[1384px] px-4 mx-auto h-[calc(70%-60px)] md:h-[calc(90%-60px)] relative">
        <div className="hidden md:flex justify-end items-end absolute w-full inset-0 px-4 z-10 gap-4 pe-10 pb-5">
          <button
            ref={mainPrevRef}
            className=" rounded-full  text-primary  p-3 cursor-pointer bg-Primary-Spring flex justify-center items-center"
          >
            <span className="w-5 h-5 rtl:rotate-180 flex justify-center items-center">
              <ArrowLeft color="#000404" />
            </span>
          </button>
          <button
            ref={mainNextRef}
            className=" rounded-full  text-primary  p-3 cursor-pointer bg-Primary-Spring flex justify-center items-center"
          >
            <span className="w-5 h-5 ltr:rotate-180 flex justify-center items-center">
              <ArrowLeft color="#000404" />
            </span>
          </button>
        </div>

        {mainNav.prevEl && mainNav.nextEl && (
          <Swiper
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            modules={[Navigation, Thumbs]}
            navigation={mainNav}
            thumbs={{ swiper: thumbsSwiper }}
            className=" h-full"
            slidesPerView={1}
          >
            {Images?.map((image) => (
              <SwiperSlide key={image.id} className="relative ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.attributes.url}`}
                  alt={image.attributes.alternativeText || 'Gallery Image'}
                  fill
                  className="object-cover rounded-xl object-top"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Thumbs Swiper */}
      <div className="max-w-[1384px] px-4 mx-auto relative w-full">
        <button
          ref={thumbPrevRef}
          onClick={() => {
            const main = mainSwiperRef.current
            if (main && main.activeIndex > 0) {
              main.slideTo(main.activeIndex - 1)
            }
          }}
          className=" opacity-0 bg-Gray05 text-primary absolute inset-y-0 start-0 hover:bg-primary hover:text-Gray05 p-2 rounded-full transition flex items-center h-fit m-auto z-10"
        >
          <span className="w-4 h-4 rotate-180">
            <ArrowRight />
          </span>
        </button>

        <button
          ref={thumbNextRef}
          onClick={() => {
            const main = mainSwiperRef.current
            if (main && main.activeIndex < Images.length - 1) {
              main.slideTo(main.activeIndex + 1)
            }
          }}
          className="opacity-0 bg-Gray05 text-primary absolute inset-y-0 end-0 hover:bg-primary hover:text-Gray05 p-2 rounded-full transition flex items-center h-fit m-auto z-10"
        >
          <span className="w-4 h-4">
            <ArrowRight />
          </span>
        </button>

        {thumbNav.prevEl && thumbNav.nextEl && (
          <Swiper
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            slidesPerView={10}
            slideToClickedSlide
            spaceBetween={10}
            initialSlide={4}
            centeredSlides
            className="h-[13%]"
          >
            {Images?.map((image) => (
              <SwiperSlide
                key={image.id}
                className="relative !w-[166px] !h-20 border-[4px] transition-all duration-500 border-transparent hover:border-Gold"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.attributes.url}`}
                  alt={image.attributes.alternativeText || 'Thumbnail'}
                  fill
                  className="w-full h-auto object-cover cursor-pointer rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </motion.div>
  )
}
