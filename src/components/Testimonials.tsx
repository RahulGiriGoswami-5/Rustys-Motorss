import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { testimonials } from "@/data/inventory"

export function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const ref = useScrollReveal()

  const next = () => setActive((p) => (p + 1) % testimonials.length)
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 5000)
  }

  return (
    <section id="testimonials" className="py-24 bg-foreground text-background overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-background/50 text-xs tracking-[0.4em] uppercase mb-3">
            Client Stories
          </p>
          <h2
            className="text-background font-bold text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 scroll-reveal">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => { setActive(i); resetInterval() }}
              className={`relative p-7 rounded-2xl border cursor-pointer transition-all duration-500 ${
                active === i
                  ? "bg-background/10 border-background/30 scale-[1.02] shadow-xl"
                  : "bg-background/5 border-background/10 hover:bg-background/8 hover:border-background/20"
              }`}
            >
              {/* Quote mark */}
              <div className="text-background/20 text-6xl font-serif leading-none mb-4 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                {t.review}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="size-10 rounded-full object-cover border border-background/20"
                />
                <div>
                  <p className="text-background font-semibold text-sm">{t.name}</p>
                  <p className="text-background/50 text-xs">{t.title}</p>
                </div>
              </div>

              {/* Active indicator */}
              {active === i && (
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-background/40 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10 scroll-reveal">
          <button
            onClick={() => { prev(); resetInterval() }}
            className="size-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/50 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); resetInterval() }}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? "w-6 h-2 bg-background" : "w-2 h-2 bg-background/30 hover:bg-background/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => { next(); resetInterval() }}
            className="size-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/50 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
