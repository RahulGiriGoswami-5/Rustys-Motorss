import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/hero-car.webp')",
          willChange: "transform",
        }}
        id="hero-bg"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-heading */}
        <p
          className="text-white/60 text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Est. 2010 · Premium Automotive
        </p>

        {/* Main heading */}
        <h1
          className="text-white font-bold leading-[1.05] tracking-tight mb-6 animate-fade-up"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            animationDelay: "0.1s",
          }}
        >
          Luxury,{" "}
          <span className="italic font-light">Reimagined.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Discover an exclusive collection of the world's most desirable automobiles,
          crafted for those who refuse to settle for ordinary.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#inventory"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-semibold text-sm tracking-wide rounded-2xl transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl active:scale-100"
          >
            Explore Collection
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold text-sm tracking-wide rounded-2xl border border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/70 hover:scale-105 active:scale-100"
          >
            Book Test Drive
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 flex flex-wrap justify-center gap-10 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { value: "500+", label: "Vehicles" },
            { value: "98%", label: "Satisfaction" },
            { value: "30+", label: "Brands" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-bold text-2xl">{s.value}</div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#categories"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  )
}
