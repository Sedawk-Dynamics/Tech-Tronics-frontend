"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, Users, CheckCircle } from "lucide-react"

interface StatItem {
  icon: typeof Award
  value: number
  suffix: string
  label: string
  gradient: string
  iconBg: string
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Experience",
    gradient: "from-tt-blue-500 to-tt-blue-600",
    iconBg: "from-tt-blue-500/15 to-tt-blue-600/15",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Successful Projects",
    gradient: "from-tt-cyan-500 to-tt-cyan-600",
    iconBg: "from-tt-cyan-500/15 to-tt-cyan-600/15",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "IT Professionals",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "from-violet-500/15 to-purple-500/15",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "Results Guaranteed",
    gradient: "from-emerald-500 to-green-500",
    iconBg: "from-emerald-500/15 to-green-500/15",
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
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-tt-blue-600 via-tt-blue-500 to-tt-cyan-500" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 -z-[5] opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="text-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl hover:bg-white/15 transition-all duration-300"
            >
              <div className={`inline-flex p-3.5 bg-white/15 rounded-2xl mb-5`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
