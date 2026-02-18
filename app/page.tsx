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

const CodeRain = dynamic(
  () => import("@/components/code-rain").then((mod) => ({ default: mod.CodeRain })),
  { ssr: false }
)

const VideoHero = dynamic(
  () => import("@/components/video-hero").then((mod) => ({ default: mod.VideoHero })),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed background layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="opacity-[0.06] dark:opacity-[0.08]">
          <CodeRain />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="pt-16">
          {/* Hero with video background */}
          <div className="relative">
            <VideoHero />
            <GlowingOrbs />
            <HeroSection />
          </div>

          <LogoTicker />
          <AboutPreview />
          <ServicesSection />
          <StatsCounter />
          <SkillsVisualization />
          <IndustrySection />
          <FeatureTracking />
          <PortfolioSection />
          <TestimonialsSection />
          <ProcessSection />
          <CtaSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}
