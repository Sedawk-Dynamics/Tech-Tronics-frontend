"use client"

import { motion } from "framer-motion"
import {
  Landmark,
  Film,
  Heart,
  Truck,
  Wifi,
  Car,
  GraduationCap,
  Building2,
  Scale,
  ShieldAlert,
} from "lucide-react"
import Image from "next/image"

const industries = [
  {
    icon: Landmark,
    name: "Financial Services",
    color: "from-tt-blue-500/15 to-tt-blue-600/15",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
  },
  {
    icon: Film,
    name: "Media & Entertainment",
    color: "from-tt-cyan-500/15 to-tt-cyan-600/15",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop",
  },
  {
    icon: Heart,
    name: "Healthcare",
    color: "from-rose-500/15 to-pink-500/15",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
  },
  {
    icon: Truck,
    name: "Logistics",
    color: "from-tt-cyan-500/15 to-tt-cyan-600/15",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    icon: Wifi,
    name: "Telecom",
    color: "from-tt-blue-400/15 to-tt-blue-500/15",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
  {
    icon: Car,
    name: "Automotive",
    color: "from-gray-500/15 to-zinc-500/15",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
  },
  {
    icon: GraduationCap,
    name: "Education",
    color: "from-tt-blue-500/15 to-tt-blue-600/15",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  },
  {
    icon: Building2,
    name: "Real Estate",
    color: "from-tt-blue-500/15 to-tt-cyan-500/15",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    icon: Scale,
    name: "Legal Industry",
    color: "from-tt-cyan-400/15 to-tt-cyan-500/15",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  },
  {
    icon: ShieldAlert,
    name: "Cyber Security",
    color: "from-red-500/15 to-orange-500/15",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
  },
]

export function IndustrySection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-cyan-500/5 border border-tt-cyan-500/15 rounded-md mb-4">
            <span className="text-sm text-tt-cyan-500 font-mono">ls /industries/</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We{" "}
            <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering specialized solutions across diverse sectors with deep domain expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden border border-border rounded-lg text-center hover:border-tt-blue-500/30 hover:shadow-lg hover:shadow-tt-blue-500/8 transition-all duration-300 cursor-default bg-card/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover opacity-10 dark:opacity-8 group-hover:opacity-20 dark:group-hover:opacity-15 group-hover:scale-110 transition-all duration-500"
                  unoptimized
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color}`} />

              <div className="relative z-10 p-5">
                <industry.icon className="w-8 h-8 mx-auto mb-3 text-foreground group-hover:text-tt-blue-500 transition-colors" />
                <span className="text-sm font-medium text-foreground font-mono">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
