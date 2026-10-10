import type { ReactNode } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { company, legalLinks } from "@/lib/company"

export interface LegalSection {
  id: string
  title: string
  content: ReactNode
}

interface LegalPageProps {
  command: string
  title: string
  highlight: string
  intro: ReactNode
  sections: LegalSection[]
  currentHref: string
}

export function LegalPage({ command, title, highlight, intro, sections, currentHref }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="pt-16">
        {/* Hero Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tt-blue-500/5 border border-tt-blue-500/15 rounded-md mb-6">
              <span className="text-sm text-tt-blue-500 font-mono">{command}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {title} <span className="gradient-text">{highlight}</span>
            </h1>
            <p className="text-sm text-muted-foreground font-mono">// Last updated: {company.lastUpdated}</p>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 p-5 bg-card border border-border rounded-lg" aria-label="On this page">
                <p className="font-mono text-xs text-tt-blue-500 mb-3">
                  <span className="text-tt-blue-500/50">// </span>On this page
                </p>
                <ol className="space-y-2 text-sm">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-muted-foreground hover:text-tt-blue-500 transition-colors">
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="lg:col-span-3 p-6 sm:p-10 bg-card border border-border rounded-lg">
              <div className="legal-prose text-muted-foreground leading-relaxed">{intro}</div>

              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 mt-10">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    <span className="font-mono text-tt-blue-500 mr-2">{String(index + 1).padStart(2, "0")}.</span>
                    {section.title}
                  </h2>
                  <div className="legal-prose text-muted-foreground leading-relaxed">{section.content}</div>
                </section>
              ))}

              <div className="mt-12 p-5 rounded-md border border-tt-blue-500/20 bg-tt-blue-500/5">
                <h2 className="font-semibold text-foreground mb-2">Contact Us</h2>
                <p className="text-sm text-muted-foreground">
                  Questions about this policy? Reach {company.legalName} at{" "}
                  <a href={`mailto:${company.email}`} className="text-tt-blue-500 hover:underline">{company.email}</a>
                  {" "}or {company.phone} ({company.supportHours}), or write to us at {company.address}.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono">
                {legalLinks
                  .filter((link) => link.href !== currentHref)
                  .map((link) => (
                    <Link key={link.href} href={link.href} className="text-tt-blue-500 hover:underline">
                      {link.label} →
                    </Link>
                  ))}
              </div>
            </article>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
