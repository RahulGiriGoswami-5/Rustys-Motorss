import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Inventory", href: "#inventory" },
  { label: "Collections", href: "#collections" },
  { label: "Electric", href: "#electric" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <span
            className={cn(
              "font-semibold tracking-[0.2em] text-sm transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.25em" }}
          >
            RUSTY'S MOTORS
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 group",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          {[
            { icon: Search, label: "Search", id: "search-btn" },
            { icon: Heart, label: "Wishlist", id: "wishlist-btn" },
            { icon: User, label: "Login", id: "user-btn" },
            { icon: ShoppingCart, label: "Cart", id: "cart-btn" },
          ].map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              id={id}
              aria-label={label}
              className={cn(
                "p-1.5 rounded-full transition-all duration-200 hover:scale-110",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              )}
            >
              <Icon className="size-5" />
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "md:hidden p-1.5 transition-colors duration-200",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 pt-2 border-t border-border">
            {[Search, Heart, User, ShoppingCart].map((Icon, i) => (
              <button key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="size-5" />
              </button>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  )
}
