"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg p-10 sm:p-16 text-center"
        >
          {/* Terminal background */}
          <div className="absolute inset-0 bg-card" />
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-[0.05] mix-blend-overlay"
              unoptimized
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 cyber-grid opacity-30" />

          {/* Green glow accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tt-blue-500/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tt-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          {/* Terminal border */}
          <div className="absolute inset-0 rounded-lg border border-tt-blue-500/20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tt-blue-500/50 to-transparent" />

          <div className="relative z-10">
            {/* Terminal prompt */}
            <div className="inline-block mb-6 px-4 py-2 bg-tt-blue-500/5 border border-tt-blue-500/15 rounded-md">
              <span className="font-mono text-sm text-tt-blue-500">
                <span className="text-tt-cyan-500">$</span> init --new-project
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Have Any Projects In Your Mind?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can transform your vision into reality with
              cutting-edge technology and strategic innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-tt-blue-500 text-background rounded-md font-mono font-semibold text-lg shadow-lg shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-tt-blue-500/30 text-tt-blue-500 rounded-md font-mono font-semibold text-lg hover:bg-tt-blue-500/10 hover:border-tt-blue-500/50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
