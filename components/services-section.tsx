"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/lib/services-data"

export function ServicesSection() {
  const primaryServices = services.slice(0, 6)

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-tt-blue-500 animate-pulse" />
            <span className="text-sm text-tt-blue-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology services designed to transform your business
            and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid — Bento-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-tt-blue-500/50 hover:shadow-2xl hover:shadow-tt-blue-500/10 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative overflow-hidden h-44">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                {/* Color gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`p-2.5 bg-gradient-to-br ${service.color} rounded-xl shadow-lg backdrop-blur-sm`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-white/30 font-bold text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-tt-blue-500/8 dark:bg-tt-blue-500/10 border border-tt-blue-500/15 rounded-lg text-tt-blue-600 dark:text-tt-blue-400 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-sm text-tt-blue-500 font-semibold group/link hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-tt-blue-500/10 via-tt-cyan-500/5 to-tt-blue-500/10 rounded-2xl blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-tt-blue-500/25 hover:shadow-tt-blue-500/40 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
