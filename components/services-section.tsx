"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/lib/services-data"

export function ServicesSection() {
  const primaryServices = services.slice(0, 6)

  return (
    <section className="py-20 px-4 sm:px-6 bg-black/95 relative overflow-hidden">
      {/* Cyber grid overlay with subtle green tint */}
      <div className="absolute inset-0 -z-10 cyber-grid opacity-[0.08]" />
      <div className="absolute inset-0 -z-10 bg-tt-blue-500/[0.02]" />

      {/* Ambient green haze */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tt-blue-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tt-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Terminal status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md mb-4 border border-tt-blue-500/30 bg-black/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-tt-blue-500 animate-pulse shadow-[0_0_8px_2px] shadow-tt-blue-500/60" />
            <span className="text-sm font-mono text-tt-blue-500 tracking-wide">
              [SERVICES] Loading modules...
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We{" "}
            <span className="gradient-text">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology services designed to transform your business
            and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-black/80 rounded-md overflow-hidden border border-tt-blue-500/20 hover:border-tt-blue-500/60 transition-all duration-500 hover:[box-shadow:0_0_25px_-5px_hsl(var(--tt-blue-500)/0.3)]"
            >
              {/* Terminal header bar */}
              <div className="terminal-header flex items-center gap-2 px-3 py-2 bg-black/90 border-b border-tt-blue-500/20">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs font-mono text-tt-blue-500/70 tracking-wide">
                  {service.id.replace(/-/g, "_")}.exe
                </span>
              </div>

              {/* Image Header */}
              <div className="relative overflow-hidden h-44">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                {/* Green-tinted overlay */}
                <div className="absolute inset-0 bg-tt-blue-500/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
                {/* Gradient fade to card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Scanline effect on image */}
                <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

                {/* Icon badge — green bordered */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="p-2.5 rounded-md bg-black/70 backdrop-blur-md border border-tt-blue-500/40 shadow-[0_0_12px_2px] shadow-tt-blue-500/20">
                    <service.icon className="w-5 h-5 text-tt-blue-500 drop-shadow-[0_0_6px_hsl(var(--tt-blue-500))]" />
                  </div>
                </div>

                {/* Number */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="font-mono font-bold text-3xl text-tt-blue-500/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 relative z-10 bg-black/60">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Feature list — terminal style with > prefix */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-tt-blue-400"
                    >
                      <span className="text-tt-cyan-500">&gt;</span>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA — terminal command style */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-sm font-mono group/link hover:gap-2 transition-all"
                >
                  <span className="text-tt-blue-500">
                    <span className="text-tt-cyan-500">$</span> explore --service
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1 text-tt-cyan-500 group-hover/link:translate-x-1.5 group-hover/link:drop-shadow-[0_0_6px_hsl(var(--tt-cyan-500))] transition-all duration-300" />
                </Link>
              </div>

              {/* Hover green glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-tt-blue-500/[0.06] rounded-md blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button — terminal style with green border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-tt-blue-500 rounded-md font-mono font-semibold border border-tt-blue-500/60 hover:bg-tt-blue-500 hover:text-black hover:border-tt-blue-500 hover:shadow-[0_0_25px_5px] hover:shadow-tt-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-tt-cyan-500 group-hover:text-black transition-colors duration-300">&gt;_</span>
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
