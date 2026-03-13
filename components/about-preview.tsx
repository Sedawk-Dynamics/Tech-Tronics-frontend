"use client"

import { motion } from "framer-motion"
import { Lightbulb, Shield, Users, BarChart3 } from "lucide-react"
import Image from "next/image"

const competencies = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Pioneering technology solutions that drive business growth and digital transformation.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Enterprise-grade security ensuring your data and operations remain protected.",
  },
  {
    icon: Users,
    title: "User-Friendly Interface",
    description: "Intuitive designs that deliver exceptional user experiences across all platforms.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Data-driven insights powered by advanced analytics for informed decision making.",
  },
]

export function AboutPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle matrix-green ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tt-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tt-cyan-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content + Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge: terminal-style [SYSTEM] About us in monospace green */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-tt-blue-500/30 bg-tt-blue-900/20">
              <span className="text-sm font-mono font-medium text-tt-blue-500 tracking-wide">
                <span className="text-tt-cyan-500">[SYSTEM]</span> About us
              </span>
            </div>

            {/* Heading with gradient-text on highlighted portion */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Elevate Your Business Growth Through{" "}
              <span className="gradient-text">
                Technology Innovation
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We empower individuals and businesses to take control of their digital future
              through proven strategies, advanced data analytics, and personalized guidance
              that drives measurable results.
            </p>

            {/* Image container: terminal window style with header dots and green overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-md overflow-hidden border border-tt-blue-500/20 group transition-all duration-500"
            >
              {/* Terminal window header with dots */}
              <div className="terminal-header rounded-t-md">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">~/team/overview.img</span>
              </div>

              {/* Image area */}
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                  alt="Team collaborating on technology solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                {/* Green-tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-tt-blue-900/30 to-tt-blue-500/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-tt-blue-500/5" />

                {/* Stats overlay: terminal readout style */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 border border-tt-blue-500/30 rounded-md px-5 py-3 inline-flex items-center gap-6 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono text-tt-blue-400 glow-text-primary">25+</div>
                      <div className="text-xs font-mono text-tt-cyan-500/80 tracking-wide">Years Experience</div>
                    </div>
                    <div className="h-10 w-px bg-tt-blue-500/30" />
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono text-tt-blue-400 glow-text-primary">1000+</div>
                      <div className="text-xs font-mono text-tt-cyan-500/80 tracking-wide">Projects Done</div>
                    </div>
                    <div className="h-10 w-px bg-tt-blue-500/30" />
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono text-tt-blue-400 glow-text-primary">100%</div>
                      <div className="text-xs font-mono text-tt-cyan-500/80 tracking-wide">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Competencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-card border border-tt-blue-500/15 rounded-md hover:border-tt-blue-500/40 hover-lift transition-all duration-300"
              >
                {/* Icon in a green-bordered box */}
                <div className="p-3 border border-tt-blue-500/30 rounded-md w-fit mb-4 bg-tt-blue-500/5 group-hover:bg-tt-blue-500/10 group-hover:border-tt-blue-500/50 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-tt-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-tt-blue-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
