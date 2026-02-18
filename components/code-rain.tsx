"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]="

    const fontSize = 14
    const columns = Math.floor(window.innerWidth / fontSize)

    const trails: Array<Array<{ char: string; y: number; opacity: number }>> = []
    for (let i = 0; i < columns; i++) {
      trails[i] = []
    }

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark")

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize

        if (drops[i] >= 0) {
          const char = characters.charAt(Math.floor(Math.random() * characters.length))
          trails[i].push({
            char: char,
            y: drops[i] * fontSize,
            opacity: 1,
          })
        }

        trails[i] = trails[i].filter((item) => {
          item.opacity -= 0.05
          return item.opacity > 0
        })

        trails[i].forEach((item, index) => {
          const isHead = index === trails[i].length - 1
          let color

          if (isDark) {
            color = isHead
              ? `rgba(139, 92, 246, ${item.opacity * 1.0})`
              : `rgba(99, 102, 241, ${item.opacity * 0.6})`
          } else {
            color = isHead
              ? `rgba(2, 119, 189, ${item.opacity * 0.9})`
              : `rgba(0, 151, 167, ${item.opacity * 0.5})`
          }

          ctx.fillStyle = color
          ctx.font = `${fontSize}px monospace`
          ctx.fillText(item.char, x, item.y)
        })

        drops[i]++

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = -Math.random() * 100
          trails[i] = []
        }
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, resolvedTheme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
