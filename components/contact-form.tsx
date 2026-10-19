"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle, Loader2, Send } from "lucide-react"

const fieldClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return
    const form = event.currentTarget
    const body = new FormData(form)
    setStatus("sending")
    try {
      const response = await fetch("/api/contact", { method: "POST", body })
      const result = await response.json()
      if (!response.ok || result.success !== true) throw new Error("Submission failed")
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") return (
    <div role="status" className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
      <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
      <h4 className="mb-2 text-xl font-semibold">Thank you for reaching out!</h4>
      <p className="text-muted-foreground">Your message has been received. Our team will contact you within 24 hours.</p>
      <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-primary underline underline-offset-4">Send another message</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "sending"}>
      <p className="text-sm text-muted-foreground">Tell us what you have in mind. Our team will contact you within 24 hours.</p>
      <fieldset disabled={status === "sending"} className="space-y-5 disabled:opacity-70">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            { name: "name", label: "Full Name", type: "text", autoComplete: "name", placeholder: "Your name" },
            { name: "email", label: "Email Address", type: "email", autoComplete: "email", placeholder: "you@company.com" },
            { name: "phonenumber", label: "Phone Number", type: "tel", autoComplete: "tel", placeholder: "Your phone number" },
            { name: "company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Company name" },
          ].map(({ label, ...field }) => (
            <div key={field.name}>
              <label htmlFor={`contact-${field.name}`} className="mb-2 block text-sm font-medium">{label} <span className="text-primary">*</span></label>
              <input {...field} id={`contact-${field.name}`} required maxLength={254} className={fieldClass} />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label>
          <textarea id="contact-message" name="message" rows={5} maxLength={5000} placeholder="Tell us about your project..." className={`${fieldClass} resize-y`} />
        </div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="accept_terms_and_conditions" required className="mt-1 h-4 w-4 shrink-0 accent-primary" />
          <span>I agree to the <a href="https://crm.techtronics.ai/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Terms &amp; Conditions</a>.</span>
        </label>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-tt-blue-500 to-tt-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-opacity hover:opacity-90 disabled:cursor-wait sm:w-auto">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </fieldset>
      {status === "error" && <p role="alert" className="text-sm text-destructive">We couldn&apos;t confirm your message was received. Please try again or contact us by phone or email.</p>}
    </form>
  )
}
