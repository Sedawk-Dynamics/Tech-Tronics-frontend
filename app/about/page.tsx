"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { StatsCounter } from "@/components/stats-counter"
import { CtaSection } from "@/components/cta-section"
import {
  Trophy,
  Handshake,
  TrendingUp,
  Cpu,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { FloatingParticles } from "@/components/floating-particles"
import { SkillsVisualization } from "@/components/skills-visualization"
import Image from "next/image"

const values = [
  { icon: Trophy, title: "Best Value Solutions", description: "Delivering maximum ROI with cost-effective, high-quality technology solutions." },
  { icon: Handshake, title: "Trusted IT Partner", description: "Building lasting partnerships through transparency, reliability, and consistent results." },
  { icon: TrendingUp, title: "Driving IT Excellence", description: "Setting industry standards with our commitment to quality and continuous improvement." },
  { icon: Cpu, title: "Digital Transformation", description: "Guiding businesses through comprehensive digital transformation journeys." },
  { icon: Sparkles, title: "Digital Innovation", description: "Pioneering cutting-edge solutions that keep our clients ahead of the curve." },
  { icon: ShieldCheck, title: "Cutting-Edge IT", description: "Leveraging the latest technologies to deliver future-proof solutions." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="pt-16">
        {/* Hero Banner */}
        <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
          <FloatingParticles count={15} />
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
                <span className="text-sm text-tt-blue-500 font-medium">About Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Building The Future With{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Cutting-Edge IT Solutions
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                With 25+ years of delivering custom IT solutions, we are your trusted
                partner in digital transformation, driving innovation and excellence
                across industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Our Mission & Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We empower individuals and businesses to take control of their digital
                  future through proven strategies, advanced data analytics, and
                  personalized guidance. Our global team works around the clock to ensure
                  proactive, innovative solutions that drive real business results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When we go to the office every day, we carry on a time-honored tradition
                  of getting to know our clients on a first-name basis, understanding their
                  unique challenges, and delivering tailored solutions that make a real
                  difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Mission image */}
                <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop"
                    alt="Team working together on digital solutions"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-card border border-border rounded-xl text-center">
                    <div className="text-3xl font-bold text-tt-blue-500 mb-1">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl text-center">
                    <div className="text-3xl font-bold text-tt-cyan-500 mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl text-center">
                    <div className="text-3xl font-bold text-tt-cyan-500 mb-1">200+</div>
                    <div className="text-sm text-muted-foreground">IT Professionals</div>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl text-center">
                    <div className="text-3xl font-bold text-tt-cyan-600 mb-1">4500+</div>
                    <div className="text-sm text-muted-foreground">Client Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Core{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Values
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-tt-blue-500/50 hover:shadow-lg hover:shadow-tt-blue-500/5 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <value.icon className="w-6 h-6 text-tt-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SkillsVisualization />

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
                  Techtronics
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Industry Experience", desc: "25+ years of deep domain expertise across multiple sectors." },
                  { title: "24/7 Customer Support", desc: "Round-the-clock dedicated support for all your technology needs." },
                  { title: "Trust & Reliability", desc: "Proven track record with 100% client satisfaction guarantee." },
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

        <TeamSection />
        <StatsCounter />
        <CtaSection />
      </div>

      <Footer />
    </main>
  )
}
