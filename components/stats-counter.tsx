"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, Users, CheckCircle } from "lucide-react"

interface StatItem {
  icon: typeof Award
  value: number
  suffix: string
  label: string
  color: string
}

const stats: StatItem[] = [
  { icon: Award, value: 25, suffix: "+", label: "Years Experience", color: "text-tt-blue-500" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Successful Projects", color: "text-tt-cyan-500" },
  { icon: Users, value: 200, suffix: "+", label: "IT Professionals", color: "text-tt-cyan-500" },
  { icon: CheckCircle, value: 100, suffix: "%", label: "Results Guaranteed", color: "text-tt-cyan-600" },
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
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 rounded-xl mb-4">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
