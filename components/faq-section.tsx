"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What services does Techtronics offer?",
    answer:
      "We offer a comprehensive range of IT services including Web Development, Software Development, UI/UX Design, Artificial Intelligence, DevOps, CMS Development, Quality Assurance, IT Support, Project Management, and Business Analysis. Each service is tailored to meet your specific business requirements.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while enterprise software solutions can take 3-6 months. During our initial consultation, we provide a detailed project timeline with clear milestones and deliverables.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Absolutely! We offer 24/7 dedicated support and maintenance packages. Our team ensures your systems run smoothly with regular updates, performance monitoring, bug fixes, and technical assistance whenever you need it.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve a wide range of industries including Financial Services, Healthcare, Media & Entertainment, Logistics, Telecom, Automotive, Education, Real Estate, Legal, and Cyber Security. Our deep domain expertise allows us to deliver specialized solutions for each sector.",
  },
  {
    question: "How do you ensure project quality and security?",
    answer:
      "We follow rigorous QA processes including automated testing, code reviews, performance testing, and security audits. Our team adheres to industry standards like ISO 27001 and OWASP guidelines. Every project undergoes multiple rounds of testing before deployment.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Yes! Our team is proficient in a wide range of technologies. Whether you use React, Angular, Vue, Node.js, Python, AWS, or any other platform, we seamlessly integrate with your existing infrastructure and tech stack.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team engagements. We provide detailed proposals with transparent pricing after understanding your requirements during the initial consultation.",
  },
  {
    question: "How can I get started with Techtronics?",
    answer:
      "Getting started is easy! Book a free consultation through our contact page or call us at +1 (888) 999-0000. Our team will discuss your requirements, propose a solution, and provide a detailed project roadmap and quote.",
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden hover:border-tt-blue-500/30 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary/50 transition-colors duration-200"
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? "text-tt-blue-500" : "text-muted-foreground"} transition-colors`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 bg-card">
              <div className="pt-2 border-t border-border/50">
                <p className="text-muted-foreground leading-relaxed pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-tt-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-tt-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/10 border border-tt-blue-500/20 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-tt-blue-500" />
            <span className="text-sm text-tt-blue-500 font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Got questions? We&apos;ve got answers. Here are the most common questions
            about our services and process.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
