import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/lib/auth"
import { CartProvider } from "@/lib/cart"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeaturedCategories } from "@/components/FeaturedCategories"
import { FeaturedInventory } from "@/components/FeaturedInventory"
import { CollectionBanner } from "@/components/CollectionBanner"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Testimonials } from "@/components/Testimonials"
import { StatsSection } from "@/components/StatsSection"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import Login from "@/pages/Login"
import SignUp from "@/pages/SignUp"
import Account from "@/pages/Account"
import Inventory from "@/pages/Inventory"
import Cart from "@/pages/Cart"

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedInventory />
      <CollectionBanner />
      <WhyChooseUs />
      <Testimonials />
      <StatsSection />
      <Newsletter />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-background antialiased" id="root-app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
