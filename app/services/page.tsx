"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { services } from "@/lib/services-data"
import { FloatingParticles } from "@/components/floating-particles"

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
                <Sparkles className="w-4 h-4 text-tt-blue-500" />
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

        {/* Services — Alternating Layout Cards */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border rounded-2xl overflow-hidden hover:border-tt-blue-500/40 hover:shadow-2xl hover:shadow-tt-blue-500/8 transition-all duration-500"
                  >
                    {/* Image Side */}
                    <div
                      className={`relative h-64 lg:h-auto lg:min-h-[320px] overflow-hidden ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 mix-blend-multiply`} />
                      <div className={`absolute inset-0 ${
                        isReversed
                          ? "bg-gradient-to-l from-black/60 via-black/20 to-transparent"
                          : "bg-gradient-to-r from-black/60 via-black/20 to-transparent"
                      } hidden lg:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                      {/* Service number */}
                      <div className="absolute top-5 left-5 z-10">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-lg">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Icon badge */}
                      <div className="absolute bottom-5 right-5 z-10">
                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div
                      className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 bg-gradient-to-br ${service.color} rounded-xl opacity-90`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-tt-blue-500 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features with check icons */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-tt-cyan-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 hover:scale-105 transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Background glow on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-tt-blue-500/5 via-tt-cyan-500/3 to-tt-blue-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Why Choose Us — Enhanced */}
        <section className="py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Our Services
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-12">
                We combine decades of expertise with cutting-edge technology to deliver results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "25+ Years Experience",
                    desc: "Decades of expertise delivering world-class technology solutions.",
                    stat: "25+",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Round-the-clock dedicated support team for all your needs.",
                    stat: "24/7",
                    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
                  },
                  {
                    title: "Guaranteed Results",
                    desc: "100% satisfaction guarantee with proven track record.",
                    stat: "100%",
                    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-tt-blue-500/40 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="text-3xl font-bold text-white drop-shadow-lg">{item.stat}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
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
