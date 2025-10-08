'use client'
import { useRef, useState } from 'react'
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
  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={`${video}`}
        className="w-full rounded-[40px]"
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
            <Image
              src="/images/generalImages/VideoButton.png"
              alt="VideoButton"
              width={180}
              height={180}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
