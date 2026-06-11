import { Link } from "react-router-dom"
import { ArrowLeft, ShoppingCart, Trash2, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart"
import { cars } from "@/data/inventory"

export default function Cart() {
  const { cartIds, removeFromCart, cartCount } = useCart()
  const cartCars = cars.filter((c) => cartIds.includes(c.id))
  const total = cartCars.reduce((sum, c) => sum + c.price, 0)

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-20 flex flex-col items-center justify-center px-6">
        <ShoppingCart className="size-16 text-muted-foreground/30 mb-6" />
        <h1
          className="text-foreground font-bold text-3xl tracking-tight mb-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Your Cart is Empty
        </h1>
        <p className="text-muted-foreground text-sm mb-8 text-center max-w-sm">
          Explore our collection and add the vehicles you desire.
        </p>
        <Link
          to="/inventory"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/80 transition-all duration-200"
        >
          Explore Collection
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/inventory"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Continue Shopping
          </Link>

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-3">
                Selection
              </p>
              <h1
                className="text-foreground font-bold text-4xl md:text-5xl tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                My Cart
              </h1>
            </div>
            <p className="text-muted-foreground text-sm pb-1">
              {cartCount} vehicle{cartCount !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cartCars.map((car) => (
              <div
                key={car.id}
                className="bg-card border border-border rounded-2xl overflow-hidden flex gap-0 transition-all duration-200 hover:shadow-md"
              >
                {/* Car image */}
                <div className="w-36 sm:w-48 shrink-0 aspect-[16/11] overflow-hidden bg-secondary/30">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Car info */}
                <div className="flex flex-col justify-between p-4 flex-1 gap-2 min-w-0">
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-0.5">
                      {car.category}
                    </p>
                    <h3
                      className="text-foreground font-semibold text-sm sm:text-base leading-snug truncate"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {car.name}
                    </h3>
                    {/* Star rating */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "size-3",
                            i < car.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-muted-foreground text-[10px] bg-secondary/60 rounded-lg px-2 py-1">
                        {car.year}
                      </span>
                      <span className="text-muted-foreground text-[10px] bg-secondary/60 rounded-lg px-2 py-1">
                        {car.horsepower.toLocaleString()} HP
                      </span>
                      <span className="text-muted-foreground text-[10px] bg-secondary/60 rounded-lg px-2 py-1">
                        {car.engine.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <p className="text-foreground font-bold text-base sm:text-lg">
                      ${car.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(car.id)}
                      aria-label={`Remove ${car.name} from cart`}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors duration-200 group"
                    >
                      <Trash2 className="size-3.5 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
              <h2
                className="text-foreground font-semibold text-lg mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Order Summary
              </h2>

              <div className="space-y-3 mb-5">
                {cartCars.map((car) => (
                  <div key={car.id} className="flex justify-between gap-3 text-sm">
                    <span className="text-muted-foreground truncate">{car.name}</span>
                    <span className="text-foreground font-medium flex-shrink-0">
                      ${car.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold text-sm">Total</span>
                  <span className="text-foreground font-bold text-xl">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs mt-1">
                  {cartCount} vehicle{cartCount !== 1 ? "s" : ""}
                </p>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/80 transition-all duration-200 mb-3">
                Request Consultation
              </button>
              <Link
                to="/inventory"
                className="block text-center text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
