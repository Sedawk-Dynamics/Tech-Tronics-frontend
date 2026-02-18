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
          ? "glass-strong shadow-lg"
          : "bg-background/40 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/images/logo-light.png"
              alt="Techtronics"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto dark:hidden"
              priority
            />
            <Image
              src="/images/Techtronics purple logo.png"
              alt="Techtronics"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto hidden dark:block"
              priority
            />
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
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-tt-blue-500"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <AnimatePresence>
                      {servicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 glass-strong rounded-xl overflow-hidden"
                        >
                          <div className="py-1">
                            {serviceDropdownItems.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-tt-blue-500 hover:bg-secondary/50 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
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
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-tt-blue-500"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="flex items-center px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl shadow-lg shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 transition-all transform hover:scale-105"
            >
              <Zap className="w-4 h-4 mr-1.5" />
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
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
              className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href

                  if (item.hasDropdown) {
                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base font-medium ${
                              isActive ? "text-tt-blue-500" : "text-muted-foreground"
                            }`}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="p-1 text-muted-foreground"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
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
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {serviceDropdownItems.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => {
                                    setIsOpen(false)
                                    setMobileServicesOpen(false)
                                  }}
                                  className="block py-2 text-sm text-muted-foreground hover:text-tt-blue-500 transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
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
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium ${
                        isActive ? "text-tt-blue-500" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 mt-4 text-sm font-semibold bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl shadow-lg"
                >
                  <Zap className="w-4 h-4 mr-1.5" />
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
