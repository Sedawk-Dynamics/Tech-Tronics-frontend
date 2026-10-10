"use client"

import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale-up" | "blur-in"

const variants: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  // Animating filter: blur() on whole sections forces a repaint every frame,
  // so this reveal uses a GPU-friendly fade + slight scale instead.
  "blur-in": {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
}

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // Start revealing as soon as the section peeks in, so content never looks "late"
      viewport={{ once: true, amount: 0, margin: "0px 0px -40px 0px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
