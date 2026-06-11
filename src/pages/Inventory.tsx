import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, SlidersHorizontal } from "lucide-react"
import { cars } from "@/data/inventory"
import { CarCard } from "@/components/CarCard"

const ALL = "All"
const categories = [ALL, ...Array.from(new Set(cars.map((c) => c.category)))]

export default function Inventory() {
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? cars : cars.filter((c) => c.category === active)

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-3">
                Collection
              </p>
              <h1
                className="text-foreground font-bold text-4xl md:text-5xl tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Full Inventory
              </h1>
              <p className="text-muted-foreground text-sm mt-3">
                {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} available
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <SlidersHorizontal className="size-3.5" />
              <span>Filter by category</span>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-foreground text-background transition-all duration-200"
                    : "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  )
}
