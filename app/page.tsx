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
      {/* Background layers - fixed, stacked like Webelio */}
      <div className="fixed inset-0 z-0 bg-background">
        {/* Spinning Earth - deepest layer */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]">
          <SpinningEarth />
        </div>
        {/* Code rain */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]">
          <CodeRain />
        </div>
      </div>

      {/* Video background - on top of earth/rain */}
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
          <AboutPreview />
          <ServicesSection />
          <StatsCounter />
          <TechStackSection />
          <SkillsVisualization />
          <IndustrySection />
          <WhyChooseUsSection />
          <FeatureTracking />
          <PortfolioSection />
          <ClientReviewsSection />
          <TestimonialsSection />
          <ProcessSection />
          <ConsultationSection />
          <FaqSection />
          <NewsletterSection />
          <CtaSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}
