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
    <footer className="py-12 px-4 sm:px-6 border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo-light.png"
                  alt="Techtronics"
                  width={140}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                Next-Gen Technology Startup delivering cutting-edge IT solutions.
                We empower businesses through innovative technology, advanced data
                analytics, and personalized digital strategies.
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>New Jersey, 07023, USA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (888) 999-0000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@tech-tronics.ai</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.id}>
                <h3 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-tt-blue-500 transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border/30">
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Techtronics International. All
              rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  className="text-muted-foreground hover:text-tt-blue-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden space-y-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo-light.png"
                alt="Techtronics"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Next-Gen Technology Startup
            </p>
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Techtronics International. All
              rights reserved.
            </div>
          </div>

          <div className="text-center space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (888) 999-0000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@tech-tronics.ai</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="text-muted-foreground hover:text-tt-blue-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div
                key={section.id}
                className="border border-border/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                  className="w-full flex items-center justify-between p-4 bg-card/50 hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-tt-blue-500 transition-colors py-1"
                            >
                              {item.label}
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
