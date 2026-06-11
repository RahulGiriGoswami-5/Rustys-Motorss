// SVG social icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const quickLinks = ["Home", "Inventory", "Collections", "Electric", "About", "Contact"]
const supportLinks = ["FAQ", "Shipping Policy", "Returns", "Contact Us"]

export function Footer() {
  return (
    <footer className="bg-foreground text-background" id="contact">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <p
              className="font-semibold tracking-[0.25em] text-sm mb-5 text-background"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              RUSTY'S MOTORS
            </p>
            <p className="text-background/55 text-sm leading-relaxed mb-8">
              The world's most trusted destination for premium and exotic automobiles.
              Driven by passion. Defined by excellence.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: InstagramIcon, label: "Instagram", href: "#" },
                { icon: FacebookIcon, label: "Facebook", href: "#" },
                { icon: XIcon, label: "X / Twitter", href: "#" },
                { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-9 rounded-full border border-background/15 flex items-center justify-center text-background/45 hover:text-background hover:border-background/50 hover:bg-background/10 hover:scale-110 hover:shadow-[0_0_14px_rgba(255,255,255,0.15)] transition-all duration-200"
                >
                  <Icon className="size-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-background font-semibold text-xs tracking-[0.15em] uppercase mb-6">
              Quick Links
            </p>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/55 text-sm hover:text-background transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-background font-semibold text-xs tracking-[0.15em] uppercase mb-6">
              Customer Support
            </p>
            <ul className="space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/55 text-sm hover:text-background transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-background font-semibold text-xs tracking-[0.15em] uppercase mb-6">
              Get in Touch
            </p>
            <div className="space-y-3.5 text-sm text-background/55">
              <p>+1 (800) 782-9776</p>
              <p>hello@rustysmotors.com</p>
              <p className="leading-relaxed">
                1000 Luxury Lane<br />
                Beverly Hills, CA 90210
              </p>
            </div>
            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-7 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 border border-background/20 rounded-xl text-background/65 hover:text-background hover:border-background/45 hover:bg-background/5 transition-all duration-200"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/35 text-xs tracking-wide">
            © 2026 Rusty's Motors. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-background/35 text-xs hover:text-background/65 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
