import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105",
        {
          "bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white hover:shadow-[0_0_20px_rgba(19,75,246,0.3)]":
            variant === "primary",
          "bg-gradient-to-r from-tt-cyan-500 to-tt-blue-500 text-white hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]":
            variant === "secondary",
          "border-2 border-tt-blue-500 text-tt-blue-500 hover:bg-tt-blue-500 hover:text-white":
            variant === "outline",
          "bg-transparent text-foreground hover:bg-secondary":
            variant === "ghost",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
