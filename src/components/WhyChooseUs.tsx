import { Shield, Globe, Lock, CreditCard, Clock, Headphones } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const features = [
  {
    icon: Shield,
    title: "Certified Vehicles",
    description: "Every vehicle undergoes rigorous 200-point inspection and full certification.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description: "White-glove door-to-door delivery to 15+ countries across the globe.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Bank-grade encryption protects every transaction, always.",
  },
  {
    icon: CreditCard,
    title: "Easy Financing",
    description: "Tailored financing plans with competitive rates and flexible terms.",
  },
  {
    icon: Clock,
    title: "Extended Warranty",
    description: "Comprehensive multi-year warranty coverage for total peace of mind.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Round-the-clock personal concierge support whenever you need it.",
  },
]

export function WhyChooseUs() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-3">
            Why Us
          </p>
          <h2
            className="text-foreground font-bold text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Choose Rusty's Motors
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto leading-relaxed">
            We've built our reputation on trust, transparency, and an unwavering passion for extraordinary automobiles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="scroll-reveal group p-7 rounded-2xl border border-border bg-card hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Icon className="size-5 transition-colors duration-300" />
                </div>
                <h3
                  className="text-foreground font-semibold text-base mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
