"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-9 h-9" />

  const cycleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const iconVariants = {
    initial: { scale: 0, rotate: -90, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 90, opacity: 0 },
  }

  return (
    <motion.button
      onClick={cycleTheme}
      className="relative p-2.5 rounded-xl glass hover:glow-primary"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div key="moon" {...iconVariants} transition={{ duration: 0.2 }}>
            <Moon className="w-[18px] h-[18px] text-tt-blue-400" />
          </motion.div>
        ) : (
          <motion.div key="sun" {...iconVariants} transition={{ duration: 0.2 }}>
            <Sun className="w-[18px] h-[18px] text-tt-cyan-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
