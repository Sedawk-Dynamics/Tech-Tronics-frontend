"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-card border border-tt-cyan-600/30 rounded-xl text-center"
      >
        <CheckCircle className="w-16 h-16 text-tt-cyan-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (888) 999-0000"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            placeholder="Project Inquiry"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tt-blue-500/50 focus:border-tt-blue-500 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-tt-blue-500/20 hover:shadow-tt-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  )
}
