"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-card border border-border rounded-3xl p-8 sm:p-12"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-tt-cyan-500/10 to-tt-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tt-blue-500/3 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-tt-blue-500/10 to-tt-cyan-500/10 border border-tt-blue-500/20 rounded-2xl">
                <Mail className="w-8 h-8 text-tt-blue-500" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Stay Updated with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
                  Tech Insights
                </span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Subscribe to our newsletter for the latest technology trends, industry
                insights, and exclusive updates delivered straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              {!submitted ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-5 py-3.5 bg-secondary/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3.5 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-tt-blue-500/25 hover:shadow-tt-blue-500/40 transition-shadow duration-300 flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 py-3.5 px-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Thank you! You&apos;re now subscribed.
                  </span>
                </motion.div>
              )}
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
