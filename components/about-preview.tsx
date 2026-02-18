"use client"

import { motion } from "framer-motion"
import { Lightbulb, Shield, Users, BarChart3 } from "lucide-react"
import Image from "next/image"

const competencies = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Pioneering technology solutions that drive business growth and digital transformation.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Enterprise-grade security ensuring your data and operations remain protected.",
  },
  {
    icon: Users,
    title: "User-Friendly Interface",
    description: "Intuitive designs that deliver exceptional user experiences across all platforms.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Data-driven insights powered by advanced analytics for informed decision making.",
  },
]

export function AboutPreview() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content + Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full">
              <span className="text-sm text-tt-blue-500 font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Elevate Your Business Growth Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                Technology Innovation
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We empower individuals and businesses to take control of their digital future
              through proven strategies, advanced data analytics, and personalized guidance
              that drives measurable results.
            </p>

            {/* Image below text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden h-64 shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                alt="Team collaborating on technology solutions"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-xs text-white/80">Years Experience</div>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-xs text-white/80">Projects Done</div>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Competencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/50 hover:shadow-lg hover:shadow-tt-blue-500/5 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-tt-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
