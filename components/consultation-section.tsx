"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Calendar, ArrowRight, Terminal } from "lucide-react"

export function ConsultationSection() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg"
        >
          {/* Terminal background */}
          <div className="absolute inset-0 bg-card" />
          <div className="absolute inset-0 cyber-grid opacity-25" />

          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tt-blue-500/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tt-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          {/* Terminal border */}
          <div className="absolute inset-0 rounded-lg border border-tt-blue-500/15" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tt-blue-500/40 to-transparent" />

          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left content */}
              <div className="text-center lg:text-left max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/5 border border-tt-blue-500/15 rounded-md mb-5"
                >
                  <Terminal className="w-4 h-4 text-tt-blue-500" />
                  <span className="text-sm text-tt-blue-500 font-mono">Free Consultation</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Book Your Free IT Consultation Today
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Schedule a no-obligation consultation with our experts to discuss your
                  project requirements and discover how we can help transform your business.
                </p>
              </div>

              {/* Right CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row lg:flex-col gap-4"
              >
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-tt-blue-500 text-background rounded-md font-mono font-semibold text-lg shadow-xl shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="tel:+18889990000"
                  className="px-8 py-4 bg-transparent text-foreground border border-tt-blue-500/20 rounded-md font-mono font-semibold text-lg hover:bg-tt-blue-500/5 hover:border-tt-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-tt-blue-500" />
                  +1 (888) 999-0000
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
