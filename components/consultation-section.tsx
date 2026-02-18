"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Calendar, ArrowRight, Sparkles } from "lucide-react"

export function ConsultationSection() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-tt-blue-600 via-tt-blue-500 to-tt-cyan-500" />

          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(255,255,255,0.15),transparent)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(255,255,255,0.1),transparent)]" />
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-xl" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left content */}
              <div className="text-center lg:text-left max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full mb-5"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-medium">Free Consultation</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Book Your Free IT Consultation Today
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
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
                  className="group px-8 py-4 bg-white text-tt-blue-600 rounded-xl font-semibold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:bg-white/95 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="tel:+18889990000"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
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
