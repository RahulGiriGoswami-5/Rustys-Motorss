import { Link } from "react-router-dom"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { cars } from "@/data/inventory"
import { CarCard } from "@/components/CarCard"

export function FeaturedInventory() {
  const ref = useScrollReveal()

  return (
    <section id="inventory" className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 scroll-reveal">
          <div>
            <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-3">
              Featured
            </p>
            <h2
              className="text-foreground font-bold text-4xl md:text-5xl tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Finest Selection
            </h2>
          </div>
          <Link
            to="/inventory"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline flex-shrink-0"
          >
            View all vehicles →
          </Link>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          id="product-grid"
        >
          {cars.map((car, i) => (
            <div
              key={car.id}
              className="scroll-reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
