import { useState, useEffect } from "react"

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function listener() {
      setScrollY(document.scrollingElement?.scrollTop ?? 0)
    }

    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  })

  return scrollY
}
