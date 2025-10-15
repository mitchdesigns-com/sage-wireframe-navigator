'use client'

import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../app/team.css'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonIcon from '../svg/ButtonIcon'
import Tagline from './Tagline'

interface TeamImage {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

interface TeamMember {
  id: number
  name: string
  title: string
  image: TeamImage
}

interface HiringSection {
  id: number
  tagline: string
  title: string
  description: string
  cta: string
  href: string
}

interface OurTeamProps {
  data: {
    id: number
    title: string
    description: string
    TeamMember: TeamMember[]
    hiringSection: HiringSection
  }
}

export default function OurTeam({ data }: OurTeamProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Group members into chunks of 10 (2 rows × 5)
  const grouped: TeamMember[][] = []
  for (let i = 0; i < data.TeamMember.length; i += 10) {
    grouped.push(data.TeamMember.slice(i, i + 10))
  }
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <section className="py-8 md:py-25 bg-Secondary-Light-Scrub">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex pb-4 md:pb-15 justify-between items-end text-center md:text-start">
          <div>
            <h6 className="text-[#000404] font-bold text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
              {data.title}
            </h6>
            <p className="text-[#000404] text-base md:text-lg">
              {data.description}
            </p>
          </div>

          {/* Navigation Buttons (Desktop only) */}
          <div className="md:flex gap-4 hidden">
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
              disabled={activeIndex === grouped.length - 1}
              className={`w-12 h-12 rounded-full flex justify-center items-center transition cursor-pointer
                ${
                  activeIndex === grouped.length - 1
                    ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                    : 'bg-Secondary-Dark-Palm hover:opacity-80'
                }`}
            >
              <ArrowRight color="#CAF48E" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1.2, // show a peek of next slide
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          className="team-swiper"
        >
          {/* MOBILE: each member is a slide */}
          {isMobile && (
            <div className="md:hidden">
              {data.TeamMember.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="relative rounded-xl overflow-hidden w-full">
                    <div className="aspect-[265/300] w-full relative">
                      <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${member.image.url}`}
                        alt={member.image.alternativeText || member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-2 py-3">
                      <div className="text-base font-medium">{member.name}</div>
                      <div className="text-sm text-[#D2D2D2]">
                        {member.title}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}
          {/* DESKTOP: grouped slides */}
          {!isMobile && (
            <div className="hidden md:block">
              {grouped.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-5 gap-4 w-full">
                    {group.map((member) => (
                      <div
                        key={member.id}
                        className="relative rounded-xl overflow-hidden"
                      >
                        <div className="aspect-[265/300] w-full relative">
                          <Image
                            fill
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${member.image.url}`}
                            alt={member.image.alternativeText || member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-2 py-3">
                          <div className="text-base font-medium">
                            {member.name}
                          </div>
                          <div className="text-sm text-[#D2D2D2]">
                            {member.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}

          <div className="swiper-pagination mt-8 md:hidden" />
        </Swiper>

        {/* Hiring Section */}
        <div className="bg-white rounded-2xl p-8 max-w-[1072px] mx-auto relative mt-10">
          <Tagline
            text={data.hiringSection.tagline}
            className="absolute -top-5 left-8 items-start"
          />
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="pb-8 md:pb-0">
              <h6 className="text-Primary-Black font-bold text-2xl md:text-[32px] leading-[1.2] tracking-[-0.48px] pb-4">
                {data.hiringSection.title}
              </h6>
              <p className="text-Secondary-Text text-base md:text-lg">
                {data.hiringSection.description}
              </p>
            </div>
            <Link href={data.hiringSection.href}>
              <div className="group flex gap-1.5 items-start md:items-center justify-start rounded-[100px] cursor-pointer">
                <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                  {data.hiringSection.cta}
                </div>
                <div className="bg-primary-palm rounded-full p-[6px] size-7 flex items-center justify-center">
                  <div className="relative shrink-0 size-6">
                    <div className="absolute flex h-[28.284px] items-center justify-center top-[-2.14px] left-[calc(50%+0.084px)] translate-x-[-50%] w-[28.284px]">
                      <div className="flex-none group-hover:rotate-[45deg] text-Primary-Palm group-hover:text-Secondary-Dark-Palm transition-all duration-300">
                        <ButtonIcon strokeColor="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
