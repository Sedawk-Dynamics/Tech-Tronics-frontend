"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { FloatingParticles } from "@/components/floating-particles"
import { projects, categories } from "@/lib/portfolio-data"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="pt-16">
        {/* Hero Banner */}
        <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
          <FloatingParticles count={12} />
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-tt-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-tt-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-6">
                <span className="text-sm text-tt-blue-500 font-medium">Our Portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Recent{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of innovative projects across AI, machine learning,
                and software development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
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

            {/* Projects Grid - Enhanced with Images */}
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
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />

                      {/* Featured badge */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 bg-white/90 text-xs font-bold text-gray-900 rounded-full">
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-tt-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <CtaSection />
      </div>

      <Footer />
    </main>
  )
}
