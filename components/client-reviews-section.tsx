"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface ReviewPlatform {
  name: string
  reviews: number
  rating: number
  color: string
  bgColor: string
}

const platforms: ReviewPlatform[] = [
  {
    name: "Clutch",
    reviews: 400,
    rating: 4.9,
    color: "text-rose-500",
    bgColor: "from-rose-500/10 to-rose-500/5",
  },
  {
    name: "G2",
    reviews: 1500,
    rating: 4.8,
    color: "text-orange-500",
    bgColor: "from-orange-500/10 to-orange-500/5",
  },
  {
    name: "Trustpilot",
    reviews: 650,
    rating: 4.7,
    color: "text-emerald-500",
    bgColor: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    name: "GoodFirms",
    reviews: 2000,
    rating: 4.9,
    color: "text-tt-blue-500",
    bgColor: "from-tt-blue-500/10 to-tt-blue-500/5",
  },
]

function AnimatedCount({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}+</span>
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground/20"
          }`}
        />
      ))}
    </div>
  )
}

export function ClientReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <Star className="w-3.5 h-3.5 text-tt-blue-500 fill-tt-blue-500" />
            <span className="text-sm text-tt-blue-500 font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              4,500+ Clients
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our commitment to excellence is reflected in the reviews and ratings
            we&apos;ve earned across top platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:border-tt-blue-500/40 hover:shadow-2xl hover:shadow-tt-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Platform name */}
                <div className={`text-lg font-bold ${platform.color} mb-3`}>
                  {platform.name}
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  <StarRating rating={platform.rating} />
                </div>

                {/* Rating number */}
                <div className="text-sm text-muted-foreground mb-4">
                  {platform.rating} / 5.0
                </div>

                {/* Review count */}
                <div className={`text-3xl sm:text-4xl font-bold ${platform.color} mb-1`}>
                  <AnimatedCount target={platform.reviews} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Verified Reviews
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${platform.bgColor} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Total reviews banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 p-6 bg-gradient-to-r from-tt-blue-500/10 via-tt-cyan-500/5 to-tt-blue-500/10 border border-tt-blue-500/20 rounded-2xl text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-2xl font-bold text-foreground">4,550+</span>{" "}
            total reviews across all platforms with an average rating of{" "}
            <span className="text-tt-blue-500 font-bold">4.8/5.0</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
