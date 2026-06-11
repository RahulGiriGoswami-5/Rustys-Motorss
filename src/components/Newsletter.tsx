import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const ref = useScrollReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="scroll-reveal">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Exclusive Access
          </div>

          <h2
            className="text-foreground font-bold text-4xl md:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm mx-auto">
            Receive exclusive access to new arrivals, limited editions, and private events.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              id="newsletter-form"
            >
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 h-12 px-5 rounded-2xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 transition-all duration-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-foreground text-background font-semibold text-sm rounded-2xl transition-all duration-300 hover:bg-foreground/80 hover:gap-3 flex-shrink-0 group"
              >
                Subscribe
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 py-6">
              <div className="size-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="text-emerald-600 text-xl">✓</span>
              </div>
              <p className="text-foreground font-medium">You're on the list!</p>
              <p className="text-muted-foreground text-sm">
                Expect exclusive updates delivered with care.
              </p>
            </div>
          )}

          <p className="text-muted-foreground text-xs mt-5">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
