import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

const CART_KEY = "rusty-cart"

interface CartContextValue {
  cartIds: string[]
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  isInCart: (id: string) => boolean
  cartCount: number
}

const CartContext = createContext<CartContextValue | null>(null)

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartIds, setCartIds] = useState<string[]>(readStorage)

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartIds))
  }, [cartIds])

  const addToCart = (id: string) => {
    setCartIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const removeFromCart = (id: string) => {
    setCartIds((prev) => prev.filter((i) => i !== id))
  }

  const isInCart = (id: string) => cartIds.includes(id)

  return (
    <CartContext.Provider value={{ cartIds, addToCart, removeFromCart, isInCart, cartCount: cartIds.length }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
