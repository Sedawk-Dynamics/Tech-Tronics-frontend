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
    <div className="space-y-5">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono leading-[1.1]">
        {/* Terminal prompt */}
        <span className="text-tt-blue-500/40 dark:text-tt-blue-500/50">$ </span>
        <span className="text-foreground">Your </span>
        {/* Animated text with mode-aware glow */}
        <span className="text-tt-blue-500 dark:text-tt-blue-400 hero-typing-glow">
          {displayText}
        </span>
        {/* Block cursor */}
        <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-tt-blue-500 dark:bg-tt-blue-400 ml-0.5 align-middle animate-blink hero-cursor-glow" />
      </h1>
      <p className="text-sm sm:text-base text-tt-blue-600/70 dark:text-tt-blue-400/40 font-mono font-medium uppercase tracking-[0.3em]">
        Startup Begins Here
      </p>
    </div>
  )
}
