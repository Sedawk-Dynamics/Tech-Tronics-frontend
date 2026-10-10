"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]="
const fontSize = 14

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDarkRef = useRef(resolvedTheme === "dark")

  // Theme changes only swap colours — they no longer restart the animation
  useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark"
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let columns = 0
    let drops: number[] = []

    const resizeCanvas = () => {
      // Cap DPR: this layer renders at 5–7% opacity, so retina resolution is wasted work
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      // setTransform (not scale) so repeated resizes don't compound the scale
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${fontSize}px monospace`

      const nextColumns = Math.floor(window.innerWidth / fontSize)
      for (let i = columns; i < nextColumns; i++) {
        drops[i] = Math.random() * -100
      }
      drops = drops.slice(0, nextColumns)
      columns = nextColumns
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const draw = () => {
      if (document.hidden) return
      // Fade what's already on the canvas instead of redrawing every trail
      // character each tick (~100 glyphs per frame instead of ~2,000)
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = "source-over"
      ctx.fillStyle = isDarkRef.current ? "rgba(56, 152, 236, 0.9)" : "rgba(30, 120, 200, 0.8)"

      for (let i = 0; i < columns; i++) {
        if (drops[i] >= 0) {
          const char = characters.charAt(Math.floor(Math.random() * characters.length))
          ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        }

        drops[i]++

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = -Math.random() * 100
        }
      }
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", resizeCanvas)
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
