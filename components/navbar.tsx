"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const serviceDropdownItems = [
  { name: "Web Development", href: "/services#web-development" },
  { name: "Software Development", href: "/services#software-development" },
  { name: "UI/UX Design", href: "/services#ui-ux-design" },
  { name: "Artificial Intelligence", href: "/services#ai" },
  { name: "DevOps Services", href: "/services#devops" },
  { name: "CMS Development", href: "/services#cms" },
  { name: "Quality Assurance", href: "/services#qa" },
  { name: "IT Support Services", href: "/services#it-support" },
  { name: "Project Management", href: "/services#project-management" },
  { name: "Business Analysis", href: "/services#business-analysis" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesHovered, setServicesHovered] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.06)]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Thin green top border line - terminal window style */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-40"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.8), hsl(var(--primary)), hsl(var(--primary) / 0.8), transparent)",
          boxShadow: scrolled
            ? "0 0 8px hsl(var(--primary) / 0.4), 0 0 16px hsl(var(--primary) / 0.2)"
            : "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo - terminal style with >_ prefix */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 group">
            {/* Terminal prompt prefix */}
            <span className="font-mono text-primary text-lg font-bold glow-text-primary select-none hidden sm:inline-block">
              &gt;_
            </span>
            <Image
              src="/images/logo-light.png"
              alt="Techtronics"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto dark:hidden transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
              priority
            />
            <Image
              src="/images/Techtronics purple logo.png"
              alt="Techtronics"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto hidden dark:block brightness-[1.5] contrast-[1.1] filter drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
              priority
            />
            {/* Blinking cursor after logo */}
            <span className="w-[2px] h-5 bg-primary animate-blink hidden sm:inline-block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.hasDropdown && pathname?.startsWith("/services"))

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesHovered(true)}
                    onMouseLeave={() => setServicesHovered(false)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center px-3 py-2 text-sm font-mono font-medium rounded-md transition-all duration-300 group ${
                        isActive
                          ? "text-primary glow-text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${
                          servicesHovered ? "rotate-180" : ""
                        }`}
                      />
                      {/* Green underline with glow for active state */}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2px]"
                          style={{
                            background: "hsl(var(--primary))",
                            boxShadow:
                              "0 0 6px hsl(var(--primary) / 0.7), 0 0 16px hsl(var(--primary) / 0.3)",
                          }}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {servicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-md overflow-hidden border border-primary/20 bg-background dark:bg-[hsl(220_25%_8%)] shadow-lg"
                          style={{
                            boxShadow:
                              "0 8px 30px hsl(var(--primary) / 0.1), 0 0 1px hsl(var(--primary) / 0.3)",
                          }}
                        >
                          {/* Terminal window header with 3 dots */}
                          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/10 bg-card dark:bg-[hsl(220_25%_10%)]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0_70%_50%)]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45_90%_50%)]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(120_70%_45%)]" />
                            <span className="ml-2 text-[10px] font-mono text-muted-foreground/60">
                              ~/services
                            </span>
                          </div>
                          <div className="py-1">
                            {serviceDropdownItems.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="group/item relative flex items-center px-4 py-2 text-sm font-mono text-muted-foreground transition-all duration-200 hover:text-primary hover:bg-primary/5 hover:pl-5"
                              >
                                {/* Terminal prompt prefix on hover */}
                                <span className="absolute left-2 opacity-0 group-hover/item:opacity-100 text-primary transition-opacity duration-200 text-xs font-mono">
                                  &gt;
                                </span>
                                {service.name}
                              </Link>
                            ))}
                          </div>
                          {/* Bottom green accent line */}
                          <div
                            className="h-[1px] w-full"
                            style={{
                              background:
                                "linear-gradient(90deg, hsl(var(--primary) / 0.5), hsl(var(--primary) / 0.2), transparent)",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-mono font-medium rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-primary glow-text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {/* Green underline with glow for active state */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px]"
                      style={{
                        background: "hsl(var(--primary))",
                        boxShadow:
                          "0 0 6px hsl(var(--primary) / 0.7), 0 0 16px hsl(var(--primary) / 0.3)",
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="relative flex items-center px-5 py-2 text-sm font-mono font-semibold rounded-md border border-primary/50 bg-transparent overflow-hidden group transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-105"
              style={{
                boxShadow: "0 0 8px hsl(var(--primary) / 0.1)",
              }}
            >
              {/* Green fill background on hover */}
              <span
                className="absolute inset-0 rounded-md bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Glow effect on hover */}
              <span
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow:
                    "0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.15), inset 0 0 20px hsl(var(--primary) / 0.1)",
                }}
              />
              <span className="relative flex items-center text-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Zap className="w-4 h-4 mr-1.5 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary-foreground)/0.6)]" />
                Let&apos;s Talk
              </span>
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-primary/20 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Top green border line */}
              <div
                className="h-[1px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), hsl(var(--primary)), hsl(var(--primary) / 0.6), transparent)",
                }}
              />

              <div className="px-4 py-6 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href

                  if (item.hasDropdown) {
                    return (
                      <div key={item.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`relative flex items-center text-base font-mono font-medium py-2 transition-all duration-300 ${
                              isActive
                                ? "text-primary glow-text-primary"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {/* Terminal prompt prefix */}
                            <span className="text-primary/60 mr-2 text-sm">&gt;</span>
                            {item.name}
                          </Link>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="p-1.5 text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div
                                className="pl-4 space-y-0.5 ml-1 border-l border-primary/30"
                              >
                                {serviceDropdownItems.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setMobileServicesOpen(false)
                                    }}
                                    className="flex items-center py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:pl-1 transition-all duration-200"
                                  >
                                    <span className="text-primary/40 mr-2 text-xs">&gt;</span>
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Thin green divider line */}
                        <div
                          className="h-[1px] my-1"
                          style={{
                            background:
                              "linear-gradient(90deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1), transparent)",
                          }}
                        />
                      </div>
                    )
                  }

                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative flex items-center text-base font-mono font-medium py-2 transition-all duration-300 ${
                          isActive
                            ? "text-primary glow-text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {/* Terminal prompt prefix */}
                        <span className="text-primary/60 mr-2 text-sm">&gt;</span>
                        {item.name}
                      </Link>
                      {/* Thin green divider line */}
                      <div
                        className="h-[1px] my-1"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1), transparent)",
                        }}
                      />
                    </div>
                  )
                })}

                {/* Mobile CTA button */}
                <div className="pt-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="relative flex items-center justify-center w-full px-4 py-3 text-sm font-mono font-semibold rounded-md border border-primary/50 bg-transparent overflow-hidden group transition-all duration-300 hover:bg-primary hover:border-primary"
                    style={{
                      boxShadow: "0 0 10px hsl(var(--primary) / 0.1)",
                    }}
                  >
                    {/* Green fill background on hover */}
                    <span
                      className="absolute inset-0 rounded-md bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative flex items-center text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Zap className="w-4 h-4 mr-1.5" />
                      Let&apos;s Talk
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
