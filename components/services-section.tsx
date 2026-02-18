"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import {
  WebDevGraphic,
  GearGraphic,
  SearchGraphic,
  NetworkGraphic,
  ShieldGraphic,
  TransformGraphic,
} from "@/components/animated-service-graphics"

const serviceGraphics = [
  WebDevGraphic,
  GearGraphic,
  SearchGraphic,
  NetworkGraphic,
  ShieldGraphic,
  TransformGraphic,
]

export function ServicesSection() {
  const primaryServices = services.slice(0, 6)

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <span className="text-sm text-tt-blue-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services designed to transform your business
            and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => {
            const GraphicComponent = serviceGraphics[index]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/50 hover:shadow-xl hover:shadow-tt-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Animated SVG background */}
                <GraphicComponent />

                {/* Animated gradient sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-tt-blue-500/5 to-transparent -z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "400%" }}
                  transition={{ duration: 1.5 }}
                />

                <div className="relative z-10">
                  <div
                    className={`p-3 bg-gradient-to-br ${service.color} rounded-lg w-fit mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-tt-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-sm text-tt-blue-500 font-medium hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-tt-blue-500 text-tt-blue-500 rounded-xl font-semibold hover:bg-tt-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
