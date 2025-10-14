'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function VideoPlayer({ video }: { video: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const loopInterval = useRef<NodeJS.Timeout | null>(null)

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
    videoEl.play().catch(() => {}) // silent autoplay attempt

    loopInterval.current = setInterval(() => {
      if (videoEl.currentTime >= 3) {
        videoEl.currentTime = 0
      }
    }, 100) // check every 100ms

    return () => {
      if (loopInterval.current) clearInterval(loopInterval.current)
    }
  }, [])

  const handlePlay = () => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // stop looping effect
    if (loopInterval.current) {
      clearInterval(loopInterval.current)
      loopInterval.current = null
    }

    // allow sound and play full video
    videoEl.currentTime = 0
    videoEl.muted = false
    videoEl.play()
    setIsPlaying(true)
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={video}
        className="w-full rounded-xl md:rounded-[40px]"
        playsInline
        preload="auto"
        controls
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
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
          </div>
        </div>
      )}
    </div>
  )
}
