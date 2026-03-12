"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useRef, useMemo, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Shield, Clock, Users, Zap, Globe, Cpu, Cloud, Code, Smartphone, Database } from "lucide-react"
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

// Constellation network nodes - scattered positions (percentages from center)
const constellationNodes = [
  { Icon: Cpu, x: -320, y: -160, delay: 0.2, float: { y: [-8, 8, -8], duration: 6 } },
  { Icon: Cloud, x: 280, y: -200, delay: 0.4, float: { y: [-10, 5, -10], duration: 7 } },
  { Icon: Code, x: -240, y: 180, delay: 0.6, float: { y: [-6, 10, -6], duration: 5 } },
  { Icon: Smartphone, x: 300, y: 140, delay: 0.8, float: { y: [-12, 4, -12], duration: 8 } },
  { Icon: Database, x: 0, y: -280, delay: 1.0, float: { y: [-7, 7, -7], duration: 6.5 } },
  { Icon: Globe, x: -160, y: -20, delay: 0.3, float: { y: [-9, 6, -9], duration: 7.5 } },
  { Icon: Zap, x: 180, y: -40, delay: 0.5, float: { y: [-5, 11, -5], duration: 5.5 } },
  { Icon: Shield, x: 40, y: 240, delay: 0.7, float: { y: [-8, 8, -8], duration: 6.8 } },
]

// Precomputed connection edges between constellation nodes (indices)
const constellationEdges = [
  { from: 0, to: 5 }, // Cpu -> Globe
  { from: 5, to: 4 }, // Globe -> Database
  { from: 4, to: 1 }, // Database -> Cloud
  { from: 1, to: 6 }, // Cloud -> Zap
  { from: 6, to: 3 }, // Zap -> Smartphone
  { from: 3, to: 7 }, // Smartphone -> Shield
  { from: 7, to: 2 }, // Shield -> Code
  { from: 2, to: 5 }, // Code -> Globe
  { from: 0, to: 2 }, // Cpu -> Code
  { from: 1, to: 3 }, // Cloud -> Smartphone
  { from: 4, to: 6 }, // Database -> Zap
]

const floatingHexagons = [
  { x: "10%", y: "20%", size: 50, delay: 0, rotate: 15 },
  { x: "88%", y: "30%", size: 40, delay: 1.5, rotate: -20 },
  { x: "78%", y: "75%", size: 55, delay: 2.8, rotate: 30 },
  { x: "18%", y: "80%", size: 35, delay: 0.5, rotate: -10 },
  { x: "55%", y: "12%", size: 30, delay: 3.2, rotate: 45 },
]

const binaryStreams = [
  { top: "18%", duration: 20, delay: 0, direction: "left" as const },
  { top: "42%", duration: 25, delay: 4, direction: "right" as const },
  { top: "68%", duration: 22, delay: 8, direction: "left" as const },
  { top: "88%", duration: 28, delay: 2, direction: "right" as const },
]

const binaryStrings = [
  "01110010 11001001 00101110 10110100 01100011 11010010 00011101 10100110 01001011 11100001 00110100 10001110 01010011 10110000 01101001",
  "10001101 01010110 11100011 00110110 10101001 01001110 11010001 00100111 10110100 01100010 11001101 00011010 10100101 01110011 10001000",
  "01100101 10011010 00101101 11000110 01010011 10110001 01001000 11100101 00011011 10100100 01110010 11001000 00110111 10010110 01101001",
  "11010010 00101001 10110110 01000101 11100010 00011100 10001011 01110100 10100001 00110110 11001010 01010001 10011101 01100100 11000011",
]

const floatingCodeSnippets = [
  { text: "<div>", x: "4%", y: "25%", delay: 0, duration: 10 },
  { text: "{ }", x: "93%", y: "35%", delay: 2, duration: 12 },
  { text: "=>", x: "7%", y: "65%", delay: 1.5, duration: 11 },
  { text: "<//>", x: "91%", y: "72%", delay: 3, duration: 9 },
  { text: "npm", x: "12%", y: "45%", delay: 4, duration: 13 },
  { text: "git", x: "86%", y: "55%", delay: 0.8, duration: 10 },
  { text: "( )", x: "3%", y: "85%", delay: 2.5, duration: 11 },
  { text: "[ ]", x: "95%", y: "15%", delay: 1, duration: 12 },
]

const burstParticles = Array.from({ length: 20 }, (_, i) => ({
  angle: (i * 360) / 20,
  distance: 150 + (i % 3) * 80,
  size: 2 + (i % 3),
  delay: i * 0.02,
}))


const stagger = {
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const badgeVariants = {
  initial: { opacity: 0, y: 20, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
}

const badgeContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const bgY = useTransform(scrollY, [0, 600], [0, -40])

  // Mouse-follow spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // 3D tilt on hero content
  const tiltX = useSpring(0, { stiffness: 100, damping: 30 })
  const tiltY = useSpring(0, { stiffness: 100, damping: 30 })

  const [showBurst, setShowBurst] = useState(true)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
    // Tilt: map mouse position to small rotation
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    tiltY.set(((x - centerX) / centerX) * 3)
    tiltX.set(((centerY - y) / centerY) * 3)
  }, [mouseX, mouseY, tiltX, tiltY])

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0)
    tiltY.set(0)
  }, [tiltX, tiltY])

  useEffect(() => {
    const timer = setTimeout(() => setShowBurst(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative flex flex-col items-center justify-center min-h-[92vh] px-4 sm:px-6 overflow-hidden">
      {/* Animated dot grid background */}
      <div className="absolute inset-0 -z-20 dot-grid-bg opacity-[0.4] dark:opacity-[0.3] pointer-events-none" />

      {/* Mouse-follow spotlight */}
      <motion.div
        className="absolute -z-15 pointer-events-none w-[500px] h-[500px] rounded-full hidden md:block"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--tt-blue-500) / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Initial particle burst */}
      <AnimatePresence>
        {showBurst && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-5 pointer-events-none">
            {burstParticles.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180
              return (
                <motion.div
                  key={`burst-${i}`}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.round(Math.cos(rad) * p.distance),
                    y: Math.round(Math.sin(rad) * p.distance),
                    opacity: 0,
                    scale: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
                  className="absolute rounded-full bg-tt-blue-500/60 dark:bg-tt-blue-400/50"
                  style={{ width: p.size, height: p.size }}
                />
              )
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Scan beams - diagonal laser sweeps */}
      <div className="absolute inset-0 -z-15 pointer-events-none overflow-hidden hidden sm:block">
        <div className="hero-scan-beam" />
        <div className="hero-vscan-beam" />
      </div>

      {/* Radar sweep - rotating behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-15 pointer-events-none opacity-[0.35] dark:opacity-[0.25] hidden md:block">
        <div className="hero-radar-sweep" />
      </div>

      {/* Floating hexagons */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden sm:block">
        {floatingHexagons.map((hex, i) => (
          <motion.div
            key={`hex-${i}`}
            initial={{ opacity: 0, scale: 0, rotate: hex.rotate }}
            animate={{
              opacity: [0, 0.15, 0.08, 0.15, 0],
              scale: [0.6, 1, 0.9, 1, 0.6],
              rotate: [hex.rotate, hex.rotate + 60, hex.rotate + 120, hex.rotate + 180, hex.rotate + 360],
              y: [0, -15, 5, -10, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: hex.delay,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: hex.x, top: hex.y }}
          >
            <div
              className="hero-hexagon"
              style={{ width: hex.size, height: hex.size }}
            />
          </motion.div>
        ))}
      </div>

      {/* Binary data streams */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-[0.06] dark:opacity-[0.04] hidden lg:block">
        {binaryStreams.map((stream, i) => (
          <div
            key={`binary-${i}`}
            className={`hero-binary-stream ${stream.direction === "right" ? "hero-binary-stream-right" : ""} text-tt-blue-500 dark:text-tt-blue-400`}
            style={{
              top: stream.top,
              animationDuration: `${stream.duration}s`,
              animationDelay: `${stream.delay}s`,
            }}
          >
            {binaryStrings[i]}
          </div>
        ))}
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden hidden lg:block">
        {floatingCodeSnippets.map((snippet, i) => (
          <motion.span
            key={`code-${i}`}
            animate={{
              y: [0, -20, 5, -15, 0],
              opacity: [0, 0.12, 0.06, 0.12, 0],
              rotate: [0, 3, -2, 1, 0],
            }}
            transition={{
              duration: snippet.duration,
              repeat: Infinity,
              delay: snippet.delay,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-[11px] text-tt-blue-500/30 dark:text-tt-blue-400/20 select-none"
            style={{ left: snippet.x, top: snippet.y }}
          >
            {snippet.text}
          </motion.span>
        ))}
      </div>

      {/* Ambient glow effects - with parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
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
      </motion.div>

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

      {/* Constellation network - scattered floating icons with connecting lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-5 pointer-events-none hidden md:block" style={{ width: 700, height: 600 }}>
        {/* Connection lines SVG */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="700" height="600" viewBox="-350 -300 700 600" style={{ overflow: "visible" }}>
          {constellationEdges.map((edge, i) => {
            const from = constellationNodes[edge.from]
            const to = constellationNodes[edge.to]
            return (
              <motion.line
                key={`edge-${i}`}
                x1={String(from.x)}
                y1={String(from.y)}
                x2={String(to.x)}
                y2={String(to.y)}
                stroke="hsl(var(--tt-blue-500) / 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 + i * 0.12, ease: "easeOut" }}
              />
            )
          })}
          {/* Animated data pulses traveling along edges */}
          {constellationEdges.slice(0, 6).map((edge, i) => {
            const from = constellationNodes[edge.from]
            const to = constellationNodes[edge.to]
            return (
              <motion.circle
                key={`pulse-${i}`}
                r="2"
                fill="hsl(var(--tt-cyan-500) / 0.5)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 3 + i * 1.2,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              />
            )
          })}
        </svg>

        {/* Icon nodes */}
        {constellationNodes.map(({ Icon, x, y, delay, float }, i) => (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              marginLeft: x - 20,
              marginTop: y - 20,
            }}
          >
            <motion.div
              animate={{ y: float.y }}
              transition={{ duration: float.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow ring behind icon */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="absolute inset-0 rounded-xl bg-tt-blue-500/10 dark:bg-tt-blue-400/8 blur-md"
              />
              <div className="relative w-10 h-10 rounded-xl bg-white/8 dark:bg-white/5 border border-tt-blue-500/25 dark:border-tt-blue-500/15 backdrop-blur-sm flex items-center justify-center group hover:border-tt-blue-500/50 transition-colors duration-300">
                <Icon className="w-4.5 h-4.5 text-tt-blue-500/70 dark:text-tt-blue-400/50" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating geometric lines - decorative */}
      <div className="absolute inset-0 -z-5 pointer-events-none hidden lg:block">
        {/* Animated corner brackets */}
        {[
          { x: "6%", y: "22%", rot: 0 },
          { x: "90%", y: "18%", rot: 90 },
          { x: "88%", y: "78%", rot: 180 },
          { x: "8%", y: "82%", rot: 270 },
        ].map((bracket, i) => (
          <motion.div
            key={`bracket-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.2, 0.1, 0.2, 0],
              scale: [0.8, 1, 0.95, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            className="absolute w-8 h-8"
            style={{ left: bracket.x, top: bracket.y, rotate: bracket.rot }}
          >
            <div className="w-full h-full border-l-2 border-t-2 border-tt-blue-500/20 dark:border-tt-blue-400/15 rounded-tl-sm" />
          </motion.div>
        ))}

        {/* Animated dashed lines */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.15, 0.15, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute top-[35%] left-[3%] w-[12%] h-px origin-left"
          style={{ borderTop: "1px dashed hsl(var(--tt-cyan-500) / 0.3)" }}
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.15, 0.15, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 5, ease: "easeInOut" }}
          className="absolute top-[65%] right-[3%] w-[10%] h-px origin-right"
          style={{ borderTop: "1px dashed hsl(var(--tt-blue-500) / 0.3)" }}
        />
      </div>

      {/* Morphing SVG blob behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-5 pointer-events-none hidden sm:block">
        <motion.svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          className="opacity-[0.06] dark:opacity-[0.04]"
        >
          <motion.path
            fill="hsl(var(--tt-blue-500))"
            animate={{
              d: [
                "M 250 50 C 350 50, 450 150, 450 250 C 450 350, 350 450, 250 450 C 150 450, 50 350, 50 250 C 50 150, 150 50, 250 50 Z",
                "M 250 30 C 380 80, 470 170, 440 270 C 410 380, 320 460, 230 450 C 130 440, 40 360, 60 240 C 80 130, 150 30, 250 30 Z",
                "M 270 50 C 370 70, 460 180, 430 280 C 400 370, 300 470, 220 430 C 120 390, 30 320, 70 220 C 110 120, 170 40, 270 50 Z",
                "M 250 50 C 350 50, 450 150, 450 250 C 450 350, 350 450, 250 450 C 150 450, 50 350, 50 250 C 50 150, 150 50, 250 50 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>

      {/* Main content - with scroll parallax + 3D tilt */}
      <motion.div
        className="max-w-4xl w-full mx-auto relative z-10"
        style={{
          y: heroY,
          opacity: heroOpacity,
          rotateX: tiltX,
          rotateY: tiltY,
          perspective: 1000,
        }}
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center space-y-8"
        >
          {/* Typing heading with subtle glitch */}
          <motion.div variants={fadeUp} className="hero-glitch-container">
            <TypingHero />
          </motion.div>

          {/* Gradient divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-tt-blue-500 to-transparent mx-auto"
          />

          {/* Description with highlighted keywords */}
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Crafting impactful, scalable, and future-ready digital solutions across{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-tt-blue-500 via-tt-cyan-500 to-tt-blue-500 font-medium"
            >
              Web, Mobile, IoT, AI/ML, and Cloud
            </motion.span>{" "}
            for businesses worldwide.
          </motion.p>

          {/* CTA Buttons with animated gradient border + pulse ring */}
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Pulsing glow behind CTA area */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-tt-blue-500/20 via-tt-cyan-500/15 to-tt-blue-500/20 rounded-full blur-[40px] scale-150"
            />
            <div className="animated-gradient-border rounded-lg">
              <Link
                href="/contact"
                className="group relative block px-8 py-4 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white font-semibold text-base rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
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

          {/* Trust indicators - shimmer badges with staggered entrance */}
          <motion.div
            variants={badgeContainer}
            initial="initial"
            animate="animate"
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
                variants={badgeVariants}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="shimmer-badge flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/5 border border-tt-blue-500/20 dark:border-tt-blue-500/15 rounded-full backdrop-blur-sm hover:border-tt-blue-500/50 hover:shadow-lg hover:shadow-tt-blue-500/10 transition-all duration-300"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <item.icon className="w-3.5 h-3.5 text-tt-blue-500 dark:text-tt-blue-400" />
                <span className="text-xs sm:text-sm text-foreground/70 dark:text-foreground/60">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

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
