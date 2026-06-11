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

export default function App() {
  return (
    <div className="min-h-screen bg-background antialiased" id="root-app">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedInventory />
        <CollectionBanner />
        <WhyChooseUs />
        <Testimonials />
        <StatsSection />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
