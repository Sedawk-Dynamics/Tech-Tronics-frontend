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
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <span className="text-sm text-tt-blue-500 font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Recent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions delivered across various domains.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-tt-blue-500 text-white shadow-lg shadow-tt-blue-500/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
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
                className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-tt-blue-500/50 hover:shadow-2xl hover:shadow-tt-blue-500/10 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Featured badge */}
                  {index === 0 && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-white/90 text-xs font-bold text-gray-900 rounded-full shadow-sm">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* External link icon on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Category overlay badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-tt-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-tt-blue-500 text-tt-blue-500 rounded-xl font-semibold hover:bg-tt-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
