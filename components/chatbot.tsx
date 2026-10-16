"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import { MessageCircle, Send, X } from "lucide-react"
import { company } from "@/lib/company"

type Message = { role: "user" | "bot"; text: string; contact?: boolean }

function replyTo(question: string): Message {
  const text = question.toLowerCase().trim()
  if (/^(hi|hello|hey|good morning|good evening)[!.\s]*$/.test(text)) {
    return { role: "bot", text: "Hello! How can we help? Ask about our services, pricing, office location or working hours." }
  }
  if (/\b(contact|email|phone|call|human|person|support)\b/.test(text)) {
    return { role: "bot", text: "Please contact our team by email or phone, or visit our contact page to send a message.", contact: true }
  }
  if (/\b(service|services|offer|website|development|design|ai|devops)\b/.test(text)) {
    return { role: "bot", text: "We offer web and software development, UI/UX design, AI, DevOps, quality assurance and CMS development. Contact us to discuss your project.", contact: true }
  }
  if (/\b(price|prices|pricing|cost|quote|budget)\b/.test(text)) {
    return { role: "bot", text: "Pricing depends on your project requirements. Please contact our team for a quote.", contact: true }
  }
  if (/\b(address|location|office|where)\b/.test(text)) {
    return { role: "bot", text: `You can find us at ${company.address}. Visit our contact page for the map.`, contact: true }
  }
  if (/\b(hours|open|timing|timings)\b/.test(text)) {
    return { role: "bot", text: `Our working hours are ${company.supportHours}.`, contact: true }
  }
  return { role: "bot", text: "Please contact us for help with this question. Email or call our team, or visit our contact page.", contact: true }
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! Welcome to Techtronics. Ask a question or choose a topic below." },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const logRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [messages, open])

  function close() {
    setOpen(false)
    toggleRef.current?.focus()
  }

  function ask(question: string) {
    const trimmed = question.trim()
    if (!trimmed) return
    setMessages((previous) => [...previous, { role: "user", text: trimmed }, replyTo(trimmed)])
    setInput("")
    inputRef.current?.focus()
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    ask(input)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <section
          id="techtronics-chat"
          role="dialog"
          aria-labelledby="chat-title"
          onKeyDown={(event) => { if (event.key === "Escape") close() }}
          className="mb-3 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-2xl h-[min(32rem,calc(100dvh-7rem))]"
        >
          <header className="flex items-center justify-between border-b border-border p-4">
            <div>
              <h2 id="chat-title" className="font-semibold">Techtronics Chat</h2>
              <p className="text-xs text-muted-foreground">Quick answers to common questions</p>
            </div>
            <button type="button" onClick={close} aria-label="Close chat" className="rounded-md p-2 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-tt-blue-500">
              <X className="h-5 w-5" />
            </button>
          </header>
          <div ref={logRef} role="log" aria-label="Chat messages" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`max-w-[95%] rounded-lg p-3 text-sm break-words ${message.role === "user" ? "ml-auto bg-tt-blue-500/15" : "bg-secondary"}`}>
                <span className="sr-only">{message.role === "user" ? "You: " : "Techtronics: "}</span>
                <p>{message.text}</p>
                {message.contact && (
                  <div className="mt-3 flex flex-col items-start gap-2">
                    <a href={`mailto:${company.email}`} className="text-tt-blue-500 underline">{company.email}</a>
                    <a href={`tel:+91${company.phone}`} className="text-tt-blue-500 underline">{company.phone}</a>
                    <Link href="/contact" onClick={close} className="rounded-md bg-tt-blue-500 px-3 py-2 font-medium text-background hover:bg-tt-blue-600">Go to Contact Page</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {["Services", "Pricing", "Office location"].map((topic) => (
              <button key={topic} type="button" onClick={() => ask(topic)} className="rounded-full border border-border px-3 py-1 text-xs hover:bg-secondary">{topic}</button>
            ))}
          </div>
          <form onSubmit={submit} className="flex gap-2 border-t border-border p-3">
            <label htmlFor="chat-question" className="sr-only">Your question</label>
            <input ref={inputRef} id="chat-question" value={input} onChange={(event) => setInput(event.target.value)} maxLength={500} placeholder="Type your question..." autoComplete="off" className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-tt-blue-500" />
            <button type="submit" disabled={!input.trim()} aria-label="Send message" className="rounded-md bg-tt-blue-500 p-3 text-background disabled:opacity-40"><Send className="h-4 w-4" /></button>
          </form>
        </section>
      )}
      <button ref={toggleRef} type="button" onClick={() => open ? close() : setOpen(true)} aria-expanded={open} aria-controls="techtronics-chat" aria-label={open ? "Close chat" : "Open chat"} className="ml-auto flex items-center gap-2 rounded-full bg-tt-blue-500 px-5 py-3 font-semibold text-background shadow-lg hover:bg-tt-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tt-blue-500">
        <MessageCircle className="h-5 w-5" /> Chat with us
      </button>
    </div>
  )
}
