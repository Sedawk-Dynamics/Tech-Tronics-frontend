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
          className="relative overflow-hidden rounded-lg p-8 sm:p-12 bg-card border border-tt-blue-500/15"
        >
          {/* Grid background */}
          <div className="absolute inset-0 cyber-grid opacity-20 rounded-lg" />

          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tt-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tt-blue-500/40 to-transparent" />

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-md">
                <Mail className="w-7 h-7 text-tt-blue-500" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block mb-3 px-3 py-1 bg-tt-blue-500/5 border border-tt-blue-500/15 rounded-md">
                <span className="font-mono text-xs text-tt-blue-500">$ subscribe --newsletter</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Stay Updated with{" "}
                <span className="gradient-text">Tech Insights</span>
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
                      placeholder="user@domain.com"
                      required
                      className="w-full px-4 py-3 bg-secondary/80 border border-border rounded-md font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-tt-blue-500 text-background rounded-md font-mono font-semibold shadow-lg shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 transition-shadow duration-300 flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 py-3 px-6 bg-tt-blue-500/10 border border-tt-blue-500/30 rounded-md"
                >
                  <CheckCircle className="w-5 h-5 text-tt-blue-500" />
                  <span className="text-tt-blue-500 font-mono text-sm">
                    [OK] Subscription confirmed successfully.
                  </span>
                </motion.div>
              )}
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
              // No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
