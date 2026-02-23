"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, HeadphonesIcon, Target, Rocket } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    icon: Award,
    title: "Industry Experience",
    description: "Over 25 years of proven expertise delivering enterprise-grade technology solutions across diverse industries.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Round-the-clock dedicated support ensuring your systems run smoothly and issues are resolved instantly.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Enterprise-grade security protocols and 99.9% uptime guarantee protecting your business operations.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Innovation",
    description: "We stay ahead of technology trends, integrating AI, cloud-native, and next-gen solutions into every project.",
  },
  {
    icon: Target,
    title: "Result-Driven Approach",
    description: "Every solution is measured against KPIs and business outcomes, ensuring tangible ROI for your investment.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile methodology with strict milestone tracking ensures your projects are delivered on schedule, every time.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-cyan-500/5 border border-tt-cyan-500/15 rounded-md">
              <span className="w-2 h-2 rounded-full bg-tt-cyan-500 animate-pulse" />
              <span className="text-sm text-tt-cyan-500 font-mono">--why-us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Businesses{" "}
              <span className="gradient-text">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine deep technical expertise with a client-first approach to deliver
              solutions that drive real business value and lasting partnerships.
            </p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=350&fit=crop"
                alt="Team at work"
                width={800}
                height={350}
                className="w-full h-56 object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tt-blue-800/90 to-tt-blue-900/95 rounded-lg" />
              <div className="absolute inset-0 cyber-grid opacity-20 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-around px-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white glow-text-primary">500+</div>
                  <div className="text-sm text-white/60 font-mono">// Projects</div>
                </div>
                <div className="h-12 w-px bg-tt-blue-500/20" />
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white glow-text-primary">200+</div>
                  <div className="text-sm text-white/60 font-mono">// Experts</div>
                </div>
                <div className="h-12 w-px bg-tt-blue-500/20" />
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white glow-text-primary">98%</div>
                  <div className="text-sm text-white/60 font-mono">// Retention</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group p-5 bg-card border border-border rounded-lg hover:border-tt-blue-500/30 hover:shadow-lg hover:shadow-tt-blue-500/8 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-tt-blue-500/10 border border-tt-blue-500/15 rounded-md mb-3 group-hover:shadow-lg group-hover:shadow-tt-blue-500/10 transition-all duration-300">
                  <reason.icon className="w-5 h-5 text-tt-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
