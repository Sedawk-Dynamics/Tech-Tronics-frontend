"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, Users, CheckCircle } from "lucide-react"

interface StatItem {
  icon: typeof Award
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "IT Professionals",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "Results Guaranteed",
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsCounter() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-tt-dark">
      {/* Deep dark background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tt-dark via-tt-navy to-tt-dark" />

      {/* Cyber-grid overlay */}
      <div className="absolute inset-0 -z-[5] cyber-grid opacity-[0.08]" />

      {/* Subtle matrix-style decorative lines */}
      <div
        className="absolute inset-0 -z-[4] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(205 100% 55% / 0.15) 0px, transparent 1px, transparent 80px)",
          backgroundSize: "80px 100%",
        }}
      />

      {/* Faint horizontal scanline hint */}
      <div
        className="absolute inset-0 -z-[3] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(205 100% 55% / 0.1) 3px, hsl(205 100% 55% / 0.1) 4px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="text-center p-6 sm:p-8 terminal-card rounded-md border border-tt-blue-500/15 hover:border-tt-blue-500/40 transition-all duration-500 group"
            >
              {/* Icon in a dark bordered container */}
              <div className="inline-flex p-3.5 bg-tt-blue-500/5 border border-tt-blue-500/25 rounded-md mb-5 group-hover:border-tt-blue-500/50 group-hover:bg-tt-blue-500/10 transition-all duration-500">
                <stat.icon className="w-7 h-7 text-tt-blue-500" />
              </div>

              {/* Number: green with glow, monospace */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight font-mono text-tt-blue-400 glow-text-primary">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label: muted green/gray, monospace, with // prefix */}
              <div className="text-sm text-muted-foreground font-medium font-mono uppercase tracking-wider group-hover:text-tt-blue-500/80 transition-colors duration-300">
                <span className="text-tt-blue-500/40">// </span>{stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
