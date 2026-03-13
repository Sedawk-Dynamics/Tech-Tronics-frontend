"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects, categories } from "@/lib/portfolio-data"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Cyber grid background overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Section badge: terminal-style monospace green */}
          <div className="inline-flex items-center gap-2 px-4 py-2 terminal-card rounded-md mb-4">
            <span className="w-2 h-2 rounded-full bg-tt-blue-500 animate-pulse" />
            <span className="text-sm font-mono text-tt-blue-500 tracking-wide">
              [DATABASE] Project archive loaded
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Recent{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            Explore our portfolio of innovative solutions delivered across various domains.
          </p>
        </motion.div>

        {/* Category Filters — terminal tab style */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 text-sm font-mono font-medium rounded-md transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-tt-blue-500 text-black shadow-lg shadow-tt-blue-500/30 glow-primary"
                  : "bg-tt-dark border border-tt-blue-500/40 text-tt-blue-500 hover:border-tt-blue-500 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden terminal-card rounded-md hover-lift transition-all duration-500 hover:border-tt-blue-500/60 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]"
              >
                {/* Terminal header with dots and filename */}
                <div className="terminal-header rounded-t-md">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground truncate">
                    {project.title.toLowerCase().replace(/\s+/g, "_")}.exe
                  </span>
                </div>

                {/* Project Image with green-tinted overlay */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Green-tinted overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-tt-blue-900/40 to-tt-blue-900/20 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="absolute inset-0 mix-blend-multiply bg-tt-blue-900/30 group-hover:bg-tt-blue-900/15 transition-all duration-500" />

                  {/* Featured badge: amber/yellow bg with black text */}
                  {index === 0 && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-tt-cyan-500 text-black text-xs font-bold font-mono rounded-md shadow-lg shadow-tt-cyan-500/30">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* External link icon on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="p-2 bg-background/80 rounded-md border border-tt-blue-500/40 shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
                      <ExternalLink className="w-4 h-4 text-tt-blue-500" />
                    </div>
                  </div>

                  {/* Category overlay badge: monospace, green border pill */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-3 py-1 border border-tt-blue-500/50 bg-background/70 backdrop-blur-sm text-xs font-mono text-tt-blue-500 rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 transition-all duration-300">
                    <span className="group-hover:text-tt-blue-500 transition-colors duration-300">
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-mono">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects button: terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="group/btn inline-flex items-center gap-2 px-6 py-3 border border-tt-blue-500/60 rounded-md font-mono font-semibold text-tt-blue-500 hover:bg-tt-blue-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]"
          >
            ./view_all_projects
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
