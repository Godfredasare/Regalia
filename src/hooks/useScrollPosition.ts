import { useState, useEffect } from 'react'

/**
 * Scroll position with rAF throttling.
 * Coalesces scroll events to one update per frame so low-power
 * mobile devices don't re-render the tree on every scroll tick.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY : 0
  )
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 50 : false
  )

  useEffect(() => {
    let ticking = false
    let frameId = 0

    const update = () => {
      ticking = false
      const y = window.scrollY
      setScrollY(y)
      setIsScrolled(y > 50)
    }

    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        frameId = window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (ticking) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return { scrollY, isScrolled }
}
