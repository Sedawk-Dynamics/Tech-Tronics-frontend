"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesSection } from "@/components/services-section"
import { StatsCounter } from "@/components/stats-counter"
import { IndustrySection } from "@/components/industry-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { LogoTicker } from "@/components/logo-ticker"
import { SkillsVisualization } from "@/components/skills-visualization"
import { FeatureTracking } from "@/components/feature-tracking"
import { GlowingOrbs } from "@/components/floating-particles"
import { TechStackSection } from "@/components/tech-stack-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ClientReviewsSection } from "@/components/client-reviews-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ConsultationSection } from "@/components/consultation-section"
import { SectionDivider } from "@/components/section-divider"
import { ScrollReveal } from "@/components/scroll-reveal"

const CodeRain = dynamic(
  () => import("@/components/code-rain").then((mod) => ({ default: mod.CodeRain })),
  { ssr: false }
)

const VideoHero = dynamic(
  () => import("@/components/video-hero").then((mod) => ({ default: mod.VideoHero })),
  { ssr: false }
)

const SpinningEarth = dynamic(
  () => import("@/components/spinning-earth").then((mod) => ({ default: mod.SpinningEarth })),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background layers - fixed, stacked */}
      <div className="fixed inset-0 z-0 bg-background">
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]">
          <SpinningEarth />
        </div>
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]">
          <CodeRain />
        </div>
      </div>

      {/* Video background */}
      <VideoHero />

      {/* Content - above all backgrounds */}
      <div className="relative z-10">
        <Navbar />

        <div className="pt-16">
          {/* Hero with glowing orbs */}
          <div className="relative">
            <GlowingOrbs />
            <HeroSection />
          </div>

          <LogoTicker />

          <SectionDivider />

          <ScrollReveal variant="fade-left">
            <AboutPreview />
          </ScrollReveal>

          <SectionDivider />

          <ScrollReveal variant="blur-in">
            <ServicesSection />
          </ScrollReveal>

          <ScrollReveal variant="scale-up">
            <StatsCounter />
          </ScrollReveal>

          <SectionDivider />

          <ScrollReveal variant="fade-up">
            <TechStackSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <SkillsVisualization />
          </ScrollReveal>

          <SectionDivider />

          <ScrollReveal variant="blur-in">
            <IndustrySection />
          </ScrollReveal>

          <ScrollReveal variant="fade-left">
            <WhyChooseUsSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <FeatureTracking />
          </ScrollReveal>

          <SectionDivider />

          <ScrollReveal variant="scale-up">
            <PortfolioSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <ClientReviewsSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-left">
            <TestimonialsSection />
          </ScrollReveal>

          <ScrollReveal variant="blur-in">
            <ProcessSection />
          </ScrollReveal>

          <SectionDivider />

          <ScrollReveal variant="scale-up">
            <ConsultationSection />
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <FaqSection />
          </ScrollReveal>

          <ScrollReveal variant="blur-in">
            <NewsletterSection />
          </ScrollReveal>

          <ScrollReveal variant="scale-up">
            <CtaSection />
          </ScrollReveal>
        </div>

        <Footer />
      </div>
    </main>
  )
}
