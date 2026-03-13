"use client"

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { createContext, useContext, useEffect, type ReactNode } from "react"

const ThemeSourceContext = createContext<{
  setManual: () => void
  setAuto: () => void
}>({
  setManual: () => {},
  setAuto: () => {},
})

export function useThemeSource() {
  return useContext(ThemeSourceContext)
}

function getTimeBasedTheme(): "light" | "dark" {
  const hour = new Date().getHours()
  // Day: 6 AM to 6 PM → light, Night: 6 PM to 6 AM → dark
  return hour >= 6 && hour < 18 ? "light" : "dark"
}

function TimeBasedThemeSync() {
  const { setTheme } = useTheme()

  useEffect(() => {
    const source = localStorage.getItem("theme-source")
    if (source === "manual") return // User manually set theme, respect it

    // Auto-detect based on user's local time
    setTheme(getTimeBasedTheme())
  }, [setTheme])

  return null
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeSourceValue = {
    setManual: () => localStorage.setItem("theme-source", "manual"),
    setAuto: () => {
      localStorage.setItem("theme-source", "auto")
    },
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <ThemeSourceContext.Provider value={themeSourceValue}>
        <TimeBasedThemeSync />
        {children}
      </ThemeSourceContext.Provider>
    </NextThemesProvider>
  )
}
