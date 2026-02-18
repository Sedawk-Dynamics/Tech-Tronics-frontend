"use client"

import { motion } from "framer-motion"
import {
  Cpu, Database, Cloud, Shield, Globe, Smartphone,
  Monitor, Server, Wifi, Lock, Code, Zap,
} from "lucide-react"

const techBrands = [
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "Cybersecurity", icon: Shield },
  { name: "AI Processing", icon: Cpu },
  { name: "Data Analytics", icon: Database },
  { name: "Global Networks", icon: Globe },
  { name: "Mobile Solutions", icon: Smartphone },
  { name: "Enterprise Systems", icon: Monitor },
  { name: "Server Architecture", icon: Server },
  { name: "IoT Connectivity", icon: Wifi },
  { name: "Security Protocols", icon: Lock },
  { name: "Custom Development", icon: Code },
  { name: "High Performance", icon: Zap },
]

function TickerRow({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) {
  const items = [...techBrands, ...techBrands]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" ? [0, -1500] : [-1500, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {items.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center gap-3 px-6 py-3 bg-card/50 border border-border/50 rounded-xl whitespace-nowrap hover:border-tt-blue-500/30 transition-colors min-w-fit"
          >
            <brand.icon className="w-5 h-5 text-tt-blue-500/70" />
            <span className="text-sm font-medium text-muted-foreground">{brand.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function LogoTicker() {
  return (
    <section className="py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
            Technologies We Work With
          </p>
        </motion.div>
        <div className="space-y-4">
          <TickerRow direction="left" speed={30} />
          <TickerRow direction="right" speed={35} />
        </div>
      </div>
    </section>
  )
}
