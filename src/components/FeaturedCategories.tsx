import { useScrollReveal } from "@/hooks/useScrollReveal"
import { categories } from "@/data/inventory"
import { ArrowRight } from "lucide-react"

export function FeaturedCategories() {
  const ref = useScrollReveal()

  return (
    <section id="categories" className="py-24 bg-secondary/40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-3">
            Browse By
          </p>
          <h2
            className="text-foreground font-bold text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Find Your Category
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer scroll-reveal block"
              style={{ transitionDelay: `${i * 0.08}s` }}
              id={`category-${cat.id}`}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white font-semibold text-xl mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium group-hover:gap-3 transition-all duration-300">
                  Explore <ArrowRight className="size-3.5" />
                </span>
              </div>

              {/* Glass number badge */}
              <div className="absolute top-4 right-4 size-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">0{i + 1}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
