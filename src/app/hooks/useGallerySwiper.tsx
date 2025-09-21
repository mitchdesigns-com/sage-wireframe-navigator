import { useEffect, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'

export function useGallerySwiper(ImagesLength: number) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainNav, setMainNav] = useState<{
    prevEl: HTMLElement | null
    nextEl: HTMLElement | null
  }>({ prevEl: null, nextEl: null })

  const [thumbNav, setThumbNav] = useState<{
    prevEl: HTMLElement | null
    nextEl: HTMLElement | null
  }>({ prevEl: null, nextEl: null })

  const mainSwiperRef = useRef<SwiperType | null>(null)

  const mainPrevRef = useRef<HTMLButtonElement | null>(null)
  const mainNextRef = useRef<HTMLButtonElement | null>(null)
  const thumbPrevRef = useRef<HTMLButtonElement | null>(null)
  const thumbNextRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    setMainNav({
      prevEl: mainPrevRef.current,
      nextEl: mainNextRef.current,
    })
    setThumbNav({
      prevEl: thumbPrevRef.current,
      nextEl: thumbNextRef.current,
    })
  }, [])

  const goToPrevImage = () => {
    const main = mainSwiperRef.current
    if (main && main.activeIndex > 0) {
      main.slideTo(main.activeIndex - 1)
    }
  }

  const goToNextImage = () => {
    const main = mainSwiperRef.current
    if (main && main.activeIndex < ImagesLength - 1) {
      main.slideTo(main.activeIndex + 1)
    }
  }

  return {
    mainNav,
    thumbNav,
    thumbsSwiper,
    setThumbsSwiper,
    mainSwiperRef,
    mainPrevRef,
    mainNextRef,
    thumbPrevRef,
    thumbNextRef,
    goToPrevImage,
    goToNextImage,
  }
}
