"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Frontend",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    category: "Cloud",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "DevOps",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: "AI/ML",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Cloud",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Design",
  },
]

export function TechStackSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-15 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/5 border border-tt-blue-500/15 rounded-md mb-4">
            <span className="w-2 h-2 rounded-full bg-tt-blue-500 animate-pulse" />
            <span className="text-sm text-tt-blue-500 font-mono">npm list --depth=0</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies We{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We leverage the latest and most powerful technologies to build
            scalable, performant, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -8 }}
              className="group relative flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-tt-blue-500/30 hover:shadow-lg hover:shadow-tt-blue-500/8 transition-all duration-300 cursor-default"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain dark:brightness-110 dark:contrast-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary)/0.3)] transition-all duration-300"
                />
              </div>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>

              {/* Category badge on hover */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] px-2 py-0.5 bg-tt-blue-500 text-background rounded-sm font-mono font-medium shadow-lg shadow-tt-blue-500/30">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
