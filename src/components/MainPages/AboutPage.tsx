'use client'

import CentersSection from '@/components/sections/CentersSection'
import OurTeam from '@/components/sections/OurTeam'
import Tagline from '@/components/sections/Tagline'
import HeroSection from '@/components/strapi/HeroSection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutPageData } from '../../types/about'

export default function AboutPage({ data }: { data: AboutPageData }) {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.6 },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={data.HeroSection[0]} />

      {/* Overview Section */}
      <section>
        <div className="flex items-start flex-col md:flex-row">
          {/* Image Column */}
          <div className="md:sticky md:top-0 w-full max-w-[575px] md:min-w-[575px]">
            <div className="min-h-[320px] md:min-h-screen w-full bg-center bg-cover bg-no-repeat relative">
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.OverviewSection.mainImage.url}`}
                alt={data.OverviewSection.mainImage.alternativeText}
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <motion.div
            className="relative min-h-screen w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="py-8 md:py-25 px-4 md:px-15 flex justify-between flex-col md:min-h-screen"
              variants={fadeUp}
            >
              <div className="max-w-[897px]">
                <motion.p
                  variants={fadeUp}
                  className="text-Primary-Palm font-medium text-sm md:text-base leading-[1.5]"
                >
                  {data.OverviewSection.mainSubtitle}
                </motion.p>
                <motion.div variants={fadeUp} className="space-y-4">
                  <h2 className="text-Primary-Black font-bold text-[28px] md:text-[48px] leading-[1.2]">
                    {data.OverviewSection.mainTitle}
                  </h2>
                  <p className="text-Secondary-Text text-base md:text-lg">
                    {data.OverviewSection.mainDescription}
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2"
              >
                {data.OverviewSection.aboutData?.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="space-y-2 md:space-y-4"
                  >
                    <h3 className="text-Primary-Palm font-bold text-[20px] tracking-[-0.2px]">
                      {item.title}
                    </h3>
                    <p className="text-Secondary-Text text-base whitespace-pre-line">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tagline + Vector */}
            <motion.div
              className="py-8 md:py-28 px-4 md:px-15 bg-Secondary-Dark-Palm min-h-screen w-full flex justify-between flex-col"
              variants={fadeUp}
            >
              <div>
                <Tagline text={data.OverviewSection.tagline} />
                <h2 className="text-white font-bold text-[28px] md:text-[48px] pb-4">
                  {data.OverviewSection.title}
                </h2>
                <motion.p
                  variants={fadeUp}
                  className="text-Secondary-Light-Scrub text-sm md:text-base max-w-[786px] whitespace-pre-line"
                >
                  {data.OverviewSection.description}
                </motion.p>
              </div>
              <motion.div
                variants={fadeUp}
                className="relative aspect-[190/200] w-[170px]"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.OverviewSection.vectorImage.url}`}
                  fill
                  alt={data.OverviewSection.vectorImage.alternativeText}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <motion.section
        className="bg-Primary-Palm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-[1392px] mx-auto w-full relative py-8 px-4 md:py-25">
          <video
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.videoSection.video.url}`}
            className="w-full rounded-[40px]"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div variants={fadeUp} className="cursor-pointer">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.videoSection.playButton.url}`}
                alt="VideoButton"
                width={180}
                height={180}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="bg-Primary-Palm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="max-w-[1390px] mx-auto py-8 md:py-47 px-4 text-center"
          variants={fadeUp}
        >
          <Tagline
            text={data.MissionSection.tagline}
            className="items-center"
          />
          <h2
            className="text-white font-bold text-[28px] md:text-[48px] leading-[1.2]"
            dangerouslySetInnerHTML={{
              __html: data.MissionSection.title.replace(
                /<span>/g,
                '<span class="text-Primary-Scrub">'
              ),
            }}
          />
          <p className="text-Secondary-Light-Scrub text-sm md:text-lg max-w-[758px] mx-auto pt-4">
            {data.MissionSection.description}
          </p>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-8 md:py-28 bg-Secondary-Light-Scrub"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="w-full md:max-w-[616px] mx-auto px-4 text-center"
          variants={fadeUp}
        >
          <Tagline text={data.ValuesSection.tagline} className="items-center" />
          <h2 className="text-Primary-Black text-[28px] md:text-[48px] font-bold">
            {data.ValuesSection.title}
          </h2>
          <p className="text-lg text-Secondary-Text">
            {data.ValuesSection.description}
          </p>
        </motion.div>

        <motion.div
          className="max-w-[1392px] mx-auto flex gap-8 md:gap-15 justify-center items-start flex-col md:flex-row pt-8 md:pt-15 px-4"
          variants={staggerContainer}
        >
          {data.ValuesSection.CardsList?.map((li, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              style={{ backgroundColor: li.bgColor }}
              className="flex items-start gap-2 flex-col max-w-[432px] p-4 md:p-10 rounded-3xl"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.image.url}`}
                alt={li.image.alternativeText || li.title}
                width={181}
                height={188}
              />
              <h5
                className="text-2xl md:text-[32px] font-bold"
                style={{ color: li.titleColor }}
              >
                {li.title}
              </h5>
              <span
                className="text-sm md:text-[16px] leading-[1.5]"
                style={{ color: li.descriptionColor }}
              >
                {li.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Final Sections */}
      <OurTeam data={data.OurTeam} />
      <CentersSection {...data.CentersSection[0]} secondaryButton={true} />
    </div>
  )
}
