"use client"

import { useState, useEffect, useRef } from "react"

export function VideoHero() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!shouldLoad) return null

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.12] dark:opacity-[0.18]"
      style={{
        filter: "contrast(1.1) brightness(0.8) saturate(1.3) hue-rotate(10deg)",
      }}
    >
      <source
        src="https://cdn.pixabay.com/video/2020/07/30/45349-445765437_large.mp4"
        type="video/mp4"
      />
    </video>
  )
}
