import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import '../../app/team.css'
import Link from 'next/link'
import ButtonIcon from '../svg/ButtonIcon'
import Tagline from './Tagline'

interface TeamMember {
  id: number
  name: string
  title: string
  image: string
}

const mockTeam: TeamMember[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  title: `Job Title ${i + 1}`,
  image: `/images/generalImages/team1.png`,
}))

export default function OurTeam() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Group members into chunks of 10 (2 rows × 5)
  const grouped = []
  for (let i = 0; i < mockTeam.length; i += 10) {
    grouped.push(mockTeam.slice(i, i + 10))
  }

  return (
    <section className="py-25 bg-Secondary-Light-Scrub">
      <div className="container mx-auto px-4">
        <div className="flex pb-15 justify-between items-end">
          <div>
            <h6 className="text-[#000404] font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
              Our Team
            </h6>
            <p className="text-[#000404] text-p">
              Meet our experienced and dedicated healthcare professionals.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={activeIndex === 0}
              className={`w-12 h-12 rounded-full flex justify-center items-center transition  cursor-pointer
                ${
                  activeIndex === 0
                    ? 'bg-Secondary-Dark-Palm/20 cursor-not-allowed opacity-50'
                    : 'bg-Secondary-Dark-Palm hover:opacity-80'
                }
              `}
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
                }
              `}
            >
              <ArrowRight color="#CAF48E" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="team-swiper"
        >
          {grouped.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {group.map((member) => (
                  <div
                    key={member.id}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-75 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-2 py-3">
                      <div className="text-base font-medium">{member.name}</div>
                      <div className="text-sm text-[#D2D2D2]">
                        {member.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bg-white rounded-2xl p-8 max-w-[1072px] mx-auto relative ">
          <Tagline
            text={'Join Our Team'}
            className="absolute -top-5 left-8 items-start"
          />
          <div className="flex justify-between items-center ">
            <div>
              <h6 className="text-Primary-Black font-bold text-[32px] leading-[1.2] tracking-[-0.48px] pb-4">
                We're hiring!
              </h6>
              <p className="text-Secondary-Text text-p">
                Join our team of dedicated healthcare professionals.{' '}
              </p>
            </div>
            <Link href={'/careers'}>
              {' '}
              <div className="group flex gap-1.5 items-center justify-start rounded-[100px]  cursor-pointer">
                {' '}
                <div className="font-aeonik-bold text-primary-palm group-hover:text-Secondary-Dark-Palm text-lg leading-[1.5]">
                  View Open Positions
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
              </div>{' '}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
