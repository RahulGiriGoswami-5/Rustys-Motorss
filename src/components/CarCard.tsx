import { useState } from "react"
import { Star, Heart, ShoppingCart, Eye, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { type Car } from "@/data/inventory"
import { useCart } from "@/lib/cart"

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-3.5",
            i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  )
}

export function BadgeChip({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    Bestseller: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Electric: "bg-blue-50 text-blue-700 border-blue-200",
    Limited: "bg-rose-50 text-rose-700 border-rose-200",
    Exotic: "bg-amber-50 text-amber-700 border-amber-200",
    New: "bg-violet-50 text-violet-700 border-violet-200",
  }
  return (
    <span
      className={cn(
        "text-[10px] font-semibold px-2 py-0.5 rounded-full border tracking-wider uppercase",
        colorMap[label] ?? "bg-secondary text-secondary-foreground border-border"
      )}
    >
      {label}
    </span>
  )
}

export function CarCard({ car }: { car: Car }) {
  const [wishlisted, setWishlisted] = useState(false)
  const { addToCart, removeFromCart, isInCart } = useCart()
  const inCart = isInCart(car.id)

  return (
    <article
      className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
      data-car-id={car.id}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-secondary/30 aspect-[16/10]">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />

        {/* Quick view */}
        <button
          aria-label="Quick view"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 hover:bg-white shadow-lg"
        >
          <Eye className="size-3.5" /> Quick View
        </button>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 size-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
        >
          <Heart
            className={cn(
              "size-4 transition-colors",
              wishlisted ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
            )}
          />
        </button>

        {/* Badge */}
        {car.badge && (
          <div className="absolute top-3 left-3">
            <BadgeChip label={car.badge} />
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-muted-foreground text-[11px] uppercase tracking-widest mb-0.5">
              {car.category}
            </p>
            <h3
              className="text-foreground font-semibold text-base leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {car.name}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-foreground font-bold text-lg">
              ${car.price.toLocaleString()}
            </p>
          </div>
        </div>

        <StarRating rating={car.rating} />

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Year", value: car.year },
            { label: "HP", value: car.horsepower.toLocaleString() },
            { label: "Engine", value: car.engine.split(" ")[0] },
          ].map((spec) => (
            <div key={spec.label} className="bg-secondary/60 rounded-xl p-2.5 text-center">
              <p className="text-foreground font-semibold text-sm">{spec.value}</p>
              <p className="text-muted-foreground text-[10px] uppercase tracking-wider mt-0.5">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
          {car.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2.5 mt-auto pt-1">
          <button className="flex-1 text-sm font-semibold py-2.5 rounded-xl border border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-200">
            View Details
          </button>
          <button
            onClick={() => inCart ? removeFromCart(car.id) : addToCart(car.id)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl transition-all duration-200",
              inCart
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-foreground text-background hover:bg-foreground/80"
            )}
          >
            {inCart ? (
              <><Check className="size-3.5" /> In Cart</>
            ) : (
              <><ShoppingCart className="size-3.5" /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
