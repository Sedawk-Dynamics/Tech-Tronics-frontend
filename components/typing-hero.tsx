"use client"

import { useState, useEffect } from "react"

const phrases = [
  "Next-Gen Technology",
  "Digital Innovation",
  "Cutting-Edge Solutions",
  "Business Transformation",
  "AI-Powered Future",
]

export function TypingHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentPhraseIndex])

  return (
    <div className="space-y-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className="text-foreground">Your </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-400 via-tt-cyan-400 to-tt-cyan-500">
          {displayText}
        </span>
        <span className="animate-pulse text-tt-blue-500">|</span>
      </h1>
      <p className="text-lg sm:text-xl text-foreground/80 font-medium">
        Startup Begins Here
      </p>
    </div>
  )
}
