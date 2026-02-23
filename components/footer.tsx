"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Dribbble,
} from "lucide-react"

const footerSections = [
  {
    id: "services",
    title: "Services",
    items: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "UI/UX Design", href: "/services#ui-ux-design" },
      { label: "Artificial Intelligence", href: "/services#ai" },
      { label: "DevOps Services", href: "/services#devops" },
      { label: "Quality Assurance", href: "/services#qa" },
      { label: "CMS Development", href: "/services#cms" },
    ],
  },
  {
    id: "company",
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Dribbble", href: "#", icon: Dribbble },
]

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <footer className="relative py-12 px-4 sm:px-6 bg-card/80 overflow-hidden">
      {/* Cyber grid background overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />

      {/* Top gradient border line — single green line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tt-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4 relative">
                {/* Subtle green glow behind logo */}
                <div className="absolute -inset-2 bg-tt-blue-500/10 rounded-md blur-xl opacity-50" />
                <Image
                  src="/images/logo-light.png"
                  alt="Techtronics"
                  width={140}
                  height={36}
                  className="h-9 w-auto dark:hidden relative z-10"
                />
                <Image
                  src="/images/Techtronics purple logo.png"
                  alt="Techtronics"
                  width={140}
                  height={36}
                  className="h-9 w-auto hidden dark:block brightness-[1.5] contrast-[1.1] filter drop-shadow-[0_0_15px_hsl(205,100%,55%,0.4)] relative z-10"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4 max-w-md font-mono leading-relaxed">
                Next-Gen Technology Startup delivering cutting-edge IT solutions.
                We empower businesses through innovative technology, advanced data
                analytics, and personalized digital strategies.
              </p>

              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <div className="flex items-start space-x-2 group">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-tt-blue-500/70" />
                  <span className="group-hover:text-tt-blue-500 transition-colors">New Jersey, 07023, USA</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Phone className="w-4 h-4 text-tt-blue-500/70" />
                  <span className="group-hover:text-tt-blue-500 transition-colors">+1 (888) 999-0000</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Mail className="w-4 h-4 text-tt-blue-500/70" />
                  <span className="group-hover:text-tt-blue-500 transition-colors">info@tech-tronics.ai</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.id}>
                {/* Section title: monospace, green, with // prefix */}
                <h3 className="font-mono font-semibold text-tt-blue-500 mb-4 relative inline-block text-sm tracking-wide">
                  <span className="text-tt-blue-500/50">// </span>{section.title}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-tt-blue-500/30" />
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-tt-blue-500 transition-colors text-sm font-mono relative group"
                      >
                        <span className="relative">
                          {item.label}
                          {/* Animated underline on hover in green */}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-tt-blue-500 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="relative">
            {/* Green separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-tt-blue-500/40 to-transparent mb-0" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 terminal-card rounded-md px-6 py-4 mt-4">
              {/* Copyright: monospace, dim green, blinking cursor */}
              <div className="text-xs font-mono text-tt-blue-500/60">
                &copy; {new Date().getFullYear()} Techtronics International. All
                rights reserved.
                <span className="inline-block w-2 h-4 bg-tt-blue-500 ml-1 align-middle animate-blink" />
              </div>
              {/* Social icons: green-bordered squares, green on hover with glow */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${name}`}
                    className="group relative p-2.5 rounded-md border border-tt-blue-500/30 text-muted-foreground hover:text-tt-blue-500 hover:border-tt-blue-500 hover:shadow-[0_0_15px_hsl(var(--primary)/0.25)] transition-all duration-300 bg-background/50"
                  >
                    <Icon className="w-4 h-4 relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden space-y-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center relative">
              {/* Subtle green glow behind logo */}
              <div className="absolute -inset-4 bg-tt-blue-500/10 rounded-md blur-xl" />
              <Image
                src="/images/logo-light.png"
                alt="Techtronics"
                width={120}
                height={32}
                className="h-8 w-auto dark:hidden relative z-10"
              />
              <Image
                src="/images/Techtronics purple logo.png"
                alt="Techtronics"
                width={120}
                height={32}
                className="h-8 w-auto hidden dark:block brightness-[1.5] contrast-[1.1] filter drop-shadow-[0_0_15px_hsl(205,100%,55%,0.4)] relative z-10"
              />
            </div>
            <p className="text-muted-foreground text-sm font-mono">
              Next-Gen Technology Startup
            </p>
            {/* Copyright: monospace, dim green, blinking cursor */}
            <div className="text-xs font-mono text-tt-blue-500/60">
              &copy; {new Date().getFullYear()} Techtronics International. All
              rights reserved.
              <span className="inline-block w-2 h-4 bg-tt-blue-500 ml-1 align-middle animate-blink" />
            </div>
          </div>

          <div className="text-center space-y-2 text-sm text-muted-foreground font-mono">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-tt-blue-500/70" />
              <span>+1 (888) 999-0000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-tt-blue-500/70" />
              <span>info@tech-tronics.ai</span>
            </div>
          </div>

          {/* Social icons: green-bordered squares, green on hover with glow */}
          <div className="flex justify-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="group relative p-2.5 rounded-md border border-tt-blue-500/30 text-muted-foreground hover:text-tt-blue-500 hover:border-tt-blue-500 hover:shadow-[0_0_15px_hsl(var(--primary)/0.25)] transition-all duration-300 bg-background/50"
              >
                <Icon className="w-4 h-4 relative z-10" />
              </a>
            ))}
          </div>

          {/* Collapsible sections: terminal-card style with green borders */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div
                key={section.id}
                className="terminal-card rounded-md overflow-hidden relative"
              >
                {/* Green accent line on left */}
                <div className="absolute top-0 left-0 w-0.5 h-full bg-tt-blue-500/40" />
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                  className="w-full flex items-center justify-between p-4 hover:bg-tt-blue-500/5 transition-colors pl-5"
                >
                  <span className="font-mono font-medium text-sm text-tt-blue-500">
                    <span className="text-tt-blue-500/50">// </span>{section.title}
                  </span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4 text-tt-blue-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 pl-5 space-y-2 border-t border-tt-blue-500/10">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block text-sm font-mono text-muted-foreground hover:text-tt-blue-500 transition-colors py-1 relative group"
                            >
                              <span className="relative">
                                {item.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-tt-blue-500 group-hover:w-full transition-all duration-300" />
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
