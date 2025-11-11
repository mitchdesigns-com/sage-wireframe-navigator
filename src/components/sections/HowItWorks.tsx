'use client'

import Button from '@/components/ui/Button'
import Tagline from './Tagline'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface HowItWorksStep {
  id: number
  number: string
  title: string
  description: string
}

export default function HowItWorks({
  tagline,
  title,
  description,
  steps,
  locale,
}: {
  tagline: string
  title: string
  description: string
  steps: HowItWorksStep[]
  locale: 'en' | 'ar'
}) {
  // Observe section visibility
  const [sectionRef, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  // Animation variants
  const fadeUpParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // delay between each step animation
      },
    },
  }

  const fadeUpChild = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-11 md:py-25 bg-Secondary-Light-Scrub overflow-visible"
    >
      <div className="max-w-[1392px] mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={fadeUpChild}
            initial="hidden"
            animate={controls}
            className="md:sticky md:top-24 bg-Primary-Palm rounded-3xl"
          >
            <div className="p-10">
              <Tagline text={tagline} category="individuals" />
              <h2 className="mb-4 md:mb-6 text-[28px] font-bold leading-tight text-Primary-Spring md:text-[40px] tracking-[-0.48px]">
                {title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Timeline Steps */}
          <motion.div
            variants={fadeUpParent}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Connecting Line */}
            <div className="absolute bottom-0 left-3 top-0 -z-10 w-px bg-gray-900"></div>

            <div>
              {steps.map((step, index) => (
                <motion.div
                  key={step.id || index}
                  variants={fadeUpChild}
                  className="relative flex items-start space-x-4"
                >
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="flex flex-col items-center h-full min-h-[200px]">
                      <div className="bg-Primary-Palm h-6 w-[3px]" />
                      <div className="w-[15px] h-[15px] bg-Primary-Scrub rounded-full my-2" />
                      <div className="bg-Primary-Palm flex-1 w-[3px]" />
                    </div>
                  </div>
                  <div className="ml-8 pb-0">
                    <div className="mb-4">
                      <h4 className="text-[#9ABCB9] text-[40px] font-bold md:heading-1">
                        {step.number}
                      </h4>
                    </div>
                    <h3 className="mb-2 heading-4">{step.title}</h3>
                    <p className="max-w-md text-base md:text-lg text-Secondary-Text">
                      {step.description}
                    </p>

                    {index === steps.length - 1 && (
                      <div className="mt-5 w-full">
                        <Button
                          href="/contact"
                          righticon={true}
                          locale={locale as 'en' | 'ar'}
                        >
                          Request Free Consultation
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
