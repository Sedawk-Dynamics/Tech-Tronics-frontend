"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-foreground">We Build </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-400 via-tt-blue-500 to-tt-cyan-500">
          {displayText}
          <motion.span
            className="inline-block w-1 h-10 sm:h-14 lg:h-16 bg-gradient-to-b from-tt-blue-500 to-tt-cyan-500 ml-1 align-middle"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-sm sm:text-base text-tt-blue-500/60 dark:text-tt-blue-400/50 font-medium uppercase tracking-[0.3em]"
      >
        Your Startup Begins Here
      </motion.p>
    </div>
  )
}
