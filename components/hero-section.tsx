"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Shield, Clock, Users, Zap, Globe } from "lucide-react"
import { TypingHero } from "@/components/typing-hero"

const floatingParticles = [
  { x: "8%", y: "15%", size: 3, delay: 0, duration: 6 },
  { x: "92%", y: "20%", size: 2, delay: 1.5, duration: 7 },
  { x: "15%", y: "75%", size: 4, delay: 0.8, duration: 8 },
  { x: "85%", y: "70%", size: 2, delay: 2.2, duration: 5 },
  { x: "25%", y: "30%", size: 3, delay: 3.0, duration: 9 },
  { x: "75%", y: "85%", size: 2, delay: 1.0, duration: 6 },
  { x: "50%", y: "10%", size: 3, delay: 2.5, duration: 7 },
  { x: "40%", y: "90%", size: 2, delay: 0.5, duration: 8 },
  { x: "95%", y: "50%", size: 3, delay: 1.8, duration: 6 },
  { x: "5%", y: "50%", size: 2, delay: 3.5, duration: 7 },
]

const stagger = {
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-tt-blue-500/25 dark:bg-tt-blue-500/15 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] left-[20%] w-[500px] h-[350px] bg-tt-cyan-500/15 dark:bg-tt-cyan-500/8 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-tt-blue-400/12 dark:bg-tt-blue-400/6 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tt-blue-500/15 dark:bg-tt-blue-500/10 rounded-full blur-[200px]"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {floatingParticles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 5, -5, 3, 0],
              opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-tt-blue-500/40 dark:bg-tt-blue-400/30"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Pulsing concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden sm:block">
        {[280, 400, 550].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.1, 0], scale: [0.9, 1, 1.1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tt-blue-500/20 dark:border-tt-blue-500/15"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Main content - Clean Webelio-style layout */}
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center space-y-8"
        >
          {/* Typing heading - clean, no terminal wrapper */}
          <motion.div variants={fadeUp}>
            <TypingHero />
          </motion.div>

          {/* Gradient divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-tt-blue-500 to-transparent mx-auto"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Crafting impactful, scalable, and future-ready digital solutions across
            Web, Mobile, IoT, AI/ML, and Cloud for businesses worldwide.
          </motion.p>

          {/* CTA Buttons - Webelio style gradient buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white font-semibold text-base rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services"
              className="group px-8 py-4 bg-transparent border-2 border-tt-blue-500/50 hover:border-tt-blue-500 rounded-lg font-semibold text-base text-tt-blue-500 dark:text-tt-blue-400 hover:bg-tt-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Explore Services</span>
              </span>
            </Link>
          </motion.div>

          {/* Trust indicators - clean pill badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6"
          >
            {[
              { icon: Shield, text: "Enterprise Security" },
              { icon: Clock, text: "99.9% Uptime" },
              { icon: Users, text: "500+ Deployments" },
              { icon: Globe, text: "Global Reach" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/5 border border-tt-blue-500/20 dark:border-tt-blue-500/15 rounded-full backdrop-blur-sm hover:border-tt-blue-500/50 hover:shadow-lg hover:shadow-tt-blue-500/10 transition-all duration-300"
              >
                <item.icon className="w-3.5 h-3.5 text-tt-blue-500 dark:text-tt-blue-400" />
                <span className="text-xs sm:text-sm text-foreground/70 dark:text-foreground/60">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
            scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-tt-blue-500/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-tt-blue-500/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
