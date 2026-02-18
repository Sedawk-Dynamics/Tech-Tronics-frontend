"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { services } from "@/lib/services-data"
import { FloatingParticles } from "@/components/floating-particles"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="pt-16">
        {/* Hero Banner */}
        <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
          <FloatingParticles count={12} />
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-[0.06] dark:opacity-[0.1]"
              unoptimized
            />
          </div>
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
                <span className="text-sm text-tt-blue-500 font-medium">Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Technology Services
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From web development to artificial intelligence, we deliver end-to-end
                technology solutions that drive business growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-tt-blue-500/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon + Number */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                    <div
                      className={`p-3 bg-gradient-to-br ${service.color} rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-tt-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap lg:flex-col gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-tt-blue-500 flex-shrink-0" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Our Services
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "25+ Years Experience", desc: "Decades of expertise delivering world-class technology solutions." },
                  { title: "24/7 Support", desc: "Round-the-clock dedicated support team for all your needs." },
                  { title: "Guaranteed Results", desc: "100% satisfaction guarantee with proven track record." },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-card border border-border rounded-xl"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ProcessSection />
        <CtaSection />
      </div>

      <Footer />
    </main>
  )
}
