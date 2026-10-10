"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Particle {
  id: number
  x: string
  y: string
  size: number
  duration: number
  delay: number
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }))
}

export function FloatingParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(generateParticles(count))
  }, [count])

  if (particles.length === 0) return <div className="absolute inset-0 overflow-hidden pointer-events-none" />

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-tt-blue-400/20 dark:bg-tt-blue-400/30"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function GlowingOrbs() {
  // Stop the looping orbs once they're scrolled out of view
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {inView && (
      <>
      <motion.div
        className="absolute w-72 h-72 bg-[radial-gradient(closest-side,hsl(var(--tt-blue-500)/0.1),transparent)] dark:bg-[radial-gradient(closest-side,hsl(var(--tt-blue-500)/0.2),transparent)]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[radial-gradient(closest-side,hsl(var(--tt-cyan-500)/0.08),transparent)] dark:bg-[radial-gradient(closest-side,hsl(var(--tt-cyan-500)/0.15),transparent)]"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-[radial-gradient(closest-side,hsl(var(--tt-cyan-400)/0.05),transparent)] dark:bg-[radial-gradient(closest-side,hsl(var(--tt-cyan-400)/0.1),transparent)]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -70, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{ top: "40%", left: "50%" }}
      />
      </>
      )}
    </div>
  )
}
