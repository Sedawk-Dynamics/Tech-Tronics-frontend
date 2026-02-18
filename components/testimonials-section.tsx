"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Abdur Rashid",
    role: "Founder & CEO",
    content:
      "Working with Techtronics has been a game-changer for our business. Their team of experts delivered a custom software solution that exceeded our expectations and transformed our operations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Alen Walker",
    role: "Manager",
    content:
      "Techtronics provided us with innovative solutions that transformed our operations. Their dedication to quality and timeline adherence is truly commendable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Brish Johnson",
    role: "Web Developer",
    content:
      "From initial consultation to final delivery, Techtronics demonstrated professional and reliable partnership. Their technical expertise is unmatched in the industry.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Marry Jaen",
    role: "Web Designer",
    content:
      "The team at Techtronics is highly skilled and responsive. They understood our vision perfectly and delivered a product that exceeded all our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-cyan-500/10 border border-tt-cyan-500/20 rounded-full mb-4">
            <span className="text-sm text-tt-cyan-500 font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-cyan-500 to-tt-blue-500">
              Say
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 sm:p-10 text-center"
            >
              <Quote className="w-10 h-10 text-tt-blue-500/30 mx-auto mb-6" />

              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-tt-cyan-500 fill-tt-cyan-500" />
                ))}
              </div>

              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 border-2 border-tt-blue-500/30 shadow-lg">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h4 className="font-semibold text-foreground text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 bg-secondary hover:bg-tt-blue-500 hover:text-white rounded-full transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? "bg-tt-blue-500 w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 bg-secondary hover:bg-tt-blue-500 hover:text-white rounded-full transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
