'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function VideoPlayer({ video }: { video: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const loopInterval = useRef<NodeJS.Timeout | null>(null)

  // Animation setup
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Autoplay muted loop of first 3 seconds
    videoEl.muted = true
    videoEl.play().catch(() => {})

    loopInterval.current = setInterval(() => {
      if (videoEl.currentTime >= 3) {
        videoEl.currentTime = 0
      }
    }, 100)

    return () => {
      if (loopInterval.current) clearInterval(loopInterval.current)
    }
  }, [])

  const handlePlay = () => {
    const videoEl = videoRef.current
    if (!videoEl) return

    if (loopInterval.current) {
      clearInterval(loopInterval.current)
      loopInterval.current = null
    }

    videoEl.currentTime = 0
    videoEl.muted = false
    videoEl.play()
    setIsPlaying(true)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative rounded-xl h-[80vh]"
    >
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full rounded-xl md:rounded-[40px] object-cover"
        playsInline
        preload="auto"
        controls
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={handlePlay}
          >
            {isMobile ? (
              <Image
                src="/images/generalImages/VideoButton2.png"
                alt="VideoButton"
                width={56}
                height={56}
                className="object-cover"
              />
            ) : (
              <Image
                src="/images/generalImages/VideoButton.png"
                alt="VideoButton"
                width={180}
                height={180}
                className="object-cover"
              />
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
