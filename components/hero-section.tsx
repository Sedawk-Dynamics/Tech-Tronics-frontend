"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { TypingHero } from "@/components/typing-hero"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.07] dark:opacity-[0.12]"
          priority
          unoptimized
        />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tt-blue-500/8 dark:bg-tt-blue-500/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tt-cyan-500/8 dark:bg-tt-cyan-500/12 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-tt-cyan-300/3 dark:bg-tt-cyan-400/8 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypingHero />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-tt-blue-500 to-transparent mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Our global technology expertise, advanced solutions, and customized
          strategies empower businesses to thrive in the digital age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link
            href="/contact"
            className="group px-7 py-3.5 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl font-semibold text-base shadow-lg shadow-tt-blue-500/25 hover:shadow-tt-blue-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/services"
            className="group px-7 py-3.5 border-2 border-tt-blue-500/60 dark:border-tt-blue-400/40 text-tt-blue-600 dark:text-tt-blue-400 rounded-xl font-semibold text-base hover:bg-tt-blue-500 hover:border-tt-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Explore More</span>
            </span>
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
