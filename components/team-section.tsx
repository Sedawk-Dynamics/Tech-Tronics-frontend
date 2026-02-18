"use client"

import { motion } from "framer-motion"
import { MessageSquare, Search, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We start by understanding your business, goals, and challenges through an in-depth consultation.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Search,
    step: "02",
    title: "Research & Strategy",
    description:
      "Our team analyzes your market and competitors to craft a tailored strategy that fits your vision.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Code2,
    step: "03",
    title: "Design & Development",
    description:
      "We bring the plan to life with clean code, modern design, and rigorous quality assurance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "After a smooth launch, we provide ongoing support and optimization to ensure lasting success.",
    color: "from-amber-500 to-orange-500",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <span className="text-sm text-tt-blue-500 font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven four-step process that turns your ideas into powerful digital products.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-px bg-border" />
          <motion.div
            className="absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle node */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`relative z-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} p-[2px] shadow-lg mb-6`}
                >
                  <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center">
                    <item.icon className="w-7 h-7 text-foreground mb-1" />
                    <span className="text-xs font-bold text-muted-foreground">
                      STEP {item.step}
                    </span>
                  </div>
                </motion.div>

                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-tt-blue-500 to-tt-cyan-500 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex gap-5 items-start"
              >
                {/* Dot on the line */}
                <div
                  className={`absolute -left-8 sm:-left-12 top-1 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${item.color} p-[2px] z-10`}
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <item.icon className="w-3 h-3 sm:w-5 sm:h-5 text-foreground" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card flex-1">
                  <span className="text-xs font-bold text-muted-foreground">
                    STEP {item.step}
                  </span>
                  <h3 className="font-semibold text-foreground text-lg mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
