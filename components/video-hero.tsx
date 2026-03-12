"use client"

import { useRef, useEffect, useState } from "react"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Try to play the video
    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay blocked or video failed, that's ok
      })
    }

    video.addEventListener("canplay", playVideo)
    video.addEventListener("error", () => setHasError(true))

    return () => {
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("error", () => setHasError(true))
    }
  }, [])

  return (
    <>
      {/* Video background */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="fixed inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: 0.25,
            filter: "brightness(0.5) saturate(1.3)",
            zIndex: 1,
          }}
        >
          <source src="/videos/tech-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Animated gradient fallback if video fails */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, opacity: hasError ? 0.2 : 0.08 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-cyan-900/30 animate-gradient-shift" style={{ backgroundSize: "400% 400%" }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-800/20 to-transparent animate-gradient-shift" style={{ backgroundSize: "300% 300%", animationDelay: "2s" }} />
      </div>
    </>
  )
}
