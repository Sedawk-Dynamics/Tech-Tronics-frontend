"use client"

import { motion } from "framer-motion"
import {
  Search,
  Lightbulb,
  Code,
  ShieldCheck,
  Rocket,
  BarChart3,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Research & Strategy",
    description: "Deep dive into your business requirements, market analysis, and strategic planning.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Creative Brief & Ideation",
    description: "Brainstorming sessions, wireframing, and creative concept development.",
    number: "02",
  },
  {
    icon: Code,
    title: "Design & Development",
    description: "Building your solution with cutting-edge technology and design best practices.",
    number: "03",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous testing to ensure reliability, performance, and security.",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Seamless deployment, migration, and launch with zero downtime.",
    number: "05",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Optimization",
    description: "Continuous monitoring, analytics, and iterative improvements post-launch.",
    number: "06",
  },
]

export function ProcessSection() {
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
            <span className="text-sm text-tt-blue-500 font-mono">./process --steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven 6-step methodology ensures consistent, high-quality delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-card border border-border rounded-lg hover:border-tt-blue-500/30 hover:shadow-lg hover:shadow-tt-blue-500/8 transition-all duration-500"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 font-mono text-3xl font-bold text-muted-foreground/10 group-hover:text-tt-blue-500/15 transition-colors duration-500">
                {step.number}
              </div>

              <div className="p-3 bg-tt-blue-500/10 border border-tt-blue-500/15 rounded-md w-fit mb-4 group-hover:shadow-lg group-hover:shadow-tt-blue-500/10 transition-all duration-300">
                <step.icon className="w-6 h-6 text-tt-blue-500" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-tt-blue-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gradient-to-r from-border to-tt-blue-500/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
