'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function VideoPlayer({ video }: { video: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
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
    <div className="relative">
      <video
        ref={videoRef}
        src={`${video}`}
        className="w-full rounded-xl md:rounded-[40px]"
        muted
        loop
        playsInline
        controls
        preload="auto"
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
