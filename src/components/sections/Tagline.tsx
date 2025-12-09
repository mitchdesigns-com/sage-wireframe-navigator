'use client'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface TaglineProps {
  text?: string
  className?: string
  taglineColor?: string
  category?: string
}

const Tagline: React.FC<TaglineProps> = ({
  text,
  className,
  taglineColor,
  category,
}) => {
  // Framer Motion animation setup
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  // Early return AFTER hooks
  if (!text) return null

  const categoryClasses =
    category === 'individuals'
      ? 'bg-[#6CBEB8] text-[#F0F8F8]'
      : category === 'organizations'
        ? 'bg-[#569893] text-white'
        : 'bg-Primary-Spring text-Primary-Black'

  const taglineClasses =
    taglineColor === '#DAF7AF'
      ? 'bg-Primary-Scrub text-white'
      : taglineColor === '#569893'
        ? 'bg-[#569893] text-white'
        : taglineColor === '#1E1E1E'
          ? 'bg-Primary-Black text-[#CAF48E]'
          : taglineColor === '#025850'
            ? 'bg-Primary-Palm text-Primary-Spring'
            : 'bg-Primary-Spring text-Primary-Black'

  const finalClasses = taglineColor ? taglineClasses : categoryClasses

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col justify-center md:justify-start pb-1 w-full ${className || 'items-start'}`}
    >
      <div className="flex h-[34.788px] items-center justify-center">
        <div className="transform rotate-[-6deg]">
          <div className={`${finalClasses} px-1.5 py-0 rounded-[6px]`}>
            <div
              className={`ltr:font-aeonik-medium !rtl:font-arabic text-xs md:text-base text-center leading-[1.5] text-nowrap capitalize`}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Tagline
