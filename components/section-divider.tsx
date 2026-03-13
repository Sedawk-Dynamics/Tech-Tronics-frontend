"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <div className="relative py-8 flex items-center justify-center">
      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--tt-blue-500) / 0.5), hsl(var(--tt-cyan-500) / 0.4), hsl(var(--tt-blue-500) / 0.5), transparent)",
        }}
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute w-2 h-2 rounded-full bg-tt-blue-500/40 dark:bg-tt-blue-400/30"
      />

      {/* Side dots */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-[60px] w-1 h-1 rounded-full bg-tt-cyan-500/30"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute left-1/2 translate-x-[56px] w-1 h-1 rounded-full bg-tt-cyan-500/30"
      />
    </div>
  )
}
