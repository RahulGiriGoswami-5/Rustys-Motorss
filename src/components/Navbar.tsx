import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Search, Heart, User, ShoppingCart, Menu, X, LogOut, UserCircle } from "lucide-react"
import { useAuth } from "@/lib/auth"

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Inventory", href: "/#inventory" },
  { label: "Collections", href: "/#collections" },
  { label: "Electric", href: "/#electric" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const handleSignOut = async () => {
    setDropdownOpen(false)
    await signOut()
    navigate("/")
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-black/10 backdrop-blur-sm border-b border-white/5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span
            className="font-semibold text-white tracking-[0.2em] text-sm transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.25em" }}
          >
            RUSTY'S MOTORS
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-white/75 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          {[
            { icon: Search, label: "Search", id: "search-btn" },
            { icon: Heart, label: "Wishlist", id: "wishlist-btn" },
            { icon: ShoppingCart, label: "Cart", id: "cart-btn" },
          ].map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              id={id}
              aria-label={label}
              className="p-1.5 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 hover:bg-white/10"
            >
              <Icon className="size-5" />
            </button>
          ))}

          {/* User button with auth dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="user-btn"
              aria-label={user ? "Account menu" : "Login"}
              className="p-1.5 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 hover:bg-white/10"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="size-5" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card shadow-xl shadow-black/20 py-1 z-50">
                {user ? (
                  <>
                    <Link
                      to="/account"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <UserCircle className="size-4" />
                      Account
                    </Link>
                    <button
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors w-full text-left"
                      onClick={handleSignOut}
                    >
                      <LogOut className="size-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="size-4" />
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <UserCircle className="size-4" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-white/80 hover:text-white transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu — dark glass */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-black/80 backdrop-blur-xl border-b border-white/10",
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/70 hover:text-white font-medium text-sm transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 pt-2 border-t border-white/10">
            {[Search, Heart, ShoppingCart].map((Icon, i) => (
              <button key={i} className="text-white/60 hover:text-white transition-colors">
                <Icon className="size-5" />
              </button>
            ))}
            {user ? (
              <>
                <Link to="/account" onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <UserCircle className="size-5" />
                </Link>
                <button onClick={handleSignOut} className="text-white/60 hover:text-white transition-colors">
                  <LogOut className="size-5" />
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <User className="size-5" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
