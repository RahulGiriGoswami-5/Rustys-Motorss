import { useEffect, useRef } from "react"

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveal = (target: Element) => {
      const reveals = target.querySelectorAll(".scroll-reveal")
      reveals.forEach((el) => {
        const delay = parseFloat((el as HTMLElement).style.transitionDelay || "0")
        setTimeout(() => el.classList.add("revealed"), delay * 1000)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return ref as React.RefObject<HTMLElement>
}
