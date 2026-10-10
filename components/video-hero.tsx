"use client"

import { useRef, useEffect, useState } from "react"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  // Only load the 5.5MB video on larger screens without data-saver / reduced-motion
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const wide = window.matchMedia("(min-width: 768px)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnabled(wide && !reducedMotion && !connection?.saveData)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay blocked or video failed, that's ok
      })
    }
    const onError = () => setHasError(true)

    // Pause decoding while the tab is in the background
    const onVisibilityChange = () => {
      if (document.hidden) video.pause()
      else playVideo()
    }

    video.addEventListener("canplay", playVideo)
    video.addEventListener("error", onError)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("error", onError)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [enabled])

  const showVideo = enabled && !hasError

  return (
    <>
      {/* Video background — dimmed via opacity only; a CSS filter on a full-screen
          video forces an expensive repaint on every frame */}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="fixed inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.14, zIndex: 1 }}
        >
          <source src="/videos/tech-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Static gradient fallback when the video isn't shown */}
      <div
        className="fixed inset-0 pointer-events-none bg-gradient-to-br from-blue-900/40 via-transparent to-cyan-900/30"
        style={{ zIndex: 1, opacity: showVideo ? 0.08 : 0.2 }}
      />
    </>
  )
}
