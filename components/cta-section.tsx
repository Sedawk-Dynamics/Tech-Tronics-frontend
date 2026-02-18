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
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tt-blue-600 via-tt-blue-500 to-tt-cyan-500 p-10 sm:p-16 text-center"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-10 mix-blend-overlay"
              unoptimized
            />
          </div>

          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-tt-cyan-400/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Have Any Projects In Your Mind?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can transform your vision into reality with
              cutting-edge technology and strategic innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-tt-blue-600 rounded-xl font-semibold text-lg hover:bg-white/90 shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
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
