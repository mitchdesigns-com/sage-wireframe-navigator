'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface images {
  url: string
  alternativeText: string
}

export default function Awards({
  title,
  images,
}: {
  title: string
  images: images[]
}) {
  // Observe when the component is 50% visible
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  // Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-Primary-Black content-stretch flex flex-col gap-8 md:gap-15 items-center justify-center md:py-42 py-8 relative size-full px-4 md:px-0"
    >
      {/* Title */}
      <motion.h3
        variants={itemVariants}
        className="text-[28px] md:text-[40px] text-white font-bold"
      >
        {title}
      </motion.h3>

      {/* Images */}
      <motion.div
        variants={containerVariants}
        className="gap-3 md:gap-4 items-center justify-center relative grid grid-cols-2 md:grid-cols-6 w-full container-custom max-w-[1392px] px-6"
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`bg-no-repeat aspect-[218/158] rounded-xl bg-white bg-center bg-contain`}
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}')`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
