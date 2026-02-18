"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "Web Development", level: 95, color: "from-tt-blue-500 to-tt-cyan-500" },
  { name: "AI & Machine Learning", level: 90, color: "from-tt-cyan-500 to-tt-blue-400" },
  { name: "Cloud Architecture", level: 88, color: "from-tt-blue-400 to-tt-cyan-400" },
  { name: "Mobile Development", level: 85, color: "from-tt-cyan-400 to-tt-blue-500" },
  { name: "DevOps & CI/CD", level: 92, color: "from-tt-blue-500 to-tt-cyan-600" },
  { name: "Cybersecurity", level: 87, color: "from-tt-cyan-600 to-tt-blue-600" },
]

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <motion.span
          className="text-sm font-bold text-tt-blue-500"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function SkillsVisualization() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Radar/Terminal visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative p-6 bg-card border border-border rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">techtronics://skills</span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm space-y-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-tt-cyan-500">$</span>
                    <span className="text-muted-foreground">{skill.name.toLowerCase().replace(/ /g, "_")}</span>
                    <span className="text-tt-blue-500">--level</span>
                    <motion.span
                      className="text-tt-cyan-400 font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <span className="text-tt-cyan-500">$</span>
                  <span className="text-muted-foreground ml-3">status:</span>
                  <span className="text-tt-cyan-400 ml-2 animate-pulse">ready_</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Expertise
                </span>
              </h2>
              <p className="text-muted-foreground">
                World-class proficiency across cutting-edge technologies.
              </p>
            </div>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
