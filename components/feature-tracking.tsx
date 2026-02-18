"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Shield, Zap, BarChart3, Layers } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    description: "Intelligent automation and machine learning integration for smarter business processes.",
    stats: "40% faster processing",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Scalable infrastructure deployed across worldwide cloud regions for minimal latency.",
    stats: "99.9% uptime",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with global security standards.",
    stats: "SOC 2 compliant",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Live dashboards and instant insights for data-driven decision making.",
    stats: "<100ms response",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Continuous monitoring and optimization for peak application performance.",
    stats: "3x faster loads",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Microservices-based design for maximum flexibility and maintainability.",
    stats: "100% scalable",
  },
]

export function FeatureTracking() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-tt-blue-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "top" }}
        />
        {/* Flowing particles on spine */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-tt-blue-500/60"
            animate={{ y: [0, 800], opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Enterprise Scale
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our technology stack is designed to handle the most demanding workloads with reliability and speed.
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-0">
          {features.map((feature, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:py-8 ${
                  isLeft ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Connection node on spine */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-tt-blue-500 border-2 border-background"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 w-4 h-4 rounded-full bg-tt-blue-500/30"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Card */}
                <div className={`${isLeft ? "lg:col-start-1" : "lg:col-start-2"} group`}>
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/40 hover:shadow-lg hover:shadow-tt-blue-500/5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-tt-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-tt-blue-500 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tt-blue-500/10 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-tt-cyan-500 animate-pulse" />
                          <span className="text-xs font-medium text-tt-blue-500">{feature.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats visualization */}
                <div className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 bg-gradient-to-t from-tt-blue-500/30 to-tt-cyan-500/60 rounded-full"
                          initial={{ height: 0 }}
                          whileInView={{ height: 20 + Math.random() * 40 }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
