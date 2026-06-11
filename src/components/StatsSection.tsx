import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const stats = [
  { value: 500, suffix: "+", label: "Luxury Cars Sold" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 30, suffix: "+", label: "Global Automotive Brands" },
  { value: 15, suffix: "+", label: "Countries Served" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, value)
            setCount(Math.floor(current))
            if (current >= value) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 bg-secondary/40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="scroll-reveal text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p
                className="text-foreground font-bold mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground text-sm tracking-wide">{stat.label}</p>
              {/* Decorative line */}
              <div className="mx-auto mt-4 h-px w-12 bg-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
