"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { OfficeLocations } from "@/components/office-locations"
import { FloatingParticles } from "@/components/floating-particles"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="pt-16">
        {/* Hero Banner with background image */}
        <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
          <FloatingParticles count={10} />
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
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
                <span className="text-sm text-tt-blue-500 font-medium">Contact Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let&apos;s{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Connect
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? We&apos;d love to hear from you. Reach out and
                let&apos;s discuss how we can help transform your vision into reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Ready to start your next project? Contact us through any of
                    these channels or fill out the form.
                  </p>
                </div>

                {/* Contact image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=300&fit=crop"
                    alt="Contact us"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold text-lg">We&apos;re Here to Help</p>
                    <p className="text-white/70 text-sm">24/7 Support Available</p>
                  </div>
                </motion.div>

                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "info@tech-tronics.ai",
                      color: "from-blue-500/20 to-indigo-500/20",
                    },
                    {
                      icon: Phone,
                      label: "Call Us",
                      value: "+1 (888) 999-0000",
                      color: "from-emerald-500/20 to-teal-500/20",
                    },
                    {
                      icon: MapPin,
                      label: "Visit Us",
                      value: "New Jersey, 07023, USA",
                      color: "from-amber-500/20 to-orange-500/20",
                    },
                    {
                      icon: Clock,
                      label: "Working Hours",
                      value: "Mon - Fri: 9:00 AM - 6:00 PM",
                      color: "from-purple-500/20 to-pink-500/20",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-tt-blue-500/30 transition-all"
                    >
                      <div
                        className={`p-3 bg-gradient-to-br ${item.color} rounded-lg flex-shrink-0`}
                      >
                        <item.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3 p-6 sm:p-8 bg-card border border-border rounded-xl"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map / Office image section */}
        <section className="px-4 sm:px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&h=500&fit=crop"
                alt="Our office"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tt-blue-600/80 to-tt-cyan-500/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Visit Our Global Offices</h3>
                  <p className="text-white/80 max-w-md">Strategically located across the world to serve you better</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Offices
                </span>
              </h2>
              <p className="text-muted-foreground">
                Find us in strategic locations around the globe.
              </p>
            </motion.div>

            <OfficeLocations />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
