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
      className="bg-[#222222] fixed inset-0 w-full z-40 py-[50px] space-y-[60px] h-full"
    >
      <div className="relative w-full flex justify-end items-end">
        {' '}
        <button
          onClick={onClickHandle}
          className="p-2 bg-white w-12 h-12 text-primary rounded-full float-end z-10 mr-10 flex hover:bg-primary hover:text-white transition-all duration-500  justify-center items-center"
        >
          <span className="w-6 h-6">
            <XIcon color="#000000" />
          </span>
        </button>
      </div>
      {/* Main Swiper */}
      <div className="max-w-[1448px] px-4 mx-auto h-[calc(87%-60px)] relative">
        <div className="flex justify-between items-center absolute w-full inset-0 px-4 z-10">
          <button
            ref={mainPrevRef}
            className="hover:bg-primary hover:text-Gray05 rounded-full transition-all duration-500 text-primary flex bg-Gray05 p-3 cursor-pointer"
          >
            <span className="w-5 h-5 rtl:rotate-180">
              <ArrowLeft />
            </span>
          </button>
          <button
            ref={mainNextRef}
            className="text-primary flex bg-Gray05 p-3 hover:bg-primary hover:text-Gray05 rounded-full transition-all duration-500 cursor-pointer"
          >
            <span className="w-5 h-5 ltr:rotate-180">
              <ArrowLeft />
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
              <SwiperSlide key={image.id} className="relative aspect-[464/300]">
                <Image
                  src={`${image.attributes.url}`}
                  alt={image.attributes.alternativeText || 'Gallery Image'}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Thumbs Swiper */}
      <div className="max-w-[1448px] px-4 mx-auto relative w-fit">
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
                className="relative !w-[107px] !h-20 border-[4px] transition-all duration-500 border-transparent hover:border-Gold"
              >
                <Image
                  src={`${image.attributes.url}`}
                  alt={image.attributes.alternativeText || 'Thumbnail'}
                  fill
                  className="w-full h-auto object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </motion.div>
  )
}
