'use client'
import AccordionJobs from '@/components/sections/AccordionJobs'
import FeatureSection from '@/components/sections/FeatureSection'
import HeroPages from '@/components/sections/HeroPages'
import { motion } from 'framer-motion'
import { CareerItem, CareersPageData } from '../../types/careersPageData'

export default function CareersPage({
  data,
  singles,
}: {
  data: CareersPageData
  singles: CareerItem[]
}) {
  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <HeroPages {...data.HeroPages} />
      </motion.div>

      {/* Feature Sections */}
      {data.FeatureSection.map((section, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <FeatureSection {...section} />
        </motion.div>
      ))}

      {/* Job Openings */}
      <section className="bg-Secondary-Light-Scrub">
        <motion.div
          className="mx-auto max-w-[1392px] py-8 md:py-25 px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h3 className="heading-lg pb-3 md:pb-6" variants={fadeUp}>
            {data.jobOpenings.title}
          </motion.h3>
          <motion.p
            className="text-Secondary-Text text-base md:text-lg max-w-[768px]"
            variants={fadeUp}
          >
            {data.jobOpenings.description}
          </motion.p>

          <motion.div className="pt-8 md:pt-15" variants={container}>
            {singles.map((item) => (
              <motion.div key={item.id} variants={fadeUp}>
                <AccordionJobs data={[item]} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
