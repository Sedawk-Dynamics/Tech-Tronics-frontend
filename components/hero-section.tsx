"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Shield, Clock, Users, Terminal, Zap, Globe } from "lucide-react"
import { TypingHero } from "@/components/typing-hero"

const matrixChars = [
  { char: "0", left: "3%", delay: 0, duration: 9 },
  { char: "1", left: "10%", delay: 1.4, duration: 11 },
  { char: "{", left: "17%", delay: 0.6, duration: 8 },
  { char: "}", left: "24%", delay: 2.3, duration: 10 },
  { char: "<", left: "31%", delay: 0.9, duration: 12 },
  { char: ">", left: "38%", delay: 1.7, duration: 9 },
  { char: "/", left: "45%", delay: 0.2, duration: 11 },
  { char: "0", left: "52%", delay: 2.8, duration: 8 },
  { char: "1", left: "59%", delay: 1.1, duration: 10 },
  { char: ";", left: "66%", delay: 0.4, duration: 12 },
  { char: "=", left: "73%", delay: 1.9, duration: 9 },
  { char: "$", left: "80%", delay: 2.2, duration: 11 },
  { char: "#", left: "87%", delay: 0.7, duration: 10 },
  { char: "%", left: "94%", delay: 3.1, duration: 8 },
  { char: "&", left: "7%", delay: 3.5, duration: 13 },
  { char: "*", left: "35%", delay: 1.3, duration: 10 },
  { char: "~", left: "62%", delay: 3.8, duration: 9 },
  { char: "|", left: "91%", delay: 0.1, duration: 12 },
  { char: ":", left: "48%", delay: 2.6, duration: 11 },
  { char: "?", left: "14%", delay: 4.0, duration: 8 },
]

const codeLines = [
  "import { AI } from '@techtronics/core'",
  "const engine = new AI.Engine(config)",
  "await engine.deploy({ target: 'prod' })",
  "// Status: All systems operational",
  "export default { success: true }",
]

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

const orbitDots = [
  { radius: 280, duration: 20, delay: 0, size: 4 },
  { radius: 280, duration: 20, delay: 10, size: 3 },
  { radius: 350, duration: 28, delay: 4, size: 3 },
  { radius: 350, duration: 28, delay: 18, size: 2 },
  { radius: 420, duration: 35, delay: 7, size: 2 },
  { radius: 420, duration: 35, delay: 24, size: 3 },
]

/* Binary data streams — horizontal scrolling binary text */
const binaryStreams = [
  { top: "8%", delay: 0, duration: 18, direction: "left" },
  { top: "22%", delay: 3, duration: 22, direction: "right" },
  { top: "78%", delay: 6, duration: 20, direction: "left" },
  { top: "92%", delay: 2, duration: 16, direction: "right" },
  { top: "45%", delay: 8, duration: 24, direction: "left" },
  { top: "60%", delay: 5, duration: 19, direction: "right" },
]

const binaryPackets = [
  "1011",
  "0010",
  "1101",
  "0101",
  "1110",
  "0001",
  "1001",
  "0110",
]

/* Terminal log lines that fade in/out */
const logLines = [
  { text: "[INFO] Connecting to cluster...", top: "12%", right: "3%", delay: 2 },
  { text: "[OK] Node alpha-7 online", top: "28%", right: "5%", delay: 5 },
  { text: "[SYNC] Database replicated", top: "68%", left: "2%", delay: 8 },
  { text: "[OK] SSL cert valid (365d)", top: "82%", left: "4%", delay: 11 },
  { text: "[INFO] Load balancer active", top: "35%", right: "2%", delay: 14 },
  { text: "[OK] CDN cache purged", top: "88%", right: "6%", delay: 17 },
]

/* Network nodes with connection lines */
const networkNodes = [
  { x: "10%", y: "25%" },
  { x: "18%", y: "65%" },
  { x: "82%", y: "30%" },
  { x: "90%", y: "72%" },
  { x: "6%", y: "45%" },
  { x: "94%", y: "50%" },
]

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-4 sm:px-6 overflow-hidden hero-glitch-container">
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Base background with animated ambient glows */}
      <div className="absolute inset-0 -z-30 bg-background">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-tt-blue-500/20 dark:bg-tt-blue-500/12 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] left-[20%] w-[500px] h-[350px] bg-tt-blue-400/15 dark:bg-tt-blue-400/8 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-tt-cyan-500/12 dark:bg-tt-cyan-500/6 rounded-full blur-[120px]"
        />
        {/* Extra pulsing center glow */}
        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tt-blue-500/15 dark:bg-tt-blue-500/10 rounded-full blur-[200px]"
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 -z-25 opacity-[0.04] dark:opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />

      {/* Cyber-grid */}
      <div className="absolute inset-0 -z-20 cyber-grid opacity-[0.15] dark:opacity-[0.12]" />

      {/* Scanlines */}
      <div className="absolute inset-0 -z-15 pointer-events-none scanlines-overlay" />

      {/* ===== ANIMATED BACKGROUND ELEMENTS ===== */}

      {/* Radar sweep — rotating cone of light from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden md:block">
        <div className="hero-radar-sweep" />
      </div>

      {/* Pulsing concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden sm:block">
        {[280, 380, 500, 640].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.12, 0], scale: [0.9, 1, 1.1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-tt-blue-500/25 dark:border-tt-blue-500/20"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Orbiting dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden md:block">
        {orbitDots.map((dot, i) => (
          <div
            key={i}
            className="hero-orbit"
            style={{
              width: dot.radius * 2,
              height: dot.radius * 2,
              animationDuration: `${dot.duration}s`,
              animationDelay: `-${dot.delay}s`,
            }}
          >
            <span
              className="hero-orbit-dot"
              style={{ width: dot.size, height: dot.size }}
            />
          </div>
        ))}
      </div>

      {/* Binary data streams — scrolling horizontal text */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden hidden sm:block">
        {binaryStreams.map((stream, i) => (
          <div
            key={i}
            className={`hero-binary-stream ${stream.direction === "right" ? "hero-binary-stream-right" : ""}`}
            style={{
              top: stream.top,
              animationDuration: `${stream.duration}s`,
              animationDelay: `${stream.delay}s`,
            }}
          >
            <div className="flex items-center gap-3">
              {Array.from({ length: 14 }).map((_, packetIndex) => (
                <motion.span
                  key={`${i}-${packetIndex}`}
                  animate={{ opacity: [0.12, 0.45, 0.12], y: [0, -2, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: stream.delay + packetIndex * 0.14,
                  }}
                  className="rounded-sm border border-tt-blue-500/25 dark:border-tt-blue-500/20 bg-tt-blue-500/[0.08] dark:bg-tt-blue-500/[0.06] px-1.5 py-0.5 text-[10px] tracking-widest text-tt-blue-500/50 dark:text-tt-blue-400/40 font-mono"
                >
                  {binaryPackets[packetIndex % binaryPackets.length]}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating terminal log lines — appear and fade */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden hidden lg:block">
        {logLines.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: log.delay,
              times: [0, 0.1, 0.8, 1],
              ease: "easeInOut",
            }}
            className="absolute font-mono text-[10px] text-tt-blue-500/40 dark:text-tt-blue-400/25 whitespace-nowrap select-none"
            style={{ top: log.top, right: log.right, left: log.left }}
          >
            {log.text}
          </motion.div>
        ))}
      </div>

      {/* Network nodes — pulsing dots with animated connection lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        {/* SVG connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Line from node 0 to node 4 */}
          <motion.line
            x1="10%" y1="25%" x2="6%" y2="45%"
            className="stroke-tt-blue-500/[0.15] dark:stroke-tt-blue-500/[0.1]"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1, times: [0, 0.3, 0.7, 1] }}
          />
          {/* Line from node 2 to node 5 */}
          <motion.line
            x1="82%" y1="30%" x2="94%" y2="50%"
            className="stroke-tt-blue-500/[0.15] dark:stroke-tt-blue-500/[0.1]"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 3, times: [0, 0.3, 0.7, 1] }}
          />
          {/* Line from node 1 to node 3 — diagonal cross */}
          <motion.line
            x1="18%" y1="65%" x2="90%" y2="72%"
            className="stroke-tt-cyan-500/[0.12] dark:stroke-tt-cyan-500/[0.06]"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 5, times: [0, 0.3, 0.7, 1] }}
          />
          {/* Line from node 0 to node 2 — top arc */}
          <motion.line
            x1="10%" y1="25%" x2="82%" y2="30%"
            className="stroke-tt-blue-400/[0.1] dark:stroke-tt-blue-400/[0.05]"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 7, times: [0, 0.3, 0.7, 1] }}
          />
        </svg>

        {/* Node dots */}
        {networkNodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full bg-tt-blue-500/40 dark:bg-tt-blue-400/30"
            style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
          >
            {/* Ping ring on each node */}
            <motion.div
              animate={{ scale: [1, 3], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
              className="absolute inset-0 rounded-full border border-tt-blue-500/25 dark:border-tt-blue-500/20"
            />
          </motion.div>
        ))}
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

      {/* Horizontal scan beam */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="hero-scan-beam" />
      </div>

      {/* Vertical scan beam — second sweep going top-to-bottom */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden hidden sm:block">
        <div className="hero-vscan-beam" />
      </div>

      {/* Matrix rain characters */}
      <div className="matrix-rain -z-10">
        {matrixChars.map((item, i) => (
          <span
            key={i}
            className="matrix-char"
            style={{
              left: item.left,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            {item.char}
          </span>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-[12%] left-[8%] w-8 h-8 border border-tt-blue-500/25 dark:border-tt-blue-500/15 rounded-sm"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] right-[12%] w-12 h-12 border border-tt-cyan-500/25 dark:border-tt-cyan-500/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: [45, 135, 45], y: [0, 12, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-[20%] left-[12%] w-6 h-6 border border-tt-blue-400/25 dark:border-tt-blue-400/15 rounded-sm"
        />
        <motion.div
          animate={{ rotate: -360, opacity: [0.06, 0.12, 0.06] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-[25%] right-[8%] w-10 h-10 border border-tt-cyan-400/25 dark:border-tt-cyan-400/12 rounded-md"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] left-[5%] font-mono text-lg text-tt-blue-500/25 dark:text-tt-blue-500/15 select-none"
        >+</motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] font-mono text-lg text-tt-cyan-500/25 dark:text-tt-cyan-500/15 select-none"
        >+</motion.div>
        {/* Hexagon shape — center-left */}
        <motion.div
          animate={{ rotate: [0, 60, 120, 180, 240, 300, 360], scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-[38%] left-[3%] w-14 h-14 hero-hexagon"
        />
        {/* Hexagon shape — bottom-right */}
        <motion.div
          animate={{ rotate: [0, -360], scale: [1, 1.08, 1] }}
          transition={{ rotate: { duration: 45, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-[15%] right-[4%] w-10 h-10 hero-hexagon"
        />
      </div>

      {/* Corner bracket decorations — animated draw-in */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        {/* Top-left corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-6 left-6"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <motion.path
              d="M0 20 L0 0 L20 0"
              className="stroke-tt-blue-500/30 dark:stroke-tt-blue-500/25"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
        {/* Top-right corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-6 right-6"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <motion.path
              d="M20 0 L40 0 L40 20"
              className="stroke-tt-blue-500/30 dark:stroke-tt-blue-500/25"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
        {/* Bottom-left corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-6 left-6"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <motion.path
              d="M0 20 L0 40 L20 40"
              className="stroke-tt-blue-500/30 dark:stroke-tt-blue-500/25"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
        {/* Bottom-right corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-6 right-6"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <motion.path
              d="M20 40 L40 40 L40 20"
              className="stroke-tt-blue-500/30 dark:stroke-tt-blue-500/25"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Data flow dots — traveling along paths */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden hidden lg:block">
        <svg className="absolute inset-0 w-full h-full">
          {/* Path 1 - top curve */}
          <circle r="2.5" className="fill-tt-blue-500/40 dark:fill-tt-blue-500/40">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M -20 150 Q 400 50 850 180"
            />
          </circle>
          {/* Path 2 - bottom curve */}
          <circle r="2.5" className="fill-tt-cyan-500/35 dark:fill-tt-cyan-500/30">
            <animateMotion
              dur="10s"
              begin="3s"
              repeatCount="indefinite"
              path="M 900 500 Q 450 650 -20 480"
            />
          </circle>
        </svg>
      </div>

      {/* Floating code lines — left side (desktop only) */}
      <div className="absolute left-4 sm:left-6 lg:left-10 top-[15%] bottom-[15%] -z-10 pointer-events-none hidden lg:flex flex-col justify-center gap-3">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: [0, 1, 1, 0], x: 0 }}
            transition={{ opacity: { duration: 8, repeat: Infinity, delay: 1.5 + i * 3, times: [0, 0.05, 0.9, 1] }, x: { duration: 0.5, delay: 1.5 + i * 0.2 } }}
            className="font-mono text-[11px] text-tt-blue-500/[0.2] dark:text-tt-blue-500/[0.12] whitespace-nowrap select-none"
          >
            <span className="text-tt-blue-500/[0.3] dark:text-tt-blue-500/[0.2] mr-3">{String(i + 1).padStart(2, "0")}</span>
            {line}
          </motion.div>
        ))}
      </div>

      {/* Decorative vertical line — right side */}
      <div className="absolute right-6 lg:right-10 top-[20%] bottom-[20%] -z-10 pointer-events-none hidden md:block">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
          className="h-full w-px bg-gradient-to-b from-transparent via-tt-blue-500/30 dark:via-tt-blue-500/25 to-transparent origin-top"
        />
        {/* Traveling dot on the vertical line */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[-1.5px] w-1 h-4 bg-gradient-to-b from-transparent via-tt-blue-500/50 dark:via-tt-blue-500/50 to-transparent rounded-full"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-0"
        >
          {/* Terminal Window */}
          <motion.div
            variants={fadeUp}
            className="terminal-card rounded-md overflow-hidden hero-terminal-glow"
          >
            {/* Terminal header bar */}
            <div className="terminal-header rounded-t-md">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-3 text-[11px] font-mono text-muted-foreground/50 select-none tracking-wider">
                techtronics@main:~ <span className="text-tt-blue-500/40 animate-blink">|</span>
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-muted-foreground/30" />
                <span className="text-[10px] font-mono text-muted-foreground/30 select-none">bash</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="px-5 sm:px-8 py-8 sm:py-12 space-y-7 text-center relative">
              {/* Subtle inner glow at top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-tt-blue-500/8 dark:bg-tt-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

              {/* Status badge */}
              <motion.div variants={fadeUp} className="flex justify-center">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-tt-blue-500/10 dark:bg-tt-blue-900/40 border border-tt-blue-500/25 dark:border-tt-blue-500/20 rounded-md backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-tt-blue-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-tt-blue-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-tt-blue-500 dark:text-tt-blue-400 tracking-wide">
                    [STATUS] System Online &mdash; 500+ Deployments Active
                  </span>
                </div>
              </motion.div>

              {/* Typing heading */}
              <motion.div variants={fadeUp}>
                <TypingHero />
              </motion.div>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-px w-40 bg-gradient-to-r from-transparent via-tt-blue-500/60 dark:via-tt-blue-500/80 to-transparent mx-auto"
              />

              {/* Subheading */}
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
              >
                Our global technology expertise, advanced solutions, and customized
                strategies empower businesses to thrive in the digital age.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link
                  href="/contact"
                  className="group relative px-7 py-3.5 bg-tt-blue-500 hover:bg-tt-blue-400 text-white dark:text-background font-mono font-bold text-sm sm:text-base rounded-md shadow-lg shadow-tt-blue-500/20 dark:shadow-tt-blue-500/25 hover:shadow-xl hover:shadow-tt-blue-500/30 dark:hover:shadow-tt-blue-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group px-7 py-3.5 bg-transparent border border-tt-blue-500/40 dark:border-tt-blue-500/50 hover:border-tt-blue-500/70 rounded-md font-mono font-bold text-sm sm:text-base text-tt-blue-600 dark:text-tt-blue-400 hover:bg-tt-blue-500/5 dark:hover:bg-tt-blue-500/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Services</span>
                  </span>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-6"
              >
                {[
                  { icon: Shield, text: "Enterprise Security", color: "text-tt-blue-500" },
                  { icon: Clock, text: "99.9% Uptime", color: "text-tt-cyan-500" },
                  { icon: Users, text: "500+ Deployments", color: "text-tt-blue-400" },
                  { icon: Globe, text: "Global Reach", color: "text-tt-cyan-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 dark:bg-tt-blue-900/30 border border-border/50 dark:border-tt-blue-500/10 rounded-md"
                  >
                    <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground dark:text-tt-blue-400/70">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
            scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-tt-blue-500/35 dark:border-tt-blue-500/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-tt-blue-500/50 dark:bg-tt-blue-500/70"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
