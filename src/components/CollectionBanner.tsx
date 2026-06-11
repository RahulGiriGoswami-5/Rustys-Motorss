import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export function CollectionBanner() {
  const ref = useScrollReveal()

  return (
    <section id="collections" className="py-24 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] scroll-reveal group">
            <img
              src="/interior-luxury.webp"
              alt="Luxury car interior"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glass badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
              <p className="text-white text-xs font-medium tracking-widest uppercase">
                Handcrafted Interiors
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-4">
              The Collection
            </p>
            <h2
              className="text-foreground font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Crafted For{" "}
              <span className="italic font-light">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Rusty's Motors offers a curated collection of exceptional vehicles engineered
              to deliver unforgettable driving experiences. Each car is personally inspected,
              certified, and prepared to meet the highest standards.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Every vehicle is independently verified and certified",
                "Personal concierge service from selection to delivery",
                "Global delivery network spanning 15+ countries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 size-5 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center">
                    <span className="size-1.5 rounded-full bg-foreground" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#inventory"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-sm rounded-2xl transition-all duration-300 hover:bg-foreground/80 hover:gap-4 group"
            >
              Explore Luxury Collection
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
