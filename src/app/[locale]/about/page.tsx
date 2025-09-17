'use client'
export const runtime = 'edge'

import Image from 'next/image'
import HeroSection from '../../../components/strapi/HeroSection'
import Tagline from '../../../components/sections/Tagline'
import OurTeam from '../../../components/sections/OurTeam'
import CentersSection from '../../../components/sections/CentersSection'
const list = [
  {
    image: '/images/generalImages/shield.png',
    title: 'Clarity and Reliability in Care',
    titleColor: '#CAF48E', // custom title color
    description:
      'We prioritize clear processes to ensure dependable healthcare experiences.',
    descriptionColor: '#E2F2F1', // custom description color
    bgColor: '#025850',
    taglineColor: '#CAF48E',
  },
  {
    image: '/images/generalImages/hand.png',
    title: 'Adaptable Solutions for Every Patient',
    titleColor: '#025850',
    description:
      'Our services evolve to meet the diverse needs of our patients.',
    descriptionColor: '#626262',
    bgColor: '#CAF48E',
    taglineColor: '#1E1E1E',
  },
  {
    image: '/images/generalImages/price.png',
    title: 'Honest Communication and Pricing',
    titleColor: '#013530',
    description:
      'We prioritize clear processes to ensure dependable healthcare experiences.',
    descriptionColor: '#E2F2F1',
    bgColor: '#6CBEB8',
    taglineColor: '#CAF48E',
  },
]
const centersSectionMock = {
  title: 'Join Our Impact Network',
  description:
    'Become part of our mission to enhance healthcare and support communities through collaboration and innovation.',
  list: [
    {
      image: '/images/generalImages/center1.png',
    },
    {
      image: '/images/generalImages/center2.png',
    },
    {
      image: '/images/generalImages/center3.png',
    },
    {
      image: '/images/generalImages/center4.png',
    },
    {
      image: '/images/generalImages/center5.png',
    },
    {
      image: '/images/generalImages/center6.png',
    },
  ],
  ctaText: 'Join',
  href: '/career',
  backgroundColor: '#F0F8F8',
  textColor: '#1E1E1E',
  reverse: false,
}
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        data={{
          title: 'About Sage',
          subtitle: undefined,
          description: `
  Discover how we redefine healthcare concierge services <br/> for a transformative medical tourism experience.
    `,
          background_image: {
            data: {
              attributes: {
                url: '/images/generalImages/aboutHeader.png',
                alternativeText: 'Services Hero',
              },
            },
          },

          cta_primary: undefined,
          cta_secondary: undefined,
          alignment: 'left',
          theme: 'dark',
          height: 'large',
          overlay: true,
          overlay_opacity: 40,
          breadcrumbItems: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
          ],
          tagline: 'Our Story',
        }}
      />

      {/* Overview Section */}
      <section className="">
        <div className="flex items-start ">
          <div className="md:sticky md:top-0 min-w-[575px]">
            <div className="min-h-screen w-full bg-center bg-cover bg-no-repeat relative">
              <Image
                fill
                src="/images/generalImages/FrameAbout.png"
                alt="Overview"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative  min-h-screen w-full">
            <div className="py-25 px-15 flex justify-between flex-col min-h-screen">
              <div className="max-w-[817px]">
                <div>
                  <p className="text-Primary-Palm font-medium text-base leading-[1.5]">
                    Overview
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-Primary-Black font-bold text-[48px] leading-[1.2] tracking-[-0.48px]">
                    Redefining Medical Tourism in Saudi Arabia
                  </h2>
                  <p className="text-Secondary-Text text-p">
                    Sage is a pioneering healthcare concierge company dedicated
                    to transforming medical tourism in Saudi Arabia. We build
                    robust systems and partnerships that enhance the healthcare
                    journey, aligning with Vision 2030.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  <div className="space-y-4">
                    <h3 className="text-Primary-Palm font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                      Our Commitment
                    </h3>
                    <p className="text-Secondary-Text text-base leading-[1.5]">
                      Transforming healthcare journeys through <br /> structure,
                      trust, and innovative solutions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-Primary-Palm font-bold text-[20px] leading-[1.4] tracking-[-0.2px]">
                      Vision 2030
                    </h3>
                    <p className="text-Secondary-Text text-base leading-[1.5]">
                      Aligning with national goals to enhance <br /> global
                      medical tourism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-28 px-15 bg-Secondary-Dark-Palm  min-h-screen w-full flex justify-between flex-col">
              <div>
                <Tagline text={'Our Vision'} />
                <h2 className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.48px] pb-4">
                  Saudi Arabia as a Medical Hub
                </h2>
                <div className="space-y-4 max-w-[786px]">
                  <div className="text-Secondary-Light-Scrub text-p leading-[1.5] space-y-4 tracking-[-0.48px]">
                    <p>
                      At Sage, we envision Saudi Arabia as a premier global
                      destination for medical tourism—where patients from around
                      the world receive exceptional care in a culturally rich
                      and welcoming environment. Our mission goes beyond
                      coordination; we aim to deliver structured, world-class
                      healthcare experiences.
                    </p>
                    <p>
                      In line with Vision 2030, we're building a fully
                      integrated healthcare ecosystem through strategic
                      partnerships, advanced systems, and international
                      standards. Our goal is to simplify the medical travel
                      journey while ensuring every patient receives personalized
                      attention and trusted support.
                    </p>
                    <p>
                      Through innovation, transparency, and a commitment to
                      excellence, we are redefining healthcare for global
                      patients and partners alike—positioning Saudi Arabia as a
                      beacon of healing and leadership in the global healthcare
                      economy.
                    </p>
                  </div>
                </div>
              </div>{' '}
              <div className="relative aspect-[190/200] w-[170px]">
                <Image
                  src="/images/generalImages/Vector.png"
                  fill
                  alt="image"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="bg-Primary-Palm">
        <div className="max-w-[1392px] mx-auto w-full relative py-25">
          <video
            src="/images/generalImages/video.mp4"
            className="w-full rounded-[40px] "
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="cursor-pointer">
              <Image
                src="/images/generalImages/VideoButton.png"
                alt="VideoButton"
                width={180}
                height={180}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className=" bg-Primary-Palm">
        <div className="max-w-[1390px] mx-auto py-47">
          <div className="min-w-[768px] mx-auto text-center  flex flex-col items-center justify-center">
            <div className="max-w-[980px]">
              {' '}
              <Tagline text="Our Mission" className="items-center" />
              <h2 className="text-white font-bold text-[48px] leading-[1.2] tracking-[-0.48px]  mx-auto">
                Simplifying{' '}
                <span className="text-Primary-Scrub">Global Healthcare</span>{' '}
                with Structured, World-Class Concierge Services
              </h2>
            </div>
            <p className="text-Secondary-Light-Scrub text-p max-w-[758px] pt-4">
              At Sage, we are dedicated to providing comprehensive concierge
              services that streamline the international patient experience. Our
              mission is to enhance the national healthcare economy while
              ensuring every patient receives world-class care tailored to their
              unique needs.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-28 bg-Secondary-Light-Scrub">
        <div className="max-w-[616px] mx-auto">
          <div className=" mx-auto  text-center">
            <Tagline text={'Our Values'} className="items-center" />
            <div className="space-y-4">
              <h2 className="text-Primary-Black text-[48px] font-bold tracking-[-0.48px]">
                That Drive Us Forward
              </h2>
              <p className="text-p text-Secondary-Text">
                At Sage, our core values shape every interaction and service we
                provide. They reflect our commitment to excellence and
                patient-centered care.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1392px] mx-auto w-full pt-15">
          <div className="flex  gap-15 justify-center items-start text-start">
            {list?.map((li, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: li.bgColor }}
                className="flex items-start gap-2 flex-col max-w-[432px] p-10 rounded-3xl relative"
              >
                <Image
                  src={li.image}
                  alt={li.title}
                  width={181}
                  height={188}
                  className={`rounded-lg `}
                />
                <h5
                  className={` text-[32px] font-bold tracking-[-0.48px]`}
                  style={{ color: li.titleColor }}
                >
                  {li.title}
                </h5>
                <span
                  className={`text-[16px] leading-[1.5] flex-1 `}
                  style={{ color: li.descriptionColor }}
                >
                  {li.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurTeam />
      <CentersSection
        title={centersSectionMock.title}
        description={centersSectionMock.description}
        list={centersSectionMock.list}
        ctaText={centersSectionMock.ctaText}
        href={centersSectionMock.href}
        backgroundColor={centersSectionMock.backgroundColor}
        textColor={centersSectionMock.textColor}
        reverse={centersSectionMock.reverse}
      />
    </div>
  )
}
